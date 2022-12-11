import './scss/app.scss'
import IndexPage from './pages/IndexPage/IndexPage'
import StudentsDetails from './pages/StudentsDetails/StudentsDetails'
import StudentsPage from './pages/StudentsPage/StudentsPage'
import TeachersNativos from './pages/TeachersNativos/TeachersNativos'
import Register from './pages/Register/Register'
import Clases from './pages/Clases/Clases'
import LogInPage from './pages/LogInPage/LogInPage'
import Faqs from './pages/Faqs/Faqs'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes basename={process.env.PUBLIC_URL}>
        <Route path='/' element={<IndexPage />}/>
        <Route path='/teachers' element={<TeachersNativos />}/>
        <Route path='/clases' element={<Clases />}/>
        <Route path='/faqs' element={<Faqs />}/>
        <Route path='/studentspage' element={<StudentsPage />}/>
        <Route path='/login' element={<LogInPage />}/>
        <Route path='/studentdetails/:student_id' element={<StudentsDetails />}/>  
        <Route path='/register' element={<Register />}/>
    </Routes>
  );
}
export default App;
