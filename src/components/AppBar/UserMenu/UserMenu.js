import React from 'react'
import { connect } from 'react-redux'

import { selUser, selAuthorization } from './../../../redux/phonebook/selectors';

function UserMenu({ user, isAuthorized}) {
    if (isAuthorized) {
        return (
            <div>
                <img alt=''/>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: selUser(state),
    isAuthorized: selAuthorization(state),

})



export default connect(mapStateToProps)(UserMenu)

