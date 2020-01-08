import React from "react"
import styled from "@emotion/styled"
import arrowDownImg from "../images/arrow-down.png"

const Page = styled.section`
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
`

const Container = styled.div`
  max-width: 650px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ArrowImg = styled.img`
  position: relative;
  height: 1rem;
  cursor: pointer;
`

export default ({ children, anchors, anchorIndex }) => {
  const handleArrowDownClick = () => {
    const nextPageNode = document.getElementById(anchors[anchorIndex + 1])
    nextPageNode.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <Page id={anchors[anchorIndex]}>
      <Container>{children}</Container>
      {anchors[anchorIndex + 1] && (
        <ArrowImg
          src={arrowDownImg}
          alt="arrow down"
          onClick={handleArrowDownClick}
        />
      )}
    </Page>
  )
}
