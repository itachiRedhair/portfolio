import React from "react"
import styled from "@emotion/styled"

const Heading = styled.div`
  font-size: 3em;
`

const WritingHeading = styled.div`
  font-size: 1.5em;
`

export default () => {
  return (
    <div>
      <Heading>Writings</Heading>
      <ul>
        <li>
          <WritingHeading>
            <a href="https://medium.com/@akshay.milmile/alexa-skill-with-nodejs-part-i-setup-8b2207482a7c">
              Alexa Skill with NodeJs, Part I : Setup
            </a>
          </WritingHeading>
        </li>
        <li>
          <WritingHeading>
            <a href="https://medium.com/@akshay.milmile/alexa-skill-with-nodejs-part-ii-understanding-the-flow-bc8de7913353">
              Alexa Skill with NodeJs, Part II: Understanding the flow
            </a>
          </WritingHeading>
        </li>
        <li>
          <WritingHeading>
            <a href="https://medium.com/@akshay.milmile/alexa-skill-with-nodejs-part-iii-rapid-development-tools-f98294040431">
              Alexa Skill with NodeJs, Part III : Rapid Development tools
            </a>
          </WritingHeading>
        </li>
      </ul>
    </div>
  )
}
