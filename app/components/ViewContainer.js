'use strict'

import React, { Component } from 'react'

import {
  View, Text, StyleSheet
} from 'react-native'

class ViewContainer extends Component {
  render() {
    return (
      <View style={styles.viewContainer} >
        <Text>{this.props.children}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch"
  }
})

module.exports = ViewContainer
