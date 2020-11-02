import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Appointments.scss';

const Appointments = () => {
    const [appointments, setAppointments] = useState([]);
    const getAppointments = async () => {
        const token = localStorage.getItem('authToken');
        const options = { headers: { Authorization: `Bearer ${token}` } };
        const res = await axios.get(process.env.REACT_APP_BASE_URL + '/appointment', options);
        setAppointments(res.data);
    }
    useEffect(async () => {
        try {
            getAppointments();

        } catch (error) {
            console.error(error);
        }
    }, [])

    const cancellAppointment = async (id) => {
        try {
            const token = localStorage.getItem('authToken');
            const options = { headers: { Authorization: `Bearer ${token}` } };
            await axios.delete(process.env.REACT_APP_BASE_URL + '/appointment/' + id, options);
            getAppointments();
        } catch (error) {
            console.error(error);
        }

    }
    return (
        <div>
            <h1>Listado de citas</h1>
            {appointments.map(appointment => <div className="cita">
                <span>{appointment.title}</span>
                <span>{appointment.status}</span>
                <span onClick={() => cancellAppointment(appointment._id)}>Eliminar</span>
            </div>)}

        </div>
    )
}
export default Appointments;