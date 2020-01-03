import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import Page from "../components/Page"
import Intro from "../components/Intro"
import Work from "../components/Work"
import Experiments from "../components/Experiments"
import { isPageInViewport } from "../utils/ui"
import arrowDownImg from "../images/arrow-down.png"
import Writings from "../components/Writings"
import GetInTouch from "../components/GetInTouch"
import StuffIKnow from "../components/StuffIKnow"

const ArrowImg = styled.img`
  position: fixed;
  height: 1rem;
  bottom: 1rem;
  right: 1rem;
  cursor: pointer;
`

const anchors = [
  "landing",
  "work",
  "stuff-i-am-good-at",
  "experiments",
  "writings",
  "get-in-touch",
]

const IndexPage = () => {
  const [currentAnchorIndex, setCurrentAnchorIndex] = useState(0)

  useEffect(() => {
    window.onscroll = () => {
      anchors.forEach((_anchor, _idx) => {
        const element = document.getElementById(_anchor)
        const isInViewport = isPageInViewport(element)
        if (isInViewport) {
          setCurrentAnchorIndex(_idx)
        }
      })
    }
  })

  const handleArrowDownClick = () => {
    const nextPageNode = document.getElementById(
      anchors[currentAnchorIndex + 1]
    )
    nextPageNode.scrollIntoView({ behavior: "smooth" })
    setCurrentAnchorIndex(currentAnchorIndex + 1)
  }

  return (
    <>
      <SEO title="Home" />
      <Layout>
        <Page anchors={anchors} anchorIndex={0}>
          <Intro />
        </Page>
        <Page anchors={anchors} anchorIndex={1}>
          <Work />
        </Page>
        <Page anchors={anchors} anchorIndex={2}>
          <StuffIKnow />
        </Page>
        <Page anchors={anchors} anchorIndex={3}>
          <Experiments />
        </Page>
        <Page anchors={anchors} anchorIndex={4}>
          <Writings />
        </Page>
        <Page anchors={anchors} anchorIndex={5}>
          <GetInTouch />
        </Page>
      </Layout>
      {anchors[currentAnchorIndex + 1] && (
        <ArrowImg
          src={arrowDownImg}
          alt="arrow down"
          onClick={handleArrowDownClick}
        />
      )}
    </>
  )
}

export default IndexPage
