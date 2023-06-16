import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getOneMovie } from "../redux/feature/movieReducer";
import { Button, Typography } from "@mui/material";

const OneMovie = () => {
  const { movie } = useSelector((state) => ({ ...state.movie }));
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) dispatch(getOneMovie(id));
  }, [id, dispatch]);

  return (
    <section>
      <img src={movie.Poster} alt={movie.Title} />
      <div>
        <Typography align="left" variant="h3" gutterBottom component="h2">
          {movie.Title}
        </Typography>
        <Typography align="left" variant="h5" gutterBottom component="h5">
          Year:{movie.Year}
        </Typography>
        <Typography align="left" variant="body1" gutterBottom component="p">
          {movie.Plot}
        </Typography>
        <Typography align="left" variant="h6" gutterBottom component="h6">
          Director:{movie.Director}
        </Typography>
        <Button variant="contained" onClick={() => navigate("/")}>
          Go Back
        </Button>
      </div>
    </section>
  );
};

export default OneMovie;
