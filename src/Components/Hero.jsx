

import { Link, Outlet } from "react-router";
import About from "./About";
import Contact from "./Contact";
import { useState, useRef, useEffect } from "react";

const CVViewer = ({ isOpen, onClose, cvFile, onFileUpload }) => {


  const [cvError, setCvError] = useState(false);
  const fileInputRef = useRef(null);

  if (!isOpen) return null;

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      onFileUpload(file);
      setCvError(false);
    } else {
      alert('Please select a valid PDF file');
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const downloadCV = () => {
    if (cvFile) {
      const url = URL.createObjectURL(cvFile);
      const a = document.createElement('a');
      a.href = url;
      a.download = cvFile.name || 'CV.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const openInNewTab = () => {
    if (cvFile) {
      const url = URL.createObjectURL(cvFile);
      window.open(url, '_blank');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
      <div className="bg-white rounded-3xl w-full max-w-6xl h-5/6 flex flex-col shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 duration-500">
        {/* Header */}
        <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-slate-50 to-blue-50">
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">My CV</h2>
                <p className="text-sm text-gray-600">
                  {cvFile ? cvFile.name : "Nshimiyumukiza Erneste - Resume"}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              {!cvFile && (
                <button
                  onClick={handleUploadClick}
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-5 py-2.5 rounded-xl hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 flex items-center gap-2 font-medium"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  Upload CV
                </button>
              )}

              {cvFile && (
                <>
                  <button
                    onClick={openInNewTab}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2.5 rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-2 font-medium"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Open in New Tab
                  </button>
                  <button
                    onClick={downloadCV}
                    className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-5 py-2.5 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2 font-medium"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download
                  </button>
                </>
              )}

              <button
                onClick={onClose}
                className="bg-gradient-to-r from-red-500 to-rose-500 text-white px-4 py-2.5 rounded-xl hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 px-6 pb-6">
          <div className="h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden border border-gray-200 shadow-inner">
            {cvFile && !cvError ? (
              <div className="h-full relative group">
                <iframe
                  src={URL.createObjectURL(cvFile)}
                  title="CV Viewer"
                  className="w-full h-full rounded-2xl border-0"
                  onError={() => setCvError(true)}
                  onLoad={() => setCvError(false)}
                />

                {/* Floating Controls */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={openInNewTab}
                    className="bg-white/90 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-white transition-all duration-200 shadow-lg border"
                  >
                    Open
                  </button>
                  <button
                    onClick={downloadCV}
                    className="bg-white/90 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-white transition-all duration-200 shadow-lg border"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleUploadClick}
                    className="bg-white/90 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-white transition-all duration-200 shadow-lg border"
                  >
                    Replace
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="text-center p-8">
                  <div className="text-8xl mb-6">📄</div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    {cvError ? "Failed to Load CV" : "No CV Uploaded"}
                  </h3>
                  <p className="text-gray-600 max-w-md mb-8 leading-relaxed">
                    {cvError
                      ? "There was an error loading your CV file. Please try uploading it again."
                      : "Upload your CV in PDF format to view it here. Click the button below to get started."
                    }
                  </p>
                  <div className="flex gap-4 justify-center">
                    <button
                      onClick={handleUploadClick}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 font-medium text-lg flex items-center gap-3"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      Upload CV (PDF)
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf"
        onChange={handleFileUpload}
        className="hidden"
      />
    </div>
  );
};

const Hero = () => {
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cvFile, setCvFile] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleFileUpload = (file) => {
    setCvFile(file);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: "2s" }}></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: "4s" }}></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            {/* Profile Image */}
            <div className={`mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-50 animate-pulse scale-110"></div>
                <img
                  src="./image.png"
                  alt="Nshimiyumukiza Erneste"
                  className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover mx-auto border-4 border-white/20 shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjNjM2NjczIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTEwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSI2MCI+8J+RpDwvdGV4dD4KPC9zdmc+';
                  }}
                />

              </div>
            </div>

            {/* Main Heading */}
            <div className={`mb-8 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                I'm <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">Nshimiyumukiza Erneste</span>
              </h1>
              <div className="text-2xl md:text-3xl font-light text-gray-300">
                <span className="inline-block animate-bounce" style={{ animationDelay: '1s' }}>Full</span>
                <span className="inline-block animate-bounce mx-2" style={{ animationDelay: '2s' }}>Stack</span>
                <span className="inline-block animate-bounce" style={{ animationDelay: '3s' }}>Developer</span>
              </div>
            </div>

            {/* Description */}
            <div className={`mb-12 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <p className="text-xl md:text-2xl text-gray-300/90 max-w-3xl mx-auto leading-relaxed font-light">
                Passionate about creating elegant solutions through code.
                <span className="block mt-2 text-lg text-purple-300">
                  Turning ideas into reality, one line of code at a time.
                </span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={`mb-12 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
                {/* Contact Button */}
                <button className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-green-500/25 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    📩 Get In Touch
                  </span>
                </button>

                {/* View CV Button */}
                <button
                  onClick={() => setIsCVOpen(true)}
                  className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    👁️ View CV
                    {cvFile && <span className="w-2 h-2 bg-green-400 rounded-full"></span>}
                  </span>
                </button>

                {/* Resume Button */}
                <a href="/contact" className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    📄 Resume
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CV Viewer Modal */}
      <CVViewer
        isOpen={isCVOpen}
        onClose={() => setIsCVOpen(false)}
        cvFile={cvFile}
        onFileUpload={handleFileUpload}
      />

      <About />
      <Contact />
      <Outlet />
    </div>
  );
};

export default Hero;