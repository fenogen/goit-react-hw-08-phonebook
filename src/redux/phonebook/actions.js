import { createAction } from '@reduxjs/toolkit';


// ------------------------------------------------------> REGISTER User

const actRegister = createAction('phonebook/Register/SUCCSESS');
const actRegisterError = createAction('phonebook/Register/ERROR');
const actRegisterRequest = createAction('phonebook/Register/REQUEST');

// ------------------------------------------------------> GET Collection State

const actGetList = createAction('phonebook/list_get/SUCCSESS');
const actGetListError = createAction('phonebook/list_get/ERROR');
const actGetListRequest = createAction('phonebook/list_get/REQUEST');

// ------------------------------------------------------> Add Collection State

const actAddItem = createAction('phonebook/item_create/SUCCSESS');
const actAddItemError = createAction('phonebook/item_create/ERROR');
const actAddItemRequest = createAction('phonebook/item_create/REQUEST');

// ------------------------------------------------------> Delete Collection State

const actDeleteItem = createAction('phonebook/item_delete/SUCCSESS');
const actDeleteItemError = createAction('phonebook/item_delete/ERROR');
const actDeleteItemRequest = createAction('phonebook/item_delete/REQUEST');

// ------------------------------------------------------> Filter Collection State

const actFilterList = createAction('phonebook/filter/SUCCSESS');
const actFilterListError = createAction('phonebook/filter/ERROR');
const actFilterListRequest = createAction('phonebook/filter/REQUEST');

export {
  actRegister,
  actRegisterError,
  actRegisterRequest,
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
};
