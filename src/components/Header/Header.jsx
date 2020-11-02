import axios from 'axios';
import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import './Header.scss';

// const Header = (props) => {
const Header = ({ user, setUser }) => {
    const history = useHistory();
    const logout = async () => {
        try {
            const token = user.token;
            const options = { headers: { Authorization: `Bearer ${token}`}};
            console.log(user.token, options)
            const res = await axios.get(process.env.REACT_APP_BASE_URL + '/client/logout', options)
            console.log(res.data)
            // props.setUser(null)
            localStorage.clear();
            setUser(null)
            history.push('/')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <header className="header">

            {/* {props.user ? */}
            {user ?
                <div className="loggedIn">
                    <Link to="/appointments">Citas</Link>
                    <Link to="/profile">{user.email} - {user.role}</Link>
                    <span className="logout" onClick={logout}>Logout</span>
                </div> :
                <div className="notLoggedIn">
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Registro</Link>
                </div>}

        </header>
    )
}
export default Header;