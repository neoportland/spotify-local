import { createContext, useEffect, useRef } from "react";
import { useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef(); //audo tagini dinler
  const seekBg = useRef(); // ana çubuk
  const seekBar = useRef(); //yeşil çubuk(ilerleme çubuğu )

  // const [tempId, setTempId] = useState(1);

  const [track, setTrack] = useState(songsData[0]);
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

  // console.log("track değerime bakıyorum :", track);

  const Play = () => {
    audioRef.current.play(); // <audio ref={audioRef} src={track.file} preload="auto"></audio>
    setPlayStatus(false);
    // console.log("haydi bakalım şarkının uzunluğu:");
    // console.log(audioRef.current.duration);
  };
  const Pause = () => {
    audioRef.current.pause();
    setPlayStatus(true);
    // console.log(audioRef.current.currentTime);
  };
  const next = async (item) => {
    if (item == 7) {
      item = -1;
    }
    await setTrack(songsData[Number(item) + 1]);
    await audioRef.current.play();
    setTimeout(() => {
      setPlayStatus(false);
    }, 100);
    setPlayStatus(true);
  };
  const prev = async (item) => {
    if (item == 0) {
      item = 7;
    }
    await setTrack(songsData[Number(item) - 1]);
    await audioRef.current.play();
    setTimeout(() => {
      setPlayStatus(false);
    }, 100);
    setPlayStatus(true);
  };

  const change = async (pro) => {
    await setTrack(songsData[pro]);
    await audioRef.current.play();
    setTimeout(() => {
      setPlayStatus(false);
    }, 200);

    setPlayStatus(true);
  };
  const seekSong = async (e) => {
    // console.log("çubuk bilgisi clientX :", e.clientX);
    // console.log(" currentTime)", audioRef.current.currentTime);
    audioRef.current.currentTime =
      (e.nativeEvent.offsetX / seekBg.current.offsetWidth) *
      audioRef.current.duration;
  };

  // audioRef her element seçiminte yani her şarkı yenilendiğinde çalışacak bir fonksiyon yarattı bana. o zaman

  useEffect(() => {
    setTimeout(() => {
      audioRef.current.ontimeupdate = () => {
        seekBar.current.style.width =
          Math.floor(
            (audioRef.current.currentTime / audioRef.current.duration) * 100
          ) + "%";
        setTime({
          currentTime: {
            minute: Math.floor(audioRef.current.currentTime / 60),
            second: Math.floor(audioRef.current.currentTime % 60),
          },
          totalTime: {
            minute: Math.floor(audioRef.current.duration / 60), // şarıkının süresini dakika sayısı
            second: Math.floor(audioRef.current.duration % 60), // şarkının süresinin  yüzde 60 ı
          },
        });
      };
    }, 1000);
  }, [audioRef]);

  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    change,
    seekSong,
    next,
    prev,
    track,
    setTrack,
    // tempId,
    // setTempId,
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
