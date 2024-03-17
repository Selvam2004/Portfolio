import {  Carousel, Col, Row } from "react-bootstrap";

 
export default function Projects(){
    return(
        <>
         <div id="project" className="min-vh-100 mb-4">
         <h1 className="text-center mb-5" style={{color:"aquamarine"}}>My Projects</h1>
         <div  data-aos="fade-up">
         <div className="pr-rotate d-flex justify-content-center">
             <div className="rerotate mt-5 w-100">
              <Carousel variant="light" interval={null} className="mt-5">
                <Carousel.Item>
                    <Row>
                        <Col md={1}></Col> 
                        <Col md={5} >
                            <div className="pro-card"> 
                            <h3 style={{color:"aquamarine"}} >Trip Advisor</h3>
                            <p>This project offers detailed destination information alongside hotel and restaurant booking functionality,empowering users to plan their trips conveniently in one platform</p>
                            <a href="http://trip-advisor-phi.vercel.app"  target='_blank'  rel="noreferrer" ><button className="pro-btn">Go to Project</button></a>
                            </div>
                        </Col>
                        <Col  md={5}><img src={require('./images/pro1.png')} className="pro-ig" alt="project"/>
                        </Col>
                        <Col md={2}></Col>
                    </Row>
                    
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col md={1}></Col> 
                        <Col md={5} >
                            <div className="pro-card"> 
                            <h3 style={{color:"aquamarine"}} >Personal Library</h3>
                            <p>The Personal Library help users organize and manage their personal book collections. Users can add books to their library, mark their read status, search for specific books, and update their collection as needed.</p>
                            <a href="https://github.com/Selvam2004/PersonalLibrary"  target='_blank'  rel="noreferrer" ><button className="pro-btn">Go to Project</button></a>
                            </div>
                        </Col>
                        <Col  md={5}><img src={require('./images/pro2.png')} className="pro-ig" alt="project"/>
                        </Col>
                        <Col md={2}></Col>
                    </Row>
                    
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col md={1}></Col> 
                        <Col md={5} >
                            <div className="pro-card"> 
                            <h3 style={{color:"aquamarine"}} >Quizz</h3>
                            <p>In this Quizz app each question comes with a time limit, adding excitement and challenge to your quiz experience.At the end of each quiz, your score is displayed, allowing you to see how well you did..</p>
                            <a href="https://github.com/Selvam2004/JSQuiz"  target='_blank'  rel="noreferrer" ><button className="pro-btn">Go to Project</button></a>
                            </div>
                        </Col>
                        <Col  md={5}><img src={require('./images/pro3.png')} className="pro-ig" alt="project"/>
                        </Col>
                        <Col md={2}></Col>
                    </Row>
                    
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col md={1}></Col> 
                        <Col md={5} >
                            <div className="pro-card"> 
                            <h3 style={{color:"aquamarine"}} >Blog Website</h3>
                            <p>The Blog Website offers a dynamic space where both creators and readers converge to exchange ideas, inspire one another, and expand their horizons.This empowers you to publish your own blogs effortlessly. </p>
                            <a href="https://github.com/Selvam2004/BlogSite" target='_blank'  rel="noreferrer" ><button className="pro-btn">Go to Project</button></a>
                            </div>
                        </Col>
                        <Col  md={5}><img src={require('./images/pro4.png')} className="pro-ig" alt="project"/>
                        </Col>
                        <Col md={2}></Col>
                    </Row>
                    
                </Carousel.Item>
 
              </Carousel>
            </div>
        </div>
        </div>
         </div>
        </>
    );
}