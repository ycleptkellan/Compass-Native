import React from 'react'
import styled from 'styled-components/native'

import {View, Text, Image} from 'react-native'

export const styleSwitch = (
  prop,
  cssIfValid,
  cssIfInvalid
) => {
  switch (prop) {
    case null:
      return cssIfValid
    case true:
      return cssIfValid
    case false:
      return cssIfInvalid
  }
}

export const textInputColor = prop => {
  switch (prop) {
    case null:
      return '#7C7A7A'
    case true:
      return '#7C7A7A'
    case false:
      return 'tomato'
  }
}

export const textInputColorZip = prop => {
  switch (prop) {
    case null:
      return 'white'
    case true:
      return 'white'
    case false:
      return 'tomato'
  }
}

export const textInputWrapperColor = prop => {
  switch (prop) {
    case null:
      return '1px solid papayawhip'
    case true:
      return '1px solid papayawhip'
    case false:
      return '1px solid tomato'
  }
}

export const textInputWrapperColorZip = prop => {
  switch (prop) {
    case null:
      return '2px solid white'
    case true:
      return '2px solid white'
    case false:
      return '2px solid tomato'
  }
}

export const StyledContainer = styled.View`
  flex: 1;
  margin-top: 15;
  background-color: white;
  padding-top: 20;
  padding-left: 20;
  padding-right: 20;
`
export const ImageContainer = styled.Image`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: ${props => props.width};
  height: ${props => props.height};
`

export const OfficeText = styled.Text`
  font-size: 50;
  color: white;
  background-color: transparent;
`

export const StyledInput = styled.TextInput`
  font-size: 15;
  font-weight: 300;
  color: ${props => textInputColor(props.valid)};
  height: 30;
  border-color: papayawhip;
`

export const StyledInputZip = StyledInput.extend`
  font-size: 20;
  font-weight: 600;
  color: ${props => textInputColorZip(props.valid)};
`

export const InputWrapper = styled.View`
  border: ${props => textInputWrapperColor(props.valid)};
  border-radius: 5;
  padding-top: 10;
  padding-bottom: 10;
  padding-left: 10;
  padding-right: 10;
  background-color: papayawhip;
`

export const ZipModalInputWrapper = InputWrapper.extend`
  border: ${props => textInputWrapperColorZip(props.valid)};
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  margin-left: 10;
  margin-right: 10;
  background-color: transparent;
`

export const LifeEventText = styled.Text`
  text-align: center;
  font-size: 18;
  font-weight: 300;
`

export const FormHeader = styled.Text`
  font-weight: bold;
  font-size: ${props => (props.zip ? 35 : 20)};
  text-align: center;
  padding-bottom: 10;
  color: ${props => (props.zip ? 'white' : '#2C2C2C')};
`

export const ActivityIndicatorWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #2c2c2c;
`

export const WelcomeUIWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-content: center;
`

export const Logo = styled.Text`
  text-align: center;
  font-size: 65;
  font-weight: 300;
  color: white;
  background-color: transparent;
  margin-bottom: 30;
  font-family: merriweather-sans;
`
