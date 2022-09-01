import { Link } from "react-router-dom";
import '../src/routes/Geral.css';
import Logo from '../src/assets/logo.png'

export default function App() {
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

      <h1>Página Principal</h1>

      <div className="container">
        <h3>Em Obras</h3>
      </div>

    </body>
    
  );
}
