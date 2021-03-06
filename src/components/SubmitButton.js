import React from 'react'
import {string, func} from 'prop-types'

import {Button} from 'react-native-elements'

const SubmitButton = props =>
  <Button
    title={props.title}
    raised={props.zip ? false : true}
    textStyle={{
      color: props.zip ? '#00897b' : 'white',
      fontSize: props.zip ? 22 : 15,
      fontWeight: props.zip ? 'bold' : null,
    }}
    buttonStyle={{
      borderWidth: props.zip ? 1 : 0,
      borderColor: props.zip ? 'white' : null,
      backgroundColor: props.zip ? 'white' : 'tomato',
    }}
    containerViewStyle={{
      width: props.zip ? 150 : null,
      marginRight: 20,
      marginLeft: props.zip ? 65 : 20,
      borderRadius: props.zip ? 25 : 5,
    }}
    borderRadius={props.zip ? 25 : 5}
    fontSize={18}
    accessibilityLabel={props.accessibility}
    onPress={props.onPress}
  />

SubmitButton.propTypes = {
  title: string.isRequired,
  accessibility: string.isRequired,
  onPress: func.isRequired,
}

export default SubmitButton
