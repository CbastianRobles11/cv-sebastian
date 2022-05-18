
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Principal from './Components/Principal';
import Navbar from './Components/Navbar';
import Contenido from './Components/Contenido';
import Footer from './Components/Footer';
import FormularioEmail from './Components/FormularioEmail';
import CvComun from './Components/CvComun';
import Page from './Components/Page';




function App() {
  return (
    
    <div style={{ backgroundColor: "black" }} >
      <Navbar  />
      <Page />

    </div>
   
  );
}

export default App;
