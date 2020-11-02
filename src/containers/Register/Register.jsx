import React from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import './Register.scss';

const Register = () => {
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
            setTimeout(() => {
                history.push('/')
            }, 1500);
        })
        .catch(error=>console.log(error))
    }
    return (
        <form className="register-form" onSubmit={handleSubmit}>
            <input className="inputreg" type="text" name="clientname" required placeholder="Introduce tu nombre" />
            <input className="inputreg" type="text" name="surname" required placeholder="Introduce tu apellido" />
            <input className="inputreg" type='text' name="phone" required placeholder="Introduce tu número de teléfono" />
            <input className="inputreg" type="email" name="email" required placeholder="Introduce tu email" />
            <input className="inputreg" type="password" name="password" required placeholder="Introduce tu contraseña"/>
            <button type="submit">Register</button>
        </form>
    )
}

export default Register;