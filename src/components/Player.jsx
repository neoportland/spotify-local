import React, { useContext } from "react";
import { assets, songsData } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
  const {
    seekBar,
    seekBg,
    Play,
    track,
    prev,
    time,
    seekSong,
    next,
    Pause,
    playStatus,
  } = useContext(PlayerContext);

  return (
    <div className="h-[10%] bg-black flex  justify-between items-center px-4 text-white ">
      <div className="hidden items-center gap-4  lg:flex ">
        <img className="h-12" src={track.image} alt="" />
        <div>
          <p>{track.name} </p>
          <p> {track.desc.slice(1 - 11)} </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className=" flex gap-4">
          <img className="h-4 cursor-pointer" src={assets.shuffle_icon} />
          <img
            onClick={() => prev(track.id)}
            className="w-4 cursor-pointer"
            src={assets.prev_icon}
          />

          {playStatus ? (
            <img
              onClick={Play}
              className="w-4 cursor-pointer"
              src={assets.play_icon}
            />
          ) : (
            <img
              onClick={Pause}
              className="w-4 cursor-pointer"
              src={assets.pause_icon}
            />
          )}

          <img
            onClick={() => next(track.id)}
            className="w-4 cursor-pointer"
            src={assets.next_icon}
          />
          <img className="w-4 cursor-pointer" src={assets.loop_icon} />
        </div>
        <div className="flex items-center gap-5">
          <p>
            {" "}
            {time.currentTime.minute} : {time.currentTime.second}{" "}
          </p>
          <div
            ref={seekBg}
            onClick={seekSong}
            className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer  "
          >
            <hr
              ref={seekBar}
              className="h-1 border-none w-0 bg-green-800 rounded-full "
            />
          </div>
          <p>
            {" "}
            {time.totalTime.minute} : {time.totalTime.second}{" "}
          </p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img className="w-4" src={assets.plays_icon} alt="" />
        <img className="w-4" src={assets.mic_icon} alt="" />
        <img className="w-4" src={assets.queue_icon} alt="" />
        <img className="w-4" src={assets.speaker_icon} alt="" />
        <img className="w-4" src={assets.volume_icon} alt="" />
        <div className="w-20 bg-slate-50 h-1  rounded "></div>
        <img className="w-4" src={assets.mini_player_icon} alt="" />
        <img className="w-4" src={assets.zoom_icon} alt="" />
      </div>
    </div>
  );
};

export default Player;
