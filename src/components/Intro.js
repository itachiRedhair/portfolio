import React from "react"
import styled from "@emotion/styled"

const Name = styled.div`
  font-size: 3em;
`

const BriefIntro = styled.div`
  font-size: 2em;
`

export default ({ name, description }) => {
  return (
    <div>
      <Name>{name}</Name>
      <BriefIntro>{description}</BriefIntro>
    </div>
  )
}
