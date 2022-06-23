import axios from "axios";

const getPopularMovies=async()=>{
    const resp=await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=c8ea63bfce390916dfddd17da14a9ee8`)
     return resp?.data?.results;
  }


const getUpcomingMovies=async()=>{
    const resp=await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=c8ea63bfce390916dfddd17da14a9ee8&language=en-US&page=1`)
    return resp?.data?.results;
}

const getPopularTv=async()=>{
    const resp=await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=c8ea63bfce390916dfddd17da14a9ee8&language=en-US&page=1`)
    return resp?.data?.results;
}

const getFamilyMovies=async()=>{
    const resp=await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=c8ea63bfce390916dfddd17da14a9ee8&with_genres=10751`)
    return resp?.data?.results;
}

const getDetails=async(movie_id)=>{
    const resp=await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=c8ea63bfce390916dfddd17da14a9ee8&language=en-US`)
    return resp?.data;
}

export {getPopularMovies, getUpcomingMovies, getPopularTv, getFamilyMovies, getDetails};

