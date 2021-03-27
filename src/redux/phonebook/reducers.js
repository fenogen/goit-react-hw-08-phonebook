import { createReducer } from '@reduxjs/toolkit';

import {
  actRegister,
  actRegisterError,
  actRegisterRequest,
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

// --------------------------------------------------> Authorization-Token
const authorizationReducer = createReducer(false, {
  [actRegister]: () => true,
  [actRegisterError]: () => false,

  [actGetList]: () => true,
  [actGetListError]: () => false,
}
)

// const initialUser = [
//   { token: "" },
// ]

// --------------------------------------------------> State - User
const userReducer = createReducer(null, {
  [actRegister]: (state, action) => action.payload.user
}
)

const userReducerCurrent = createReducer(null, {
  [actCurrentUser]: (state, action) => action.payload
}
)

const tokenReducer = createReducer(null, {
  [actRegister]: (state, action) => action.payload.token
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
  }
}
)


// --------------------------------------------------> State - filter

const filterReducer = createReducer('', {
  [actFilterList]: (state, action) => action.payload
  }
)

export { tokenReducer, userReducer, userReducerCurrent, authorizationReducer, collectionReducer, filterReducer, loadingReducer};
