import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import './Geral.css';
import Logo from '../assets/logo.png';

export default function Especies() {
    
    const [especies, setEspecies] = useState([]);

    useEffect(() => {
        async function fetchData() {
          const response = await fetch(`https://swapi.dev/api/species/?format=json`)
          const data = await response.json();
      
          setEspecies(data.results);
   
        }
        
        fetchData();
      }, []);
    
      return (
        <body>
            <img src={Logo} alt="Star Wars"/>
            <div className="navbar">
                <nav>
                <Link to="/" >Home</Link> |{" "}
                <Link to="/filmes">Filmes</Link> |{" "}
                <Link to="/personagens">Personagens</Link> |{" "}
                <Link to="/planetas">Planetas</Link> |{" "}
                <Link to="/especies">Especies</Link> 
                </nav>
            </div>

            <h1>Lista de Espécies</h1>

            <div className="container">       
                {especies.map((especies, i) => {
                    return (
                        <div className="card" key={i}>
                          <h2>{especies.name}</h2>
                          <br></br>
                          <h3>Média-Altura: {especies.average_height}</h3>
                          <h3>Classificação: {especies.classification}</h3>
                          <h3>Designação: {especies.designation}</h3>
                          <h3>Cor-Pele: {especies.skin_colors}</h3>
                        </div>
                    )
                })}
            </div>
            
        </body>
       
    );
}

  