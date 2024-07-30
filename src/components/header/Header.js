import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

const Header = () => {
  const [toggle,setToggle] = useState(false);
  const [toggleGallery,setToggleGallery] = useState(false);

  const handleToggle = () => {
    if(toggle){
      setToggle(false)
    }else{
      setToggle(true)
    }
  }

  const handleGallery = () => {
    if(toggleGallery){
      setToggleGallery(false)
    }else{
      setToggleGallery(true)
    }
  }

  return (
    <div className="header-section">
      <Container>
        <Row>
          <Col lg={2} md={2}>
            <div className="logo">
              <NavLink to="/">
                <img src="https://mdk.pw/img/logo.png" alt="" />
              </NavLink>
            </div>
          </Col>
          <Col lg={10} md={10}>
            <div expand="lg" className="main-menu mobile-menu">
                <ul>
                    <li>
                      <NavLink 
                        to="/" 
                        style={({ isActive }) => ({ color: isActive ? "#e32879" : '#ffffff' })}>
                        Главная
                      </NavLink>
                    </li>
                    <li>
                      <NavLink 
                        to="/about-us" 
                        style={({ isActive }) => ({ color: isActive ? "#e32879" : '#ffffff' })}>
                        FAQ
                      </NavLink>
                    </li>
                    <li>
                      <NavLink 
                        to="/blog" 
                        style={({ isActive }) => ({ color: isActive ? "#e32879" : '#ffffff' })}>
                        Blog
                      </NavLink>
                    </li>
                    <li>
                      <NavLink 
                        to="/gallery" 
                        style={({ isActive }) => ({ color: isActive ? "#e32879" : '#ffffff' })}>
                        Gallery
                      </NavLink>
                        <ul className="dropdown">
                            <li><NavLink to="/">Naoh</NavLink></li>
                            <li><NavLink to="/">Padis</NavLink></li>
                            <li><NavLink to="/">Jacob</NavLink></li>
                            <li><NavLink to="/">Gomez</NavLink></li>
                        </ul>
                    </li>
                    <li>
                      <NavLink 
                        to="/contact" 
                        style={({ isActive }) => ({ color: isActive ? "#e32879" : '#ffffff' })}>
                        Contact
                      </NavLink>
                    </li>
                </ul>
            </div>
          </Col>
        </Row>
        <div id="mobile-menu-wrap">
        <div className="slicknav_menu">
          <a  role="button"  className="slicknav_btn slicknav_collapsed" onClick={() => handleToggle()}>
            <span className="slicknav_menutxt">MENU</span>
          </a>
          <div className="slicknav_nav slicknav_hidden" aria-hidden="true" role="menu" style={{display: toggle ? "block" : "none"}}>
            <ul>
              <li>
                  <NavLink 
                        to="/" 
                        
                        >
                        Home
                  </NavLink>
              </li>
              <li>
                  <NavLink 
                        to="/about-us" 
                        >
                        About Us
                  </NavLink>
              </li>
              <li>
                  <NavLink 
                        to="/blog" >
                        Blog
                  </NavLink>
              </li>
              <li className="active slicknav_collapsed slicknav_parent">
                <NavLink to="/gallery" role="menuitem" aria-haspopup="true" className="slicknav_item slicknav_row" style={{outline: "none"}} >
                  Gallery
                  <span className="slicknav_arrow" role="button" onClick={() => handleGallery()}>              &#x2193;</span>
                </NavLink>
              </li>
              {toggleGallery ? (
                <>
                  <li><NavLink to="/">Naoh</NavLink></li>
                  <li><NavLink to="/">Padis</NavLink></li>
                  <li><NavLink to="/">Jacob</NavLink></li>
                  <li><NavLink to="/">Gomez</NavLink></li>
                </>
              ) : null}
              <li>
                  <NavLink
                        to="/contact" 
                        >
                        Contact
                  </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      </Container>
    </div>
  );
};

export default Header;
