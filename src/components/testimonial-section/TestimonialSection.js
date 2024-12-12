import "./testimonialSection.scss"
import { Row, Col } from 'react-bootstrap';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import photo from "../../assets/tan1.webp"

const TestimonialSection = () => {

    const options = {
        items: 2,
        dots: true,
        loop: true,
        smartSpeed: 1200,
        margin: 30,
        responsive: {
          320: {
            items: 1,
          },
          480: {
            items: 1,
          },
          992: {
            items: 2,
          },
        },
      };
    
    
    return(
        <section className="testimonial-section spad">
            <div className="container">
              <Row>
                <OwlCarousel className="testimonial-slider" {...options}>
                  {testimonials.map((testimonial, index) => (
                    <Col lg = {6} key ={index}>
                      <div className="testimonial-item">
                        <div className="ti-pic">
                          <img src={photo} alt={testimonial.name} />
                        </div>
                        <div className="ti-text">
                          <div className="ti-title">
                            <h4>{testimonial.name}</h4>
                            <span>{testimonial.title}</span>
                          </div>
                          <p>{testimonial.text}</p>
                        </div>
                      </div>
                    </Col >
                  ))}
                </OwlCarousel>
              </Row>
            </div>
          </section>
    )
}


const testimonials = [
    {
      img: 'https://mdk.pw/img/testimonial/testimonial-1.jpg',
      name: 'Travis Crawford',
      title: 'Designer',
      text: 'Adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    },
    {
      img: 'https://mdk.pw/img/testimonial/testimonial-2.jpg',
      name: 'Noah Padilla',
      title: 'Designer',
      text: 'Adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    },
    {
      img: 'https://mdk.pw/img/testimonial/testimonial-3.jpg',
      name: 'Noah Padilla',
      title: 'Designer',
      text: 'Adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    },
    {
      img: 'https://mdk.pw/img/testimonial/testimonial-4.jpg',
      name: 'Noah Padilla',
      title: 'Designer',
      text: 'Adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    }
  ];
  


export default TestimonialSection;