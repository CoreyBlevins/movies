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
    const search = query
    const options = {
        method: 'GET',
        url: url,
        params: {
          query: search,
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