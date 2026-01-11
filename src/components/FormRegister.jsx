import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { profileAPI } from "../services/profileService";

export default function FormRegister() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [eye, setEye] = useState(false);
  const handleEye = () => {
    setEye(!eye);
  };
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Username dan password tidak boleh kosong!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Password dan konfirmasi password tidak cocok!");
      return;
    }

    try {
      const users = await profileAPI.getAll();

      const userExist = users.find((u) => u.username === username);
      if (userExist) {
        alert("Username sudah terdaftar!");
        return;
      }
      const emailExist = users.find((u) => u.email === email);
      if (emailExist) {
        alert("Email sudah terdaftar!");
        return;
      }
      await profileAPI.register({
        username: username,
        email: email,
        password: password,
      });

      alert("Registrasi berhasil!");
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleRegister}>
      <div>
        <label htmlFor="username" className="block text-gray-300 ">
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
        <label htmlFor="email" className="block text-gray-300 ">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full p-3 rounded-2xl bg-[#272727CC] border border-gray-600 text-white"
          placeholder="Masukkan email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-gray-300 ">
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
            className="absolute right-3 top-3 text-gray-400 w-5 h-5"
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
      <div>
        <label htmlFor="confirm-password" className="block text-gray-300 ">
          Konfirmasi Kata Sandi
        </label>
        <div className="relative">
          <input
            type={eye ? "text" : "password"}
            id="confirm-password"
            className="w-full p-3 rounded-2xl bg-[#272727CC] border border-gray-600 text-white"
            placeholder="Konfirmasi kata sandi"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            type="button"
            className="absolute right-3 top-3 text-gray-400 w-5 h-5"
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
          Sudah punya akun?{" "}
          <Link to="/login" className="text-white">
            Masuk
          </Link>
        </span>
      </div>
      <button
        type="submit"
        className="w-full bg-gray-500 hover:bg-gray-600 p-3 rounded-2xl"
      >
        Daftar
      </button>
    </form>
  );
}
