import React, { Component, PropTypes } from 'react';
import { AppRegistry, NavigatorIOS, Text, View, TouchableHighlight } from 'react-native';

export default class NavigatorIOSApp extends Component {
  render() {
    return (
      <View><Text>HELLO WORLD</Text></View>
    );
  }
}

class MyScene extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context);
    this._onForward = this._onForward.bind(this);
    this._onBack = this._onBack.bind(this);
  }

  _onBack() {
    this.props.navigator.pop()
  }

  _onForward() {
    this.props.navigator.push({
      title: 'Scene ' + nextIndex,
    });
  }

  render() {
    return (
      <View>
        <Text>Current Scene111: { this.props.title }</Text>
        <TouchableHighlight onPress={this._onForward}>
          <Text>1111Tap me to load the next scene</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

// App registration and rendering
AppRegistry.registerComponent('AwesomeProject', () => NavigatorIOSApp);
