import { Container, Row ,Col} from "react-bootstrap";

export default function Nav(){
    return (
        <Container>
        <nav>
          <Row id="home" className="nav-bg">
           <Col md={10}>
           <ul className='nav'>
            <li className='nav-item'><div data-aos="zoom-in"><a href='#home'>Home</a></div></li>
            <li className='nav-item'><div data-aos="zoom-in" data-aos-delay="100"><a href='#about'>About</a></div></li>
            <li className='nav-item'><div data-aos="zoom-in" data-aos-delay="300"><a href='#skills'>Skills</a></div></li>
            <li className='nav-item'><div data-aos="zoom-in" data-aos-delay="200"><a href='#project'>Projects</a></div></li>
          </ul> 
           </Col>
           <Col md={2}>
           <p className='lang mt-2'>
          English
          <input type="checkbox" className="theme-checkbox  ms-3 me-3"/>
          Japanese
         </p>
           </Col>
          </Row> 
        </nav>
      </Container>
    );
}