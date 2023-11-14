import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow, MDBFile } from 'mdb-react-ui-kit';
import { DataCours } from './data';
import { useNavigate } from "react-router-dom";
import "./insertCours.css"

const InsertMatiere = () => {
    const [NomMatiere, setNomMatiere] = useState('');
    const [NomEnseignant, setNomEnseignant] = useState('');
    const [Tags, setTags] = useState('');
    const [data, setData] = useState([]);
    const [dataEnseignant, setDataEnseignant] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedOptionE, setSelectedOptionE] = useState('');
    const history = useNavigate();
  
    useEffect(() => {
      
      fetchData();
    });
    const fetchData = async () => {
      try {
        const resMatiere = await axios.get('http://localhost:9090/api/achats/matieres');
        const resEnseignant = await axios.post('http://localhost:9090/api/achats/enseignant');
        setData(resMatiere.data)
        setDataEnseignant(resEnseignant.data)
        console.log(resMatiere.data)
      } catch (error) {
        console.error('Error lors de la recuperation des données:',error.message);
      }
    };
    const handleChangeMatiere = (event) => {
      setSelectedOption(event.target.value);
    };
    const handleChangeEnseignant = (e) => {
      setSelectedOptionE(e.target.value);
    }
    const handleSubmit = async (event) => {
      event.preventDefault();
      
      try {
        const resMatiere = await axios.post('http://localhost:9090/api/achats/onematiere', {NomMatiere});
        const resTags = await axios.post('http://localhost:9090/api/achats/tags', {Tags})
        const resEns = await axios.post('http://localhost:9090/api/achats/enseignant', {NomEnseignant});
        const resMat = await axios.get('http://localhost:9090/api/achats/matieres')

        // const formData = {
        //     IdMatiereCours: resMatiere.data.id,
        //     IdUsersTypeEnseignantCours: resEns.data.id,
        //     IdTagsCours: resTags.data.id
        //   }
        // const array = resMat.data;
        //   console.log(array[0])
        //  DataCours.push(formData);
        //  history('/insertChapitre')
        //  console.log(DataCours)
      } catch (error) {
        console.error('Erreur lors de la requête POST', error);
      }
    };
  
    return (
      <MDBContainer fluid className='p-0'>
        
          <MDBCol wrapperClass='mr-25' className='insertC w-50 center'>
          <form>
            <MDBCard className='my-20'>
              <MDBCardBody className='p-5'>
                {/* test */}
                <select
                  class="form-select mb-4" 
                  aria-label="Default select example"
                  value={selectedOption} 
                  onChange={handleChangeMatiere}
                >
                  <option value="" disabled>Choisissez un matiere</option>
                  {data.map(item => (
                    <option key={item.NomMatiere} value={item.NomMatiere}>{item.NomMatiere}</option>
                  ))}
                </select>
                {/* //test */}
                <MDBInput 
                    wrapperClass='mb-4' 
                    label='Tags' 
                    id='Tags' 
                    type='text'
                    value={Tags} 
                    onChange={(event)=> setTags(event.target.value)}
                />
                {/* <MDBInput 
                    wrapperClass='mb-4' 
                    label='Nom de la matière' 
                    id='NomMatiere' 
                    type='text'
                    value={NomMatiere} 
                    onChange={(event)=> setNomMatiere(event.target.value)}
                /> */}
                <select
                  class="form-select mb-4" 
                  aria-label="Default select example"
                  value={selectedOptionE} 
                  onChange={handleChangeEnseignant}
                >
                  <option value="" disabled>Choisissez un enseignant</option>
                  {dataEnseignant.map(item => (
                    <option key={item.Nom} value={item.Nom}>{item.Nom}</option>
                  ))}
                </select>
                <MDBBtn className='w-50 center' size='md' onClick={handleSubmit}>Ajouter dans le cours</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </form>
          </MDBCol>
      </MDBContainer>
    )
  };
  
  export default InsertMatiere;