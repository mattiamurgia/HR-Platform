import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./components/homePage/HomePage";
import TalentSection from "./components/talent/TalentSection";
import ErrorSection from "./components/error/ErrorSection";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/talent", element: <TalentSection /> },
  { path: "*", element: <ErrorSection /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
