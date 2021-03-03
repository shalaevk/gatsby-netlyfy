import React from "react";
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from "gatsby";
import logo from "../../static/logo.svg";
import cls from "./Footer.module.css"


const Footer = (props) => (
   <footer className={cls.footer}>
      <div className="container-fluid ">
         <div className="footer-title text-center">
            {props.title}
         </div>
         <div className="d-flex justify-content-around footer-middle" >
            <div className="footer-img footer-item">
               <img src={props.img} alt="mazda" ></img>
            </div>
            <div className="footer-logo text-center footer-item">
               <Navbar.Brand as={Link} to="/"><img src={logo} /></Navbar.Brand>
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
         </div>
      </div>
   </footer>
)

export default Footer