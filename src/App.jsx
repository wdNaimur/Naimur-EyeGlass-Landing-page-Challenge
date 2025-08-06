import React from "react";
import { Outlet } from "react-router";
import Navbar from "./components/Shared/Navbar";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
