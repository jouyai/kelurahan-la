import React from 'react';

const ModalSukses = ({ isOpen, onClose, ticketId }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      
      {/* Overlay Background (Gelap & Blur) */}
      <div 
        className="fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-md mx-auto my-6 z-50">
        <div className="border-0 rounded-lg shadow-xl relative flex flex-col w-full bg-white outline-none focus:outline-none transform transition-all scale-100 p-6">
          
          {/* Icon Sukses */}
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6 animate-bounce">
            <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>

          {/* Header & Text */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Pengaduan Terkirim!
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              Laporan Anda telah kami terima dan akan segera diproses. Silakan simpan ID Tiket di bawah ini untuk memantau status laporan.
            </p>
          </div>

          {/* Ticket ID Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 text-center">
            <p className="text-xs text-blue-600 uppercase font-semibold tracking-wider mb-1">ID Tiket Anda</p>
            <div className="flex justify-center items-center space-x-2">
              <span className="text-2xl font-mono font-bold text-blue-800 tracking-widest select-all">
                {ticketId}
              </span>
              {/* Tombol Copy Kecil (Optional) */}
              <button 
                onClick={() => navigator.clipboard.writeText(ticketId)}
                className="text-blue-400 hover:text-blue-600"
                title="Salin ID"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Footer / Button */}
          <div className="flex justify-center">
            <button
              className="bg-blue-600 text-white active:bg-blue-700 font-bold uppercase text-sm px-8 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 w-full hover:bg-blue-700"
              type="button"
              onClick={onClose}
            >
              Mengerti & Tutup
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ModalSukses;