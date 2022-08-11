import React from "react";
import { Route, Routes } from "react-router";
import { Navbar } from "../components/Navbar";
import { Dashboard } from "../pages/Dashboard";
import { Post } from "../pages/Post";
import { Update } from "../pages/Update";

export const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/post" element={<Post />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </>
  );
};
