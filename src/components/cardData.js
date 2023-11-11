import axios from "axios";
import { useEffect, useState } from "react";

export default function CardData () {
    const [data, setData]= useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:9090/api/achats/cours');
          setData(response.data)
        } catch (error) {
          console.error('Error lors de la recuperation des données:',error.message);
        }
      };
      fetchData();
    },[]);
}