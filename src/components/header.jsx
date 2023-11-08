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

import LoginForm from './loginForm'
import { Link } from 'react-router-dom';

export default function App() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <><header>
      <MDBNavbar light bgColor='light' sticky>
        <MDBContainer fluid>
          <div className='row'>
            <div className='col-2'>
              <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>

            </div>
          </div>
          <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
            <input className='form-control' placeholder="Votre recherches" aria-label="Search" type='Search' />
            <MDBBtn outline>Rechercher</MDBBtn>
          </MDBInputGroup>
        </MDBContainer>
      </MDBNavbar>

      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: 500 }}
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
                href=""
              >
                <Link to='login' className="zaza m-2">
                S'inscrire
                </Link>
              </MDBBtn>

              <MDBBtn
                className="btn btn-outline-light btn-lg m-2"
                tag="a"
                outline
                size="lg"
                target="_blank"
                href=''
              >
                <Link to='signup' className="zaza m-2">
                Se connecter
                </Link>
              </MDBBtn>

            </div>
          </div>
        </div>
      </div>
      <div className='p-5 text-center bg-light'>
        <p className='mt-4'>Scroll down</p>
        <p>Scroll down</p>
        <p>Scroll down</p>
        <p>Scroll down</p>
        <p>Scroll down</p>
        <p>Scroll down</p>
        <p>Scroll down</p>
        <p>Scroll down</p>
        <p>Scroll down</p>
        <p>Scroll down</p>
        <p>Scroll down</p>
        <p>Scroll down</p>
        <p>Scroll down</p>
        <p>Scroll down</p>
        <p>Scroll down</p>
      </div>

    </header>
    <MDBFooter className='text-center' color='white' bgColor='dark'>
        <MDBContainer className='p-4'>
          <section className='mb-4'>
            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='facebook-f' />
            </MDBBtn>

            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='twitter' />
            </MDBBtn>

            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='google' />
            </MDBBtn>

            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='instagram' />
            </MDBBtn>

            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='linkedin-in' />
            </MDBBtn>

            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='github' />
            </MDBBtn>
          </section>

          <section className=''>
            <form action=''>
              <MDBRow className='d-flex justify-content-center'>
                <MDBCol size="auto">
                  <p className='pt-2'>
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </MDBCol>

                <MDBCol md='5' start>
                  <MDBInput contrast type='email' label='Email address' className='mb-4' />
                </MDBCol>

                <MDBCol size="auto">
                  <MDBBtn outline color='light' type='submit' className='mb-4'>
                    Subscribe
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </form>
          </section>

          <section className='mb-4'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
              voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
              sequi voluptate quas.
            </p>
          </section>

          <section className=''>
            <MDBRow>
              <MDBCol lg='4' md='10' className='mb-4 mb-md-0'>
                <h5 className='text-uppercase'>Links</h5>

                <ul className='list-unstyled mb-0'>
                  <li>
                    <a href='#!' className='text-white'>
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      Link 4
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg='4' md='10' className='mb-4 mb-md-0'>
                <h5 className='text-uppercase'>Links</h5>

                <ul className='list-unstyled mb-0'>
                  <li>
                    <a href='#!' className='text-white'>
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      Link 4
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg='4' md='10' className='mb-4 mb-md-0'>
                <h5 className='text-uppercase'>Links</h5>

                <ul className='list-unstyled mb-0'>
                  <li>
                    <a href='#!' className='text-white'>
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      Link 4
                    </a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </section>
        </MDBContainer>

        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2020 Copyright:
          <a className='text-white' href='https://mdbootstrap.com/'>
            MDBootstrap.com
          </a>
        </div>
      </MDBFooter></>
  );
}