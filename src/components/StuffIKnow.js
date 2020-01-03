import React from "react"
import styled from "@emotion/styled"

const StuffIKnow = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

const Heading = styled.div`
  font-size: 3em;
`

const StuffContainer = styled.ul`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  vertical-align: top;
`

const StuffItem = styled.li`
  display: inline-block;
  vertical-align: top;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  padding: 0;
  margin: 0;
`

const StuffBox = styled.div`
  margin: 8px;
  padding: 5px;
  background: black;
  text-align: center;
  box-shadow: 3px 3px
    ${({ learning }) => {
      if (learning) {
        return "lightgreen"
      }
      return "tomato"
    }};
`

const StuffText = styled.p`
  margin: 0;
  font-size: 1em;
  line-height: 1.5;
  overflow: hidden;
  color: white;
`

export default () => {
  return (
    <StuffIKnow>
      <div>
        <Heading>Stuff I am good at</Heading>
        <StuffContainer>
          <StuffItem>
            <StuffBox>
              <StuffText>Javascript</StuffText>
            </StuffBox>
          </StuffItem>
          <StuffItem>
            <StuffBox>
              <StuffText>GO</StuffText>
            </StuffBox>
          </StuffItem>
          <StuffItem>
            <StuffBox>
              <StuffText>CSS</StuffText>
            </StuffBox>
          </StuffItem>
          <StuffItem>
            <StuffBox>
              <StuffText>HTML</StuffText>
            </StuffBox>
          </StuffItem>
          <StuffItem>
            <StuffBox>
              <StuffText>ANGULAR</StuffText>
            </StuffBox>
          </StuffItem>
          <StuffItem>
            <StuffBox>
              <StuffText>GO</StuffText>
            </StuffBox>
          </StuffItem>
          <StuffItem>
            <StuffBox>
              <StuffText>CSS</StuffText>
            </StuffBox>
          </StuffItem>
          <StuffItem>
            <StuffBox>
              <StuffText>REACT</StuffText>
            </StuffBox>
          </StuffItem>
          <StuffItem>
            <StuffBox>
              <StuffText>Javascript</StuffText>
            </StuffBox>
          </StuffItem>
          <StuffItem>
            <StuffBox>
              <StuffText>GO</StuffText>
            </StuffBox>
          </StuffItem>
          <StuffItem>
            <StuffBox>
              <StuffText>HTML</StuffText>
            </StuffBox>
          </StuffItem>
          <StuffItem>
            <StuffBox>
              <StuffText>ANGULAR</StuffText>
            </StuffBox>
          </StuffItem>
          <StuffItem>
            <StuffBox>
              <StuffText>GO</StuffText>
            </StuffBox>
          </StuffItem>
          <StuffItem>
            <StuffBox>
              <StuffText>CSS</StuffText>
            </StuffBox>
          </StuffItem>
        </StuffContainer>
      </div>
      <div>
        <Heading>Stuff I am learning</Heading>
        <StuffContainer>
          <StuffItem>
            <StuffBox learning>
              <StuffText>Javascript</StuffText>
            </StuffBox>
          </StuffItem>
          <StuffItem>
            <StuffBox learning>
              <StuffText>GO</StuffText>
            </StuffBox>
          </StuffItem>
          <StuffItem>
            <StuffBox learning>
              <StuffText>CSS</StuffText>
            </StuffBox>
          </StuffItem>
          <StuffItem>
            <StuffBox learning>
              <StuffText>HTML</StuffText>
            </StuffBox>
          </StuffItem>
          <StuffItem>
            <StuffBox learning>
              <StuffText>ANGULAR</StuffText>
            </StuffBox>
          </StuffItem>
          <StuffItem>
            <StuffBox learning>
              <StuffText>GO</StuffText>
            </StuffBox>
          </StuffItem>
          <StuffItem>
            <StuffBox learning>
              <StuffText>CSS</StuffText>
            </StuffBox>
          </StuffItem>
          <StuffItem>
            <StuffBox learning>
              <StuffText>REACT</StuffText>
            </StuffBox>
          </StuffItem>
          <StuffItem>
            <StuffBox learning>
              <StuffText>Javascript</StuffText>
            </StuffBox>
          </StuffItem>
          <StuffItem>
            <StuffBox learning>
              <StuffText>GO</StuffText>
            </StuffBox>
          </StuffItem>
          <StuffItem>
            <StuffBox learning>
              <StuffText>HTML</StuffText>
            </StuffBox>
          </StuffItem>
          <StuffItem>
            <StuffBox learning>
              <StuffText>ANGULAR</StuffText>
            </StuffBox>
          </StuffItem>
          <StuffItem>
            <StuffBox learning>
              <StuffText>GO</StuffText>
            </StuffBox>
          </StuffItem>
          <StuffItem>
            <StuffBox learning>
              <StuffText>CSS</StuffText>
            </StuffBox>
          </StuffItem>
        </StuffContainer>
      </div>
    </StuffIKnow>
  )
}
