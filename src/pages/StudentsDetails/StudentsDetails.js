import { useState } from 'react'
import {Link, useParams} from 'react-router-dom'

import StudentsFooter from '../StudentsFooter/StudentsFooter'
import StudentsHeader from '../StudentsHeader/StudentsHeader'
const StudentsDetails = () => {
    const { student_id } = useParams()
    const [student, setStudent] = useState({})

    const loadStudentsDetails = () =>{
        fetch(`http://localhost:5000/api/students/${student_id}`)
        .then( res => res.json())
        .then(student => setStudent(student))
    }
    loadStudentsDetails()
    return(
        <div>
            <header>
                <StudentsHeader />
            </header>
        <main styles={{display:'inline-block', width: '40%'}} >
            <h1> Este es el detalle del estudiante  </h1>   
            <hr/>
            <h1>Name: </h1>
            <h3>{student.name} {student.lastName}</h3>
            <h1>Details: </h1>
            <ul>
            <li>Phone: {student.phone}</li>
            <li>Balance: {student.balance}</li>
            <li>Available: {student.available}</li>
            <li>Payment: {student.payment}</li>
            </ul>
            <Link to="/">Ir a inicio</Link>
            <StudentsFooter />
        </main>
        </div> 
    )
}
export default StudentsDetails