import React from "react"
import styled from "@emotion/styled"

const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default ({ children, anchors, anchorIndex }) => {
  return (
    <div id={anchors[anchorIndex]}>
      <Container>{children}</Container>
    </div>
  )
}
