// import axios from 'axios'

// const API = {
//     key:'',
//     page: 1,
//     onPage: 12,
//     search: 'winter',
// }

// const getList = (page, search) => {
    
//     return axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API.key}`).then(responce => responce.data.results);

// }

// const getListSearch = (page, search) => {
    
//     return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API.key}&language=en-US&page=${page}&include_adult=false&query=${search}`).then(responce => responce.data.results);

// }


// const getItemActors = (id) => {
    
//     return axios.get(` https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API.key}&language=en-US`).then(responce => responce.data.cast);
// }


// export { getList, getListSearch, getItemActors, }
