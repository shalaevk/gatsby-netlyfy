import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Nav } from 'react-bootstrap';
import { Link } from "gatsby";
import { Header } from "../Header"
import Footer from "../Footer"
import SEO from "../SEO"


const PrimaryLayout = (props) => {

   const data = useStaticQuery(graphql`
      query MenuQuery {
         wpPage(slug: {eq: "glavnaya"}) {
            locale {
               locale
            }
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

   let headerMenu = props.menu.edges.filter((edge) => edge.node.slug === 'main-menu' || edge.node.slug === 'main-menu-ja')
   let footerMenu = props.menu.edges.filter((edge) => edge.node.slug === 'footer-menu' || edge.node.slug === 'footer-menu-ja'  )


   const menu = headerMenu[0].node.menuItems.nodes.map((menuItem, index) => {
      return <Nav.Link key={index} as={Link} to={menuItem.path}>{menuItem.label}</Nav.Link>
   })
   const footerMenuArr = footerMenu[0].node.menuItems.nodes.map((menuItem, index) => {
      return <Nav.Link key={index} as={Link} to={menuItem.path}>{menuItem.label}</Nav.Link>
   })


   return <>
      <SEO />
      <Header menu={menu} />
      {props.children}
      <Footer menu={footerMenuArr} mainMenu={menu}
         title={props.title}
         img={props.image}
         social={props.footerSocial}
         copy={props.copiright}
      />
   </>
}

export default PrimaryLayout;


