import React, { useState } from "react"
import styled from "@emotion/styled"
import twitterIconImg from "../images/twitter-icon.png"
import githubIconImg from "../images/github-icon.png"
import mediumIconImg from "../images/medium-icon.png"
import linkedinIconImg from "../images/linkedin-icon.png"

const Heading = styled.div`
  font-size: 3rem;
  line-height: 3.5rem;
`

const Label = styled.label`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1em;
`

const FormInput = styled.input`
  display: block;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  border: 0;
  padding: 10px 15px;
  background: #1e242c;
  font-size: 12pt;
  margin-bottom: 3px;
  color: #fff;
`

const FormTextArea = styled.textarea`
  display: block;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  border: 0;
  padding: 10px 15px;
  background: #1e242c;
  font-size: 12pt;
  margin-bottom: 3px;
  color: #fff;
`

const FormRow = styled.label`
  display: flex;
  flex-direction: row;
`

const SubmitButton = styled.button`
  border: 2px solid black;
  transition: all 0.5s;
  background: transparent;
  outline: 0;
  padding: 0;
  cursor: pointer;
  float: right;
  &:hover {
    background: black;
  }
`

const SubmitButtonText = styled.span`
  color: black;
  transition: all 0.5s;
  padding: 1rem;
  &:hover {
    color: white;
  }
`

const ErrorText = styled.span`
  color: tomato;
`

const ContactPlatformContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  margin-top: 3em;
`

const PlatfomrImgLink = styled.a`
  display: inline-block;
  background-image: none;
`

const PlatformImg = styled.img`
  height: 2em;
  margin-bottom: 0;
`

export default () => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [messageSent, setMessageSent] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await fetch(
        "https://us-central1-portfolio-263920.cloudfunctions.net/SendEmail",
        {
          method: "POST",
          body: JSON.stringify({ emailAddress: email, name, message }),
        }
      )
      setMessageSent(true)
    } catch (error) {
      setError(error)
    }
  }

  const checkMessageSent = () => {
    if (messageSent) {
      setMessageSent(false)
    }
  }

  return (
    <div>
      <Heading>Want to get in touch?</Heading>
      <form onSubmit={handleSubmit}>
        <FormRow>
          <Label>
            Name
            <FormInput
              value={name}
              type="fname"
              autocomplete="name"
              onChange={e => {
                checkMessageSent()
                setName(e.target.value)
              }}
              required
            />
          </Label>
          <Label>
            Email
            <FormInput
              value={email}
              type="email"
              autocomplete="email"
              onChange={e => {
                checkMessageSent()
                setEmail(e.target.value)
              }}
              required
            />
          </Label>
        </FormRow>
        <FormRow>
          <Label>
            Message
            <FormTextArea
              value={message}
              rows={4}
              onChange={e => {
                checkMessageSent()
                setMessage(e.target.value)
              }}
              required
            />
          </Label>
        </FormRow>
        <SubmitButton type="submit" disabled={messageSent}>
          <SubmitButtonText>
            {messageSent ? "WILL GET BACK TO YOU SOON" : "SUBMIT"}
          </SubmitButtonText>
          <ErrorText>{error}</ErrorText>
        </SubmitButton>
      </form>
      <ContactPlatformContainer>
        <PlatfomrImgLink href="https://twitter.com/_akshay_milmile" target="_blank">
          <PlatformImg src={twitterIconImg} alt="twitter" />
        </PlatfomrImgLink>
        <PlatfomrImgLink href="https://medium.com/@akshay.milmile" target="_blank">
          <PlatformImg src={mediumIconImg} alt="medium" />
        </PlatfomrImgLink>
        <PlatfomrImgLink href="https://github.com/itachiredhair" target="_blank">
          <PlatformImg src={githubIconImg} alt="github" />
        </PlatfomrImgLink>
        <PlatfomrImgLink href="https://www.linkedin.com/in/akshaymilmile/" target="_blank">
          <PlatformImg src={linkedinIconImg} alt="linkedin" />
        </PlatfomrImgLink>
      </ContactPlatformContainer>
    </div>
  )
}
