import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPost = ({ data }) => {
  const post = data.contentfulPost

  return (
    <Layout>
      <SEO title="Page two" />
      <div style={{textAlign: "center" , minWidth: '80%'}}>
        <h1>{post.title}</h1>
        <p style={{ display: "block" }}>{post.subtille}</p>
      </div>
      <img
        src={post.image.fluid.src}
        alt={post.title}
        style={{ margin: " auto", marginBottom: "30px" }}
      />
      <div className="content">
        <div
          className="body"
          dangerouslySetInnerHTML={{
            __html: post.content.childContentfulRichText.html,
          }}
        />
      </div>

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default BlogPost
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      slug
      subtille
      image {
        fluid {
          src
        }
      }
      title
      content {
        childContentfulRichText {
          html
        }
      }
    }
  }
`
