import { Navigate } from "react-router-dom";
import Cats from "../pages/Cats";
import LikedCats from "../pages/LikedCats";

export const routes = [
  { path: "/cats", element: <Cats /> },
  { path: "/liked", element: <LikedCats /> },

  { path: "*", element: <Navigate to={"/cats"} /> },
];
