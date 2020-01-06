import React from "react"
import styled from "@emotion/styled"

const Heading = styled.div`
  font-size: 3rem;
  line-height: 3.5rem;
`

const WritingHeading = styled.div`
  font-size: 1rem;
  line-height: 1.5rem;
`

export default ({ writingsList }) => {
  return (
    <div>
      <Heading>Writings</Heading>
      <ul>
        {writingsList.map(({ link, heading }, idx) => (
          <li key={idx}>
            <WritingHeading>
              <a href={link}>{heading}</a>
            </WritingHeading>
          </li>
        ))}
      </ul>
    </div>
  )
}
