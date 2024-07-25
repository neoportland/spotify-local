import { createContext, useEffect, useRef } from "react";
import { useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef(); //audo tagini dinler
  const seekBg = useRef();
  const seekBar = useRef();

  const [track, setTrack] = useState(songsData[1]);
  const [playStatus, setPlayStatus] = useState(true);
  const [time, setTime] = useState({
    currentTime: {
      minute: 0,
      second: 0,
    },
    totalTime: {
      minute: 0,
      second: 0,
    },
  });

  const Play = () => {
    audioRef.current.play(); // <audio ref={audioRef} src={track.file} preload="auto"></audio>
    setPlayStatus(false);
    console.log("haydi bakalım şarkının uzunluğu:");
    console.log(audioRef.current.duration);
  };
  const Pause = () => {
    audioRef.current.pause();
    setPlayStatus(true);
    console.log(audioRef.current.currentTime);
  };

  // audioRef her element seçiminte yani her şarkı yenilendiğinde çalışacak bir fonksiyon yarattı bana. o zaman
  useEffect(() => {
    setTimeout(() => {
      audioRef.current.ontimeupdate = () => {
        setTime({
          currentTime: {
            minute: Math.floor(audioRef.current.currentTime / 30),
            second: Math.floor(audioRef.current.currentTime % 30),
          },
          totalTime: {
            minute: Math.floor(audioRef.current.duration / 60), // şarıkının süresini dakika sayısı
            second: Math.floor(audioRef.current.duration % 60), // şarkının süresinin mod 60 ı
          },
        });
      };
    });
  }, [audioRef]);

  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track,
    setTrack,

    playStatus,
    setPlayStatus,
    time,
    setTime,
    Play,
    Pause,
  };
  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};
export default PlayerContextProvider;
