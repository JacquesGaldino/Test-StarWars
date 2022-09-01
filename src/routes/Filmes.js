import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import './Geral.css';
import Logo from '../assets/logo.png';

export default function Filmes() {

    const [filmes, setFilmes] = useState([]); 

    useEffect(() => {
        async function fetchData() {
          const response = await fetch(`https://swapi.dev/api/films/?format=json`)
          const data = await response.json();
      
          setFilmes(data.results);
          
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

            <h1>Lista de Filmes</h1>

            <div className="container">       
                {filmes.map((filmes, i) => {
                    return (
                        <div className="card" key={i}>
                            <h2>{filmes.title}</h2>
                            <br></br>
                            <h3>Diretor: {filmes.director}</h3>
                            <h3>Episode: {filmes.episode_id}</h3>
                            <h3>Lançamento: {filmes.release_date}</h3>
                        </div>
                    )
                })}
            </div>
            
        </body>
       
    );
  }