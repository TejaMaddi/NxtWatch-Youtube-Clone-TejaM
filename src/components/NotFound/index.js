import Header from '../Header'
import NavigationBar from '../NavigationBar'
import ThemeAndContext from '../../context/ThemeAndContext'
import {
  NotFoundContainer,
  NotFoundVideosView,
  NotFoundVideoImage,
  NotFoundVideosHeading,
  NotFoundVideosNote,
} from './styledComponents'

const NotFound = () => (
  <ThemeAndContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

      const notFoundImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

      return (
        <>
          <Header />
          <NavigationBar />
          <NotFoundContainer bgColor={bgColor}>
            <NotFoundVideosView>
              <NotFoundVideoImage src={notFoundImgUrl} alt="not found" />
              <NotFoundVideosHeading headingColor={headingColor}>
                Page Not Found
              </NotFoundVideosHeading>
              <NotFoundVideosNote noteColor={noteColor}>
                We are sorry, the page you requested could not be found.
              </NotFoundVideosNote>
            </NotFoundVideosView>
          </NotFoundContainer>
        </>
      )
    }}
  </ThemeAndContext.Consumer>
)

export default NotFound
