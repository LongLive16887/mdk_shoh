import { Container, Row, Col } from 'react-bootstrap';
import "./aboutUsSection.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import photo from "../../assets/anime.mp4"


const AboutUsSection = () => {

    useEffect(() => {
      AOS.init();
    }, [])

    return (
        <section className="about-us-section spad">
            <Container>
              <Row>
                <Col lg={6}>
                  <div className="as-pic" data-aos = "fade-right">
                    <video src={photo} autoPlay muted loop style={{ borderRadius: '20px' }} id="bgVideo">
                      <source src={photo} type="video/mp4" />
                    </video>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="as-text" data-aos = "fade-left">
                    <div className="section-title">
                      <span>FAQ</span>
                      <h2>Общая информация</h2>
                    </div>
                    <p className="f-para">
                      В этом разделе вы сможете ознакомиться с условиями работы,
                      общей статистикой и самыми часто задаваемыми вопросами.
                    </p>
                    <p className="s-para">
                      Чаще всего главной проблемой является оформление ТЗ (Технического задания)
                      я стараюсь подать для вас готовый контент даже в качестве вашего основного проектного оформления.
                      Все работы выполняются до полного утверждения заказчика.
                    </p>
                    <a href="/" className="primary-btn">Читать подробнее</a>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
    )
}

export default AboutUsSection;