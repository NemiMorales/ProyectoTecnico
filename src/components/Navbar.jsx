import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Container>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              <Link to="/" style={{ textDecoration: "none", color: "#eee" }}>
                Dashboard
              </Link>
            </Typography>
            <Button
              variant="outlined"
              onClick={() => navigate("/login")}
              color="success"
              style={{ color: "white" }}
            >
              Login
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
