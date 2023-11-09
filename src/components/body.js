import React, {useEffect, useState} from "react";
// import { createContext, useContext } from "react";
import axios from "axios";
import {Data} from './data'
import { useNavigate } from "react-router-dom";

// const AuthContext = createContext();
// const AuthProvider = ({children}) => {
//     const isAuthenticated = req.session.authenticated;
//     return (
//         <AuthContext.Provider value={{isAuthenticated}}>
//             {children}
//         </AuthContext.Provider>
//     )
// };

// const useAute = () => {
//     return useContext(AuthContext);
// };

// const {isAuthenticated} = useAute();
// console.log(isAuthenticated)
export default function Body() {
    const navigate = useNavigate();
    const [donne, setDonne]= useState('');
    useEffect(() => {
        getCours();
    })
    const getCours = async () =>{
        // e.preventDefault();
        try {
            setDonne(Data)
            await axios.get('http://localhost:9090/api/achats/cours').then((data) => {
                console.log(data)
            })
            console.log(Data[0])
        } catch (err) {
            console.log("err")
        }
    }
    return (
        <div>
            {
                (donne == 0) ? navigate("/") : (
                <form onSubmit={getCours}>
                    <button type="submit">zaza</button>
                </form>)
            }
        </div>
        // <form onSubmit={getCours}>
        //     <button type="submit">zaza</button>
        // </form>
        
    )
}