import { HandymanOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Pagination,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CardDashboard({ platform }) {
  const navigate = useNavigate();
  const handleButtonClick = (id) => {
    navigate(`/details/${id}`);
  };
  return (
    <Card
      sx={{
        mt: 5,
      }}
      style={{
        backgroundColor: "#607D8B",
        padding: "1rem",
      }}
    >
      <Typography textAlign="center" color="white" sx={{ fontSize: 20 }}>
        {platform.name}
      </Typography>
      <CardContent>
        <CardMedia
          sx={{ height: 140, marginBottom: 1 }}
          image={platform.img}
          title={platform.name}
        />
        <Typography textAlign="center" color="white">
          {platform.fleet}
        </Typography>

        <Button
          variant="outlined"
          sx={{ marginTop: 1 }}
          color="success"
          style={{ color: "#B0BFC6" }}
          onClick={() => handleButtonClick(platform.id)}
        >
          Ver más
        </Button>
      </CardContent>
    </Card>
  );
}
