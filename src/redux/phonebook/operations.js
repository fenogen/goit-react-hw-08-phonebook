import axios from 'axios';
import {
    actLogout,
    actLogoutError,
  actLogoutRequest,
      actCurrentUser,
  actCurrentUserError,
  actCurrentUserRequest,
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

// -------------------------------------> Logout

const logout = () => (dispatch) => {

  dispatch(actLogoutRequest());
  axios
    .post('/users/logout')
    .then(responce => {
      token.unset()
      return dispatch(actLogout())
})
    .catch(error => dispatch(actLogoutError(error)));
};

// -------------------------------------> Current User (??????????)

// const getCurrentUser = () => dispatch => {
//   dispatch(actCurrentUserRequest());
//   axios
//     .get('/users/current')
//     .then(responce => dispatch(actCurrentUser(responce.data)))
//     .catch(error => dispatch(actCurrentUserError(error)));
// };


// -------------------------------------> All Contacts

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
//   dispatch(actGetListRequest());
//   axios
//     .get('/contacts')
//     .then(responce => dispatch(actGetList(responce.data)))
//     .catch(error => dispatch(actGetListError(error)));
// };

// -------------------------------------> Add Contact

const addContact = contact => dispatch => {
  dispatch(actAddItemRequest());
  axios
    .post('/contacts', contact)
    .then(responce => dispatch(actAddItem(responce.data)))
    .catch(error => dispatch(actAddItemError(error)));
};

// -------------------------------------> Delete Contact
const deleteContact = id => dispatch => {
  dispatch(actDeleteItemRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(responce => dispatch(actDeleteItem(id)))
    .catch(error => dispatch(actDeleteItemError(error)));
};

// -------------------------------------> Search Contact
const searchContact = name => dispatch => {
    dispatch(actFilterListRequest());
    axios
    .get(`/contacts?q=${name}`)
    .then(responce => dispatch(actFilterList(name)))
    .catch(error => dispatch(actFilterListError(error)));
};

export { logout, getAllContacts, addContact, deleteContact, searchContact};
