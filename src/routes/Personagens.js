import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import './Geral.css';
import Logo from '../assets/logo.png';

export default function Personagens() {
    
    const [personagens, setPersonagens] = useState([]); 
    const [filmes, setFilmes] = useState([]); 
    
    useEffect(() => {
        async function fetchData() {
          const response = await fetch(`https://swapi.dev/api/people/?format=json`)
          const data = await response.json();
      
          setPersonagens(data.results);
          
        }
        
        fetchData();
      }, []);

      
      async function filmeData() {
        const response = await fetch(`https://swapi.dev/api/films/?format=json`)
        const data = await response.json();
      
        setFilmes(data.results);

        console.log(data.results);

      }
        
      filmeData();
      
    
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

            <h1>Lista de Personagens</h1>

            <div className="container">       
                {personagens.map((personagens, i) => {
                    return (
                        <div className="card" key={i}>
                            <h2>{personagens.name}</h2>
                            <br></br>
                            <h3>Altura: {personagens.height}</h3>
                            <h3>Cor-Cabelo: {personagens.hair_color}</h3>
                            <h3>Peso: {personagens.mass}</h3>
                            <h3>Gênero: {personagens.gender}</h3>
                            <h3>
                            {/* {personagens.films} */}
                            </h3>
                        </div>
                    )
                })}
            </div>
            
        </body>
       
    );
  }

  