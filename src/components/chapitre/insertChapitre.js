import { Dialog, DialogTitle } from "@mui/material";
import axios from "axios";
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBInput } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function InsertChapitre() {
    const [Titre, setTitre] = useState('');
  const [ResumeChapitre, setResumeChapitre] = useState('');
  const [Video, setVideo] = useState(null);
  const [Sequence, setSequence] = useState('');
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const history = useNavigate();
  const [open, setOpen] = useState(false)
    const handleChangeMatiere = (event) => {
        setSelectedOption(event.target.value);
      };

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const IdCoursChapitre = selectedOption
        console.log
        const response = await axios.post('http://localhost:9090/api/achats/chapitre', {
          Titre,
          ResumeChapitre,
          // Video,
          Sequence,
          IdCoursChapitre
          
        });
        console.log(response);
        setTimeout(() => {
            history('/homechapitre')
        }, 1000);
        
        // if (response) {
            
        //     setTimeout(() => {
        //         history('/homechapitre')
        //     }, 1000);
            
        // } else {
        //     return;
        // }
            
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

    useEffect(() => {
        
        fetchData();
    },[]);

    const fetchData = async () => {
        try {
            const resCours = await axios.get('http://localhost:9090/api/achats/cours')
            setData(resCours.data)
        } catch (error) {
            console.error('Error lors de la recuperation des données:',error.message);
        }
    };
    return (
        <>
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
                      <a class="nav-link" onClick={()=> history(`/homechapitre`)}>Chapitre</a>
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
        <MDBCol wrapperClass='mr-15' className=' insertC w-50 center'>
            <Dialog  open = {open} className="bg-none">
                <DialogTitle className="bg-success rounded-2 ">Connexion reussi</DialogTitle>
            </Dialog>
          <form>
            <MDBCard className='my-10'>
              <MDBCardBody className='p-5'>
                <MDBInput 
                    wrapperClass='mb-4' 
                    label='Titre du chapitre' 
                    id='Titre' 
                    name='Titre'
                    type='text'
                    value={Titre} 
                    onChange={(event)=> setTitre(event.target.value)}
                />
                <MDBInput 
                    wrapperClass='mb-4' 
                    label='Résumé du chapitre' 
                    id='ResumeChapitre' 
                    name='ResumeChapitre'
                    type='text'
                    value={ResumeChapitre} 
                    onChange={(event)=> setResumeChapitre(event.target.value)}
                />
                <select
                  class="form-select mb-4" 
                  aria-label="Default select example"
                  id='IdMatiereCours'
                  value={selectedOption} 
                  onChange={(event)=> setSelectedOption(event.target.value)}
                >
                  <option value="option" disabled>Choisissez un cours</option>
                  {data.map(item => (
                    <option key={item.NomCours} value={item.id}>{item.NomCours}</option>
                  ))}
                </select>
                <MDBInput 
                    wrapperClass='mb-4' 
                    label='Séquence du chapitre' 
                    id='Sequence' 
                    name='Sequence'
                    type='number'
                    value={Sequence} 
                    onChange={(event)=> setSequence(event.target.value)}
                />
                <label for="Video" class="form-label">Vous pouvez inserer un video ici</label>
                <MDBInput 
                    wrapperClass='mb-4'  
                    id='Video' 
                    type='file'
                    name='Video'
                    onChange={(event)=> setVideo(event.target.value)}
                    accept="Video/*"
                />
                <MDBBtn className='w-50 center' size='md' onClick={handleSubmit}>Ajouter un chapitre</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </form>
        </MDBCol>
        </>
        
    )
}