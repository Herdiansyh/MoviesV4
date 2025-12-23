import React, { useState } from "react";
import { useMyList } from "../context/MyListContext";
import PopupDetailMovies from "./PopupDetailMovies";
import { createPortal } from "react-dom"; // ⬅️ Tambahkan ini

export default function PopupMovie({ movie, onClose }) {
  const { addToMyList, myList, removeFromMyList } = useMyList();
  const isInMyList = myList.some((m) => m.title === movie.title);
  const savedMovie = myList.find((m) => m.title === movie.title);

  const [showDetail, setShowDetail] = useState(false);

  const handlePlay = (e) => {
    e.stopPropagation();
    setShowDetail(true);
  };

  const handleRemove = (e) => {
    e.stopPropagation();
    if (savedMovie) {
      removeFromMyList(savedMovie.id, movie.title);
    }
  };

  const handleAdd = (e) => {
    e.stopPropagation();
    addToMyList(movie);
  };

  return (
    <>
      {/* Popup kecil */}
      <div className="min-h-full w-[180px] sm:min-w-[320px] bg-[#181A1C] absolute opacity-0 hover:opacity-100 top-0 sm:-left-10 -left-6 bottom-0 scale-3d rounded-[10px] sm:rounded-[20px] overflow-hidden">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute right-1 sm:right-2 top-1 sm:top-2 text-xs sm:text-sm text-white rounded-full w-6 h-6 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-gray-500 bg-[rgba(255,255,255,0.1)] backdrop-blur-2xl"
        >
          ✕
        </button>

        <div className="w-full h-[50%] overflow-hidden">
          <img
            src={movie.image}
            className="object-cover w-full h-full"
            alt={movie.title}
          />
        </div>

        <div>
          <div className="flex justify-between p-2 sm:p-4 items-center">
            <div className="flex gap-2 sm:gap-5">
              <button
                onClick={handlePlay}
                className="hover:cursor-pointer p-1.5 sm:p-2 w-[28px] h-[28px] sm:w-[40px] sm:h-[40px] flex items-center justify-center bg-white rounded-full hover:bg-white/90"
              >
                <i className="fi fi-sr-play text-black text-xs sm:text-base"></i>
              </button>

              {isInMyList ? (
                <button
                  onClick={handleRemove}
                  className="hover:cursor-pointer w-[28px] h-[28px] sm:w-[40px] sm:h-[40px] border flex items-center justify-center border-solid border-gray-500 bg-[#181A1C] rounded-full hover:bg-gray-700"
                >
                  <i className="fi fi-sr-check text-xs sm:text-base"></i>
                </button>
              ) : (
                <button
                  onClick={handleAdd}
                  className="hover:cursor-pointer w-[28px] h-[28px] sm:w-[40px] sm:h-[40px] border flex items-center justify-center border-solid border-gray-500 bg-[#181A1C] rounded-full hover:bg-gray-700"
                >
                  <i className="fi fi-sr-plus text-xs sm:text-base"></i>
                </button>
              )}
            </div>
          </div>

          <div className="flex gap-2 sm:gap-3 mx-2 my-3 sm:m-5 items-center text-xs sm:text-base">
            <span className="rounded-[15px] sm:rounded-[29.14px] py-[2px] px-[8px] sm:py-[4px] sm:px-[12px] text-center text-[12px] sm:text-[19.43px] leading-[140%] tracking-[0.24px] text-gray-300 bg-gray-700">
              13+
            </span>
            <span className="text-xs sm:text-base">16 Episode</span>
          </div>
        </div>
      </div>

      {/* Modal detail pakai Portal */}
      {showDetail &&
        createPortal(
          <PopupDetailMovies
            movie={movie}
            onClose={() => setShowDetail(false)}
          />,
          document.body
        )}
    </>
  );
}
