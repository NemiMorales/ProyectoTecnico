import { Box, Grid, Pagination, Typography } from "@mui/material";
import { fetchPlatform } from "../api/fetchData";
import React, { useEffect, useState } from "react";
import CardDashboard from "../components/CardDashboard";

export default function Dashboard() {
  const [platforms, setPlatforms] = useState();
  const token = window.localStorage.getItem("token");

  useEffect(() => {
    async function getPlatforms() {
      const response = await fetchPlatform(token);
      setPlatforms(response);
      if (platforms === null) setIsAuthenticated(false);
    }
    getPlatforms();
  }, []);
  console.log(platforms);

  const changePage = async (event, page) => {
    const response = await fetch(
      `https://devtest.a2g.io/api/Platforms?pageNumber=${page}`,
      {
        headers: { Authorization: "Bearer " + token },
      }
    );

    const platformList = await response.json();
    setPlatforms(platformList);
  };
  return (
    <>
      <p>Autentificar para visualizar datos</p>
      <Grid container spacing={3}>
        {platforms?.data?.map((platform) => (
          <Grid item xs={3} key={platform.id}>
            <CardDashboard platform={platform} />
          </Grid>
        ))}
      </Grid>
      <Box component="div" sx={{ margin: "0 auto" }}>
        <Pagination
          count={platforms?.totalPages}
          sx={{ margin: "2%" }}
          onChange={changePage}
        />
      </Box>
    </>
  );
}
