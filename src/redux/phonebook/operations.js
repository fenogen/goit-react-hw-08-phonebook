import axios from 'axios';
import {
  actGetList,
  actGetListError,
  actGetListRequest,
  actAddItem,
  actAddItemError,
  actAddItemRequest,
  actDeleteItem,
  actDeleteItemError,
  actDeleteItemRequest,
  actFilterList,
  actFilterListError,
  actFilterListRequest,
} from './actions';

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com/"


// -------------------> Автоматически записали наш токен
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  }
}

const getAllContacts  = () => (dispatch, getState) => {
  // const { token: persistedReducer } = getState();
  const savedToken = getState().token

  // -------------------> Проверили есть ли токен в localstorage
  if (!savedToken) {
    return
  }
  token.set(savedToken)

  dispatch(actGetListRequest());
  axios
    .get('/contacts')
    .then(responce => dispatch(actGetList(responce.data)))
    .catch(error => dispatch(actGetListError(error)));
};


// const getAllContacts = () => dispatch => {
//   token.set()
//   dispatch(actGetListRequest());
//   axios
//     .get('/contacts')
//     .then(responce => dispatch(actGetList(responce.data)))
//     .catch(error => dispatch(actGetListError(error)));
// };


// const getAllContacts = () => dispatch => {
//   dispatch(actGetListRequest());
//   axios
//     .get('/contacts')
//     .then(responce => dispatch(actGetList(responce.data)))
//     .catch(error => dispatch(actGetListError(error)));
// };

const addContact = contact => dispatch => {
  dispatch(actAddItemRequest());
  axios
    .post('http://localhost:4040/contacts', contact)
    .then(responce => dispatch(actAddItem(responce.data)))
    .catch(error => dispatch(actAddItemError(error)));
};

const deleteContact = id => dispatch => {
  dispatch(actDeleteItemRequest());
  axios
    .delete(`http://localhost:4040/contacts/${id}`)
    .then(responce => dispatch(actDeleteItem(id)))
    .catch(error => dispatch(actDeleteItemError(error)));
};

const searchContact = name => dispatch => {
    dispatch(actFilterListRequest());
    axios
    .get(`http://localhost:4040/contacts?q=${name}`)
    .then(responce => dispatch(actFilterList(name)))
    .catch(error => dispatch(actFilterListError(error)));
};

export { getAllContacts, addContact, deleteContact, searchContact};
