import React from "react";
import { Link } from "react-router-dom";

export default function Pricing({ plans }) {
  return (
    <section className="p-5 bg-[#25282a] text-center w-full">
      <h2 className="text-3xl font-bold mb-2">Pilih Paketmu</h2>
      <p className="text-gray-400 mb-12">
        Temukan paket terbaik untuk hiburanmu!
      </p>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-gradient-to-b ${plan.gradient} rounded-2xl p-6`}
          >
            <h3 className="text-xl max-w-30 p-2  mb-4 border border-[#3D4142] rounded-full bg-[#3D4142]">
              {plan.name}
            </h3>
            <p className="text-sm text-start mb-6 min-h-[40px]">
              {plan.description}
            </p>
            <ul className="space-y-3 mb-6 text-left border-b border-gray-50/20 pb-10">
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
                  <span className="text-sm ">{feature}</span>
                </li>
              ))}
            </ul>
            <Link to="/pembayaran" state={{ selectedPlan: plan }}>
              <button className="w-full bg-white text-blue-600 font-semibold py-3 rounded-full hover:bg-gray-100 transition">
                Langganan
              </button>
            </Link>{" "}
            <h3 className="mt-4 text-sm text-center text-gray-300">
              Syarat dan ketentuan berlaku
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
