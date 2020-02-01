import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Hadiqa from "../components/hadiqa/hadiqa"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Hadiqa />

  </Layout>
)

export default IndexPage
