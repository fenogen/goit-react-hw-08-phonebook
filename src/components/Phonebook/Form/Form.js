import React, { Component } from 'react';
import { connect } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';
import style from './Form.module.css';

import { getAllContacts, addContact } from '../../../redux/phonebook/operations';
import { selContacts, selToken, selAuthorization} from '../../../redux/phonebook/selectors';


class Form extends Component {
  //------------------------------> Для сбрасывания значений в инпуте

  defaultState = {
    name: '',
    number: '',
  };

  state = {
    name: '',
    number: '',
  };

  // componentDidMount() {
  //   if (this.props.isAuthorized) {
  //     this.props.disGetAllContacts()
  //   }
  //   // console.log(`консолю токен ${this.props.token}`)
  // }

  // ----------------------------> Ф-я записи значений инпута в State

  fnInputTarget = event => {
    const input = event.target;
    const value = input.value;
    const name = input.name;

    this.setState({
      [name]: value,
    });
  };

  // -------------------------> Ф-я отправки одного контакта:
  fnSubmit = event => {
    //----------------------> Сбросили перезагрузку страницы
    event.preventDefault();
    //-----------------------> Добавляем контакт по условию:
    const arrayOfContacts = this.props.contacts;
    const arrayOfNames = arrayOfContacts.map(item => item.name.toLowerCase());

    if (!arrayOfNames.includes(this.state.name.toLowerCase())) {
      this.props.disFnSubmit(this.state)
      this.setState({ ...this.defaultState }); //---> сбросили значение в Инпуте
    }

    else {
      alert(`Имя ${this.state.name} уже есть в контактах`);
    }
  };

  render() {
    // console.log('Form')
    return (
      <form className={style.newForm} autoComplete="off" onSubmit={this.fnSubmit}>
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
          type="number"
          name="number"
          placeholder="Number"
          value={this.state.number} // для обнуления в инпуте
          onChange={this.fnInputTarget}
        />
        <button className={style.newForm__submit} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  contacts: selContacts(state),
  isAuthorized: selAuthorization(state),
  // token: selToken(state),
});

const mapDispatchToProps = dispatch => ({
  disFnSubmit: value => dispatch(addContact(value)),
  disGetAllContacts: () => dispatch(getAllContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);



// =======================================================================================
//--------------------------------------> Отдельными ф-ями
//   titleInputHeader = ({target}) => {             // Пример с деструктуризацией
//     const {value} = target;
//     // const value = input.value;
//     this.setState({
//       tatle: value
//     })
//   }

//   authorInputHeader = (e) => {                  // Пример без деструктуризацией
//   const input = e.target;
//   const value = input.value;
//   this.setState({
//     author: value
//   })
// }

// inputHeandler = ({target}) => {
//   // const input = e.target;
//   // const value = input.value;
//   // const name = input.name;
//   const {value, name, type} = target
//   this.setState({
//     [name]: type === "checkbox" ? !this.state.agree : value,
//   });
// }