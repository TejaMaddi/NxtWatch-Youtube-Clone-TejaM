import {Link} from 'react-router-dom'

import ThemeAndContext from '../../context/ThemeAndContext'

import {
  ListItem,
  ThumbnailImage,
  VideoDetails,
  ProfileImage,
  ContentSection,
  Title,
  ChannelName,
  ViewsAndDate,
  Dot,
} from './styledComponents'

import './index.css'

const HomeVideoCard = props => {
  const {videos} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = videos

  return (
    <ThemeAndContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <Link to={`/videos/${id}`} className="link">
            <ListItem>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetails>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <ContentSection>
                  <Title color={textColor}>{title}</Title>
                  <ChannelName color={textColor}>{name}</ChannelName>
                  <ViewsAndData color={textColor}>
                    {viewCount} views<Dot>&#8226;</Dot>
                    {publishedAt}
                  </ViewsAndData>
                </ContentSection>
              </VideoDetails>
            </ListItem>
          </Link>
        )
      }}
    </ThemeAndContext.Consumer>
  )
}

export default HomeVideoCard
