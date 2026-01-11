import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonMasuk from "./ButtonMasuk";
import { profileAPI } from "../services/profileService";

export default function FormLogin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [eye, setEye] = useState(false);
  const handleEye = () => {
    setEye(!eye);
  };
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const users = await profileAPI.getAll();
      const userByusername = users.find((u) => u.username === username);
      if (!userByusername) {
        alert("User tidak ditemukan!");
        return;
      }

      if (userByusername.password !== password) {
        alert("password salah!");
        return;
      }
      // ✅ SIMPAN USER KE LOCALSTORAGE
      localStorage.setItem("loggedInUser", JSON.stringify(userByusername));

      alert("login berhasil!");
      navigate("/home");
    } catch (error) {
      alert(error.message);
      return;
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleLogin}>
      <div>
        <label htmlFor="username" className="block text-gray-300 mb-1">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="w-full p-3 rounded-2xl bg-[#272727CC] border border-gray-600 text-white"
          placeholder="Masukkan username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-gray-300 mb-1">
          Kata Sandi
        </label>
        <div className="relative">
          <input
            type={eye ? "text" : "password"}
            id="password"
            className="w-full p-3 rounded-2xl bg-[#272727CC] border border-gray-600 text-white"
            placeholder="Masukkan kata sandi"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="absolute right-3 top-3 hover:cursor-pointer text-gray-400 w-5 h-5"
            onClick={handleEye}
          >
            {eye ? (
              <i class="fi fi-sr-eye-crossed"></i>
            ) : (
              <i class="fi fi-sr-eye"></i>
            )}
          </button>
        </div>
      </div>
      <div className="flex justify-between text-sm text-gray-400 mb-5">
        <span>
          Belum punya akun?{" "}
          <Link to="/register" className="text-white">
            Daftar
          </Link>
        </span>
        <Link to="#" className="text-white">
          Lupa kata sandi?
        </Link>
      </div>

      <ButtonMasuk />
    </form>
  );
}
