import React from 'react'
import {func, oneOf} from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {ScrollView, Text, StyleSheet} from 'react-native'
import {Button} from 'react-native-elements'

import {updateWicEligibility} from '../redux/actions/actions'

import LinearGrad from '../components/LinearGradient'
import {StyledContainer, FormHeader} from '../components/styled/Styled'
import EligibilityButton from '../components/EligibilityButton'

import localizedStrings from '../utilities/localization'

const Eligible = props =>
  <LinearGrad>
    <StyledContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="on-drag"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'space-around',
        }}
      >
        <FormHeader>
          {localizedStrings[props.language].eligible.header}
        </FormHeader>
        <Text
          style={{
            fontSize: 80,
            textAlign: 'center',
          }}
        >
          👍
        </Text>
        <EligibilityButton
          title={localizedStrings[props.language].buttons.recheck}
          accessibility={
            localizedStrings[props.language].buttons.accessibilityRecheck
          }
          updateWicEligibility={props.updateWicEligibility}
        />
      </ScrollView>
    </StyledContainer>
  </LinearGrad>

Eligible.propTypes = {
  updateWicEligibility: func.isRequired,
  language: oneOf(['es', 'en']).isRequired,
}

const mapDispatchToProps = dispatch => ({
  updateWicEligibility: bindActionCreators(updateWicEligibility, dispatch),
})

export default connect(null, mapDispatchToProps)(Eligible)
