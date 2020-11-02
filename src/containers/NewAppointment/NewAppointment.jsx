import React from 'react';
import axios from 'axios'
import './NewAppointment.scss';
import {useHistory} from "react-router";

const NewAppointment = ({user}) =>{
  const history = useHistory();
  const handleSubmit = event =>{
      event.preventDefault();
      const headers = { headers: { Authorization: `Bearer ${user.token}` }};
      const appointmentBody={
        title: event.target.title.value,
        reason: event.target.reason.value,
        date: event.target.date.value,
        
      };
      axios.post('http://localhost:3001/appointment/', appointmentBody, headers)
      .then(res=> {
        console.log(res.data)

        setTimeout(() => {
          history.push("/Appointments")
      }, 1500);

      }).catch(error => {
        console.log(error)
      })
  }
  return (
    <form className="NewAppointment-form" onSubmit={handleSubmit}>
      <input type="text" name="title" required placeholder="Escribe un título" />
      <input type="text" name="reason" required placeholder="Motivo de la visita" />
      <input type="date" name="date" required placeholder="Elige una fecha" />
      

      <button type="primary" htmlType="submit">Solicitar cita</button>
      
    </form>
)
}

export default NewAppointment;