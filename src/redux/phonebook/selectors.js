import { createSelector } from "reselect";

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



export { selContacts, selFilterValue, selLoadingStatus, selRenderFilter };
