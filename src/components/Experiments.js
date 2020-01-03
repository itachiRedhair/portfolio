import React from "react"
import styled from "@emotion/styled"

const Heading = styled.div`
  font-size: 3em;
`

const ExperimentHeading = styled.div`
  font-size: 1.5em;
`

const ExperimentDesc = styled.div`
  font-size: 0.8em;
`

export default () => {
  return (
    <div>
      <Heading>Experiments</Heading>
      <ul>
        <li>
          <ExperimentHeading>
            <a href="https://www.npmjs.com/package/alexa-skill-local">
              alexa-skill-local
            </a>
          </ExperimentHeading>
          <ExperimentDesc>
            I started this project to help myself setting up a development
            environemnt for alexa skill on local machine.
          </ExperimentDesc>
        </li>
      </ul>
    </div>
  )
}
