import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { PlayerContext } from "../context/PlayerContext";

const SongItem = ({ image, desc, name, id }) => {
  const { change } = useContext(PlayerContext);
  return (
    <div
      onClick={() => change(id)}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      <img className="rounded" src={image} alt="" />
      <p className="font-bold mt-2 mb-1"> {desc} </p>
      <p className="text-slate-200 text-sm "> {name} </p>
    </div>
  );
};

export default SongItem;
