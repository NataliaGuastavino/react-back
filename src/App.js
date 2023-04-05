import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from './components/NavBar/NavBar';
import { Container } from "react-bootstrap";
import { ItemCount } from "./components/ItemCount/ItemCount";
import { Pika } from "./components/Pika/Pika";

function App() {
  return (
    <>
      <div className="App">
        <header className="menu">
          <NavBar />
        </header>
        <main>
          {/* Acá iriía el resto de la app */}

          <ItemListContainer greeting="Hola mundo" />

          <Container>
            <main>Hola, soy el contenido!</main>
          </Container>

          <ItemCount/>
          <Pika/>


          <Container>Hola, soy el footer</Container>

        </main>
      </div>

    </>
  );
}

export default App;
