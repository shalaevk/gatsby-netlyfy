import React from "react";
import { graphql } from "gatsby";
import Header from "../Header";
import Footer from "../Footer";



const BlogpostLayout = ({ data }) => {
   const title = data.wpPost.title
   const html = data.wpPost.content
   return <div>
      <Header />
      <div className="container">
         <div className="">
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: html }}>
            </div>
         </div>
      </div>
      <Footer />
   </div>
}


export default BlogpostLayout;


export const query = graphql`

   query($slug: String!) {
      wpPost(slug: {eq: $slug}) {
         content
         title
         excerpt
         slug
         featuredImage {
            node {
              sourceUrl
            }
          }
       }
 }

 `