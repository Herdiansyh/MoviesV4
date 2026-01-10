// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DaftarSaya from "./pages/DaftarSaya";
import Series from "./pages/Series";
import Film from "./pages/Film";
import Profile from "./pages/Profile";
import Premium from "./pages/Premium";
import Pembayaran from "./pages/Pembayaran";

// Loading component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
  </div>
);

// Error component
const ErrorMessage = ({ message }) => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="text-red-500 text-center">
      <h2 className="text-2xl font-bold mb-4">Error Loading Data</h2>
      <p>{message}</p>
    </div>
  </div>
);

export default function App() {
  const footers = [
    {
      title: "Genre",
      links: ["Action", "Romance", "Anime", "Horror", "Thriller"],
    },
    {
      title: "Bantuan",
      links: ["FAQ", "Kontak Kami", "Privasi", "Syarat & Ketentuan"],
    },
    { title: "Tentang Kami", links: ["Tentang Chill", "Blog"] },
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home footer={footers} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/series" element={<Series footer={footers} />} />
        <Route path="/film" element={<Film footer={footers} />} />
        <Route path="/daftar-saya" element={<DaftarSaya footer={footers} />} />
        <Route path="/profile" element={<Profile footer={footers} />} />
        <Route path="/premium" element={<Premium footer={footers} />} />
        <Route path="/Pembayaran" element={<Pembayaran footer={footers} />} />
      </Routes>
    </Router>
  );
}
