import React from "react";
import axios from "axios";

export default function Body() {
    const getCours = async (e) =>{
        e.preventDefault();
        try {
            const res = await axios.get('http://localhost:9090/api/achats/cours')
            console.log(res)
        } catch (err) {
            console.log("err")
        }
    }
    return (
        <form onSubmit={getCours}>
            <button type="submit">zaza</button>
        </form>
    )
}