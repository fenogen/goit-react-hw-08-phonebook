import React, { Component } from 'react';
import { connect } from 'react-redux';

import {registerUser } from './../../api/operation-register'

import style from './../../components/Phonebook/Form/Form.module.css';
import './../../App.css';

class RegisterPage extends Component {
  defaultState = {
    name: '',
    email: '',
    password: '',
    // agreement: false,
  };

  state = {
    name: '',
    email: '',
    password: '',
  };

  // ----------------------------> Ф-я записи значений инпута в State

  fnInputTarget = event => {
    const input = event.target;
    const value = input.value;
    const name = input.name;

    this.setState({
      [name]: value,
    });
    };
    
  // ----------------------------> Ф-я записи значений chekbox в State
  //    fnTargetCheckbox = event => {
  //        this.setState({ agreement: event.target.checked })
  //     }

  // ----------------------------> Ф-я отправки регистрации
  fnSubmit = event => {
    //----------------------> Сбросили перезагрузку страницы
    event.preventDefault();
    //   this.props.disFnSubmit(this.state)
    this.setState({ ...this.defaultState }); //---> сбросили значение в Инпуте
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <h3 className={style.form__title}>Registration</h3>
        <form
          className={style.newForm}
          autoComplete="off"
          onSubmit={this.fnSubmit}
        >
          <input
            className={style.newForm__name}
            required
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name} // для обнуления в инпуте
            onChange={this.fnInputTarget}
          />
          <input
            className={style.newForm__name}
            required
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email} // для обнуления в инпуте
            onChange={this.fnInputTarget}
          />
          <input
            className={style.newForm__name}
            required
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password} // для обнуления в инпуте
            onChange={this.fnInputTarget}
          />
          <label htmlFor="agreement">I agree with the license conditions</label>
          <input
            className={style.newForm__name}
            id="agreement"
            required
            type="checkbox"
            name="agreement"
            value={this.state.agreement}
            // onChange={this.fnTargetCheckbox}
          ></input>

          <button className={style.newForm__submit} type="submit">
            Send
          </button>
        </form>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
    
// })

const mapDispatchToProps = dispatch => ({
  disFnRegister: value => dispatch(registerUser(value)),
})


export default connect(null, mapDispatchToProps)(RegisterPage)
