import axios from "axios"

const keyAPI = "0242759da9cb2741c4743a7ac9203a9c";

const SearchMovies = (title) => {
    const URL =`https://api.themoviedb.org/3/search/movie?api_key=${keyAPI}&query=${title}&language=en-US`
    return axios.get(URL)
}

const SearchMoviesBasedOnActors = (actor) =>{
    const URL = `https://api.themoviedb.org/3/search/person?api_key=${keyAPI}&query=${actor}&language=en-US`
    return axios.get(URL)
}


export {SearchMovies, SearchMoviesBasedOnActors}