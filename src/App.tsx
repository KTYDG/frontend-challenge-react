import { RouterProvider, createHashRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Cats from "./pages/Cats";
import LikedCats from "./pages/LikedCats";

const router = createHashRouter([
  {
    path: "/",
    Component: Navbar,
    children: [
      {
        path: "cats",
        Component: Cats,
      },
      {
        path: "liked",
        Component: LikedCats,
      }
    ],
  },
  {
    path: "*",
    Component: Cats,
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
