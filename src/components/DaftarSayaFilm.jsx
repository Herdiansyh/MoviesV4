import React from "react";
import MovieSection from "./movie/MovieSection";

export default function DaftarSayaFilm({ myList }) {
  return (
    <main className="px-6 md:px-20 flex flex-col  space-y-10">
      {myList.length > 0 ? (
        <>
          <div className="flex justify-between -mb-20 items-center ">
            <div>
              <h1 className="text-2xl md:text-3xl  font-bold pt-20">
                Daftar Saya
              </h1>
              <span className="text-gray-400">
                {myList.length} {myList.length === 1 ? "film" : "film"}{" "}
                tersimpan
              </span>
            </div>
          </div>
          <MovieSection title="" daftarsaya={myList} type="daftar-saya" />
        </>
      ) : (
        <div className="flex flex-col justify-center items-center min-h-[60vh] text-center">
          <div className="text-gray-400 text-8xl mb-6">🎬</div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Daftar Film Kosong
          </h2>
          <p className="text-gray-400 max-w-md mb-6">
            Film yang Anda tambahkan ke daftar akan muncul di sini. Jelajahi
            koleksi film kami dan tambahkan favorit Anda!
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => (window.location.href = "/film")}
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-md transition-colors"
            >
              Lihat Film
            </button>
            <button
              onClick={() => (window.location.href = "/series")}
              className="px-6 py-2 bg-gray-600 hover:bg-gray-700 rounded-md transition-colors"
            >
              Lihat Series
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
