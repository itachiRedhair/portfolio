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

export default ({ experimentsList }) => {
  return (
    <div>
      <Heading>Experiments</Heading>
      <ul>
        {experimentsList.map(({ heading, description, link }, idx) => (
          <li key={idx}>
            <ExperimentHeading>
              <a href={link}>{heading}</a>
            </ExperimentHeading>
            <ExperimentDesc>{description}</ExperimentDesc>
          </li>
        ))}
      </ul>
    </div>
  )
}
