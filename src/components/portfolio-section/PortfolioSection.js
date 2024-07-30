import "./portfolioSection.scss"
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const PortfolioSection = () => {

  useEffect(() => {
    AOS.init();
  }, [])


    return(
        <section className="portfolio-section spad">
            <Container>
              <Row>
                <Col lg={12}>
                  <div className="section-title">
                    <span>Моё портфолио</span>
                    <h2>3D и 2D оформления тем/баннеров/аватарок/статей</h2>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <div 
                    className="portfolio-item large-item" 
                    data-aos = "flip-right"
                    style={{ backgroundImage: 'url(https://nztcdn.com/files/bcea6246-9461-4d6c-b958-42a54a155f22.webp)' }}
                  >
                    <div className="pi-hover">
                      <a href="/" className="chain-icon">
                        <img height="32" width="32" src="https://unpkg.com/@icon/themify-icons/icons/link.svg" alt="Link Icon" />
                      </a>
                      <a href="https://nztcdn.com/files/bcea6246-9461-4d6c-b958-42a54a155f22.webp" className="search-icon image-popup">
                        <img height="32" width="32" src="https://unpkg.com/@icon/themify-icons/icons/search.svg" alt="Search Icon" />
                      </a>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div 
                  data-aos = "flip-right"
                    className="portfolio-item" 
                    style={{ backgroundImage: 'url(https://i.imgur.com/RtpTfp0.gif)' }}
                  >
                    <div className="pi-hover">
                      <a href="/" className="chain-icon">
                        <img height="32" width="32" src="https://unpkg.com/@icon/themify-icons/icons/link.svg" alt="Link Icon" />
                      </a>
                      <a href="https://i.imgur.com/RtpTfp0.gif" className="search-icon image-popup">
                        <img height="32" width="32" src="https://unpkg.com/@icon/themify-icons/icons/search.svg" alt="Search Icon" />
                      </a>
                    </div>
                  </div>
                  <Row>
                    <Col md={6}>
                      <div
                      data-aos = "flip-right"
                        className="portfolio-item" 
                        style={{ backgroundImage: 'url(https://nztcdn.com/files/866f71eb-0d38-4935-9e2d-9d7e5f36fe20.webp)' }}
                      >
                        <div className="pi-hover">
                          <a href="/" className="chain-icon">
                            <img height="32" width="32" src="https://unpkg.com/@icon/themify-icons/icons/link.svg" alt="Link Icon" />
                          </a>
                          <a href="https://nztcdn.com/files/866f71eb-0d38-4935-9e2d-9d7e5f36fe20.webp" className="search-icon image-popup">
                            <img height="32" width="32" src="https://unpkg.com/@icon/themify-icons/icons/search.svg" alt="Search Icon" />
                          </a>
                        </div>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div 
                      data-aos = "flip-right"
                        className="portfolio-item" 
                        style={{ backgroundImage: 'url(https://mdk.pw/img/portfolio/portfolio-4.jpg)' }}
                      >
                        <div className="pi-hover">
                          <a href="/" className="chain-icon">
                            <img height="32" width="32" src="https://unpkg.com/@icon/themify-icons/icons/link.svg" alt="Link Icon" />
                          </a>
                          <a href="https://mdk.pw/img/portfolio/portfolio-4.jpg" className="search-icon image-popup">
                            <img height="32" width="32" src="https://unpkg.com/@icon/themify-icons/icons/search.svg" alt="Search Icon" />
                          </a>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
    )
}


export default PortfolioSection;