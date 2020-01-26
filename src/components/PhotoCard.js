import React from "react"
import styled from "@emotion/styled"

const PhotoCard = styled.div`
  width: 12em;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Caption = styled.div`
  max-height: 0;
  padding: 0.4em;
  background: #000;
  opacity: 0;
  position: absolute;
  font-size: 0.6rem;
  bottom: 0;
  transition: max-height 0.15s ease-out;
  transition: opacity 0.15s ease-out;
  color: #fff;
`

const PhotoContainer = styled.div`
  position: relative;
  display: flex;
  cursor: pointer;
  &:hover ${Caption} {
    max-height: 400px;
    opacity: 0.8;
  }
`

const Photo = styled.img`
  margin-bottom: 0;
`

const PhotoInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Location = styled.div`
  font-size: 1.2rem;
`

const Date = styled.div`
  font-size: 0.8rem;
  display: flex;
  flex-direction: column-reverse;
`

export default ({ photoURL, alt, tint, onPhotoClick }) => {
  return (
    <PhotoCard>
      <PhotoContainer onClick={() => onPhotoClick(photoURL, alt)}>
        <Photo src={photoURL} alt={alt} tintColor={tint} />
        <Caption>
          Life is not really small, so take your time to enjoy. But enjoy it at
          your fullest.
        </Caption>
      </PhotoContainer>
      <PhotoInfo>
        <Location>Charles Bridge, Prague</Location>
        <Date>May 15</Date>
      </PhotoInfo>
    </PhotoCard>
  )
}
