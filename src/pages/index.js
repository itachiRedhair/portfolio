import React from "react"
import SEO from "../components/SEO"
import Intro from "../components/Intro"
import Layout from "../components/Layout"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Layout>
      <Intro />
    </Layout>
  </>
)

export default IndexPage
