import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
export const LoginCard = styled.div`
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  width: 29%;
  max-width: 1140px;
  padding: 29px;
  background-color: #ffffff;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const LogoImageForm = styled.img`
  width: 160px;
  margin-bottom: 50px;
`
export const LabelElement = styled.label`
  color: #64748b;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  align-self: flex-start;
  margin-top: 20px;
`

export const InputElement = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  color: #94a3b8;
  font-family: 'Roboto';
  border: 1px solid #94a3b8;
  outline: none;
`
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  margin-top: 15px;
`

export const Checkbox = styled.input`
  outline: none;
  height: 15px;
  width: 15px;
`
export const CheckboxLabel = styled.label`
  font-family: 'Roboto';
  color: #0f0f0f;
  margin-left: 7px;
`
export const ButtonLogin = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  margin-top: 29px;
  padding-top: 12px;
  padding-bottom: 12px;
  font-weight: 500;
  border-radius: 7px;
  font-family: 'Roboto';
  outline: none;
  cursor: pointer;
  border: none;
  width: 100%;
`
export const ErrorMessage = styled.p`
  color: #ff0b37;
  font-family: 'Roboto';
  align-self: flex-start;
  margin: 0px;
`
