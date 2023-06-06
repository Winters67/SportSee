import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../src/views/Home/Home";
import SideBar from "./components/SideBar/SideBar";
import NavBar from "./components/NavBar/NavBar";
import NotFoundPage from "./views/NotFoundPage/NotFoundPage";

const App = () => {
  return (
    <div>
      <NavBar />
      <SideBar />
      <Routes>
        <Route path="/:id" element={<Home />} />
        <Route path="/Profil/" element={<Home />} />
        <Route path="/Reglage" element={<Home />} />
        <Route path="/Communauté" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/404" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
