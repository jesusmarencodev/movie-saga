import { createSlice } from '@reduxjs/toolkit';


const movieSlice = createSlice({
    name:'movie',
    initialState:{
        moviesList:[],
        movie:{}
    },
    reducers:{
        getMovies(name){
            return name
        },
        setMovies:(state, action)=>{
            state.moviesList = {...state.moviesList, ...action.payload}
        },
        getOneMovie(id){
            return id;
        },
        setOneMovie:(state, action)=>{

            state.movie=action.payload;
        }

    }
});

export const {getMovies, setMovies, getOneMovie, setOneMovie} = movieSlice.actions


export default movieSlice.reducer;