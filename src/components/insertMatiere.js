import React, { useState } from 'react';
import axios from 'axios';
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow, MDBFile } from 'mdb-react-ui-kit';
import { DataCours } from './data';
import { useNavigate } from "react-router-dom";

const InsertCours = () => {
    const [NomMatiere, setNomMatiere] = useState('');
    const [NomEnseignant, setNomEnseignant] = useState('');
    const [Tags, setTags] = useState('');
    const history = useNavigate();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      
      try {
        const resMatiere = await axios.post('http://localhost:9090/api/achats/onematiere', {NomMatiere});
        const resTags = await axios.post('http://localhost:9090/api/achats/tags', {Tags})
        const resEns = await axios.post('http://localhost:9090/api/achats/enseignant', {NomEnseignant});

        const formData = {
            IdMatiereCours: resMatiere.data.id,
            IdUsersTypeEnseignantCours: resEns.data.id,
            IdTagsCours: resTags.data.id
          }

         DataCours.push(formData);
         history('')
         console.log(DataCours)
      } catch (error) {
        console.error('Erreur lors de la requête POST', error);
      }
    };
  
    return (
      <MDBContainer fluid className='p-0'>
        
          <MDBCol wrapperClass='mr-25' className='w-50 center'>
          <form>
            <MDBCard className='my-20'>
              <MDBCardBody className='p-5'>
                <MDBInput 
                    wrapperClass='mb-4' 
                    label='Tags' 
                    id='Tags' 
                    type='text'
                    value={Tags} 
                    onChange={(event)=> setTags(event.target.value)}
                />
                <MDBInput 
                    wrapperClass='mb-4' 
                    label='Nom de la matière' 
                    id='NomMatiere' 
                    type='text'
                    value={NomMatiere} 
                    onChange={(event)=> setNomMatiere(event.target.value)}
                />
                <MDBInput 
                    wrapperClass='mb-4' 
                    label="Nom de l'enseignant" 
                    id='NomEmseignant' 
                    type='text'
                    value={NomEnseignant} 
                    onChange={(event)=> setNomEnseignant(event.target.value)}
                />
                <MDBBtn className='w-50 center' size='md' onClick={handleSubmit}>Ajouter cours</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </form>
          </MDBCol>
      </MDBContainer>
    )
  };
  
  export default InsertCours;