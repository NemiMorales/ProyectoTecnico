import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Container } from "@mui/material";

import Login from "./views/Login";
import Details from "./views/Details";
import Dashboard from "./views/Dashboard";

function App() {
  const [count, setCount] = useState(0);
  // const isAuthenticated = /* Verifica si el usuario está autenticado */;
  // const isAuthenticated = /* Verifica si el usuario está autenticado */;

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Container sx={{ marginBottom: "10%" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
