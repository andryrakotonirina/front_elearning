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
import Card from './card';

export default function App() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <><header>
      <MDBNavbar light bgColor='light' sticky>
        <MDBContainer fluid>
          <div className='row'>
            <div className='col-2'>
              <MDBNavbarBrand href='#'>E-Learning</MDBNavbarBrand>

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
              >
                <Link to='signup' className="zaza m-2">
                Se connecter
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
      <div>
        <h1><i class="fas fa-bahai"></i>Cours de développement logiciel le plus suivi</h1>
        <div class="">
          <div class="">
            <div class="card ">
            <div class="card-header"><h5> JavaScript <i class="fab fa-js"></i></h5></div>
              <div class="card-body">
                <p class="card-text">
                JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives et à ce titre est
                 une partie essentielle des applications web. Avec les langages HTML et CSS, JavaScript est au cœur des langages utilisés par les
                  développeurs web3. Une grande majorité des sites web l'utilisent4, et la majorité des navigateurs web disposent d'un moteur
                   JavaScript5 pour l'interpréter. 
                </p>
              </div>
            </div>
          </div>
          <div class="">
            <div class="card border border-light shadow-0 mb-3">
            <div class="card-header"><h5> NodeJs <i class="fab fa-node-js"></i></h5></div>
              <div class="card-body">
                <p class="card-text">
                Node.js est une plateforme logicielle libre en JavaScript, orientée vers les applications réseau évènementielles hautement concurrentes qui doivent pouvoir monter en charge.
                Elle utilise la machine virtuelle V8, la bibliothèque libuv pour sa boucle d'évènements, et implémente sous licence MIT les spécifications CommonJS. 
                </p>
              </div>
            </div>
          </div>
          <div class="">
            <div class="card border border-light shadow-0 mb-3">
            <div class="card-header"><h5> Java <i class="fab fa-java"></i></h5></div>
              <div class="card-body">
                <p class="card-text">
                Java est un langage de programmation de haut niveau orienté objet 
                </p>
              </div>
            </div>
          </div>
          <div class="">
            <div class="card border border-light shadow-0 mb-3">
            <div class="card-header"><h5> ReactJs <i class="fab fa-react"></i></h5></div>
              <div class="card-body">
                <p class="card-text">
                React (aussi appelé React.js ou ReactJS) est une bibliothèque JavaScript libre développée par Facebook (maintenant Meta) depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d'application web monopage, via la création de composants dépendant d'un état et générant une page (ou portion) HTML à chaque changement d'état.
                </p>
              </div>
            </div>
          </div>
          <div class="">
            <div class="card border border-light shadow-0 mb-3">
            <div class="card-header"><h5> VueJs <i class="fab fa-vuejs"></i></h5></div>
              <div class="card-body">
                <p class="card-text">
                Vue.js (aussi appelé plus simplement Vue), est un framework JavaScript open-source utilisé pour construire des interfaces utilisateur et des applications web monopages. Vue a été créé par Evan You et est maintenu par lui et le reste des membres actifs de l'équipe principale travaillant sur le projet et son écosystème.
                </p>
              </div>
            </div>
          </div>
          <div class="">
            <div class="card border border-light shadow-0 mb-3">
            <div class="card-header"><h5> Python <i class="fab fa-python"></i></h5></div>
              <div class="card-body">
                <p class="card-text">
                Python est un langage de programmation interprété, multiparadigme et multiplateformes. Il favorise la programmation impérative structurée, fonctionnelle et orientée objet. Il est doté d'un typage dynamique fort, d'une gestion automatique de la mémoire par ramasse-miettes et d'un système de gestion d'exceptions ; il est ainsi similaire à Perl, Ruby, Scheme, Smalltalk et Tcl. 
                </p>
              </div>
            </div>
          </div>
          <div class="">
            <div class="card border border-light shadow-0 mb-3">
            <div class="card-header"><h5> Wordpress <i class="fab fa-wordpress"></i></h5></div>
              <div class="card-body">
                <p class="card-text">
                WordPress est un système de gestion de contenu (SGC ou content management system (CMS) en anglais) gratuit, libre et open-source. Ce logiciel écrit en PHP repose sur une base de données MySQL et est distribué par la fondation WordPress.org. Les fonctionnalités de WordPress lui permettent de créer et gérer différents types de sites Web : site vitrine, site de vente en ligne, site applicatif, blog, portfolio, site institutionnel, site d'enseignement… 
                </p>
              </div>
            </div>
          </div>
          <div class="">
            <div class="card border border-light shadow-0 mb-3">
            <div class="card-header"><h5> PHP <i class="fab fa-php"></i></h5></div>
              <div class="card-body">
                <p class="card-text">
                PHP: Hypertext Preprocessor51, plus connu sous son sigle PHP (sigle auto-référentiel), est un langage de programmation libre52, principalement utilisé pour produire des pages Web dynamiques via un serveur web51, mais pouvant également fonctionner comme n'importe quel langage interprété de façon locale. PHP est un langage impératif orienté objet. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
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
      </MDBFooter></>
  );
}