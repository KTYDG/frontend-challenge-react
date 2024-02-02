import { Navigate } from "react-router-dom";
import Cats from "../pages/Cats";
import LikedCats from "../pages/LikedCats";

export const routes = [
  { path: "/frontend-challenge-react/cats", element: <Cats /> },
  { path: "/frontend-challenge-react/liked", element: <LikedCats /> },

  // { path: "*", element: <Navigate to={"/frontend-challenge-react/cats"} /> },
];
