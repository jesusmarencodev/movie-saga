import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MoviestList = () => {
  const { moviesList } = useSelector((state) => ({ ...state.movie }));
  return (
    <>
      <Grid sx={{ flexGrow: 1 }} container>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={3}>
            {moviesList?.Search?.map((m) => (
              <Grid key={m.imdbID} item>
                <Card sx={{ maxWidth: "350" }}>
                  <Link to={`/movie/${m.imdbID}`}>
                    <CardMedia
                      component="img"
                      height="350"
                      image={m.Poster}
                      alt={m.Title}
                    />
                    <CardContent>
                      <Typography variant="body2" color="text.primary">
                        {m.Title}
                      </Typography>
                      <Typography variant="body2" color="text.primary">
                        {m.Year}
                      </Typography>
                    </CardContent>
                  </Link>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default MoviestList;
