import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlayerContextProvider from "./context/PlayerContext.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <PlayerContextProvider>
        <Routes>
       
     
          <Route path="*" element={<App />} />
        </Routes>
      </PlayerContextProvider>
    </BrowserRouter>
  </StrictMode>
);
