import React, { Component } from 'react';

import style from './../../components/Phonebook/Form/Form.module.css';
import './../../App.css';
import { connect } from 'react-redux';

import {loginUser} from './../../api/operation-register'

class LoginPage extends Component {

  defaultState = {
    email: '',
    password: '',
  };

  state = {
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

  // ----------------------------> Ф-я отправки данных
  fnSubmit = event => {
    //----------------------> Сбросили перезагрузку страницы
    event.preventDefault();
    this.props.disFnLogin(this.state)
    this.setState({ ...this.defaultState }); //---> сбросили значение в Инпуте
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <h3 className={style.form__title}>Login</h3>
        <form className={style.newForm} autoComplete="off"
          onSubmit={this.fnSubmit}
        >
          <input
            className={style.newForm__name}
            required
            type="email"
            name="email"
            placeholder="Please enter email"
            value={this.state.email} // для обнуления в инпуте
            onChange={this.fnInputTarget}
          />
          <input
            className={style.newForm__name}
            required
            type="password"
            name="password"
            placeholder="Please enter password"
            value={this.state.password} // для обнуления в инпуте
            onChange={this.fnInputTarget}
          />
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
  disFnLogin: value => dispatch(loginUser(value)),
})


export default connect(null, mapDispatchToProps)(LoginPage)
