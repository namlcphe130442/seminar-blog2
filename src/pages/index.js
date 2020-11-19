import React from "react"
import Layout from "../components/layout"
import Post from "../components/post"
import SEO from "../components/seo"

const Home = ({ data }) => {
  const posts = data.allContentfulPost.edges

  return (
    <Layout>
      <SEO title="Home" />
      {posts.map((post, index) => (
        <Post
          key={index}
          title={post.node.title}
          time={post.node.date}
          image={post.node.image.fluid.src}
          slug={post.node.slug}
          content={post.node.subtille}
        />
      ))}
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    allContentfulPost {
      edges {
        node {
          date
          image {
            fluid {
              src
            }
          }
          slug
          subtille
          title
        }
      }
    }
  }
`
