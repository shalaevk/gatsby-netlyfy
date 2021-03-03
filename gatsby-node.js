const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path")
exports.onCreateNode = ({ node, getNode, actions }) => {

   const { createNodeField } = actions;

   if (node.internal.type === "allWpPost") {
      const slug = createFilePath({ node, getNode, basePath: "markdown-pages" });
      createNodeField({
         node,
         name: "slug",
         value: slug
      })
   }
}

exports.createPages = ({ graphql, actions }) => {
   const { createPage } = actions;

   return graphql(`
   query MyQuery {
      allWpPost {
        nodes {
          title
          content
          excerpt
          slug
        }
      }
    }`).then(result => {
      result.data.allWpPost.nodes.forEach((node) => {
         createPage({
            path: node.slug,
            component: path.resolve('./src/components/layouts/BlogpostLayout.js'),
            context: {
               slug: node.slug
            }
         })
      })
   })
}