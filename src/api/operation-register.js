import axios from 'axios'

import {
          actRegister,
    actRegisterError,
    actRegisterRequest,
} from './../redux/phonebook/actions'

const API = {
    key:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDVkOTc1Yjg4ZjYxOTAwMTc0OTQxOTIiLCJpYXQiOjE2MTY3NDYzMzF9.uDe-BK2w7dOZBx68P1yv_rhhuUv1hTsjXefag-Tjv2c',
    name: 'red',
    email: "2@red.com",
    page: 1,
    onPage: 12,
    search: 'winter',
}

// token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDVkYjE5NDg4ZjYxOTAwMTc0OTQxZjMiLCJpYXQiOjE2MTY3NTMwNDR9.AfRGaj3IDabZqHG3qQsmcT3yeJwmopJG9LpEAfj0-RE"
// user: {name: "red", email: "5@red.com"}
// token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDVkYjI5ZDg4ZjYxOTAwMTc0OTQxZjgiLCJpYXQiOjE2MTY3NTMzMDl9.wkfWLm0NLmhVNkD-aCUJi4mwwYuqT2Q1E4f65pIF-hA"
// user: {name: "red", email: "7@red.com"}
// token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDVkYjU3Zjg4ZjYxOTAwMTc0OTQxZmYiLCJpYXQiOjE2MTY3NTQwNDd9.NWIlfeGOYMM6sU5nTE3--p4wMSKlf90qF2FRegMUhTw"
// user: {name: "red", email: "12@red.com"}

// user: {name: "red", email: "22@red.com"}
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDVkZTRjNjg4ZjYxOTAwMTc0OTQyNzUiLCJpYXQiOjE2MTY3NjYxNTB9.A2rNwZAncUUEEhWftc3JvJEzjDDoiPbfrs-6N6zDn9w


// const registerUser = (page, search) => {
    
//     return axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API.key}`).then(responce => responce.data.results);

// }

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com/"


const registerUser = (newUser) => dispatch => {
  dispatch(actRegisterRequest());
  axios
    .post('/users/signup', newUser)
    .then(responce => dispatch(actRegister(responce.data)))
    .catch(error => dispatch(actRegisterError(error)));
};

export { registerUser };



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
