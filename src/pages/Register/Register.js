import React, { useState } from 'react'
import axios from 'axios'
import StudentsFooter from '../StudentsFooter/StudentsFooter'
import StudentsHeader from '../StudentsHeader/StudentsHeader'
//import AlertMessage from '../Alert/Alert'
import { Link } from 'react-router-dom'



const Register = () => {
  //Hooks
  const [name, setName]=useState('')
  const [last, setLast]=useState('')
  const [number, setNumber]=useState('')
  const [email, setEmail]=useState('')
  const [pass, setPass]=useState('')

 function createAccount () {
    let user = {
      name: name,
      last: last,
      number: number,
      email: email,
      pass: pass,
      balance: 0,
      available: 0,
      payment: false
    }
    console.log(user)
    axios.post('/api/register', user)
    .then(res => {
      alert(res.data)
    })
    .then(err => {console.log(err)})
  }
  return (
    <>
      <header>
        <StudentsHeader />
      </header>
      <section className="vh-100" style={{ background: '#3574a5c7' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: '1rem' }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="img/loginimage.jpeg"
                      alt="login form" className="img-fluid" style={{ borderRadius: '1rem 0 0 1rem' }} />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                     
                      

                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219'}}></i>
                          <span className="h1 fw-bold mb-0">
                            <Link to="/">
                              <img
                                src="../img/logo.png"
                                width='90px'
                                height="auto"
                                className="d-inline-block align-left"
                                alt="this is the logo"
                              />
                            </Link>
                          </span>
                        </div>

                        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Create Account</h5>
                        <div className="form-outline mb-4">
                          <input type="text" className="form-control form-control-lg" value={name} onChange={ (e) => {setName(e.target.value)}}/>
                          <label className="form-label" htmlFor="name">First Name</label>
                        </div>

                        <div className="form-outline mb-4">
                          <input type="text" className="form-control form-control-lg" value={last} onChange={ (e) => {setLast(e.target.value)}}/>
                          <label className="form-label" htmlFor="last">Last Name</label>
                        </div> 

                        <div className="form-outline mb-4">
                          <input type="number" className="form-control form-control-lg" value={number} onChange={ (e) => {setNumber(e.target.value)}}/>
                          <label className="form-label" htmlFor="number">Phone Number</label>
                        </div>

                        <div className="form-outline mb-4" >
                          <input type="email" className="form-control form-control-lg" value={email} onChange={ (e) => {setEmail(e.target.value)}}/>
                          <label className="form-label" htmlFor="email">Email address</label>
                        </div>

                        <div className="form-outline mb-4">
                          <input type="password" className="form-control form-control-lg" value={pass} onChange={ (e) => {setPass(e.target.value)}}/>
                          <label className="form-label" htmlFor="password">Password</label>
                        </div>

                        <div className="pt-1 mb-4">
                          <button onClick={createAccount} className="btn btn-dark btn-lg btn-block" type="submit">Create Account</button>
                        </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <StudentsFooter />
      </footer>
    </>
  )
}

export default Register