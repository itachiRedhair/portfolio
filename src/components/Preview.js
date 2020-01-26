import React from "react"
import styled from "@emotion/styled"
import deleteIconImg from "../images/delete-icon.png"

const PreviewContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`

const PhotoContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Photo = styled.img`
  width: auto;
  height: 90%;
  margin-bottom: 0;
  align-self: center;
`

export default ({ data: { photoURL, alt }, onCloseClicked }) => {
  return (
    <PreviewContainer>
      <PhotoContainer onClick={onCloseClicked}>
        <Photo src={photoURL} alt={alt} />
      </PhotoContainer>
    </PreviewContainer>
  )
}
