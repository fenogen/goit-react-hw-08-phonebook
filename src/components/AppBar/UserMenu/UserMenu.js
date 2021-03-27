import React from 'react'
import { connect } from 'react-redux'

import { selCurrentUser } from './../../../redux/phonebook/selectors';

function UserMenu({currentUser}) {
    return (
        <div>
            <img />
            <p>Name: { currentUser.name}</p>
            <p>Email: { currentUser.email}</p>
        </div>
    )
}

const mapStateToProps = (state) => ({
    currentUser: selCurrentUser(state)
})



export default connect(mapStateToProps)(UserMenu)

