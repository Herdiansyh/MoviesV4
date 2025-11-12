// src/pages/Home.jsx
import React, { useEffect, useState, useRef } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MovieSection from "../components/MovieSection";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { filmAPI } from "../services/api"; // import api.js

export default function Home({ footer }) {
  const navigate = useNavigate();
  const hasChecked = useRef(false);

  // State untuk tiap kategori
  const [dataHero, setDataHero] = useState([]);
  const [imgVertikal, setImgVertikal] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [dataMovies, setDataMovies] = useState([]);
  const [newMovies, setNewMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    const fetchData = async () => {
      try {
        const [hero, vertikal, top, movies, newReleases] = await Promise.all([
          filmAPI.getHeroData(),
          filmAPI.getMovies(), // Jika ada kategori imgVertikal, buat fungsi di api.js juga
          filmAPI.getTopMovies(),
          filmAPI.getMovies(),
          filmAPI.getNewReleases(),
          filmAPI.getVertikalMovies(),
        ]);

        setDataHero(hero);
        setImgVertikal(vertikal);
        setTopMovies(top);
        setDataMovies(movies);
        setNewMovies(newReleases);
        setLoading(false);
      } catch (err) {
        setError(err.message || "Error fetching data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
