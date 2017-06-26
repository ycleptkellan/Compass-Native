import React from 'react'
import {string, func} from 'prop-types'

import {Button} from 'react-native-elements'

const SubmitButton = props =>
  <Button
    title={props.title}
    raised
    textStyle={{color: 'white'}}
    buttonStyle={{
      backgroundColor: 'tomato',
    }}
    containerViewStyle={{
      marginRight: 30,
      marginLeft: 30,
      borderRadius: 5,
    }}
    borderRadius={5}
    fontSize={18}
    accessibilityLabel="Find offices near you"
    onPress={props.onPress}
  />

SubmitButton.propTypes = {
  title: string.isRequired,
  accessibility: string.isRequired,
  onPress: func.isRequired,
}

export default SubmitButton
