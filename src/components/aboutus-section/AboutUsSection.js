import { Container, Row, Col } from 'react-bootstrap';
import "./aboutUsSection.scss"
const AboutUsSection = () => {
    return (
        <section className="about-us-section spad">
            <Container>
              <Row>
                <Col lg={6}>
                  <div className="as-pic">
                    <video src="https://mdk.pw/img/dva1.mp4" autoPlay muted loop style={{ borderRadius: '20px' }} id="bgVideo">
                      <source src="https://mdk.pw/img/dva1.mp4" type="video/mp4" />
                    </video>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="as-text">
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