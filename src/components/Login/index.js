import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  AppContainer,
  LoginCard,
  FormContainer,
  LogoImageForm,
  LabelElement,
  InputElement,
  CheckboxContainer,
  Checkbox,
  CheckboxLabel,
  ButtonLogin,
  ErrorMessage,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    showPassword: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onChangeCheckBox = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  onSubmitSuccess = token => {
    Cookies.set('jwt_token', token, {expires: 29})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({
      showSubmitError: true,
      errorMsg,
    })
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderLoginForm = () => {
    const {username, password, showPassword, showSubmitError, errorMsg} =
      this.state
    const inputType = showPassword ? 'text' : 'password'
    return (
      <FormContainer onSubmit={this.onSubmitForm}>
        <LogoImageForm
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="channel logo"
        />
        <LabelElement htmlFor="username">USERNAME</LabelElement>
        <InputElement
          type="text"
          onChange={this.onChangeUsername}
          placeholder="Username"
          value={username}
          id="password"
        />
        <LabelElement htmlFor="username">PASSWORD</LabelElement>
        <InputElement
          type={inputType}
          onChange={this.onChangePassword}
          placeholder="Password"
          value={password}
          id="password"
        />
        <CheckboxContainer>
          <Checkbox
            type="checkbox"
            id="checkbox"
            onChange={this.onChangeCheckBox}
          />
          <CheckboxLabel htmlFor="checkbox">Show Password</CheckboxLabel>
        </CheckboxContainer>
        <ButtonLogin type="submit">Login</ButtonLogin>
        {showSubmitError && <ErrorMessage>*{errorMsg}</ErrorMessage>}
      </FormContainer>
    )
  }

  render() {
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <AppContainer>
        <LoginCard>{this.renderLoginForm()}</LoginCard>
      </AppContainer>
    )
  }
}

export default Login
