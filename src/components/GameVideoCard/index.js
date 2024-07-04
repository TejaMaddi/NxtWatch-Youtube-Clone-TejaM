import ThemeAndContext from '../../context/ThemeAndContext'

import {
  ItemLink,
  GamingListItem,
  GamingThumbnailImage,
  GamingContentSection,
  GamingTitle,
  GamingViewsAndDate,
} from './styledComponents'

const GameVideoCad = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, viewCount} = videoDetails

  return (
    <ThemeAndContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <ItemLink to={`/videos/${id}`}>
            <GamingListItem>
              <GamingThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <GamingContentSection>
                <GamingTitle color={textColor}>{title}</GamingTitle>
                <GamingViewsAndDate color={textColor}>
                  {viewCount} Watching Worldwide
                </GamingViewsAndDate>
              </GamingContentSection>
            </GamingListItem>
          </ItemLink>
        )
      }}
    </ThemeAndContext.Consumer>
  )
}

export default GameVideoCad
