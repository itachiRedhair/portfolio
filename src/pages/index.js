import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import Page from "../components/Page"
import Intro from "../components/Intro"
import Work from "../components/Work"
import Experiments from "../components/Experiments"
import Writings from "../components/Writings"
import GetInTouch from "../components/GetInTouch"
import StuffIKnow from "../components/StuffIKnow"

const anchors = [
  "landing",
  "work",
  "stuff-i-am-good-at",
  "experiments",
  "writings",
  "get-in-touch",
]

const IndexPage = ({ data }) => {
  const [description, setDescription] = useState(null)
  const [name, setName] = useState(null)
  const [image, setImage] = useState(null)
  const [experiments, setExperiments] = useState(null)
  const [stuffIAmLearning, setStuffIAmLearning] = useState(null)
  const [stuffIKnow, setStuffIKnow] = useState(null)
  const [work, setWork] = useState(null)
  const [writings, setWritings] = useState(null)

  useEffect(() => {
    const allNodes = data.allMarkdownRemark.nodes
    let _name,
      _image,
      _desc,
      _expts,
      _stuffKnow,
      _stuffLearning,
      _work,
      _writings

    allNodes.forEach(aNode => {
      _name = aNode.frontmatter["name"] ? aNode.frontmatter["name"] : _name
      _image = aNode.frontmatter["image"] ? aNode.frontmatter["image"] : _image
      _desc = aNode.frontmatter["description"]
        ? aNode.frontmatter["description"]
        : _desc
      _expts = aNode.frontmatter["experiments"]
        ? aNode.frontmatter["experiments"]
        : _expts
      _stuffKnow = aNode.frontmatter["stuffIKnow"]
        ? aNode.frontmatter["stuffIKnow"]
        : _stuffKnow
      _stuffLearning = aNode.frontmatter["stuffIAmLearning"]
        ? aNode.frontmatter["stuffIAmLearning"]
        : _stuffLearning
      _work = aNode.frontmatter["work"] ? aNode.frontmatter["work"] : _work
      _writings = aNode.frontmatter["writings"]
        ? aNode.frontmatter["writings"]
        : _writings
    })
    setName(_name)
    setImage(_image)
    setDescription(_desc)
    setWork(_work)
    setExperiments(_expts)
    setStuffIAmLearning(_stuffLearning)
    setStuffIKnow(_stuffKnow)
    setWritings(_writings)
  }, data)

  return (
    <>
      <SEO title="Home" />
      <Layout>
        <Page anchors={anchors} anchorIndex={0}>
          <Intro name={name} description={description} image={image} />
        </Page>
        <Page anchors={anchors} anchorIndex={1}>
          <Work workDesc={work} />
        </Page>
        <Page anchors={anchors} anchorIndex={2}>
          <StuffIKnow
            stuffIKnowList={stuffIKnow || []}
            stuffIAmLearningList={stuffIAmLearning || []}
          />
        </Page>
        <Page anchors={anchors} anchorIndex={3}>
          <Experiments experimentsList={experiments || []} />
        </Page>
        <Page anchors={anchors} anchorIndex={4}>
          <Writings writingsList={writings || []} />
        </Page>
        <Page anchors={anchors} anchorIndex={5}>
          <GetInTouch />
        </Page>
      </Layout>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          description
          experiments {
            description
            heading
            link
          }
          image
          name
          stuffIAmLearning {
            name
          }
          stuffIKnow {
            name
          }
          work
          writings {
            link
            heading
          }
        }
      }
    }
  }
`
