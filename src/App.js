import { BrowserRouter, HashRouter } from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <HashRouter>
      {/* <BrowserRouter> */}
      <Navbar />
      <AppRouter />
      {/* </BrowserRouter> */}
    </HashRouter>
  );
}

export default App;
