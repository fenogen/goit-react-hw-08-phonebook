import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { loginUser } from './../../api/operation-register';
import { selLoadingStatus } from './../../redux/phonebook/selectors';

import style from './../../components/Phonebook/Form/Form.module.css';
import './../../App.css';

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
    this.props.disFnLogin(this.state);
    this.setState({ ...this.defaultState }); //---> сбросили значение в Инпуте
  };

  render() {
    return (
      <div className="container">
        <h2 className={style.form__title}>Login</h2>
        <form
          className={style.newForm}
          autoComplete="off"
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
        {/* ----------------------------Loader------------------------------- */}
        <div
          style={{
            position: 'relative',
            width: '100%',
          }}
        >
          {this.props.loading && (
            <Loader
              type="ThreeDots"
              color=" #fff"
              height={75}
              width={75}
              style={{
                position: 'absolute',
                top: '0',
                left: '50%',
                transform: 'translate(-50%)',
              }}
            />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: selLoadingStatus(state),
});

const mapDispatchToProps = dispatch => ({
  disFnLogin: value => dispatch(loginUser(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
