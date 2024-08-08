// App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Login, RecipeBuilder, SingleRecipe } from "./pages";
import Navbar from "./components/shared/Navbar";
import "./globals.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recipe/:id" element={<SingleRecipe />} />
        <Route path="/recipe-builder" element={<RecipeBuilder />} />
      </Routes>
    </Router>
  );
};

export default App;
