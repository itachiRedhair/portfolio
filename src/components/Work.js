import React from "react"
import styled from "@emotion/styled"

const Heading = styled.div`
  font-size: 3em;
`

const BriefIntro = styled.div`
  font-size: 1.5em;
`

export default ({ workDesc }) => {
  return (
    <div>
      <Heading>Work</Heading>
      <BriefIntro dangerouslySetInnerHTML={{ __html: workDesc }}></BriefIntro>
    </div>
  )
}
