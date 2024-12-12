import "./members.scss";
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


import photo from "../../assets/tan1.webp"


const Members = () => {
  useEffect(() => {
    AOS.init();
  }, [])
    return (
        <section className="member-section spad">
            <Container 
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
              <Row>
                <Col lg={12}>
                  <div className="section-title">
                    <span>Our Team</span>
                    <h2>Top Designers</h2>
                  </div>
                </Col>
              </Row>
              <Row>
                {members.map((member, index) => (
                  <Col lg={4} md={6} key={index}>
                    <div className="member-item" style={{ backgroundImage: `url(${member.img})` }}>
                      <div className="mi-text">
                        <p>{member.description}</p>
                        <div className="mt-title">
                          <h4>{member.name}</h4>
                          <span>{member.title}</span>
                        </div>
                        <div className="mt-social">
                          {member.social.map((social, index) => (
                            <a href={social.url} key={index} className="social-icon">
                              <img src={social.icon} alt={social.platform} height="16" width="16"/>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Container>
          </section>
    )
}

const members = [
    {
      img: photo,
      name: 'Jacob Gomez',
      title: 'Designer',
      description: 'Quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
      social: [
        { platform: 'facebook', icon: 'https://unpkg.com/@icon/themify-icons/icons/facebook.svg', url: '/' },
        { platform: 'twitter', icon: 'https://unpkg.com/@icon/themify-icons/icons/twitter.svg', url: '/' },
        { platform: 'instagram', icon: 'https://unpkg.com/@icon/themify-icons/icons/instagram.svg', url: '/' },
        { platform: 'pinterest', icon: 'https://unpkg.com/@icon/themify-icons/icons/pinterest.svg', url: '/' },
      ]
    },
    {
      img: photo,
      name: 'Emma Smith',
      title: 'UI/UX Designer',
      description: 'Adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
      social: [
        { platform: 'facebook', icon: 'https://unpkg.com/@icon/themify-icons/icons/facebook.svg', url: '/' },
        { platform: 'twitter', icon: 'https://unpkg.com/@icon/themify-icons/icons/twitter.svg', url: '/' },
        { platform: 'instagram', icon: 'https://unpkg.com/@icon/themify-icons/icons/instagram.svg', url: '/' },
        { platform: 'pinterest', icon: 'https://unpkg.com/@icon/themify-icons/icons/pinterest.svg', url: '/' },
      ]
    },
    {
      img: photo,
      name: 'John Doe',
      title: 'Front-end Developer',
      description: 'Cras aliquam turpis tellus, quis laoreet lacus congue sed. Nullam at est quis urna vestibulum interdum.',
      social: [
        { platform: 'facebook', icon: 'https://unpkg.com/@icon/themify-icons/icons/facebook.svg', url: '/' },
        { platform: 'twitter', icon: 'https://unpkg.com/@icon/themify-icons/icons/twitter.svg', url: '/' },
        { platform: 'instagram', icon: 'https://unpkg.com/@icon/themify-icons/icons/instagram.svg', url: '/' },
        { platform: 'pinterest', icon: 'https://unpkg.com/@icon/themify-icons/icons/pinterest.svg', url: '/' },
      ]
    }
  ];

export default Members;