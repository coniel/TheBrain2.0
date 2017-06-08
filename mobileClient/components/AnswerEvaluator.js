import React from 'react'
import { Button, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import SwipeBall from './SwipeBall'

import styles from '../styles/styles'

console.disableYellowBox = true

class AnswerEvaluator extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      showTutorial: true
    }
  }

  hideTutorial = () => {
    this.setState({ showTutorial: false })
  }

  render () {
    return (
      <View style={styles.answerEvaluator}>
        <LinearGradient
          style={styles.answerTopLine}
          colors={['#71b9d3', '#b3b3b3']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
        />
        <LinearGradient
          style={styles.answerRightLine}
          colors={['#ff8533', '#b3b3b3']}
          start={{x: 1, y: 0}}
          end={{x: 0, y: 0}}
        />
        <LinearGradient
          style={styles.answerBottomLine}
          colors={['#c1272d', '#b3b3b3']}
          start={{x: 0, y: 1}}
          end={{x: 0, y: 0}}
        />
        <LinearGradient
          style={styles.answerLeftLine}
          colors={['#62c46c', '#b3b3b3']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
        />
        <View style={styles.answerFieldTop}>
          <Text style={styles.answerText}>Easy</Text>
        </View>
        <View style={styles.answerFieldRight}>
          <Text style={[styles.answerText, { transform: [{ rotate: '90deg' }] }]}>Good</Text>
        </View>
        <View style={styles.answerFieldBottom}>
          <Text style={styles.answerText}>No clue</Text>
        </View>
        <View style={styles.answerFieldLeft}>
          <Text style={[styles.answerText, { transform: [{ rotate: '-90deg' }] }]}>Wrong</Text>
        </View>
        <View style={styles.answerCircle} />
        <SwipeBall evalItemId={this.props.evalItemId} />
        {!this.props.enabled && <View style={styles.answerEvaluatorOverlay} />}
        {this.props.enabled && this.state.showTutorial &&
          <View style={styles.answerEvaluatorOverlay}>
            <Text style={styles.infoText}>How would you describe experience answering this question?</Text>
            <Text style={styles.infoText}>
              Rate using one of the four answers.{'\n'}
              Just slide your finger from the center circle to correct button.
            </Text>
            <View style={{ flexDirection: 'row', justifyItems: 'center' }}>
              <Text
                onPress={this.hideTutorial}
                style={[styles.button, { backgroundColor: '#62c46c', fontSize: 14, fontWeight: '500' }]}
              >OK, go on</Text>
              <Text
                onPress={this.hideTutorial}
                style={[styles.button, { backgroundColor: '#662d91', fontSize: 14, fontWeight: '500', marginLeft: 5 }]}
              >OK, go on. Don't show it again</Text>
            </View>
          </View>
        }
      </View>
    )
  }
}

export default AnswerEvaluator
