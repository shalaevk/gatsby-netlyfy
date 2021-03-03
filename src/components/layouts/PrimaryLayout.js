import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from "gatsby";
import { Header } from "../Header"
import Footer from "../Footer"
import SEO from "../SEO"


const PrimaryLayout = (props) => {

   const data = useStaticQuery(graphql`
      query MenuQuery {
         wpPage(slug: {eq: "mazda"}) {
            acField {
               footerTitle
               leftFooterImg{
                   sourceUrl
               }
               footerSocial
               copywrite
            }
         }
         allWpMenu {
            edges {
               node {
                  slug
               menuItems {
                  nodes {
                     path
                     label
                  }
               }
            }
         }
      }
   }
   `)

   let headerMenu = data.allWpMenu.edges.filter((edge) => edge.node.slug === 'main-menu')
   let footerMenu = data.allWpMenu.edges.filter((edge) => edge.node.slug === 'footer-menu')

   const menu = headerMenu[0].node.menuItems.nodes.map((menuItem, index) => {
      return <Nav.Link key={index} as={Link} to={menuItem.path}>{menuItem.label}</Nav.Link>
   })
   const footerMenuArr = footerMenu[0].node.menuItems.nodes.map((menuItem, index) => {
      return <Nav.Link key={index} as={Link} to={menuItem.path}>{menuItem.label}</Nav.Link>
   })


   return <>
      <SEO title={props.title} description={props.description} />
      <Header menu={menu} />
      {props.children}
      <Footer menu={footerMenuArr} mainMenu={menu}
         title={data.wpPage.acField.footerTitle}
         img={data.wpPage.acField.leftFooterImg.sourceUrl}
         social={data.wpPage.acField.footerSocial}
         copy={data.wpPage.acField.copywrite}
      />
   </>
}

export default PrimaryLayout;


