import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow, MDBFile } from 'mdb-react-ui-kit';
import { DataCours } from './data';
import { useNavigate } from "react-router-dom";
import "./insertCours.css"

const InsertCours = () => {
  
    const [NomCours, setNomCours] = useState('');
    const [ResumeCours, setResumeCours] = useState('');
    const [Prix, setPrix] = useState('');
    const [NomMatiere, setNomMatiere] = useState('');
    const [NomEnseignant, setNomEnseignant] = useState('');
    const [Tags, setTags] = useState('');
    const [data, setData] = useState([]);
    const [dataEnseignant, setDataEnseignant] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedOptionE, setSelectedOptionE] = useState('');
    const IdMatiereCours = '';
    const IdUsersTypeEnseignantCours = '';
    const history = useNavigate();
    // IdUsersTypeEnseignantCours
    // IdMatiereCours
    useEffect(() => {
      const fetchData = async () => {
        try {
          const resMatiere = await axios.get('http://localhost:9090/api/achats/matieres');
          const resEnseignant = await axios.post('http://localhost:9090/api/achats/enseignant');
          setData(resMatiere.data)
          setDataEnseignant(resEnseignant.data)
        } catch (error) {
          console.error('Error lors de la recuperation des données:',error.message);
        }
      };
      fetchData();
    },[]);
    const handleChangeMatiere = (event) => {
      setSelectedOption(event.target.value);
    };
    const handleChangeEnseignant = (e) => {
      setSelectedOptionE(e.target.value);
    }
    const handleSubmit = async (event) => {
      event.preventDefault();
      // console.log(selectedOptionE)
      // console.log(selectedOption)
      try {
        const Prenom = selectedOptionE;
        const NomMatiere = selectedOption;
        const resTags = await axios.post('http://localhost:9090/api/achats/tags', {Tags});
        const resEns = await axios.post('http://localhost:9090/api/achats/oneens',{Prenom})
        const resMat = await axios.post('http://localhost:9090/api/achats/onematiere',{NomMatiere})
        const IdUsersTypeEnseignantCours =resEns.data[0].id
        const IdTagsCours = resTags.data.id;
        const IdMatiereCours = resMat.data.id;
        const resCours = axios.post('http://localhost:9090/api/achats/seul',
        {
          NomCours,
          ResumeCours,
          Prix,
          IdTagsCours,
          IdUsersTypeEnseignantCours,
          IdMatiereCours
        })
        console.log(resCours)
        
        if ( resCours) {
          console.log(resCours)
          history('/admins')
        }
      } catch (error) {
        console.error('Erreur lors de la requête POST', error);
      }
  };

  return (
    <MDBContainer fluid className='p-0'>
      
        <MDBCol wrapperClass='' className='insertC w-50 center'>
        <form >
          <MDBCard className='my-20'>
            <MDBCardBody className='p-5'>
              <MDBInput wrapperClass='mb-4' label='Nom du cours' id='NomCours' type='text' value={NomCours} onChange={(event)=> setNomCours(event.target.value)}/>
              <MDBInput wrapperClass='mb-4' label="resume du cours" id='ResumeCours' type='text' value={ResumeCours} onChange={(event)=> setResumeCours(event.target.value)}/>
              <MDBInput wrapperClass='mb-4' label="Prix du cours" id='Prix' type='number' value={Prix} onChange={(event)=> setPrix(event.target.value)}/>
            <select
                  class="form-select mb-4" 
                  aria-label="Default select example"
                  id='IdMatiereCours'
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
                <select
                  class="form-select mb-4" 
                  aria-label="Default select example"
                  id='IdUsersTypeEnseignantCours'
                  value={selectedOptionE} 
                  onChange={handleChangeEnseignant}
                >
                  <option value="" disabled>Choisissez un enseignant</option>
                  {dataEnseignant.map(item => (
                    <option key={item.Prenom} value={item.Prenom}> {item.Prenom} {item.Nom}</option>
                  ))}
                </select>
              <MDBBtn className='w-50 center' size='md' onClick={handleSubmit}>Ajouter cours</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </form>

          
        </MDBCol>
    </MDBContainer>
  );
};

export default InsertCours;
