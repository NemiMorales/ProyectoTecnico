import {
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import { useParams } from "react-router-dom";
import { fetchPlatformById } from "../api/fetchData";
import { useEffect, useState } from "react";
import ModalDetails from "../components/ModalDetails";
import useModal from "../hooks/useModal";
import ModalRecord from "../components/ModalRecord";
import TableDetails from "../components/TableDetails";

export default function Details() {
  const { id } = useParams();
  const [platform, setPlatform] = useState();
  const token = window.localStorage.getItem("token");
  const [loading, setLoading] = useState(true);
  const { open, handleClose, handleOpen } = useModal();

  useEffect(() => {
    async function getPlatformsById() {
      const response = await fetchPlatformById(token, id);
      setPlatform(response.data);
      setLoading(false);
    }
    getPlatformsById();
  }, []);
  if (loading)
    return (
      <div>
        <CircularProgress />
      </div>
    );
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={3}>
        <Card
          sx={{
            mt: 5,
          }}
          style={{
            backgroundColor: "#B0BFC6",
            padding: "1rem",
          }}
        >
          <Typography textAlign="center" color="#465A65" sx={{ fontSize: 20 }}>
            {platform.name}
          </Typography>
          <CardContent>
            <CardMedia
              sx={{ height: 200, marginBottom: 1 }}
              image={platform.img}
              title={platform.name}
            />
            <Typography textAlign="center" color="white">
              {platform.fleet}
            </Typography>

            <TableDetails platform={platform} />
          </CardContent>
          <Button
            onClick={handleOpen}
            variant="outlined"
            sx={{ marginTop: 1 }}
            color="success"
            style={{ color: "#000" }}
          >
            Ver más
          </Button>
          <ModalDetails
            open={open}
            handleClose={handleClose}
            url={platform.lastReport}
          />
        </Card>
      </Grid>
    </Grid>
  );
}
