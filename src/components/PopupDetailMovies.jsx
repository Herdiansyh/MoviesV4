import React from "react";
import { Link } from "react-router-dom";
import { useMyList } from "../context/MyListContext";
import MovieSection from "./MovieSection";
import { useSelector } from "react-redux";

export default function PopupDetailMovies({ movie, onClose }) {
  const { addToMyList, myList, removeFromMyList } = useMyList();
  const isInMyList = myList.some((m) => m.title === movie.title);

  const handleAdd = () => addToMyList(movie);
  const handleRemove = () => removeFromMyList(movie.title);

  const { dataMovies } = useSelector((state) => state.movies);
  const safeCast = Array.isArray(movie.cast)
    ? movie.cast
    : movie.cast
    ? [movie.cast]
    : [];

  const safeEpisodes = Array.isArray(movie.episodes) ? movie.episodes : [];
  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/80 p-2 sm:p-4">
      <div className="relative w-full max-w-4xl bg-[#181A1C] rounded-lg overflow-hidden shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-white text-xl rounded-full bg-black/40 hover:bg-black/70"
        >
          ✕
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[90vh] sm:max-h-[95vh]">
          {/* Hero Section */}
          <div className="relative h-[240px] sm:h-[360px] md:h-[520px] w-full">
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181A1C] via-transparent to-transparent" />

            {/* Title & Actions */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
                {movie.title}
              </h1>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                <Link
                  to="/profile"
                  className="flex items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white text-sm sm:text-base font-semibold px-4 py-2 rounded-full"
                >
                  <i className="fi fi-sr-play"></i> Putar
                </Link>

                {isInMyList ? (
                  <button
                    onClick={handleRemove}
                    className="flex items-center gap-2 border border-gray-400 text-white text-sm sm:text-base px-4 py-2 rounded-full hover:bg-gray-700"
                  >
                    <i className="fi fi-sr-check"></i> Di Daftar Saya
                  </button>
                ) : (
                  <button
                    onClick={handleAdd}
                    className="flex items-center gap-2 border border-gray-400 text-white text-sm sm:text-base px-4 py-2 rounded-full hover:bg-gray-700"
                  >
                    <i className="fi fi-sr-plus"></i> Tambah ke Daftar Saya
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-4 sm:p-6 md:p-8 text-gray-300 space-y-5">
            {/* Info */}
            <div className="flex flex-wrap gap-2 text-xs sm:text-sm md:text-base">
              <span className="px-3 py-1 bg-gray-700 rounded-full">
                ⭐ {movie.rating || "N/A"}
              </span>
              <span className="px-3 py-1 bg-gray-700 rounded-full">
                {movie.genre || "Drama"}
              </span>
              <span className="px-3 py-1 bg-gray-700 rounded-full">
                {movie.duration || "1 jam 30 menit"}
              </span>
              <span className="px-3 py-1 bg-gray-700 rounded-full">
                {movie.akses === "premium" ? "Premium" : "Gratis"}
              </span>
            </div>

            {/* Sinopsis */}
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-2">
                Sinopsis
              </h2>
              <p className="leading-relaxed text-sm sm:text-base">
                {movie.sinopsis ||
                  movie.description ||
                  "Deskripsi belum tersedia."}
              </p>
            </div>

            {/* Cast */}
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-2">
                Pemeran Utama
              </h2>
              <ul className="list-disc list-inside text-sm sm:text-base">
                {safeCast.length > 0
                  ? safeCast.map((actor, idx) => <li key={idx}>{actor}</li>)
                  : "Tidak diketahui"}
              </ul>
            </div>

            {/* Episodes */}
            {safeEpisodes.length > 0 && (
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  Episode ({safeEpisodes.length})
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {safeEpisodes.map((ep, idx) => (
                    <div
                      key={idx}
                      className="bg-[#202325] p-3 sm:p-4 rounded-lg hover:bg-[#2a2d2f]"
                    >
                      <h3 className="font-semibold text-white text-sm sm:text-base mb-1">
                        Episode {idx + 1}: {ep.title || "Tanpa Judul"}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400">
                        {ep.description || "Deskripsi belum tersedia."}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Recommendation */}
          <div className="px-4 sm:px-10 md:px-20 pb-8 text-white">
            <MovieSection
              title="Rekomendasi Film"
              movies={dataMovies}
              type="movies"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
