
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,

} from 'react-native';

var test = require('NativeModules').HighLightText;

export default class highlightedText extends Component {
  state = {
    text: '',
    subtext: [0, 0]
  }

  render (){
    const {subtext: [start, end], text} = this.state;
    const selected = text.substring(start, end);
    return (
      <View style = {styles.container}>
        <Text style = {styles.welcome}>
          {test.FirstModule}
        </Text>
        <TextInput style = {styles.input}
          onSelectionChange = {this.process}
          onChangeText = {(text) => this.setState({text})}
        />
        <Text style = {styles.result}>
          {selected}
        </Text>
      </View>
    );

  }
  
  process = event => {
    const selection = event.nativeEvent.selection;

    this.setState ({
      subtext: [selection.start, selection.end]
    })
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
    alignSelf: 'center'
  },
  result: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 20,
  },
  button: {
    width: 50,
    height: 50,
    marginLeft: 100,
    marginTop: 100
  },
});

AppRegistry.registerComponent('highlightedText', () => highlightedText);
