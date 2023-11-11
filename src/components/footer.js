import { MDBBtn, MDBCol, MDBContainer, MDBFooter, MDBIcon, MDBInput, MDBRow } from "mdb-react-ui-kit";
import React from "react";

export default function Footer() {
    return (
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
                    <strong>S'inscrire avec un compte email</strong>
                  </p>
                </MDBCol>

                <MDBCol md='5' start>
                  <MDBInput contrast type='email' label='Email address' className='mb-4' />
                </MDBCol>

                <MDBCol size="auto">
                  <MDBBtn outline color='light' type='submit' className='mb-4'>
                    S'inscrire
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </form>
          </section>

          <section className='mb-4'>
            <p>
            La formation en ligne, ou encore l'apprentissage en ligne, 
            ou l'e-learning, désignent l'ensemble des solutions et moyens permettant l'apprentissage par des moyens électroniques.
             La formation en ligne inclut de cette façon 
            des sites web éducatifs, la téléformation, l'enseignement télématique, ou encore l'e-training, notamment.
            </p>
          </section>

          <section className=''>
            <MDBRow>
              <MDBCol lg='4' md='10' className='mb-4 mb-md-0'>
                <h5 className='text-uppercase'>JavaScript</h5>

                <ul className='list-unstyled mb-0'>
                  <li>
                    <a href='#!' className='text-white'>
                      JavaScript
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      NodeJs
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      ReactJs
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      AngularJs
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      VueJs
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      NextJs
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      NestJs
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      TypeScript
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg='4' md='10' className='mb-4 mb-md-0'>
                <h5 className='text-uppercase'>Python</h5>

                <ul className='list-unstyled mb-0'>
                  <li>
                    <a href='#!' className='text-white'>
                      Python
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      Django
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                    Flask
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      Tornado
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      NumPy
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      CherryPy
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      Dash
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg='4' md='10' className='mb-4 mb-md-0'>
                <h5 className='text-uppercase'>Java</h5>

                <ul className='list-unstyled mb-0'>
                  <li>
                    <a href='#!' className='text-white'>
                      Spring
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                    Hibernate
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                    Struts
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                    Dropwizard
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                    Java Swing
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                    JSP
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                    Spark
                    </a>
                  </li>
                </ul>
              </MDBCol>
              
            </MDBRow>
          </section>
        </MDBContainer>

        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2023 Copyright:
          <a className='text-white' href='https://mdbootstrap.com/'>
            e-leatning.com
          </a>
        </div>
    </MDBFooter>
    )
}