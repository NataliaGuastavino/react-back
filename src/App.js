import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { Container } from "react-bootstrap";
import { ItemCount } from "./components/ItemCount/ItemCount";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import NavBar from 'react-bootstrap/Navbar';

function App() {
  return (
    <>
      <div className="App">
        {/* <header className="App-header">
      <NavBar bg="light" variant="light">
            <Container>
              <NavBar.Brand href="#home">Port of Mokha</NavBar.Brand>
              <Nav className="NavBar">
                <Nav.Link href="#Cofee">Cofee</Nav.Link>
                <Nav.Link href="#Brew Guides">Brew Guides</Nav.Link>
                <Nav.Link href="#All products">All products</Nav.Link>
              </Nav>
            </Container>
          </NavBar>
        </header>  */}
        <div className="menu">
          <NavBar />
        </div>
        

        <ItemListContainer greeting="Hola mundo" />

        <Container>
          <main>Hola, soy el contenido!</main>
        </Container>

        <ItemCount/>


        <Container>Hola, soy el footer</Container>
      </div>
    </>
  );
}

export default App;
