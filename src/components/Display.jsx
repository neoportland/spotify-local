import React, { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { albumsData } from "../assets/assets";
import Search from "./Search";

const Display = ({ gelen }) => {
  const displayRef = useRef();
  const location = useLocation();

  const isAlbum = location.pathname.includes("album"); /*albume e bastın mı */

  const albumId = isAlbum ? location.pathname.slice(-1) : ""; // içinde bulunduğun id no
  const bgColor = albumsData[Number(albumId)].bgColor;

  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
    } else {
      displayRef.current.style.background = "#121212";
    }
  });
  // const gelen = (item) => {
  //   console.log("merhaba yukarıya gelen id :", item);
  //   // ıdtoapp(item);
  // };

  return (
    <div
      ref={displayRef}
      className=" overflow-auto lg:w-[75%] todo text-white m-2 px-6 pt-4 rounded bg-[#121212]   w-[100%]"
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/search" element={<Search />} />
        <Route path="/album/:id" element={<DisplayAlbum gonder={gelen} />} />
      </Routes>
    </div>
  );
};

export default Display;
