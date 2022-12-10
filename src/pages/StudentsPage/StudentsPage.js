
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './StudentsPage.css'
import StudentsFooter from '../StudentsFooter/StudentsFooter'
import StudentsHeader from '../StudentsHeader/StudentsHeader'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
const StudentsPage = () => {
    const [students, setStudents] = useState([])
    const loadStudents = () => {        
        fetch(`http://localhost:5000/api/students`)
            .then(res => res.json())
            .then(allStudents => setStudents(allStudents))
            .catch( (error) => console.log(error))
    }
    loadStudents()
    return (
        <div>
            <header>
                <StudentsHeader />
            </header>
            <Container>
                <hr />
                <h1>Students list</h1>
                <hr />
                <Button variant="primary">-Edit</Button>{' '}
                <Button variant="primary">+Add</Button>{' '}
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th >First Name</th>
                            <th >Last Name</th>
                            <th >Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map(eachStudent => {
                                return (
                                    <tr>
                                        <td key={eachStudent.name}><Link to={`/studentdetails/${eachStudent._id}`}> {eachStudent.name}</Link></td>
                                        <td key={eachStudent.last}><Link to={`/studentdetails/${eachStudent._id}`}> {eachStudent.last}</Link></td>
                                        <td key={eachStudent.number}><Link to={`/studentdetails/${eachStudent._id}`}> {eachStudent.number}</Link></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
            <footer>
                <StudentsFooter />
            </footer>
        </div>
    )
}
export default StudentsPage