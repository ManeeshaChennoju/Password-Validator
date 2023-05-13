import {useState} from 'react'

import {MainContainer, Div, Heading, Para, Input} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  return (
    <MainContainer>
      <Div>
        <Heading>Password Validator</Heading>
        <Para>Check how strong and secure is your password</Para>
        <Input
          type="password"
          value={password.inputValue}
          onChange={onChangePassword}
        />
        {password.length < 8 ? (
          <Para error="true">Your password must be at least 8 characters</Para>
        ) : (
          ''
        )}
      </Div>
    </MainContainer>
  )
}

export default PasswordValidator
