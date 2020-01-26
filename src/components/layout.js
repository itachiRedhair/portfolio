import React from "react"
import styled from "@emotion/styled"

const Container = styled.div`
  margin: 0 auto;
  overflow: scroll;
  height: 100vh;
  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(100vh);
  scroll-snap-type: y mandatory;
`

export default ({ children }) => <Container>{children}</Container>
