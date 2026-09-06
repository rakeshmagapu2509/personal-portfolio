import React, { useEffect, useState } from 'react';
import type { Certificate } from '../types/portfolio';
import { X, ZoomIn, ZoomOut, RotateCcw, Download, ExternalLink, Award, Calendar, CheckCircle } from 'lucide-react';

interface CertificateModalProps {
  isOpen: boolean;
  certificate: Certificate | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  certificate,
  onClose,
}) => {
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    if (!isOpen) {
      setZoomLevel(1);
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !certificate) return null;

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  const handleResetZoom = () => setZoomLevel(1);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = certificate.imagePath;
    link.download = certificate.downloadFileName || 'Certificate.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={certificate.title}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-[#0a0a16]/95 rounded-3xl shadow-[0_0_50px_rgba(168,85,247,0.25)] border border-purple-500/30 max-w-5xl w-full max-h-[94vh] flex flex-col overflow-hidden text-left backdrop-blur-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-4 sm:p-6 border-b border-purple-500/20 bg-[#080814]/90">
          <div className="pr-4">
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/30">
                <Award className="w-3 h-3 text-purple-400" />
                {certificate.issuer}
              </span>
              {certificate.certificateType && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono text-emerald-300 bg-emerald-950/30 border border-emerald-500/30">
                  <CheckCircle className="w-3 h-3 text-emerald-400" />
                  {certificate.certificateType}
                </span>
              )}
              {certificate.date && (
                <span className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400">
                  <Calendar className="w-3 h-3 text-purple-400/70" />
                  {certificate.date}
                </span>
              )}
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
              {certificate.title}
            </h3>

            {certificate.program && (
              <p className="text-xs sm:text-sm text-zinc-400 mt-1 font-mono">
                {certificate.program} {certificate.certificateNo ? '• ID: ' + certificate.certificateNo : ''}
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            aria-label="Close certificate viewer"
            className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-purple-900/30 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Viewport */}
        <div className="relative flex-1 min-h-[300px] max-h-[64vh] sm:max-h-[68vh] bg-black/60 p-3 sm:p-6 flex items-center justify-center overflow-auto">
          <div className="relative flex items-center justify-center max-w-full max-h-full">
            <img
              src={certificate.imagePath}
              alt={certificate.title + ' certificate issued to Rakesh Magapu by ' + certificate.issuer}
              style={{ transform: 'scale(' + zoomLevel + ')', transformOrigin: 'center center' }}
              className="max-h-[60vh] sm:max-h-[64vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-purple-500/20 transition-transform duration-150 select-none"
              loading="eager"
            />
          </div>
        </div>

        {/* Footer Toolbar */}
        <div className="p-3 sm:p-4 border-t border-purple-500/20 bg-[#080814]/90 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1 bg-[#0e0e1c] rounded-xl p-1 border border-purple-500/20">
            <button
              onClick={handleZoomOut}
              disabled={zoomLevel <= 0.75}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-purple-950/40 disabled:opacity-30 transition-colors cursor-pointer"
              title="Zoom out"
              aria-label="Zoom out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono font-medium text-purple-300 px-2 min-w-[44px] text-center">
              {Math.round(zoomLevel * 100)}%
            </span>
            <button
              onClick={handleZoomIn}
              disabled={zoomLevel >= 2.5}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-purple-950/40 disabled:opacity-30 transition-colors cursor-pointer"
              title="Zoom in"
              aria-label="Zoom in"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={handleResetZoom}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-purple-950/40 transition-colors cursor-pointer ml-1"
              title="Reset zoom to 100%"
              aria-label="Reset zoom"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex items-center gap-2.5 ml-auto">
            {certificate.verificationUrl && (
              <a
                href={certificate.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-mono font-semibold text-purple-300 bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/30 rounded-xl transition-colors shadow-sm"
              >
                <span>Verify Credential</span>
                <ExternalLink className="w-3.5 h-3.5 text-purple-400" />
              </a>
            )}

            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-xl transition-colors shadow-[0_0_15px_rgba(168,85,247,0.3)] cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Certificate</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
