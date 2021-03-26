import React from 'react';
import { connect } from 'react-redux';
import ContactList from '../../components/Phonebook/ContactList/ContactList';
import Filter from '../../components/Phonebook/Filter/Filter';
import Phonebook from '../../components/Phonebook/Phonebook';

// import { selAuthorization } from './../../redux/phonebook/selectors';

export default function ContactsPage() {
    return (
        <div className="container">
            <Phonebook/>
        </div>
    )
}

// const mapStateToProps = state => ({
//   isAuthorized: selAuthorization(state),
// });

// export default connect(mapStateToProps)(ContactsPage);
