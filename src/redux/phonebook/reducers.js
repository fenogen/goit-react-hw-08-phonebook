import { createReducer } from '@reduxjs/toolkit';

import {
  actRegister,
  actRegisterError,
  actRegisterRequest,
  actLogin,
  actLoginError,
  actLoginRequest,
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

//----------------------------------------------------> Если без Redux-Toolkit
// import { CREATE, DELETE, FILTER} from './types';

// const test = {
//   id: 1111,
//   name: 'Alex',
//   number: 222,
// };


// --------------------------------------------------> Loading
const loadingReducer = createReducer(false, {
  [actGetListRequest]: () => true,
  [actGetList]: () => false,
  [actGetListError]: () => false,

  [actAddItemRequest]: () => true,
  [actAddItem]: () => false,
  [actAddItemError]: () => false,

  [actDeleteItemRequest]: () => true,
  [actDeleteItem]: () => false,
  [actDeleteItemError]: () => false,

  [actFilterListRequest]: () => true,
  [actFilterList]: () => false,
  [actFilterListError]: () => false,
}
)

// --------------------------------------------------> Authorization status
const authorizationReducer = createReducer(false, {
  [actRegister]: () => true,
  [actRegisterError]: () => false,

  [actLogin]: () => true,
  [actLoginError]: () => false,

  [actLogout]: () => false,
  [actLogoutError]: () => true,

  // [actGetList]: () => true,
  // [actGetListError]: () => false,
}
)

const initialUser = {
  name: null,
  email: null
}

// --------------------------------------------------> State - User
const userReducer = createReducer(initialUser, {
  [actRegister]: (state, action) => action.payload.user,

  [actLogin]: (state, action) => action.payload.user,

  [actLogout]: (state, action) => initialUser
}
)


// const userReducerCurrent = createReducer(null, {
//   [actCurrentUser]: (state, action) => action.payload,
//   [actLogin]: (state, action) => action.payload
// }
// )

const tokenReducer = createReducer(null, {
  [actRegister]: (state, action) => action.payload.token,
  [actLogin]: (state, action) => action.payload.token,
  [actLogout]: (state, action) => null
}
)
// const userReducer = createReducer(null, {
//   [actRegister]: (state, action) => action.payload
// }
// )

// --------------------------------------------------> State - Authorization

// --------------------------------------------------> State - Collection

const collectionReducer = createReducer([], {
  [actGetList]: (state, action) => [...state, ...action.payload],
  [actAddItem]: (state, action) => [...state, action.payload],
  [actDeleteItem]: (state, action) => {
    const newStateContacts = state.filter(item => item.id !== action.payload);
    return newStateContacts;
  },
  [actLogout]: (state, action) => [],
}
)


// --------------------------------------------------> State - filter

const filterReducer = createReducer('', {
  [actFilterList]: (state, action) => action.payload
  }
)

export { tokenReducer, userReducer, authorizationReducer, collectionReducer, filterReducer, loadingReducer};
