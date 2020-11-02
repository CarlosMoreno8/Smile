import React from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom'
import './Login.scss';
// const Login = (props) => {
    
const Login = ({setUser}) => {
    const history = useHistory();
    const handleSubmit = event =>{
        event.preventDefault(); // para evitar refrescar la página
        const body ={
            email:event.target.email.value,
            password:event.target.password.value
        };
        axios.post(process.env.REACT_APP_BASE_URL+'/client/login',body)
        .then(res=>{
        // props.setUser(res.data.user) //seteo el user como estado del App.js
            setUser(res.data) //seteo el user como estado del App.js
            localStorage.setItem('authToken',res.data.token);
            localStorage.setItem('user',JSON.stringify(res.data))
            setTimeout(() => {
                history.push('/profile')
            }, 1500);
        })
        .catch(error=>console.log(error))
    }
    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <input type="email" name="email" required placeholder="Introduce tu email" />
            <input type="password" name="password" required placeholder="Introduce tu contraseña"/>
            <button type="submit">Log in</button>
        </form>
    )
}

export default Login;