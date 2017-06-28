import React from 'react'
import { withRouter } from 'react-router'
import { Text, TouchableOpacity, View } from 'react-native'
import SvgUri from 'react-native-svg-uri'
import Hamburger from 'react-native-hamburger'

import MainMenu from './MainMenu'

import styles from '../styles/styles'
import appStyle from '../styles/appStyle'

class CourseHeader extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      active: false
    }
  }

  toggleMenu = () => {
    this.setState({ active: !this.state.active })
  }

  render () {
    return (
      <View style={[style.courseHeader, { backgroundColor: this.props.backgroundColor }]}>
        <View style={styles.questionHeaderFluxContainer}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={this.props.onLogoPress}>
              <SvgUri width='100' height='49' source={require('../images/logo.svg')} />
            </TouchableOpacity>
            <View style={styles.headerBorder}><Text style={styles.headerTitle}>Chemistry</Text></View>
          </View>
          <View style={{ marginRight: 15 }}>
            <Hamburger active={this.state.active} color='#ffffff' type='spinCross' onPress={this.toggleMenu} />
          </View>
        </View>

        {this.props.children}

        {this.state.active && <MainMenu />}
      </View>
    )
  }
}

const style = {
  courseHeader: {
    zIndex: 500,
    margin: 0,
    height: appStyle.header.height,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

CourseHeader.defaultProps = {
  backgroundColor: 'transparent'
}

export default withRouter(CourseHeader)