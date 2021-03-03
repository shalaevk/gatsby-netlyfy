import React from "react";
import { graphql } from "gatsby";
import PrimaryLayout from "./PrimaryLayout"



const BlogpostLayout = ({ data }) => {
   const title = data.wpPost.title
   const html = data.wpPost.content
   return <PrimaryLayout>

      <div className="container">
         <div className="">
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: html }}>
            </div>
         </div>
      </div>
   </PrimaryLayout>
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