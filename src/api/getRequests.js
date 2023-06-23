import axios from "axios";

const token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZjgzODcwZjQ5OTgxNzkyN2NkOGMyYWRmZTEwMjM3ZiIsInN1YiI6IjY0OGNhMDgxMjYzNDYyMDBjYTE5NjI0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eCkLHB-y1-oYgJbmYIOsB3GW4Apt28-kqDeGuHMrcOI'

export const getTop20 = () => {
    const url = 'https://api.themoviedb.org/3/discover/movie'
    const options = {
        method: 'GET',
        url: url,
        params: {
          include_adult: 'false',
          include_video: 'false',
          language: 'en-US',
          page: '1',
          sort_by: 'popularity.desc'
        },
        headers: {
          accept: 'application/json',
          Authorization: token
        }
      };

    const response = axios.request(options)
    return response
}

export const getQuery = (query) => {
    const url = 'https://api.themoviedb.org/3/search/movie'
    const options = {
        method: 'GET',
        url: url,
        params: {
          query: `${query}`,
          include_adult: 'false',
          include_video: 'false',
          language: 'en-US',
          page: '1',
        },
        headers: {
          accept: 'application/json',
          Authorization: token
        }
      };

    const response = axios.request(options)
    return response
}

export const getDetails = (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}`
    const options = {
        method: 'GET',
        url: url,
        params: {language: 'en-US'},
        headers: {
          accept: 'application/json',
          Authorization: token
        }
      };
      const response = axios.request(options)
      return response
}

export const getImages = (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/images`
    const options = {
        method: 'GET',
        url: url,
        params: {language: 'en,null'},
        headers: {
            accept: 'application/json',
            Authorization: token
          }
    };
    const response = axios.request(options)
    return response
}

export const getVideos = (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos`
    const options = {
        method: 'GET',
        url: url,
        params: {language: 'en-US'},
        headers: {
          accept: 'application/json',
          Authorization: token
        }
      };
      const response = axios.request(options)
      return response
}

export const getCredits = (movieId) => {
    const url= `https://api.themoviedb.org/3/movie/${movieId}/credits`
    const options = {
        method: 'GET',
        url: url,
        params: {language: 'en-US'},
        headers: {
          accept: 'application/json',
          Authorization: token, 
        }
      };
      const response = axios.request(options)
      return response   
}

export const getRecommendations = (movieId) => {
const url = `https://api.themoviedb.org/3/movie/${movieId}/recommendations`
const options = {
    method: 'GET',
    url: url,
    params: {language: 'en-US', page: '1'},
    headers: {
      accept: 'application/json',
      Authorization: token, 
    }
  };
  const response = axios.request(options)
  return response
}
  