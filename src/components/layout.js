import React from "react"
import styled from "@emotion/styled"

const Container = styled.div`
  margin: 0 auto;
  max-width: 650px;
  padding: 0 1rem;
`

export default ({ children }) => <Container>{children}</Container>
