// src/pages/Home.jsx
import React, { useEffect, useRef } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MovieSection from "../components/movie/MovieSection";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../store/movieSlice";

export default function Home({ footer }) {
  const navigate = useNavigate();
  const hasChecked = useRef(false);
  const dispatch = useDispatch();

  const {
    dataHero,
    imgVertikal,
    topMovies,
    dataMovies,
    newMovies,
    loading,
    error,
  } = useSelector((state) => state.movies);

  // Cek autentikasi user saat pertama kali halaman dimuat
  useEffect(() => {
    if (!hasChecked.current) {
      const user = JSON.parse(localStorage.getItem("loggedInUser"));
      if (!user) {
        alert("Silakan login terlebih dahulu!");
        navigate("/login");
      }
      hasChecked.current = true;
    }
  }, [navigate]);

  // Fetch data dari MockAPI
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

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

  // Acak urutan data
  const shuffledImgVertikal = [...imgVertikal].sort(() => Math.random() - 0.5);
  const shuffledTopMovies = [...topMovies].sort(() => Math.random() - 0.5);
  const shuffledDataMovies = [...dataMovies].sort(() => Math.random() - 0.5);
  const shuffledNewMovies = [...newMovies].sort(() => Math.random() - 0.5);

  return (
    <div className="bg-[#181A1C] text-white min-h-screen">
      <Header />
      <Hero datahero={dataHero} />
      <main className="px-6 md:px-20 py-10 space-y-10">
        <MovieSection
          title="Melanjutkan Tontonan Film series"
          moviesvertikal={shuffledImgVertikal}
          type="vertikal"
        />
        <MovieSection
          title="Persembahan dari chill"
          topmovies={shuffledTopMovies}
          type="topmovies"
        />
        <MovieSection
          title="Top Rating Film dan Series Hari ini"
          movies={shuffledDataMovies}
          type="movies"
        />
        <MovieSection
          title="Film Trending"
          topmovies={shuffledTopMovies}
          type="topmovies"
        />
        <MovieSection
          title="Rilis Baru"
          newmovies={shuffledNewMovies}
          type="newmovies"
        />
      </main>
      <Footer footers={footer} />
    </div>
  );
}
