import React from "react"
import styled from "@emotion/styled"

const Name = styled.div`
  font-size: 3em;
`

const BriefIntro = styled.div`
  font-size: 2em;
`

export default () => {
  return (
    <div>
      <Name>Akshay M</Name>
      <BriefIntro>Hello there. I create stuff with the help of computers, mostly for web, mobile and cloud.</BriefIntro>
    </div>
  )
}
