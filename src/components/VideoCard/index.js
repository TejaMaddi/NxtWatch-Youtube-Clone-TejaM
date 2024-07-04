import ThemeAndContext from '../../context/ThemeAndContext'

import {
  ItemLink,
  TrendingListItem,
  TrendingThumbnailImage,
  TrendingVideoDetails,
  TrendingProfileImage,
  TrendingContentSection,
  TrendingTitle,
  TrendingChannelName,
  TrendingViewAndDate,
  TrendingDot,
} from './styledComponents'

const VideoCard = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishdedAt,
    name,
    profileImageUrl,
  } = videoDetails

  return (
    <ThemeAndContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <ItemLink to={`/videos/${id}`} className="link">
            <TrendingListItem>
              <TrendingThumbnailImage
                src={thumbnailUrl}
                alt="video thumbnail"
              />
              <TrendingVideoDetails>
                <TrendingProfileImage
                  src={profileImageUrl}
                  alt="channel logo"
                />
                <TrendingContentSection>
                  <TrendingTitle color={textColor}>{title}</TrendingTitle>
                  <TrendingChannelName color={textColor}>
                    {name}
                  </TrendingChannelName>
                  <TrendingViewAndDate color={textColor}>
                    {viewCount} views<TrendingDot> $#8226; </TrendingDot>
                    {publishdedAt}
                  </TrendingViewAndDate>
                </TrendingContentSection>
              </TrendingVideoDetails>
            </TrendingListItem>
          </ItemLink>
        )
      }}
    </ThemeAndContext.Consumer>
  )
}

export default VideoCard
