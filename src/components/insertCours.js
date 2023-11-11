import React, { useState } from 'react';
import axios from 'axios';
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow, MDBFile } from 'mdb-react-ui-kit';
import { DataCours } from './data';
import { useNavigate } from "react-router-dom";

const InsertCours = () => {
  // const [formData, setFormData] = useState({
  //   file: null,
  //   selectedOption: '',
  //   textInput: '',
  // });
  const [NomCours, setNomCours] = useState('');
  const [ResumeCours, setResumeCours] = useState('');
  const [Prix, setPrix] = useState('');
  const [NomMatieres, setNomMatieres] = useState('');
  const [NomEmseignant, setNomEmseignant] = useState('');
  const [Tags, setTags] = useState('');
  const [Titre, setTitre] = useState('');
  const [ResumeChapitre, setResumeChapitre] = useState('');
  const [Video, setVideo] = useState('');
  const [Sequence, setSequence] = useState('');
  const history = useNavigate();

  // const handleFileChange = (event) => {
  //   setFormData({
  //     ...formData,
  //     file: event.target.files[0],
  //   });
  // };
  

  // const handleSelectChange = (event) => {
  //   setFormData({
  //     ...formData,
  //     selectedOption: event.target.value,
  //   });
  // };

  // const handleTextChange = (event) => {
  //   setFormData({
  //     ...formData,
  //     textInput: event.target.value,
  //   });
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // const formDataToSend = new FormData();
    // formDataToSend.append('file', formData.file);
    // formDataToSend.append('selectedOption', formData.selectedOption);
    // formDataToSend.append('textInput', formData.textInput);
    const formData = {
      NomCours: NomCours,
      Prix: Prix,
      ResumeCours: ResumeCours,
      // NomMatieres: NomMatieres,
      // NomEmseignant: NomEmseignant,
      // Tags: Tags,
      // Titre: Titre,
      // ResumeChapitre: ResumeChapitre,
      // Video: Video,
      // Sequence: Sequence
    }
    // console.log(formData)

    try {
      // const response = await axios.post('http://localhost:9090/api/achats/seul', {
      //   NomCours,
      //   Prix,
      //   ResumeCours,
      //   NomMatieres,
      //   NomEmseignant,
      //   Tags,
      //   Titre,
      //   ResumeChapitre,
      //   Video,
      //   Sequence,
      // });

      // // Gérer la réponse du serveur ici
      // console.log(response.data);

       DataCours.push(formData);
       console.log(DataCours);
       history('/insertMatiere')
    } catch (error) {
      // Gérer les erreurs ici
      console.error('Erreur lors de la requête POST', error);
    }
  };

  return (
    <MDBContainer fluid className='p-0'>
      
        <MDBCol wrapperClass='mr-25' className='w-50 center'>
        <form>
          <MDBCard className='my-20'>
            <MDBCardBody className='p-5'>
              <MDBInput wrapperClass='mb-4' label='Nom de cours' id='form1' type='text'value={NomCours} onChange={(event)=> setNomCours(event.target.value)}/>
              <MDBInput wrapperClass='mb-4' label='Prix' id='Prix' type='number' value={Prix} onChange={(event)=> setPrix(event.target.value)}/>
              {/* <div class="input-group mb-3">
                <input type="file" class="form-control" id="inputGroupFile02" />
              </div> */}
              <label for="formFileSm h4" class="form-label">Résume du cours</label>
              <MDBInput wrapperClass='mb-4' id='ResumeCours' type='file' value={ResumeCours} onChange={(event)=> setResumeCours(event.target.value)}/>
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
