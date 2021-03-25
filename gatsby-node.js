const path = require(`path`)
const languages = [
   {
      path: "/",
      code: "en_US",
      language: "en"

   },
   {
      path: "/ja",
      code: "ja",
      language: "ja"

   },
]
exports.createPages = async ({ actions: { createPage } }) => {
   const HomepageTemplate = path.resolve("./src/components/layouts/Homepage.js")
   languages.forEach(lang => {
      createPage({
         path: lang.path,
         component: HomepageTemplate,
         context: {
            lang: lang.code,
            language: lang.language
         },
      })
   })
}



