import React from "react";
import { Navbar } from 'react-bootstrap';
import { Link } from "gatsby";
import logo from "../../static/18mazda_logo_global_nav3.png";
import cls from "./Footer.module.css"


const Footer = (props) => (
   <footer className={cls.footer}>
      <div className="container-fluid footer-container">
         <div className="footer-title text-center">
            {props.title}
         </div>
         <div className="d-flex justify-content-around footer-middle" >
            <div className="footer-img footer-item">
               <img src={props.img} alt="mazda" ></img>
            </div>
            <div className="footer-logo text-center footer-item">
               <Navbar.Brand as={Link} to="/"><img src={logo} alt="Logo" /></Navbar.Brand>
            </div>
            <div className="footer-social text-right footer-item" dangerouslySetInnerHTML={{ __html: props.social }}></div>
         </div>
         <div className="footer-main-menu d-flex justify-content-center">
            {props.mainMenu}
         </div>
         <div className="footer-sub-menu d-flex justify-content-center">
            {props.menu}
         </div>
         <div className="copywrite text-center">
            {props.copy}
            <br/>
            <a href="https://www.s-tet.com.ua/en/" className="copywrite copy-des" target="_blank" >DEVELOPED BY: ESTET DESIGN GROUP</a>
         </div>
      </div>
   </footer>
)

export default Footer