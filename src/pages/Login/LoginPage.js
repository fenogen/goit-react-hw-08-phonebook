import React from 'react';

import style from './../../components/Phonebook/Form/Form.module.css';
import './../../App.css';

export default function LoginPage() {
  return (
    <div className="container">
      <h3 className={style.form__title}>Login</h3>
          <form className={style.newForm} autoComplete="off"
            //   onSubmit=""
          >
        <input
          className={style.newForm__name}
          required
          type="email"
          name="email"
          placeholder="Please enter email"
          value="" // для обнуления в инпуте
        //   onChange=""
        />
        <input
          className={style.newForm__name}
          required
          type="password"
          name="pass"
          placeholder="Please enter password"
          value="" // для обнуления в инпуте
        //   onChange=""
        />
        <button className={style.newForm__submit} type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
