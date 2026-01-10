// src/components/Footer.jsx
import React, { useState } from "react";

export default function Footer({ footers }) {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <footer className="bg-[#181A1C] border-t border-gray-700  md:px-24 px-10 py-12 mt-12 text-gray-300">
      <div className="grid md:grid-cols-4 gap-8">
        <div className="flex flex-col">
          <img src="/img/logoChil.png" alt="Logo Chill" className="mb-4 w-32" />
          <p>©2023 Chill All Rights Reserved.</p>
        </div>
        {footers.map((footer, idx) => (
          <div key={idx}>
            <h3
              className="cursor-pointer md:cursor-auto flex justify-between md:block"
              onClick={() => toggle(idx)}
            >
              {footer.title} {active === idx && <span>▲</span>}
            </h3>
            <ul
              className={`overflow-hidden transition-all max-h-0 md:max-h-full ${
                active === idx ? "max-h-60" : "max-h-0"
              } mt-2`}
            >
              {footer.links.map((link, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-white text-sm block mb-2">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
