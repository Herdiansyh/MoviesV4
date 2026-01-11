import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, Navigate, useLocation } from "react-router-dom";

export default function Pembayaran({ footer }) {
  const location = useLocation();
  const plan = location.state?.selectedPlan;

  if (!plan) {
    return <Navigate to="/premium" replace />;
  }
  return (
    <div className="bg-[#181A1C] text-white min-h-screen">
      <Header />
      <main className=" mx-auto md:px-25 px-10 py-16">
        <h1 className="my-10 md:text-[32px] text-2xl font-semibold ">
          Ringkasan Pembayaran
        </h1>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-[40px]">
          <div className="lg:col-span-1 ">
            <div
              key={plan.index}
              className={`h-full w-full bg-gradient-to-b ${plan.gradient} rounded-2xl p-6`}
            >
              <h3 className="text-xl text-center max-w-30 p-2  mb-4 border border-[#3D4142] rounded-full bg-[#3D4142]">
                {plan.name}
              </h3>
              <p className="text-sm text-blue-200 mb-6 min-h-[40px]">
                {plan.description}
              </p>
              <ul className="space-y-3 mb-6 text-left border-b border-gray-50/20 pb-30">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <h3 className="mt-4 text-sm text-center text-gray-300">
                Syarat dan ketentuan berlaku
              </h3>
            </div>
          </div>
          <div className="lg:col-span-3 flex flex-col h-full">
            <h3 className="text-[18px] my-3">Metode Pembayaran</h3>
            <div className="flex gap-2">
              <div className="border p-2 gap-2 border-gray-100 rounded-lg flex">
                <input type="radio" name="paymentMethod" />{" "}
                <img
                  src="/assets/logo/Visa_Logo.png"
                  alt="visa"
                  className="w-10 bg-white p-1  rounded-sm h-5 "
                />
                <img
                  src="/assets/logo/Mastercard.png"
                  alt="visa"
                  className="w-10 bg-white p-1  rounded-sm h-5 "
                />
                <img
                  src="/assets/logo/american.png"
                  alt="american express"
                  className="w-10 bg-blue p-1  rounded-sm h-5 "
                />
              </div>
              <div className="border p-2 flex border-gray-100 rounded-lg flex-1">
                <input type="radio" name="paymentMethod" />{" "}
                <img
                  src="/assets/logo/bca.png"
                  alt="bca"
                  className="w-10 bg-transparent p-1  rounded-sm h-5 "
                />
                <span className="text-sm"> BCA Virtual Account</span>
              </div>
            </div>
            <h3 className="text-[18px] my-3">Kode Voucher (Jika ada)</h3>
            <div className="flex gap-2">
              <input
                placeholder="Masukan Kode Voucher"
                className="border p-2  border-gray-100 rounded-lg flex-1"
              ></input>
              <button className="bg-[#2F3334] hover:cursor-pointer hover:bg-gray-800 py-[8px] px-[16px] rounded-full ">
                <span className="text-[16px]">Gunakan</span>
              </button>
            </div>

            <h3 className="text-white font-semibold my-4">
              Ringkasan Transaksi
            </h3>
            <div className="space-y-3 mb-4 h-full">
              <div className="flex justify-between text-gray-300 ">
                <span>Paket Premium {plan.name}</span>
                <span>Rp{plan.harga.toLocaleString("id-ID")}</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Biaya Admin</span>
                <span>Rp3.000</span>
              </div>
              <div className="border-t border-gray-700 pt-3 flex justify-between text-white font-semibold">
                <span>Total Pembayaran</span>
                <span>Rp{(plan.harga + 3000).toLocaleString("id-ID")}</span>
              </div>
            </div>
            <button className="w-full  bg-blue-600 hover:cursor-pointer hover:bg-blue-700 text-white font-semibold py-3 rounded-full transition duration-200">
              Bayar
            </button>
          </div>
        </div>
      </main>
      <Footer footers={footer} />
    </div>
  );
}
