import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import './Geral.css';
import Logo from '../assets/logo.png';

export default function Planetas() {
   
    const [planeta, setPlaneta] = useState([]); 
  
    useEffect(() => {
      async function fetchData() {
        const response = await fetch(`https://swapi.dev/api/planets/?format=json`)
        const data = await response.json();
    
        setPlaneta(data.results);
        
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

          <h1>Lista de Planetas</h1>

          <div className="container">       
              {planeta.map((planeta, i) => {
                  return (
                      <div className="card" key={i}>
                        <h2>{planeta.name}</h2>
                        <br></br>
                        <h3>Clima: {planeta.climate}</h3>
                        <h3>Diametro: {planeta.diameter}</h3>
                        <h3>Gravidade: {planeta.gravity}</h3>
                        <h3>População: {planeta.population}</h3>
                      </div>
                  )
              })}
          </div>
          
      </body>
     
    );
  }
