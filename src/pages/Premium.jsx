import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Pricing from "../components/pembayaran/Pricing";

export default function Premium({ footer }) {
  const benefits = [
    { icon: "🛡️", title: "Nikmati Konten", subtitle: "Pilihan" },
    { icon: "✓", title: "Tidak Ada Iklan", subtitle: "" },
    { icon: "🌐", title: "Konten Tanpa", subtitle: "Koneksi" },
    { icon: "📺", title: "Subtitle untuk Konten", subtitle: "Pilihan" },
    { icon: "😊", title: "Berhenti Mutakhir", subtitle: "Sampai Diunduh 5K" },
    {
      icon: "📱",
      title: "Tontonan di TV, Tablet,",
      subtitle: "Mobile, dan Laptop",
    },
    { icon: "👤", title: "Subtitle untuk Konten", subtitle: "Pilihan" },
  ];

  const plans = [
    {
      name: "Individual",
      description: "Mulai dari Rp49,990/bulan untuk 1 akun",
      features: [
        "Tidak ada iklan",
        "Kualitas 720px",
        "Download konten pilihan",
      ],
      gradient: "from-blue-600 to-blue-800",
      harga: 49990,
    },
    {
      name: "Berdua",
      description: "Mulai dari Rp79,990/bulan untuk 2 akun",
      features: [
        "Tidak ada iklan",
        "Kualitas 1080px",
        "Download konten pilihan",
      ],
      gradient: "from-blue-700 to-blue-900",
      harga: 79990,
    },
    {
      name: "Keluarga",
      description: "Mulai dari Rp159,990/bulan untuk 5-7 akun",
      features: ["Tidak ada iklan", "Kualitas 4K", "Download konten pilihan"],
      gradient: "from-blue-800 to-blue-950",
      harga: 159990,
    },
  ];

  return (
    <div className="bg-[#181A1C] text-white min-h-screen">
      <Header />
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-8 py-16">
        {/* Benefits Section */}
        <section className="text-center mb-16">
          <h1 className="text-3xl font-bold m-7">Kenapa Harus Berlangganan?</h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {benefits.slice(0, 4).map((benefit, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-3 text-2xl">
                  {benefit.icon}
                </div>
                <p className="text-sm">
                  {benefit.title}
                  {benefit.subtitle && (
                    <>
                      <br />
                      {benefit.subtitle}
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-3xl mx-auto">
            {benefits.slice(4).map((benefit, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-3 text-2xl">
                  {benefit.icon}
                </div>
                <p className="text-sm">
                  {benefit.title}
                  {benefit.subtitle && (
                    <>
                      <br />
                      {benefit.subtitle}
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
      </main>
      <Pricing plans={plans} />
      <Footer footers={footer} />
    </div>
  );
}
