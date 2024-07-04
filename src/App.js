import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'
import ProtectedRoute from './components/ProtectedRoute'

import Home from './components/Home'
import NotFound from './components/NotFound'
import VideoItemDetails from './components/VideoItemDetails'
import Login from './components/Login'
import ThemeAndContext from './context/ThemeAndContext'
import SavedVideos from './components/SavedVideos'
import Gaming from './components/Gaming'
import Trending from './components/Trending'

import './App.css'

// Replace your code here
class App extends Component {
  state = {isDarkTheme: false, savedVideos: [], activeTab: 'Home'}

  changeTab = tab => {
    this.setState({
      activeTab: tab,
    })
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  addVideo = video => {
    const savedVideos = this.state
    const index = savedVideos.findIndex(each => each.is === video.id)
    if (index === -1) {
      this.setState({
        savedVideos: [...savedVideos, video],
      })
    } else {
      savedVideos.splice(index, 1)
      this.setState({savedVideos})
    }
  }

  removeVideo = id => {
    const {savedVideos} = this.state
    const updatedSavedVideos = savedVideos.filter(each => each.id !== id)
    this.setState({
      savedVideos: updatedSavedVideos,
    })
  }

  render() {
    const {savedVideos, isDarkTheme, activeTab} = this.state

    return (
      <ThemeAndContext.Provider
        value={{
          savedVideos,
          isDarkTheme,
          activeTab,
          toggleTheme: this.toggleTheme,
          addVideo: this.addVideo,
          changeTab: this.changeTab,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeAndContext.Provider>
    )
  }
}

export default App
