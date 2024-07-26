import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[25%] h-full p-2 text-white  lg:flex gap-2 hidden flex-col">
      <div className=" h-[15%]   bg-[#121212] flex flex-row justify-around flex-col ">
        <div className="flex items-center gap-3 m-3    pl-8 cursor-pointer ">
          <img className="w-6 " src={assets.home_icon} alt="" />
          <Link to={"/"}>
            <p className="font"> Home</p>
          </Link>
        </div>
        <div className="flex items-center gap-3 m-3  pl-8 cursor-pointer ">
          <img className="w-6 " src={assets.search_icon} alt="" />
          <p onClick={() => navigate("/search")} className="font">
            {" "}
            Search
          </p>
        </div>
      </div>
      <div className="bg-[#121212] h-[85%] rounded  ">
        <div className="p-4 flex items-center justify-between  ">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="" />
            <p className="font-semibold">Your Libary</p>
          </div>

          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} alt="" />
            <img className="w-5" src={assets.plus_icon} alt="" />
          </div>
        </div>

        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start pl-4 gap-1">
          <h1>Create your first playlist</h1>
          <p className="font-light">it's esay we will help you </p>
          <button className="px-4 py-1.5  bg-white text-[15px] text-black rounded-full mt-4 ">
            Create Playlist
          </button>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start mt-4 pl-4 gap-1">
          <h1>Lets findsome Podcast to follow </h1>
          <p className="font-light">we will keep you update new episode </p>
          <button className="px-4 py-1.5  bg-white text-[15px] text-black rounded-full mt-4 ">
            Browse Podcast
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
