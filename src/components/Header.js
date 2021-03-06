import React from "react";
import logo from "../../static/logo.svg";
import triangle from "../../static/triangle.svg"
import { Link } from "gatsby";
import { Navbar, Nav, Button } from 'react-bootstrap';


export const Header = (props) => {

   return <Navbar expand="lg">
      <Navbar.Brand as={Link} to="/"><img src={logo} alt="Logo" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="m-auto nav-wrapper">
            {props.menu}
         </Nav>

         <div className="btnWrap row">
            <Button className="findBtn">Find a Dealer</Button>
            <div className="lang">
               <span>EN</span>
               <img src={triangle} alt="triangle"></img>
            </div>
         </div>
      </Navbar.Collapse>
   </Navbar>
}

