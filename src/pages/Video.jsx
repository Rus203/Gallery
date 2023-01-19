import React from 'react'
import styled from 'styled-components'

import { RiShareForwardLine as ShareForwardLineIcon } from 'react-icons/ri'
import { FiDownload as DownloadIcon } from 'react-icons/fi'

import Comments from '../components/Comments'
import Card from '../components/Card'

import {
  BiLike as LikeIcon,
  BiDislike as DislikeIcon
} from 'react-icons/bi'

const Container = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`

const Content = styled.div`
  flex: 5;
`

const Recommendation = styled.div`
  flex: 2;
`

const VideoWrapper = styled.div``

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 10px;
`

const Details = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px
`

const Info = styled.span`
  font-size: 14px;
  align-self: center;

  @media (max-width: 424px) {
    align-self: flex-start;
  }
`

const Buttons = styled.div`
  display: flex;
  column-gap: 10px;
  row-gap: 10px;
  flex-wrap: wrap;
`

const Button = styled.button`
  border-radius: 20px;
  height: 40px;
  background-color: #F0EDED;
  padding: 5px 15px;
  border: none;
  line-height: 30px;
  font-size: 1em;
  display: flex;
  align-items: center;
  column-gap: 7px;
  cursor: pointer;
  width: 100px;

  &:hover {
    background-color: #E5E5E5;
  }

  &:active {
    background-color: #dcd8d8;
  }

`

const SubscribeButton = styled(Button)`
  background-color: #000;
  color: #fff;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.7);
  }
`

const ShareButton = styled(Button)``

const LikeButton = styled(Button)`
  border-radius: 20px 0 0 20px;
  border-right: 1px solid #adadad;
`

const DisLikeButton = styled(Button)`
  border-radius: 0 20px 20px 0;
  width: 50%;
`

const RateButtons = styled.div`
  display: flex;
  align-items: center;
`

const SaveButton = styled(Button)``

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height={350}
            src="https://www.youtube-nocookie.com/embed/JA8Xw0ffel8?controls=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture; web-share" allowFullScreen>
          </iframe>
        </VideoWrapper>
        <Title>Test video</Title>
        <Details>
          <Info>100,528K views · a day ago</Info>
          <Buttons>
            <SubscribeButton>Subscribe</SubscribeButton>
            <ShareButton>
              <ShareForwardLineIcon style={{ fontSize: '20px' }}/>
              Share
            </ShareButton>
            <RateButtons>
              <LikeButton><LikeIcon />61K</LikeButton>
              <DisLikeButton><DislikeIcon /></DisLikeButton>
            </RateButtons>
            <SaveButton>
              <DownloadIcon />
              Save
            </SaveButton>
          </Buttons>
        </Details>
        <Comments />
      </Content>
      <Recommendation>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recommendation>
    </Container>
  )
}

export default Video
