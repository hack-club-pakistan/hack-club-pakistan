import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Hadiqa from "../components/hadiqa/hadiqa"
import Banner from '../components/banner/banner'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <Hadiqa />

  </Layout>
)

export default IndexPage
