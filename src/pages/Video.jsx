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
  justify-content: space-between;
  align-items: center;
`

const Info = styled.span`
  font-size: 14px;
  color: "#f5f5f5"
`

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
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
`

const SubscribeButton = styled(Button)`
  background-color: #000;
  color: #fff;
`

const ShareButton = styled(Button)``

const LikeButton = styled(Button)`
  border-radius: 20px 0 0 20px;
  border-right: 1px solid #adadad;
`

const DisLikeButton = styled(Button)`
  border-radius: 0 20px 20px 0;
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
          height="370"
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
