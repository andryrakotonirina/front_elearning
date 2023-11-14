import React, { useState } from 'react';
import axios from 'axios';
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBInput} from 'mdb-react-ui-kit';
import { DataCours } from './data';
import { useNavigate } from "react-router-dom";
import "./insertCours.css"

const InsertChapitre = () => {
  const [Titre, setTitre] = useState('');
  const [ResumeChapitre, setResumeChapitre] = useState('');
  const [Video, setVideo] = useState('');
  const [Sequence, setSequence] = useState('');
    const history = useNavigate();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const response = await axios.post('http://localhost:9090/api/achats/chapitre', {
          Titre,
          ResumeChapitre,
          Video,
          Sequence
        });
        const formData = {
          IdChapitreCours: response.data.id
        }
  
         DataCours.push(formData);
         const NomCours = DataCours[0].NomCours;
         const Prix = DataCours[0].Prix;
         const ResumeCours = DataCours[0].ResumeCours;
         const IdMatiereCours = DataCours[1].IdMatiereCours;
         const IdUsersTypeEnseignantCours = DataCours[1].IdUsersTypeEnseignantCours;
         const IdTagsCours = DataCours[1].IdTagsCours;
         const IdChapitreCours = DataCours[2].IdChapitreCours;
         await axios.post('http://localhost:9090/api/achats/seul', {
          NomCours,
          Prix,
          ResumeCours,
          IdMatiereCours,
          IdUsersTypeEnseignantCours,
          IdTagsCours,
          IdChapitreCours
         })
         history('/admins')
         console.log(DataCours)
      } catch (error) {
        console.error('Erreur lors de la requête POST', error);
      }
    };
  
    return (
      <MDBContainer fluid className='p-0'>
        
          <MDBCol wrapperClass='mr-25' className=' insertC w-50 center'>
          <form>
            <MDBCard className='my-20'>
              <MDBCardBody className='p-5'>
                <MDBInput 
                    wrapperClass='mb-4' 
                    label='Titre du chapitre' 
                    id='Titre' 
                    type='text'
                    value={Titre} 
                    onChange={(event)=> setTitre(event.target.value)}
                />
                <MDBInput 
                    wrapperClass='mb-4' 
                    label='Résumé du chapitre' 
                    id='ResumeChapitre' 
                    type='text'
                    value={ResumeChapitre} 
                    onChange={(event)=> setResumeChapitre(event.target.value)}
                />
                <MDBInput 
                    wrapperClass='mb-4' 
                    label='Video du chapitre' 
                    id='Video' 
                    type='text'
                    value={Video} 
                    onChange={(event)=> setVideo(event.target.value)}
                />
                <MDBInput 
                    wrapperClass='mb-4' 
                    label='Séquence du chapitre' 
                    id='Sequence' 
                    type='number'
                    value={Sequence} 
                    onChange={(event)=> setSequence(event.target.value)}
                />
                <MDBBtn className='w-50 center' size='md' onClick={handleSubmit}>Ajouter un chapitre</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </form>
          </MDBCol>
      </MDBContainer>
    )
  };
  
  export default InsertChapitre;