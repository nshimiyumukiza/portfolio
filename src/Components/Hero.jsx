import { Link, Outlet } from "react-router";

import About from "./About";
import Contact from "./Contact";
import { useState, useRef, useEffect } from "react";

const CVViewer = ({ isOpen, onClose }) => {
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [pdfList, setPdfList] = useState([]);
  const [apiConnected, setApiConnected] = useState(false);
  const [pdfBlob, setPdfBlob] = useState(null);
  const fileInputRef = useRef(null);

  const API_URL = "http://localhost:4500/api/pdfs";

  useEffect(() => {
    if (isOpen) {
      checkApiConnection();
    }
  }, [isOpen]);

  // Cleanup blob URL when component unmounts or PDF changes
  useEffect(() => {
    return () => {
      if (pdfBlob) {
        URL.revokeObjectURL(pdfBlob);
      }
    };
  }, [pdfBlob]);

  const checkApiConnection = async () => {
    try {
      setIsLoading(true);
      setError("");
      console.log("Checking API connection...");
      
      const response = await fetch(`${API_URL}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.ok) {
        setApiConnected(true);
        console.log("API connected successfully");
        await fetchPDFs();
      } else {
        throw new Error(`API responded with status: ${response.status}`);
      }
    } catch (err) {
      console.error('API Connection Error:', err);
      setApiConnected(false);
      setError(`Cannot connect to API: ${err.message}. Make sure your backend server is running on port 4500.`);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchPDFs = async () => {
    try {
      console.log("Fetching PDFs...");
      const response = await fetch(`${API_URL}`);
      if (!response.ok) throw new Error('Failed to fetch PDFs');
      
      const data = await response.json();
      console.log("PDFs fetched:", data);
      setPdfList(data);
      
      if (data.length > 0) {
        const firstPdf = data[0];
        setPdfFile(firstPdf);
        await loadPDFBlob(firstPdf._id);
        setError("");
      } else {
        setError("No PDFs found. Please upload a CV first.");
      }
    } catch (err) {
      console.error('Fetch PDFs Error:', err);
      setError(`Failed to fetch PDFs: ${err.message}`);
    }
  };

  const loadPDFBlob = async (pdfId) => {
    try {
      setIsLoading(true);
      console.log("Loading PDF blob for ID:", pdfId);
      
      const response = await fetch(`${API_URL}/download/${pdfId}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/pdf',
        },
      });
      
      if (!response.ok) {
        throw new Error(`Failed to fetch PDF: ${response.status} ${response.statusText}`);
      }
      
      const blob = await response.blob();
      console.log("PDF blob loaded, size:", blob.size, "type:", blob.type);
      
      // Verify it's actually a PDF
      if (!blob.type.includes('pdf') && blob.size > 0) {
        console.warn("Response might not be a PDF, trying anyway...");
        // Force the blob type to be PDF
        const correctedBlob = new Blob([blob], { type: 'application/pdf' });
        blob = correctedBlob;
      }
      
      // Clean up previous blob URL
      if (pdfBlob) {
        URL.revokeObjectURL(pdfBlob);
      }
      
      // Create new blob URL
      const blobUrl = URL.createObjectURL(blob);
      setPdfBlob(blobUrl);
      
      // Try different PDF viewing approaches
      const directUrl = blobUrl;
      const pdfJsUrl = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/web/viewer.html?file=${encodeURIComponent(directUrl)}`;
      
      // Set both URLs for different viewing methods
      setPdfUrl(directUrl);
      
      console.log("PDF URLs created:");
      console.log("Direct:", directUrl);
      console.log("PDF.js:", pdfJsUrl);
      
    } catch (err) {
      console.error('Load PDF Blob Error:', err);
      setError(`Failed to load PDF: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) uploadPDF(file);
  };

  const uploadPDF = async (file) => {
    if (file.type !== "application/pdf") {
      setError("Please select a PDF file.");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setError("File size must be less than 10MB.");
      return;
    }

    setIsLoading(true);
    setError("");
    setSuccess("");
    
    const formData = new FormData();
    formData.append("pdf", file);

    try {
      const response = await fetch(`${API_URL}/upload`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Upload failed');
      
      setSuccess("PDF uploaded successfully!");
      await fetchPDFs();
    } catch (err) {
      console.error('Upload Error:', err);
      setError(`Upload failed: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    if (pdfUrl && pdfFile) {
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = pdfFile.originalname || "cv.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const openFullscreen = () => {
    if (pdfUrl) {
      window.open(pdfUrl, "_blank");
    }
  };

  const handleRetryLoad = () => {
    if (pdfFile && pdfFile._id) {
      loadPDFBlob(pdfFile._id);
    } else {
      fetchPDFs();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-5xl h-5/6 flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div className="flex gap-3 items-center">
              <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                <span className="text-white text-xs">📄</span>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {pdfFile?.originalname || "CV Viewer"}
                </h2>
                <p className="text-sm text-gray-600">
                  Status: {apiConnected ? "✅ Connected" : "❌ Disconnected"}
                </p>
                {pdfFile && (
                  <p className="text-xs text-gray-500">
                    Size: {pdfFile.size ? `${(pdfFile.size / 1024).toFixed(1)} KB` : 'Unknown'}
                  </p>
                )}
              </div>
            </div>

            <div className="flex gap-2 flex-wrap">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileSelect}
                accept="application/pdf"
                className="hidden"
              />
              <button 
                onClick={() => fileInputRef.current?.click()} 
                disabled={!apiConnected || isLoading}
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                📤 Upload
              </button>
              <button 
                onClick={openFullscreen} 
                disabled={!pdfUrl}
                className="bg-gradient-to-r from-purple-400 to-pink-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                🔗 Open
              </button>
              <button 
                onClick={handleDownload} 
                disabled={!pdfUrl}
                className="bg-gradient-to-r from-blue-400 to-purple-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                💾 Download
              </button>
              <button 
                onClick={onClose} 
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
        </div>

        {/* Status Messages */}
        <div className="px-6 pt-4">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-red-500">⚠️</span>
                <span className="font-medium">Error:</span>
              </div>
              <p className="text-sm">{error}</p>
              <button 
                onClick={handleRetryLoad}
                className="mt-2 text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
              >
                🔄 Retry
              </button>
            </div>
          )}

          {success && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 flex items-center gap-2">
              <span className="text-green-500">✅</span>
              <span>{success}</span>
            </div>
          )}

          {isLoading && (
            <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded mb-4 flex items-center gap-2">
              <span className="animate-spin">⏳</span>
              <span>Loading PDF...</span>
            </div>
          )}
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 px-6 pb-6">
          <div className="h-full bg-gray-100 rounded-lg overflow-hidden border-2 border-gray-300">
            {pdfUrl ? (
              <div className="h-full relative">
                {/* Try multiple rendering methods */}
                <div className="h-full">
                  {/* Method 1: Object tag (most compatible) */}
                  <object
                    data={pdfUrl}
                    type="application/pdf"
                    className="w-full h-full"
                    onError={() => {
                      console.log("Object tag failed, trying iframe...");
                    }}
                  >
                    {/* Method 2: Embed tag fallback */}
                    <embed
                      src={pdfUrl}
                      type="application/pdf"
                      className="w-full h-full"
                      onError={() => {
                        console.log("Embed tag failed, showing iframe...");
                      }}
                    />
                    
                    {/* Method 3: iframe fallback */}
                    <iframe 
                      src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
                      title="PDF Preview" 
                      className="w-full h-full border-0"
                      sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                      onLoad={() => {
                        console.log("PDF loaded successfully");
                        setError("");
                      }}
                      onError={(e) => {
                        console.error("All PDF loading methods failed:", e);
                        setError("Your browser cannot display PDFs inline. Please use the 'Open in New Tab' button.");
                      }}
                    />
                    
                    {/* Method 4: Final fallback - message */}
                    <div className="flex items-center justify-center h-full bg-gray-50">
                      <div className="text-center p-8">
                        <div className="text-6xl mb-4">📄</div>
                        <p className="text-lg font-medium mb-4">PDF Ready to View</p>
                        <p className="text-sm text-gray-600 mb-4">
                          Your browser cannot display PDFs inline, but the PDF is ready to view.
                        </p>
                        <div className="flex gap-2 justify-center">
                          <a 
                            href={pdfUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                          >
                            📖 Open PDF
                          </a>
                          <button 
                            onClick={handleDownload}
                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
                          >
                            💾 Download
                          </button>
                        </div>
                      </div>
                    </div>
                  </object>
                </div>
                
                {/* Control buttons overlay */}
                <div className="absolute top-2 right-2 flex gap-2">
                  <a 
                    href={pdfUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 transition-colors shadow-lg"
                  >
                    🔗 Open
                  </a>
                  <button 
                    onClick={handleDownload}
                    className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600 transition-colors shadow-lg"
                  >
                    💾 Save
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">📄</div>
                  <p className="text-lg font-medium mb-2">No PDF loaded</p>
                  <p className="text-sm max-w-md mb-4">
                    {apiConnected 
                      ? "Upload a PDF or check if any PDFs are available on the server" 
                      : "Waiting for API connection. Make sure your backend server is running on localhost:4500"
                    }
                  </p>
                  {apiConnected ? (
                    <button 
                      onClick={handleRetryLoad}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                    >
                      🔄 Retry Loading PDF
                    </button>
                  ) : (
                    <button 
                      onClick={checkApiConnection}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                    >
                      🔄 Retry Connection
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const [isCVOpen, setIsCVOpen] = useState(false);

  return (
    <div>
      <div className="bg-black text-white py-16 text-center px-12 relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex justify-center">
            <img 
              src="./image.png" 
              alt="Nshimiyumukiza Erneste" 
              className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105" 
              onError={(e) => {
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjNjM2NjczIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTEwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSI2MCI+8J+RpDwvdGV4dD4KPC9zdmc+';
              }}
            />
          </div>

          <h1 className="text-4xl font-bold">
            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Nshimiyumukiza Erneste</span>, student developer
          </h1>

          <p className="mt-4 text-lg text-gray-300 px-4 md:px-32">
            I have the goal to be a full stack developer
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="hidden md:flex bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 font-semibold">
              Contact with me
            </button>
            <button 
              onClick={() => setIsCVOpen(true)} 
              className="hidden md:flex bg-gradient-to-r from-pink-400 to-purple-500 text-white px-6 py-3 rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 font-semibold"
            >
              👁️ View CV
            </button>
            <button className="hidden md:flex bg-gradient-to-r from-purple-400 to-blue-500 text-white px-6 py-3 rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 font-semibold">
              Resume
            </button>
          </div>

          <div className="md:mt-8 text-lg text-white">
            <p>💼 Available for internships and junior developer positions</p>
          </div>
        </div>
      </div>

      <CVViewer isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
      <About />
      <Contact />
      <Outlet />
    </div>
  );
};

export default Hero;