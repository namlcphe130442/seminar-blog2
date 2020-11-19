const path = require("path")


exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve(`./src/template/index.js`)

  
  const result = await graphql(
    `
      {
        allContentfulPost {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allContentfulPost.edges


  if (posts.length > 0) {
    posts.forEach((post, index) => {
      createPage({
        path: post.node.slug,
        component: blogPost,
        context: {
          slug: post.node.slug,
          
        },
      })
    })
  }
}



