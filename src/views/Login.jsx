import {
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { useState } from "react";
import { fetchData } from "../api/fetchData";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });
  const [token, setToken] = useState();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await fetchData(auth);
      window.localStorage.setItem("token", response.token);
      setToken(response.token);
      navigate("/");
    } catch (error) {
      console.error(error);
      setErrorMessage(
        "Ha ocurrido un error en el formulario. Por favor, verifica tus datos."
      );
    }
  };

  const handleChange = (e) => {
    setAuth({ ...auth, [e.target.name]: e.target.value });
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={4}>
        <Card
          sx={{
            mt: 5,
          }}
          style={{
            backgroundColor: "#607D8B",
            padding: "1rem",
          }}
        >
          <Typography variant="5" textAlign="center" color="white">
            Autentificador
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                variant="filled"
                label="Email"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="email"
                onChange={handleChange}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />

              <TextField
                variant="filled"
                label="Password"
                type="password"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="password"
                onChange={handleChange}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
              <Button variant="contained" color="primary" type="submit">
                Enviar
              </Button>
              {errorMessage && <p>{errorMessage}</p>}
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
