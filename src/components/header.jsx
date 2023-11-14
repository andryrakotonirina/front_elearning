import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBInputGroup,
  MDBFooter,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
  
} from 'mdb-react-ui-kit';

import Image from '../image/ml.jpg'
import { Link } from 'react-router-dom';
import Card from './card';
import SuggestionCours from './suggestionCours';
import Footer from './footer';
import './header.css'

export default function App() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <><header>
      <MDBNavbar light bgColor='light' sticky>
        <MDBContainer fluid>
          <div className='row'>
            <div className='col-2'>
              <MDBNavbarBrand href='#'><i class="fas fa-brain"></i>E-Learning</MDBNavbarBrand>

            </div>
          </div>
          <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
            <input className='form-control' placeholder="Votre recherches" aria-label="Search" type='Search' />
            <MDBBtn outline>Rechercher</MDBBtn>
          </MDBInputGroup>
        </MDBContainer>
      </MDBNavbar>

      <div
        className='imagefont p-5 text-center bg-image'
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Bienvenue dans notre plateforme</h1>
              <h4 className='mb-3'>Vous pouvez bénéficier des cours en lignes dans notre site, mais avant tout, vous avez besoins  de s'incrire ou se connecter</h4>
              <MDBBtn
                className="btn btn-outline-light btn-lg m-2"
                tag="a"
                outline
                size="lg"
                rel="nofollow"
                target="_blank"
              >
                <Link to='login' className="zaza m-2">
                Se connecter
                </Link>
              </MDBBtn>

              <MDBBtn
                className="btn btn-outline-light btn-lg m-2"
                tag="a"
                outline
                size="lg"
                target="_blank"
              >
                <Link to='signup' className="zaza m-2">
                S'inscrire
                </Link>
              </MDBBtn>

            </div>
          </div>
        </div>
      </div>
      

    </header>
    <body>
      <div className='p-5 text-center bg-light'>
          <h5>C'est le meilleur plateforme e-learning à Madagascar</h5>
          <h6>Vous pouvez regarder des video des cours disponible ici et acheter si vous avez satisfait de notre service</h6>
      </div>
      <div className='p-5 text-center bg-light'>
          <Card />
      </div>
      <div className='mt-5 p-5'>
        <SuggestionCours className='mt-5'/>
      </div>
    </body>
    <Footer />
    </>
  );
}