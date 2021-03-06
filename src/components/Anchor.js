import React from 'react'
import {string, func} from 'prop-types'
import {Linking, Text} from 'react-native'

const Anchor = ({href, onPress, children}) => {
  const _handlePress = () => {
    Linking.openURL(href)
    onPress && onPress()
  }
  return (
    <Text onPress={_handlePress}>
      {children}
    </Text>
  )
}

Anchor.propTypes = {
  href: string.isRequired,
  onPress: func.isRequired,
  children: string.isRequired,
}

export default Anchor
