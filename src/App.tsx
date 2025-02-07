import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import ProtectedRoute from "./routes/ProtectedRoute";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import DogSearch from "./pages/DogSearch/DogSearch";
import Favorites from "./pages/Favorites/Favorites";
import { AuthProvider } from "./context/AuthContext";
import { DogProvider } from "./context/DogContext";

function App() {
  return (
    <>
      <CssBaseline />
      <AuthProvider>
        <DogProvider>
          <Router>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/dogSearch"
                element={<ProtectedRoute element={<DogSearch />} />}
              />
              <Route
                path="/favorites"
                element={<ProtectedRoute element={<Favorites />} />}
              />
            </Routes>
          </Router>
        </DogProvider>
      </AuthProvider>
    </>
  );
}

export default App;
