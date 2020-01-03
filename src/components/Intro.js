import React from "react"
import styled from "@emotion/styled"

const Name = styled.div`
  font-size: 3em;
`

const BriefIntro = styled.div`
  font-size: 2em;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const DisplayPicture = styled.img`
  width: 8em;
  height: 8em;
  border-radius: 50%;
`

export default ({ name, description, image }) => {
  return (
    <Container>
      <DisplayPicture src={image} alt="my ph0t0" />
      <div>
        <Name>{name}</Name>
        <BriefIntro>{description}</BriefIntro>
      </div>
    </Container>
  )
}
