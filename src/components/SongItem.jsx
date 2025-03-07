import React from "react";

const SongItem = ({ image, desc, name, id }) => {
  return (
    <div className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
      <img className="rounded" src={image} alt="" />
      <p className="font-bold mt-2 mb-1"> {desc} </p>
      <p className="text-slate-200 text-sm "> {name} </p>
    </div>
  );
};

export default SongItem;
