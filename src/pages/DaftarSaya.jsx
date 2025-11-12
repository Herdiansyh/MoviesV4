// src/pages/DaftarSaya.jsx
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useMyList } from "../context/MyListContext";
import DaftarSayaFilm from "../components/DaftarSayaFilm";

export default function DaftarSaya({ footer }) {
  const { myList, loading: contextLoading, error: contextError } = useMyList();
  const [localLoading, setLocalLoading] = useState(true);

  // Simulasi loading untuk konsistensi UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setLocalLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const isLoading = contextLoading || localLoading;

  // Loading component
  if (isLoading) {
    return (
      <div className="bg-[#181A1C] text-white min-h-screen">
        <Header />
        <div className="flex justify-center items-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-400">Memuat daftar film Anda...</p>
          </div>
        </div>
        <Footer footers={footer} />
      </div>
    );
  }

  // Error handling
  if (contextError) {
    return (
      <div className="bg-[#181A1C] text-white min-h-screen">
        <Header />
        <div className="flex justify-center items-center min-h-[60vh]">
          <div className="text-center">
            <div className="text-red-500 text-6xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold text-red-500 mb-2">
              Terjadi Kesalahan
            </h2>
            <p className="text-gray-400 mb-4">{contextError}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-md transition-colors"
            >
              Coba Lagi
            </button>
          </div>
        </div>
        <Footer footers={footer} />
      </div>
    );
  }

  return (
    <div className="bg-[#181A1C] text-white min-h-screen">
      <Header />

      <DaftarSayaFilm myList={myList} />
      <Footer footers={footer} />
    </div>
  );
}
