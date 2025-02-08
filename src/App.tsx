import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { CssBaseline, CircularProgress, Box } from "@mui/material";
import { Suspense, lazy } from "react";
import ProtectedRoute from "./routes/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import { DogProvider } from "./context/DogContext";
import NavBar from "./components/NavBar/NavBar";

const Home = lazy(() => import("./pages/Home/Home"));
const Login = lazy(() => import("./pages/Login/Login"));
const DogSearch = lazy(() => import("./pages/DogSearch/DogSearch"));
const Favorites = lazy(() => import("./pages/Favorites/Favorites"));
const Matches = lazy(() => import("./pages/Matches/Matches"));
const Profile = lazy(() => import("./pages/Profile/Profile"));

const Loading = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    height="100vh"
  >
    <CircularProgress />
  </Box>
);

function App() {
  return (
    <>
      <CssBaseline />
      <AuthProvider>
        <DogProvider>
          <Router>
            <NavBar />
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route
                  path="/dogSearch"
                  element={<ProtectedRoute element={<DogSearch />} />}
                />
                <Route
                  path="/favorites"
                  element={<ProtectedRoute element={<Favorites />} />}
                />
                <Route
                  path="/matches"
                  element={<ProtectedRoute element={<Matches />} />}
                />
                <Route
                  path="/profile"
                  element={<ProtectedRoute element={<Profile />} />}
                />
              </Routes>
            </Suspense>
          </Router>
        </DogProvider>
      </AuthProvider>
    </>
  );
}

export default App;
