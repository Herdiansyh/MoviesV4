// src/pages/Film.jsx
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MovieSection from "../components/MovieSection";
import { useFilmData } from "../hooks/useFilmData";

export default function Film({ footer, datahero }) {
  const { data, loading, error } = useFilmData();

  // Acak data untuk tampilan yang bervariasi
  const datamovies = [...data.dataMovies].sort(() => Math.random() - 0.5);
  const topmovies = [...data.topMovies].sort(() => Math.random() - 0.5);
  const newmovies = [...data.newReleaseMovies].sort(() => Math.random() - 0.5);
  const imgvertikal = [...data.imgVertikal].sort(() => Math.random() - 0.5);
  const dataheroRandom = [...datahero].sort(() => Math.random() - 0.5);

  // Tampilan loading
  if (loading) {
    return (
      <div className="bg-[#181A1C] text-white min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex justify-center items-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-400">Memuat series...</p>
          </div>
        </div>
        <Footer footers={footer} />
      </div>
    );
  }

  // Tampilan error
  if (error) {
    return (
      <div className="bg-[#181A1C] text-white min-h-screen flex justify-center items-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-500 mb-4">
            Error Loading Data
          </h2>
          <p className="text-gray-400">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-md transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Tampilan utama
  return (
    <div className="bg-[#181A1C] text-white min-h-screen">
      <Header />
      <Hero datahero={dataheroRandom} />
      <main className="px-6 md:px-20 py-10 space-y-10">
        <MovieSection
          title="Melanjutkan Tontonan series"
          moviesvertikal={imgvertikal}
          type="vertikal"
        />
        <MovieSection
          title="Series dari chill"
          topmovies={topmovies}
          type="topmovies"
        />
        <MovieSection
          title="Top Rating Series Hari ini"
          movies={datamovies}
          type="movies"
        />
        <MovieSection
          title="Series Trending"
          type="topmovies"
          topmovies={topmovies}
        />
        <MovieSection
          title="Rilis Baru"
          type="newmovies"
          newmovies={newmovies}
        />
      </main>
      <Footer footers={footer} />
    </div>
  );
}
