import React, { useEffect, useState } from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCardFooter,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
// import CardData from "./cardData"
import axios from 'axios';

export default function Card(onClick) {
  const navigate = useNavigate();
  const [data, setData]= useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:9090/api/achats/cours');
        console.log(response.data)
        setData(response.data)
        
      } catch (error) {
        console.error('Error lors de la recuperation des données:',error.message);
      }
    };
    fetchData();
  },[]);

  
  return (
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'  >{data.map((item) => {
      return (
      <MDBCol  key={item.id}> 
          <MDBCard className='h-100'>
          <MDBCardImage
            // src='data:image/png;base64,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'
            alt='...Photo du cours qui montre le logo de cours'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Cours de {item.NomCours}</MDBCardTitle>
            <MDBCardText>
            <span>Le prix de ce cours est {item.Prix}Ar,</span>
            <span>{item.ResumeCours}</span>
            
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter className='justify-content-center'>
            <MDBBtn className='me-1'>
                <Link to='' className="zaza m-2">
                    Plus ---
                </Link>
            </MDBBtn>
            
            <MDBBtn className='me-1'onClick={()=> navigate(`admins/${item.id}`)}>
                    <i class="fas fa-highlighter"></i>
            </MDBBtn>
            <MDBBtn className='me-1 '>
                <Link to='' className="zaza m-2">
                    {/* Ajouter au panier */}
                    <i class="fas fa-shopping-cart"></i>
                </Link>
            </MDBBtn>
            <MDBBtn className='me-1 btn-danger'>
                <Link to='' className="zaza m-2 ">
                    {/* Ajouter au panier */}
                    <i class="fas fa-trash"></i>
                </Link>
            </MDBBtn>
          </MDBCardFooter>
        </MDBCard>
        
        
      </MDBCol>
      )
    } 
    )}
    </MDBRow>
  );
}