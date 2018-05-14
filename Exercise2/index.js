import React from 'react'
import { Image } from 'react-native'

import { Container } from './Container'
import { StatusBarDeclarative }from './StatusBar'
import { Header } from './Header'
import { Input as TextInput } from './TextInput'
import { Button } from './Button'

const Challenge2 = () => (
  <Container>
    <StatusBarDeclarative lightBar={ true } visible={ true } />
    <Header>Welcome to Gaze</Header>
    <Image
      source={require('./assets/planet.png')}
      resizeMode="contain"
      style={{ height: 130, marginBottom: 60, marginTop: 60 }}
    />
    <TextInput placeholder="email" />
    <TextInput placeholder="password" secureTextEntry />
    <Button>Sign in</Button>
  </Container>
)

export default Challenge2
