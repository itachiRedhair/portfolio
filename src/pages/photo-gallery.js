import React, { useEffect, useState } from "react"
import SEO from "../components/SEO"
import PhotoCard from "../components/PhotoCard"
import styled from "@emotion/styled"
import Preview from "../components/Preview"
import ItemLIne from "../components/ItemLIne"

const Container = styled.div`
  display: grid;
  grid-template-rows: 3em 1fr 3em;
`

const PGContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
`

const TimeLineContainer = styled.div``

const PlaceLineContainer = styled.div``

const PGList = styled.div`
  max-height: 700px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  overflow: scroll;
  overflow-x: hidden;
`

const PGItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1.2em;
`

const photo1 =
  "https://storage.googleapis.com/portfolio-photo-gallery/five-story-club-prague.jpg"

const photo2 =
  "https://storage.googleapis.com/portfolio-photo-gallery/lovely-night-prague.jpg"

const photo3 =
  "https://storage.googleapis.com/portfolio-photo-gallery/random-photo.jpg"

const photo4 =
  "https://storage.googleapis.com/portfolio-photo-gallery/stree-theatre-charles-bridge-prague.jpg"

const yearList = [
  { id: 2020, label: 2020 },
  { id: 2019, label: 2019 },
  { id: 2018, label: 2018 },
  { id: 2017, label: 2017 },
  { id: 2016, label: 2016 },
  { id: 2015, label: 2015 },
  { id: 2014, label: 2014 },
  { id: 2013, label: 2013 },
]

const placeList = [
  { id: "prague", label: "Prague" },
  { id: "berlin", label: "Berlin" },
  { id: "vienna", label: "Vienna" },
  { id: "rotterdam", label: "Rotterdam" },
  { id: "paris", label: "Paris" },
  { id: "brugges", label: "Brugges" },
  { id: "brussels", label: "Brussels" },
  { id: "amsterdam", label: "Amsterdam" },
]
const PGPage = () => {
  const [previewData, setPreviewData] = useState(null) // Set data to open preview, null to close preview
  const [currentYear, setCurrentYear] = useState({ id: 2020, label: 2020 })
  const [currentPlace, setCurrentPlace] = useState({
    id: "prague",
    label: "Prague",
  })

  useEffect(() => {
    const pgListNode = document.getElementById("pgList")

    const speed = 0.5
    pgListNode.addEventListener("wheel", event => {
      const { deltaY, deltaX } = event
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        pgListNode.scrollLeft = pgListNode.scrollLeft + event.deltaX * speed
      } else {
        pgListNode.scrollLeft = pgListNode.scrollLeft + event.deltaY * speed
      }
      event.preventDefault()
    })
  }, [])

  const openPreview = (photoURL, alt) => {
    setPreviewData({ photoURL, alt })
  }

  const closePreview = () => {
    setPreviewData(null)
  }

  return (
    <>
      <SEO title="Photo Gallery" />

      {/* <TimeLineContainer> */}
      <ItemLIne
        itemList={yearList}
        currentItem={currentYear}
        onItemChange={() => {
          setCurrentYear(currentYear)
        }}
        uniqueName="time"
      />
      {/* </TimeLineContainer> */}

      <PGContainer id="pgContainer">
        <PGList id="pgList">
          <PGItem>
            <PhotoCard
              onPhotoClick={openPreview}
              photoURL={photo1}
              alt="some ph0to"
            />
          </PGItem>
          <PGItem>
            <PhotoCard
              onPhotoClick={openPreview}
              photoURL={photo2}
              alt="some ph0to"
            />
          </PGItem>
          <PGItem>
            <PhotoCard
              onPhotoClick={openPreview}
              photoURL={photo3}
              alt="some ph0to"
            />
          </PGItem>
          <PGItem>
            <PhotoCard
              onPhotoClick={openPreview}
              photoURL={photo4}
              alt="some ph0to"
            />
          </PGItem>
          <PGItem>
            <PhotoCard
              onPhotoClick={openPreview}
              photoURL={photo1}
              alt="some ph0to"
            />
          </PGItem>
          <PGItem>
            <PhotoCard
              onPhotoClick={openPreview}
              photoURL={photo2}
              alt="some ph0to"
            />
          </PGItem>
          <PGItem>
            <PhotoCard
              onPhotoClick={openPreview}
              photoURL={photo2}
              alt="some ph0to"
            />
          </PGItem>
          <PGItem>
            <PhotoCard
              onPhotoClick={openPreview}
              photoURL={photo3}
              alt="some ph0to"
            />
          </PGItem>
          <PGItem>
            <PhotoCard
              onPhotoClick={openPreview}
              photoURL={photo4}
              alt="some ph0to"
            />
          </PGItem>
          <PGItem>
            <PhotoCard
              onPhotoClick={openPreview}
              photoURL={photo1}
              alt="some ph0to"
            />
          </PGItem>
          <PGItem>
            <PhotoCard
              onPhotoClick={openPreview}
              photoURL={photo2}
              alt="some ph0to"
            />
          </PGItem>
          <PGItem>
            <PhotoCard
              onPhotoClick={openPreview}
              photoURL={photo4}
              alt="some ph0to"
            />
          </PGItem>
          <PGItem>
            <PhotoCard
              onPhotoClick={openPreview}
              photoURL={photo1}
              alt="some ph0to"
            />
          </PGItem>
          <PGItem>
            <PhotoCard
              onPhotoClick={openPreview}
              photoURL={photo2}
              alt="some ph0to"
            />
          </PGItem>
          <PGItem>
            <PhotoCard
              onPhotoClick={openPreview}
              photoURL={photo2}
              alt="some ph0to"
            />
          </PGItem>
          <PGItem>
            <PhotoCard
              onPhotoClick={openPreview}
              photoURL={photo3}
              alt="some ph0to"
            />
          </PGItem>
          <PGItem>
            <PhotoCard
              onPhotoClick={openPreview}
              photoURL={photo4}
              alt="some ph0to"
            />
          </PGItem>
          <PGItem>
            <PhotoCard
              onPhotoClick={openPreview}
              photoURL={photo1}
              alt="some ph0to"
            />
          </PGItem>
          <PGItem>
            <PhotoCard
              onPhotoClick={openPreview}
              photoURL={photo2}
              alt="some ph0to"
            />
          </PGItem>
          <PGItem>
            <PhotoCard
              onPhotoClick={openPreview}
              photoURL={photo3}
              alt="some ph0to"
            />
          </PGItem>
        </PGList>
      </PGContainer>

      {/* <PlaceLineContainer> */}
      <ItemLIne
        itemList={placeList}
        currentItem={currentPlace}
        onItemChange={() => {
          setCurrentPlace(currentPlace)
        }}
        itemPlacement="bottom"
        uniqueName="place"
      />
      {/* </PlaceLineContainer> */}

      {previewData && (
        <Preview data={previewData} onCloseClicked={closePreview} />
      )}
    </>
  )
}

export default PGPage
