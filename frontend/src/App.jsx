import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CheckIn from "./pages/CheckIn";
import CheckOut from "./pages/CheckOut";
import Spots from "./pages/Spots";
import Sessions from "./pages/Sessions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/check-in" element={<CheckIn />} />
        <Route path="/check-out" element={<CheckOut />} />
        <Route path="/spots" element={<Spots />} />
        <Route path="/sessions" element={<Sessions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;