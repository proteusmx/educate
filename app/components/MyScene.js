import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

export default class MyScene extends Component {
  render() {
    return (

      <View style={styles.viewContainer} >
        <Text>Current Scene: {this.props.title}</Text>

        <TouchableHighlight onPress={this.props.onForward}>
          <Text>Tap me to load the next scene</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.props.onBack}>
          <Text>Tap me to go back</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

MyScene.propTypes = {
  title: PropTypes.string.isRequired,
  onForward: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};


const styles = StyleSheet.create({
  viewContainer: {
    marginTop: 40,
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch"
  }
})
