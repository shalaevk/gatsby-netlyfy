import React from "react";
import logo from "../../static/logo.png";
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
            <Button as={Link} to="https://www.mazdausa.com/find-a-dealer" className="findBtn">Find a Dealer</Button>
            <div className="lang">
               <Link activeClassName="active" to="/"> EN </Link>
               <Link activeClassName="active" to="/ja">日本</Link>

            </div>
         </div>
      </Navbar.Collapse>
   </Navbar>
}

