import React from 'react';
import { Link } from 'react-router-dom'
import './Header.scss';

// const Header = (props) => {
    const Header = ({user,setUser}) => {
    const logout = () => {
        localStorage.clear();
        // props.setUser(null)
        setUser(null)
    }
    return (
        <header className="header">
            <Link to="/">Home</Link>
            {/* {props.user ? */}
            {user ?
                <div className="loggedIn">
                { ['admin'].includes(user.role) &&<Link to="/users">users</Link> }
                {/* {['doctores','becarios'].includes(user.role) &&<Link to="/pacientes">pacientes</Link> } */}
                    <Link to="/profile">{user.email} - {user.role}</Link>
                    <span className="logout" onClick={logout}>Logout</span>
                </div> :
                <div className="notLoggedIn">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Registro</Link>
                </div>}

        </header>
    )
}
export default Header;