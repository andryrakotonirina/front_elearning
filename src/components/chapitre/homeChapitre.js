import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBInput} from 'mdb-react-ui-kit';
// import { DataCours } from './data';
import { useNavigate } from "react-router-dom";
import "./insertChapitre.css";
import CardChapitre from './cardChapitre';

const HomeChapitre = () => {
  const [Titre, setTitre] = useState('');
  const [ResumeChapitre, setResumeChapitre] = useState('');
  const [Video, setVideo] = useState(null);
  const [Sequence, setSequence] = useState('');
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
    const history = useNavigate();
    const handleChangeMatiere = (event) => {
        setSelectedOption(event.target.value);
      };

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const IdCoursChapitre = selectedOption
        const response = await axios.post('http://localhost:9090/api/achats/chapitre', {
          Titre,
          ResumeChapitre,
          // Video,
          Sequence,
          IdCoursChapitre
          
        });
        console.log(response)
        if (response) {
            history('/admins')
        } else {
            return
        }
            
      } catch (error) {
        console.error('Erreur lors de la requête POST', error);
        if (error.response) {
          // La requête a été effectuée, mais le serveur a répondu avec un code d'erreur
          console.error('Réponse du serveur:', error.response.data);
          console.error('Statut du serveur:', error.response.status);
        } else if (error.request) {
          // La requête n'a pas été effectuée
          console.error('Aucune réponse du serveur.');
        } else {
          // Une erreur s'est produite lors de la configuration de la requête
          console.error('Erreur lors de la configuration de la requête :', error.message);
        }
      }
    };
    
  
    return (
      <MDBContainer fluid className='p-0'>
        <nav class="navbar navbar-expand-lg navbar-light bg-info">
      {/* <!-- Container wrapper --> */}
          <div class="container-fluid bg-info">
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <span class="navbar-brand mb-0 h1"><i class="fas fa-brain"></i>E-Learning</span>
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                  <a class="nav-link color-black" onClick={()=> history('/admins')}>Cours</a>
                  </li>
                  <li class="">
                      <a class="nav-link" onClick={()=> history(`/InsertChapitre`)}>Chapitre</a>
                  </li>
                  <li class="nav-item bg-info">
                      <a class="nav-link" onClick={()=> history()}>Matieres</a>
                  </li>
                  <li class="nav-item bg-info">
                  <a class="nav-link" onClick={()=> history()}>Utilisateurs</a>
                  </li>
              </ul>
              </div>
              <div class="d-flex align-items-center">
              <a class="text-reset me-3" href="#">
                  <i class="fas fa-shopping-cart"></i>
              </a>
              <div class="">
                  <a
                  class="text-reset me-3  hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  >
                  <i class="fas fa-bell"></i>
                  <span class="badge rounded-pill badge-notification bg-danger">1</span>
                  </a>
              </div>
              <div class="dropdown">
                  <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuAvatar"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                  >
                  <img
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                      class="rounded-circle"
                      height="25"
                      alt="Black "
                      loading="lazy"
                  />
                  </a>
                  <ul
                  class="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuAvatar"
                  >
                  <li>
                      <a class="dropdown-item" href="#">My profile</a>
                  </li>
                  <li>
                      <a class="dropdown-item" href="#">Settings</a>
                  </li>
                  <li>
                      <a class="dropdown-item" href="#"><i class="fas fa-power-off"></i>Logout</a>
                  </li>
                  </ul>
              </div>
              </div>
              
          </div>
        </nav>
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
            <form class="d-flex input-group w-auto">
                <input
                    type="search"
                    class="form-control rounded"
                    placeholder="Rechercher un chapitre"
                    aria-label="Search"
                    aria-describedby="search-addon"
                />
                <span class="input-group-text border-0" id="search-addon">
                    <i class="fas fa-search"></i>
                </span>
            </form>
            
            <a class="navbar-brand "><MDBBtn className='btn btn-primary' onClick={() => history('/insertchapitre')}>Ajouter un chapitre</MDBBtn> </a>
        </div>
        </nav>
        <div>
          <CardChapitre />
        </div>
        
      </MDBContainer>
    )
  };
  
  export default HomeChapitre;