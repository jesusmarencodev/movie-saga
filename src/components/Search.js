import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../redux/feature/movieReducer";
import { TextField } from "@mui/material";

const Search = () => {
  const [name, setName] = useState("spider");
  const dispatch = useDispatch();
  const { moviesList:{Error:error} } = useSelector((state)=>({...state.movie}));

  useEffect(() => {
    dispatch(getMovies(name));
  }, [name, dispatch]);

  return (
    <>
      <h2 className="search__title">Movie search App</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {error && <p className="error">{error}</p>}
    </>
  );
};

export default Search;
