import axios from "axios";

const getPopularMovies=async()=>{
    const resp=await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=c8ea63bfce390916dfddd17da14a9ee8`)
     return resp?.data?.results;
  }

export {getPopularMovies};