import React from "react"
import styled from "@emotion/styled"

const Heading = styled.div`
  font-size: 3em;
`

const WritingHeading = styled.div`
  font-size: 1.5em;
`

export default ({ writingsList }) => {
  return (
    <div>
      <Heading>Writings</Heading>
      <ul>
        {writingsList.map(({ link, heading }) => (
          <li>
            <WritingHeading>
              <a href={link}>{heading}</a>
            </WritingHeading>
          </li>
        ))}
      </ul>
    </div>
  )
}
