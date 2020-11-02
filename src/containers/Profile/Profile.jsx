import React from 'react'
// import { Redirect } from 'react-router-dom'
import NewAppointment from '../NewAppointment/NewAppointment'

const Profile = ({ user }) => {
    return (
        <div className="profile">
            <h1>Área del cliente</h1>
            {/*<h1>{user.email}</h1>*/}
            <NewAppointment user={user}/>
        </div>
    )
}

export default Profile;