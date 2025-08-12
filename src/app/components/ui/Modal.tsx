"use client";
import { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  labelledBy?: string;
  size?: 'sm' | 'md' | 'lg';
  id?: string; // optional id for testing
}

export function Modal({ open, onClose, title, children, labelledBy, size = 'lg', id }: ModalProps) {
  const dialogRef = useRef<HTMLDivElement | null>(null);

  // Prevent background scroll while open
  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = original; };
    }
  }, [open]);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, onClose]);

  // Initial focus inside modal
  useEffect(() => {
    if (open && dialogRef.current) {
      const focusable = dialogRef.current.querySelector<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      focusable?.focus();
    }
  }, [open]);

  if (typeof document === 'undefined') return null;
  if (!open) return null;

  const widthClass = size === 'sm' ? 'max-w-md' : size === 'md' ? 'max-w-2xl' : 'max-w-4xl';

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog"
      aria-labelledby={labelledBy}
      id={id}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      <div
        ref={dialogRef}
        className={`relative w-full ${widthClass} bg-white rounded-2xl shadow-xl border border-cyan-100/60 overflow-hidden animate-scale-in`}
      >
        <div className="flex items-start justify-between gap-4 px-6 pt-6">
          {title && (
            <h3
              id={labelledBy}
              className="text-2xl font-bold tracking-tight bg-gradient-to-r from-teal-600 via-cyan-600 to-lime-500 bg-clip-text text-transparent"
            >
              {title}
            </h3>
          )}
          <button
            type="button"
            onClick={onClose}
            className="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-500 hover:text-teal-600 hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-white"
            aria-label="Close modal"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
          </button>
        </div>
        <div className="px-6 pb-8 pt-4 text-slate-600 leading-relaxed overflow-y-auto max-h-[70vh] custom-scroll">
          {children}
        </div>
      </div>
      <style jsx global>{`
        @keyframes fade-in { from { opacity:0 } to { opacity:1 } }
        @keyframes scale-in { from { opacity:0; transform: translateY(12px) scale(.96); } to { opacity:1; transform: translateY(0) scale(1);} }
        .animate-fade-in { animation: fade-in .25s ease-out; }
        .animate-scale-in { animation: scale-in .35s cubic-bezier(.16,.84,.44,1); }
        .custom-scroll { scrollbar-width: thin; }
        .custom-scroll::-webkit-scrollbar { width: 8px; }
        .custom-scroll::-webkit-scrollbar-track { background: transparent; }
        .custom-scroll::-webkit-scrollbar-thumb { background: linear-gradient(to bottom, #0d9488, #06b6d4); border-radius: 4px; }
      `}</style>
    </div>,
    document.body
  );
}

export default Modal;
