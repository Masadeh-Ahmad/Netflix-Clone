import { Routes, Route } from "react-router-dom";
import FavMovies from "./components/FavList";
import Home from "./components/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorite" element={<FavMovies />} />
    </Routes>
  );
}
