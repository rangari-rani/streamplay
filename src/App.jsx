import React, { useContext } from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import { PlayerContext } from "./context/PlayerContext";

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);

  return (
    <div className="h-screen bg-black text-white flex flex-col">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      
      <Player />
      <audio ref={audioRef} preload="auto" src={track.file}></audio>

      {/* Footer */}
      <footer className="text-center text-sm text-slate-400 mt-4 mb-2">
        <p>© 2022 Rani Rangari</p>
        <p>
          <a
            href="https://github.com/rangari-rani"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline mx-2"
          >
            GitHub
          </a>
          |
          <a
            href="https://www.linkedin.com/in/rani-rangari/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline mx-2"
          >
            LinkedIn
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
