import "./heroSection.scss"
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect,useRef} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import photo from "../../assets/anime.mp4"

const HeroSection = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        AOS.init();
      }, [])
  

    useEffect(() => {
        const video = videoRef.current;
    
        const handleResize = () => {
          video.width = window.innerWidth;
          video.height = window.innerHeight;
        };
    
        window.addEventListener('resize', handleResize);
    
        video.onloadedmetadata = () => {
          video.play();
        };
    
        handleResize();
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);


    return(
        <section className="hero-section set-bg">
            <div className="video-background">
            <video ref={videoRef} src={photo} autoPlay muted loop id="bgVideo">
                <source src={photo} type="video/mp4" />
                Ваш браузер не поддерживает видео.
            </video>
            </div>
            <div className="textosnova" data-aos = "flip-right">
            <div className="hs-text">
                <Container>
                <Row>
                    <Col>
                    <center>
                        <span>
                        <br />
                        <font
                            style={{
                            WebkitTextStrokeColor: 'black',
                            WebkitTextStrokeWidth: 'thin',
                            color: '#ffffff',
                            zIndex: 2
                            }}
                        >
                            "Motion Design Keep People Wondering"
                        </font>
                        </span>
                        <h2>MDK.PW</h2>
                        <p>
                        Абсолютно любая работа для вашего<br />
                        проекта, которая подается с душой и<br />
                        уникальными ходовыми функциями.
                        </p>
                        <a href="/" className="primary-btn">
                        Заказать
                        </a>
                    </center>
                    </Col>
                </Row>
                </Container>
            </div>
            </div>
        </section>
    )
}


export default HeroSection;