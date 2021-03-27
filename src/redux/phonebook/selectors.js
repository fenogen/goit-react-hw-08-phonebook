import { createSelector } from "reselect";


const selAuthorization = state => state.isAuthorized;
// const selToken = state => state.user.token;
const selUser = state => state.user;

const selContacts = state => state.contacts;
const selFilterValue = state => state.filterValue;
const selLoadingStatus = state => state.loading;

// ----------------------------------------Для правильного рендера отфильтрованного списка
// const selRenderFilter = state => {
//   const filterValue = selFilterValue(state);
//   const contacts = selContacts(state);
//   const normalizeValue = filterValue.toLowerCase();
//   const findContact = contacts.filter(item =>
//     item.name.toLowerCase().includes(normalizeValue),
//   );
//   return findContact;
// };

// -------------> Мемоизированный селектор
const selRenderFilter = createSelector(
  [selContacts, selFilterValue], (contacts, filter) => {
  const normalizeValue = filter.toLowerCase();
  const findContact = contacts.filter(item =>
    item.name.toLowerCase().includes(normalizeValue),
  );
  return findContact;
}
)



export { selAuthorization, selUser, selContacts, selFilterValue, selLoadingStatus, selRenderFilter };
