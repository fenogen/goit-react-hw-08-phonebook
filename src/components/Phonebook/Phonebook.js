import React from "react";
import Form from "./Form/Form";
import Filter from './Filter/Filter'
import ContactList from './ContactList/ContactList'
import style from "./Phonebook.module.css";

const Phonebook = () => {
  // console.log('Phonebook')

    return (
      <div className={style.list}>
        <h1 className={style.list__title}>Phonebook with Redux</h1>
        <Form />
        <Filter />
        <ContactList />
      </div>
    )
  }


export default Phonebook;