// src/pages/Register.jsx
import React from "react";
import { Link } from "react-router-dom";
import FormRegiste from "../components/FormRegister";
import FormRegister from "../components/FormRegister";
import ButtonMasukGoogle from "../components/ButtonMasukGoogle";

export default function Register() {
  return (
    <div className="bg-[url('/img/bg-register.jpg')]  bg-cover bg-center min-h-screen flex justify-center items-center p-10">
      <div className="bg-[#272727CC] p-8 rounded-2xl w-full max-w-md ">
        <div className="flex justify-center mb-4">
          <img src="/img/logoChil.png" alt="Logo" className="lg:w-40 w-30" />
        </div>
        <div className="text-center mb-6">
          <h2 className="lg:text-xl text-lg mb-1 text-gray-400">Daftar</h2>
          <p className="text-gray-400 text-sm">
            Buat akun baru untuk mulai menonton!
          </p>
        </div>
        <FormRegister />
        <div className="text-center text-gray-400 my-4">Atau</div>
        <ButtonMasukGoogle />
      </div>
    </div>
  );
}
