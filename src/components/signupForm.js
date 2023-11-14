import "./loginForm.css";
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Image from '../image/img1.jpg';
import axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';

function SignupForm() {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Nom, setNom] = useState('');
  const [Prenom, setPrenom] = useState('');
  const [Type, setType] = useState('');
  
  const history = useNavigate();

  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:9090/api/users', {
            Nom,
            Prenom,
            Email,
            Password,
            Type
        });
        if (response) {
          history('/login')
          console.log(response)
        } else {
          console.log('err')
        }
            
        
    } catch (error) {
        alert("Information incorrect")
    }
  }
  return (
    <MDBContainer className="my-5">

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src={Image} alt="signup" className='rounded-start w-100 h-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                {/* <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/> */}
                <span className="h1 fw-bold mb-0">E-Learning</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>S'incrire sur notre plateforme</h5>

                <MDBInput 
                  wrapperClass='mb-4' 
                  label='Votre nom' 
                  id='Nom' 
                  type='text' 
                  size="lg"
                  value={Nom}
                  onChange={(e)=> setNom(e.target.value)}
                />
                <MDBInput 
                  wrapperClass='mb-4' 
                  label='Votre prenom' 
                  id='Prenom' 
                  type='text' 
                  size="lg"
                  value={Prenom}
                  onChange={(e)=> setPrenom(e.target.value)}
                />
                <MDBInput 
                  wrapperClass='mb-4' 
                  label='Votre adresse email' 
                  id='Email' 
                  type='text' 
                  size="lg"
                  value={Email}
                  onChange={(e)=> setEmail(e.target.value)}
                />
                <MDBInput 
                  wrapperClass='mb-4' 
                  label='Votre mot de passe' 
                  id='Password' 
                  type='password' 
                  size="lg"
                  value={Password}
                  onChange={(e)=> setPassword(e.target.value)}
                />
                <select class="form-select mb-4" 
                aria-label="Default select example"
                value={Type}
                onChange={(e)=> setType(e.target.value)}
                >
                  <option selected>Choisissez un type</option>
                  <option value="admins">admins</option>
                  <option value="client">client</option>
                  <option value="enseignant">enseignant</option>
                </select>
               <MDBBtn className="mb-4 px-5" color='dark' size='lg' onClick={handlerSubmit}>S'inscrire</MDBBtn>
              <a className="small text-muted" href="#!">Mot de pass oublié?</a>
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Si vous avez dejà un compte 
              <a style={{color: '#393f81'}} onClick={()=> history(`/login`)}>
                Se connecter ici
              </a></p>

              <div className='d-flex flex-row justify-content-center'>
                <a className="small text-muted me-1">HazenField.</a>
                <a className="small text-muted">@Société informatique</a>
              </div>

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

export default SignupForm;