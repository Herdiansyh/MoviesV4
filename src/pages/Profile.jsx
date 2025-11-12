import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Premium from "../components/Premium";

export default function Profile({ footer }) {
  return (
    <div className="bg-[#181A1C] text-white min-h-screen">
      <Header />
      <div className="flex w-full m-auto h-10  "> </div>

      <div className=" mx-auto p-25">
        <h1 className="text-3xl font-bold mb-8">Profil Saya</h1>

        <div className="flex gap-8 justify-between">
          {/* Left Section - Profile Form */}
          <div className="w-2/5">
            <div className="flex items-start gap-4 mb-6">
              <img
                src="./img/profile.png"
                alt=""
                className="w-[140px] h-[140px]"
              />
              <div className="flex flex-col gap-2">
                <button className="px-4 py-2 text-sm border border-blue-600 rounded-full text-blue-600 hover:bg-blue-500 hover:text-white transition">
                  Ubah Foto
                </button>
                <span className="text-sm text-gray-400 ">📄 Maksimal 2MB</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-[#22282A] border border-gray-700 rounded p-3 w-4/3">
                <label className="block text-xs text-gray-400 mb-1">
                  Nama Pengguna
                </label>
                <div className="flex items-center justify-between">
                  <input
                    type="text"
                    value="William"
                    className="bg-transparent outline-none text-white w-full"
                    readOnly
                  />
                  <button className="text-gray-400 hover:text-white">✏️</button>
                </div>
              </div>

              <div className="bg-[#22282A] border border-gray-700 rounded p-3 w-4/3">
                <label className="block text-xs text-gray-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value="william1980@gmail.com"
                  className="bg-transparent outline-none text-white w-full"
                  readOnly
                />
              </div>

              <div className="bg-[#22282A] border border-gray-700 rounded p-3 w-4/3">
                <label className="block text-xs text-gray-400 mb-1">
                  Kata Sandi
                </label>
                <div className="flex items-center justify-between">
                  <input
                    type="password"
                    value="••••••••••••"
                    className="bg-transparent outline-none text-white w-full"
                    readOnly
                  />
                  <button className="text-gray-400 hover:text-white">✏️</button>
                </div>
              </div>

              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full text-sm font-medium transition mt-4">
                Simpan
              </button>
            </div>
          </div>

          {/* Right Section - Premium Card */}
          <div className="w-2/5 ml-10">
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl p-6 h-48 flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <div className="max-w-40 w-[81px] h-[34px] text-center bg-[#C1C2C4] text-blue-700 px-3 py-1 rounded-full text-[16px] font-semibold  mb-3">
                  Aktif
                </div>
                <h2 className="text-xl  font-bold mb-2">
                  Akun Premium Individual ✨
                </h2>
                <p className="text-l  text-blue-100">
                  Saat ini kamu sedang menggunakan akses premium
                </p>
                <p className="text-l text-blue-200 mt-1">
                  Berakhir pada: 31 Desember 2023
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* My List Section */}
      </div>

      <Footer footers={footer} />
    </div>
  );
}
