import { Col, Row } from "react-bootstrap";

export default function Skills(){
    return (
        <>
        <div id="skills" className="min-vh-100">
            <h1 className="text-center" style={{color:"aquamarine"}}>My Skills</h1>
            <div className="d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
            <div className="skill mt-3">
            <Row className="mt-4">
                <Col md={1}></Col>
                <Col>
                <div data-aos="zoom-in" data-aos-delay="100">
                <img className="skill-img rounded-circle" src={require('./images/react.png')} alt="html"/>
                <h5 className="text-white ms-4">React</h5>
                </div>
                </Col>
                <Col>
                <div data-aos="zoom-in" data-aos-delay="150">
                <img className="skill-img rounded-circle" src={require('./images/node.png')} alt="html"/>
                <h5 className="text-white ms-3"  >Node JS</h5></div>
                </Col>
                <Col>
                <div data-aos="zoom-in" data-aos-delay="200">
                <img className="skill-img rounded-circle " src={require('./images/express.png')} alt="html"/>
                <h5 className="text-white ms-2">Express JS</h5></div>
                </Col>
                <Col>
                <div data-aos="zoom-in" data-aos-delay="250">
                <img className="skill-img rounded-circle" src={require('./images/mongo.png')} alt="html"/>
                <h5 className="text-white ms-2">MongoDB</h5></div>
                </Col>
                <Col md={1}></Col>
            </Row>

            <Row className="mt-5">
                <Col md={1}></Col>
                <Col>
                <div data-aos="zoom-in" data-aos-delay="250">
                <img className="skill-img rounded-circle" src={require('./images/html.png')} alt="html"/>
                <h5 className="text-white ms-4">HTML</h5>
                </div>
                </Col>
                <Col>
                <div data-aos="zoom-in" data-aos-delay="300">
                <img className="skill-img rounded-circle" src={require('./images/css.png')} alt="html"/>
                <h5 className="text-white" style={{marginLeft:"33px"}}>CSS</h5>
                </div>
                </Col>
                <Col>
                <div data-aos="zoom-in" data-aos-delay="350">
                <img className="skill-img rounded-circle " src={require('./images/js.png')} alt="html"/>
                <h5 className="text-white ms-2">JavaScript</h5>
                </div>
                </Col>
                <Col>
                <div data-aos="zoom-in" data-aos-delay="400">
                <img className="skill-img rounded-circle" src={require('./images/git.png')} alt="html"/>
                <h5 className="text-white ms-4">github</h5>
                </div>
                </Col>
                <Col md={1}></Col>
            </Row>

            <Row className="mt-5">
                <Col md={1}></Col>
                <Col>
                <div data-aos="zoom-in" data-aos-delay="450">
                <img className="skill-img rounded-circle" src={require('./images/c.png')} alt="html"/>
                <h5 className="text-white ms-5">C</h5>
                </div>
                </Col>
                <Col>
                <div data-aos="zoom-in" data-aos-delay="500">
                <img className="skill-img rounded-circle" src={require('./images/java.png')} alt="html"/>
                <h5 className="text-white" style={{marginLeft:"33px"}}>Java</h5>
                </div>
                </Col>

                <Col>
                <div data-aos="zoom-in" data-aos-delay="550">
                <img className="skill-img rounded-circle" src={require('./images/mysql.png')} alt="html"/>
                <h5 className="text-white ms-4">MySQL</h5>
                </div>
                </Col>
                <Col>
                <div data-aos="zoom-in" data-aos-delay="600">
                <img className="skill-img rounded-circle " src={require('./images/vs.png')} alt="html"/>
                <h5 className="text-white ms-3">VS Code</h5>
                </div>
                </Col>
                <Col md={1}></Col>
            </Row>
            </div>
            </div>
        </div>
        </>
    );
}