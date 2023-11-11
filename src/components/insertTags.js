import React, { useState } from 'react';
import axios from 'axios';
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBInput} from 'mdb-react-ui-kit';
import { DataCours } from './data';
import { useNavigate } from "react-router-dom";

const InsertCours = () => {
    const [NomMatiere, setNomMatiere] = useState('');
    const history = useNavigate();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const response = await axios.post('http://localhost:9090/api/achats/onematiere', {
          NomMatiere
        });
  
         DataCours.push(response.data);
         history('')
         console.log(DataCours[0].id)
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
                    label='Nom de la matière' 
                    id='NomMatiere' 
                    type='text'
                    value={NomMatiere} 
                    onChange={(event)=> setNomMatiere(event.target.value)}
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