// src/pages/Series.jsx
import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MovieSection from "../components/movie/MovieSection";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../store/movieSlice";

export default function Series({ footer }) {
  const dispatch = useDispatch();

  const {
    dataMovies,
    topMovies,
    newMovies,
    imgVertikal,
    // trendingMovies,
    dataHero,
    loading,
    error,
  } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  // Acak urutan data biar tampilannya dinamis
  const datamovies = [...dataMovies].sort(() => Math.random() - 0.5);
  const topmovies = [...topMovies].sort(() => Math.random() - 0.5);
  const newmovies = [...newMovies].sort(() => Math.random() - 0.5);
  const imgvertikal = [...imgVertikal].sort(() => Math.random() - 0.5);
  const dataheroRandom = [...dataHero].sort(() => Math.random() - 0.5);

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
      <div className="bg-[#181A1C] text-white min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex justify-center items-center">
          <div className="text-center">
            <div className="text-red-500 text-6xl mb-4">📺</div>
            <h2 className="text-2xl font-bold text-red-500 mb-2">
              Gagal Memuat Series
            </h2>
            <p className="text-gray-400 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-md transition-colors"
            >
              Muat Ulang
            </button>
          </div>
        </div>
        <Footer footers={footer} />
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
          title="Melanjutkan Tontonan Series"
          moviesvertikal={imgvertikal}
          type="vertikal"
        />
        <MovieSection
          title="Series dari Chill"
          topmovies={topmovies}
          type="topmovies"
        />
        <MovieSection
          title="Top Rating Series Hari Ini"
          movies={datamovies}
          type="movies"
        />
        <MovieSection
          title="Series Trending"
          topmovies={topmovies}
          type="topmovies"
        />
        <MovieSection
          title="Rilis Baru"
          newmovies={newmovies}
          type="newmovies"
        />
      </main>
      <Footer footers={footer} />
    </div>
  );
}
