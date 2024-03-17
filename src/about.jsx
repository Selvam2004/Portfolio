
export default function About(){

    return (
        <>       
         <div id="about" className="min-vh-100">
        <div data-aos="fade-up" data-aos-delay="200"> 

            <div className="rotate d-flex justify-content-center">
             <div className="rerotate mt-5">
                <div className='box-container'>
                <div className='box1'><img src={require('./images/photo.JPG')} className='img' alt='selvam'/></div>
                <div className='box2'>
                    <h2 className='fs-1'>About me</h2>
                    <p className='text-white fs-5 mt-4 pe-4'>Hello there! I'm Selvam . I'm a pre-final year student at Karpagam College of Engineering, majoring in Information Technology.
                    Familiar with database management systems like MongoDB and MySQ.
                    Capable of seamlessly integrating front-end and back-end components to develop dynamic web applications from concept to deployment.
                    </p>
                   </div>              
                </div>
 
             </div>
            </div>
        </div>
        </div>
        </>
    );
}