import React from "react"
import styled from "@emotion/styled"

const Heading = styled.div`
  font-size: 3rem;
  line-height: 3.5rem;
`

const BriefIntro = styled.div`
  font-size: 1.2rem;
  line-height: 1.7rem;
`

export default ({ workDesc }) => {
  return (
    <div>
      <Heading>Work</Heading>
      <BriefIntro dangerouslySetInnerHTML={{ __html: workDesc }}></BriefIntro>
    </div>
  )
}
