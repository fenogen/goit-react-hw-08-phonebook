import React from 'react';

import style from './../../components/Phonebook/Form/Form.module.css';
import './../../App.css';

export default function RegisterPage() {
  return (
      <div className="container">
      <h3 className={style.form__title}>Registration</h3>
      <form className={style.newForm} autoComplete="off" onSubmit="">
        <input
          className={style.newForm__name}
          required
          type="text"
          name="name"
          placeholder="Name"
          value="" // для обнуления в инпуте
          onChange=""
        />
        <input
          className={style.newForm__name}
          required
          type="email"
          name="email"
          placeholder="Email"
          value="" // для обнуления в инпуте
          onChange=""
        />
        <input
          className={style.newForm__name}
          required
          type="password"
          name="pass"
          placeholder="Password"
          value="" // для обнуления в инпуте
          onChange=""
        />
        <label for="agreement">I agree with the license conditions</label>
        <input
          className={style.newForm__name}
          id="agreement"
          required
          type="checkbox"
          name="agrement"
          value="music"
          onChange=""
        ></input>

        <button className={style.newForm__submit} type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
