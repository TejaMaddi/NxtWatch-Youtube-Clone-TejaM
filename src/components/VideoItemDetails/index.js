import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import ThemeAndContext from '../../context/ThemeAndContext'
import FailureView from '../FailureView'
import PlayVideoView from '../PlayVideoView'

import {VideoDetailsViewContainer, LoaderContainer} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: [],
    apiStatus: apiStatusConstants.initial,
    isLiked: false,
    isDisLiked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  formattedData = data => ({
    id: data.video_details.id,
    title: data.video_details.title,
    videoUrl: data.video_details.video_url,
    thumbnailUrl: data.video_details.thumbnail_url,
    viewCount: data.video_details.view_count,
    publishedAt: data.video_details.published_at,
    description: data.video_details.description,
    name: data.video_details.name,
    profileImageUrl: data.video_details.profile_image_url,
    subscriberCount: data.video_details.subscriber_count,
  })

  getVideoDetails = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = this.formattedData(data)
      this.setState({
        apiStatus: apiStatusConstants.success,
        videoDetails: updatedData,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  clickLiked = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisLiked: false,
    }))
  }

  clickDisLiked = () => {
    this.setState(prevState => ({
      isDisLiked: !prevState.isDisLiked,
      isLiked: false,
    }))
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  renderPlayVideoView = () => {
    const {videoDetails, isLiked, isDisLiked} = this.state
    return (
      <PlayVideoView
        videoDetails={videoDetails}
        clickLiked={this.clickLiked}
        clickDisLiked={this.clickDisLiked}
        isDisLiked={isDisLiked}
        isLiked={isLiked}
      />
    )
  }

  onRetry = () => {
    this.getVideoDetails()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderVideoDetailsView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderVideoDetailsView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeAndContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

          return (
            <>
              <Header />
              <NavigationBar />
              <VideoDetailsViewContainer
                data-testid="videoItemDetails"
                bgColor={bgColor}
              >
                {this.renderVideoDetailsView()}
              </VideoDetailsViewContainer>
            </>
          )
        }}
      </ThemeAndContext.Consumer>
    )
  }
}

export default VideoItemDetails
