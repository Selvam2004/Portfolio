import { Col, Row } from 'react-bootstrap';
import './App.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn,faGithub} from '@fortawesome/free-brands-svg-icons' 
import "bootstrap-icons/font/bootstrap-icons.css";
import Content from './content';
import Nav from './nav';
import About from './about';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Skills from './skills';
import Projects from './projects';
import Footer from './footer';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
    
     <Nav/>
     <Row className='w-100'>
      <Col md={1}> 
      <div className='logo d-flex flex-column justify-content-end m-4 pb-4' data-aos="fade-right" data-aos-delay="1000"  data-aos-duration="800">
        <div className='logo-item'><a href='https://www.linkedin.com/in/selvam-s-93a38126a' target='_blank'  rel="noreferrer"  alt="linkedin"><FontAwesomeIcon icon={faLinkedinIn} /></a></div>
        <div className='logo-item'><a href='https://github.com/Selvam2004' target='_blank'  rel="noreferrer"  alt="github"><FontAwesomeIcon  icon={faGithub} /></a></div>
        <div className='logo-item'><a  href="mailto:selvam032004@gmail.com" target="_blank"  rel="noreferrer"><i className="bi bi-envelope-fill"></i></a></div>
        <div className='logo-item'><a href='https://www.instagram.com/selvam_.04/'  target='_blank'  rel="noreferrer" alt="instagram"><i className="bi bi-instagram"></i></a></div>        
      </div>
      </Col> 
      <Col md={10}>
        <Content/> 
        <About/>      
        <Skills/>
        <Projects/>
        
      </Col>
     </Row>
     <Footer/>
    
    </>
  );
}

export default App;
