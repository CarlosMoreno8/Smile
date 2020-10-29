import React from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom'
import './Register.scss';

const Register = ({setUser}) => {
    const history = useHistory();
    const handleSubmit = event =>{
        event.preventDefault(); // para evitar refrescar la página
        const body ={
            clientname:event.target.clientname.value,
            surname:event.target.surname.value,
            phone:event.target.phone.value,
            email:event.target.email.value,
            password:event.target.password.value
        };
        axios.post(process.env.REACT_APP_BASE_URL+'/client/register',body)
        .then(res=>{
        // props.setUser(res.data.user) //seteo el user como estado del App.js
        //setUser(res.data) //seteo el user como estado del App.js
        //localStorage.setItem('authToken',res.data.token);
        //localStorage.setItem('user',JSON.stringify(res.data))
        //notification.success({message:'Bienvenide',description:'Bienvenide '+user.email})
            setTimeout(() => {
                history.push('/')
            }, 1500);
        })
        .catch(error=>console.log(error))
    }
    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <input type="text" name="clientname" required placeholder="Introduce tu nombre" />
            <input type="text" name="surname" required placeholder="Introduce tu apellido" />
            <input type='text' name="phone" required placeholder="Introduce tu número de teléfono" />
            <input type="email" name="email" required placeholder="Introduce tu email" />
            <input type="password" name="password" required placeholder="Introduce tu contraseña"/>
            <button type="submit">Register</button>
        </form>
    )
}

export default Register;