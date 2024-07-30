import { Container, Row, Col } from 'react-bootstrap';
import "./servicesSection.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ServicesSection = () => {
    useEffect(() => {
      AOS.init();
    }, [])
    return (
        <section className="services-section spad">
            <Container>
              <Row>
                <Col lg={12}>
                  <div className="section-title">
                    <span>Абсолютно любой вид работы</span>
                    <h2>Я обучаюсь вместе с вашими идеями и предложениями</h2>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={4} md={6}>
                  <div className="service-item" data-aos = "fade-right">
                    <img src="https://mdk.pw/img/services/service-1.png" alt="Брендинг одежды" />
                    <h4>Брендинг одежды</h4>
                    <p>Делаю принты для вашей одежды. А так-же занимаюсь принтами одежды для ваших игровых проектов.</p>
                  </div>
                </Col>
                <Col lg={4} md={6}>
                  <div className="service-item" data-aos = "fade-down">
                    <img src="https://mdk.pw/img/services/service-2.png" alt="Подача контента" />
                    <h4>Подача контента</h4>
                    <p>Придумаю для вас уникальные статьи и оформления, правильные группировки товаров и прочие мелочи.</p>
                  </div>
                </Col>
                <Col lg={4} md={6}>
                  <div className="service-item" data-aos = "fade-left">
                    <img src="https://mdk.pw/img/services/service-3.png" alt="Реклама/Промо-ролики" />
                    <h4>Реклама/Промо-ролики</h4>
                    <p>Делаю отличные промо-ролики с озвучкой популярных исполнителей и медийных личностей интернета.</p>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
    )
}

export default ServicesSection;