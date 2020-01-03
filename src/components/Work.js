import React from "react"
import styled from "@emotion/styled"

const Heading = styled.div`
  font-size: 3em;
`

const BriefIntro = styled.div`
  font-size: 1.5em;
`

export default () => {
  return (
    <div>
      <Heading>Work</Heading>
      <BriefIntro>
        I am currently working at my first company{" "}
        <a href="https://www.tcs.com/">Tata Consultancy Services</a>. I can't
        disclose the specifics of my work. Most of my work involves around
        understanding client requirements and providing them with the solution
        which works. I am also a part of small team which deals with bringing
        innovation, rapid prototyping and engineering experiences.
      </BriefIntro>
    </div>
  )
}
