import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow, MDBFile } from 'mdb-react-ui-kit';
import { DataCours } from './data';
import { useNavigate } from "react-router-dom";
import "./insertCours.css"

const InsertCours = () => {
  // const [formData, setFormData] = useState({
  //   file: null,
  //   selectedOption: '',
  //   textInput: '',
  // });
  // const [NomCours, setNomCours] = useState('');
  // const [ResumeCours, setResumeCours] = useState('');
  // const [Prix, setPrix] = useState('');
  // const [NomMatieres, setNomMatieres] = useState('');
  // const [NomEmseignant, setNomEmseignant] = useState('');
  // const [Tags, setTags] = useState('');
  // const [Titre, setTitre] = useState('');
  // const [ResumeChapitre, setResumeChapitre] = useState('');
  // const [Video, setVideo] = useState('');
  // const [Sequence, setSequence] = useState('');
  // const history = useNavigate();

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const formData = {
  //     NomCours: NomCours,
  //     Prix: Prix,
  //     ResumeCours: ResumeCours,
  //     // NomMatieres: NomMatieres,
  //     // NomEmseignant: NomEmseignant,
  //     // Tags: Tags,
  //     // Titre: Titre,
  //     // ResumeChapitre: ResumeChapitre,
  //     // Video: Video,
  //     // Sequence: Sequence
  //   }
  //   // console.log(formData)

  //   try {
  //     // const response = await axios.post('http://localhost:9090/api/achats/seul', {
  //     //   NomCours,
  //     //   Prix,
  //     //   ResumeCours,
  //     //   NomMatieres,
  //     //   NomEmseignant,
  //     //   Tags,
  //     //   Titre,
  //     //   ResumeChapitre,
  //     //   Video,
  //     //   Sequence,
  //     // });

  //     // // Gérer la réponse du serveur ici
  //     // console.log(response.data);

  //      DataCours.push(formData);
  //      console.log(DataCours);
  //      history('/insertMatiere')
  //   } catch (error) {
  //     // Gérer les erreurs ici
  //     console.error('Erreur lors de la requête POST', error);
  //   }
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
              
              {/* <MDBInput wrapperClass='mb-4' label='Nom de la matiere' id='NomMatieres' type='text' value={NomMatieres} onChange={(event)=> setNomMatieres(event.target.value)}/>
              <MDBInput wrapperClass='mb-4' label="Nom de l'Enseignant" id='NomEmseignant' type='text' value={NomEmseignant} onChange={(event)=> setNomEmseignant(event.target.value)}/>
              <MDBInput wrapperClass='mb-4' label="Tags" id='Tags' type='text' value={Tags} onChange={(event)=> setTags(event.target.value)}/>
              <label for="formFileSm" class="form-label text-center h4">Chapitre</label>
              <MDBInput wrapperClass='mb-4' label="Titre du chapitre" id='Titre' type='text' value={Titre} onChange={(event)=> setTitre(event.target.value)}/>
              <MDBInput wrapperClass='mb-4' label="Résumé du chapitre" id='ResumeChapitre' type='text' value={ResumeChapitre} onChange={(event)=> setResumeChapitre(event.target.value)}/>
              <MDBInput wrapperClass='mb-4' label="Vidéo" id='Video' type='text'value={Video} onChange={(event)=> setVideo(event.target.value)}/>
              <MDBInput wrapperClass='mb-4' label="Séquence" id='Sequence' type='text' value={Sequence} onChange={(event)=> setSequence(event.target.value)}/>
              <MDBBtn className='w-50 center' size='md' onClick={handleSubmit}>Ajouter le cours</MDBBtn> */}
              <MDBBtn className='w-50 center' size='md' onClick={handleSubmit}>Ajouter cours</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </form>

          
        </MDBCol>
    </MDBContainer>
    // <form onSubmit={handleSubmit}>
    //   <label>
    //     Sélectionnez une option :
    //     <select value={formData.selectedOption} onChange={handleSelectChange}>
    //       <option value="option1">Option 1</option>
    //       <option value="option2">Option 2</option>
    //       <option value="option3">Option 3</option>
    //       {/* Ajoutez d'autres options au besoin */}
    //     </select>
    //   </label>

    //   <label>
    //     Télécharger un fichier :
    //     <input type="file" onChange={handleFileChange} />
    //   </label>

    //   <label>
    //     Entrée de texte :
    //     <input type="text" value={formData.textInput} onChange={handleTextChange} />
    //   </label>

    //   <button type="submit">Envoyer</button>
    // </form>
  );
};

export default InsertCours;
