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
import { Link } from 'react-router-dom';
// import CardData from "./cardData"
import axios from 'axios';

export default function Card() {
  const [data, setData]= useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:9090/api/achats/cours');
        // console.log(response.data)
        setData(response.data)
      } catch (error) {
        console.error('Error lors de la recuperation des données:',error.message);
      }
    };
    fetchData();
  },[]);

  return (
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>{data.map((item,key) => {
      return (
      <MDBCol> 
          <MDBCard className='h-100' key={key}>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/041.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Cours de {item.NomCours}</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            <MDBBtn className='me-1'>
                <Link to='' className="zaza m-2">
                    Plus ---
                </Link>
            </MDBBtn>
            <MDBBtn color='success'>
                <Link to='' className="zaza m-2">
                    {/* Ajouter au panier */}
                    <i class="fas fa-shopping-cart"></i>
                </Link>
                
            </MDBBtn>
            <div className='me-1'><span>Le prix de ce cours est {item.Prix}Ar</span></div>
          </MDBCardFooter>
        </MDBCard>
        
        
      </MDBCol>
      )
    } 
    )}
    </MDBRow>
  );
}