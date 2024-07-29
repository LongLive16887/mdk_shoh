import { Container, Row, Col,Form } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import "./footer.scss"

const Footer = () => {
    return(
        <section className="footer-section">
        <Container>
          <Row>
            <Col lg={3} md={6}>
              <div className="footer-option">
                <div className="fo-logo">
                  <a href="/">
                    <img src="https://mdk.pw/img/logo.png" alt="Logo" />
                  </a>
                </div>
                <ul>
                  <li>Address: 60-49 Road 11378 New York</li>
                  <li>Phone: +65 11.188.888</li>
                  <li>Email: hello.colorlib@gmail.com</li>
                </ul>
                <div className="fo-social">
                <a href="/"><img src="https://unpkg.com/@icon/themify-icons@1.0.1-alpha.3/icons/facebook.svg" alt="Facebook" height="16" width="16"/></a>
                <a href="/"><img src="https://unpkg.com/@icon/themify-icons@1.0.1-alpha.3/icons/instagram.svg" alt="Instagram" height="16" width="16"/></a>
                <a href="/"><img src="https://unpkg.com/@icon/themify-icons@1.0.1-alpha.3/icons/twitter.svg" alt="Twitter" height="16" width="16"/></a>
                <a href="/"><img src="https://unpkg.com/@icon/themify-icons@1.0.1-alpha.3/icons/pinterest.svg" alt="Pinterest" height="16" width="16"/></a>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="footer-widget fw-links">
                <h5>Useful Links</h5>
                <ul>
                  <li><NavLink to="/about-us">About Us</NavLink></li>
                  <li><NavLink to="/blog">Model</NavLink></li>
                  <li><NavLink to="/contact">Contact</NavLink></li>
                  <li><NavLink to="/gallery">Serivius</NavLink></li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="footer-widget">
                <h5>Join The Newsletter</h5>
                <p>Get E-mail updates about our latest shop and special offers.</p>
                <Form action="/" className="news-form">
                  <Form.Control type="text" placeholder="Enter your mail" />
                  <a type="submit" className="primary-btn">Subscribe</a>
                </Form>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="footer-widget">
                <h5>Instagram</h5>
                <div className="insta-pic">
                  <img src="https://mdk.pw/img/instagram/instagram-1.jpg" alt="Instagram" />
                  <img src="https://mdk.pw/img/instagram/instagram-2.jpg" alt="Instagram" />
                  <img src="https://mdk.pw/img/instagram/instagram-3.jpg" alt="Instagram" />
                  <img src="https://mdk.pw/img/instagram/instagram-4.jpg" alt="Instagram" />
                  <img src="https://mdk.pw/img/instagram/instagram-5.jpg" alt="Instagram" />
                  <img src="https://mdk.pw/img/instagram/instagram-6.jpg" alt="Instagram" />
                </div>
              </div>
            </Col>
          </Row>
          <div className="copyright-text">
            <p>
              Copyright &copy;{new Date().getFullYear()}All rights reserved | This template is made with <img src="https://unpkg.com/@icon/themify-icons@1.0.1-alpha.3/icons/heart.svg" alt="Pinterest" height="16" width="16"/> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
            </p>
          </div>
        </Container>
      </section>
    )
}

export default Footer;
