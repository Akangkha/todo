import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Signin from "./pages/Signin.jsx";
import Signup from "./pages/Signup.jsx";
import "./App.css";
const App = () => {
  const token = localStorage.getItem("token"); // Get the token from the local storage
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={token ? <Dashboard /> : <Navigate to="/signin" />} // If the token is present, render the Dashboard component, else redirect to the Signin component
        />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
