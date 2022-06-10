
import './App.css';
import Header from './Header/Header';
import Container from './components/Container';
import {BrowserRouter} from 'react-router-dom';
import Footer from './Footer/Footer';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Container/>
    <Footer/>
    
    
    </BrowserRouter>
    
    </>
  );
}

export default App;
