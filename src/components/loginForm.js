import "./loginForm.css";
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {Data} from "./data";
import Image from '../image/img1.jpg'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';

export function LoginForm() {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const history = useNavigate();

  const handlerSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post('http://localhost:9090/api/login', {
            Email,
            Password,
        })
        Data.push(response.data)
        console.log(Data)
        if (Data[0].userType === 'admins') {
            history('/admins')
        } else {
            history('/users')
        }
    } catch (error) {
        alert("Votre mot de passe ou votre email est incorrect")
    }
  }
  return (
    <MDBContainer className="my-5">

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src={Image} alt="login form" className='rounded-start w-100 h-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                {/* <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/> */}
                <span className="h1 fw-bold mb-0">E-Learning</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Se connecter sur votre compte</h5>

                <MDBInput wrapperClass='mb-4' label='Adresse email' id='Email' type='email' size="lg" value={Email} onChange={(e)=> setEmail(e.target.value)}/>
                <MDBInput wrapperClass='mb-4' label='Mot de passe' id='Password' type='password' size="lg" value={Password} onChange={(e)=> setPassword(e.target.value)}/>

              <MDBBtn className="mb-4 px-5" color='dark' size='lg' onClick={handlerSubmit}>Se connecter</MDBBtn>
              <a className="small text-muted" href="#!">mot de passe oublié?</a>
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Vous n'avez pas du compte? <a href="#!" style={{color: '#393f81'}}>Inscrivez vous ici</a></p>

              <div className='d-flex flex-row justify-content-start'>
                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a>
              </div>

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}
export const vstat=LoginForm.vstat;