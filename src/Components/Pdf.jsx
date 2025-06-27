import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { motion } from "motion/react";
import { X, Download, FileText, ExternalLink, Upload, AlertCircle, CheckCircle } from "lucide-react";

const API_URL = "http://localhost:4500/api/pdfs"; // Backend base URL

const CVViewer = ({ isOpen, onClose }) => {
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [pdfList, setPdfList] = useState([]);
  const fileInputRef = useRef(null);

  useEffect(() => {
    fetchPDFs();
  }, []);

  const fetchPDFs = async () => {
    try {
      const res = await axios.get(`${API_URL}`);
      setPdfList(res.data);
      if (res.data.length > 0) {
        setPdfFile(res.data[0]);
        setPdfUrl(`${API_URL}/download/${res.data[0]._id}`);
      }
    } catch (err) {
      setError("Failed to fetch PDFs.");
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
    const formData = new FormData();
    formData.append("pdf", file);

    try {
      const res = await axios.post(`${API_URL}/upload`, formData);
      setSuccess("PDF uploaded successfully!");
      fetchPDFs();
    } catch (err) {
      setError("Upload failed.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    if (pdfUrl) {
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = pdfFile?.originalname || "download.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const openFullscreen = () => {
    if (pdfUrl) window.open(pdfUrl, "_blank");
  };

  if (!isOpen) return null;

  return (
    <motion.div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
      <motion.div className="bg-white rounded-2xl w-full max-w-5xl h-5/6 flex flex-col shadow-2xl p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-3 items-center">
            <FileText className="text-blue-500" />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{pdfFile?.originalname || "No CV Selected"}</h2>
              <p className="text-sm text-gray-600">{pdfFile ? "Uploaded CV" : "Default CV"}</p>
            </div>
          </div>

          <div className="flex gap-2">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileSelect}
              accept="application/pdf"
              className="hidden"
            />
            <button onClick={() => fileInputRef.current.click()} className="btn-gradient">
              <Upload size={14} /> Upload
            </button>
            <button onClick={openFullscreen} className="btn-gradient">
              <ExternalLink size={14} /> Full
            </button>
            <button onClick={handleDownload} className="btn-gradient">
              <Download size={14} /> Download
            </button>
            <button onClick={onClose} className="btn-danger">
              <X size={14} />
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded mb-2 flex items-center gap-2">
            <AlertCircle size={16} /> {error}
          </div>
        )}

        {success && (
          <div className="bg-green-100 text-green-700 p-2 rounded mb-2 flex items-center gap-2">
            <CheckCircle size={16} /> {success}
          </div>
        )}

        <div className="flex-1 overflow-hidden bg-gray-100 rounded">
          {pdfUrl ? (
            <iframe src={pdfUrl} title="PDF Preview" className="w-full h-full" />
          ) : (
            <p className="text-center pt-12">No PDF loaded</p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CVViewer;