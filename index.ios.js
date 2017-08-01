
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
  componentDidMount() {
    this.setState(
      {text: test.FirstModule,}
    );
  }
  render (){
    const {subtext: [start, end], text} = this.state;

    const selected = text.substring(start, end);
    return (
      <View style = {styles.container}>
        <TextInput style = {styles.input}
          onSelectionChange = {this.process}
          onChangeText = {({text}) => this.setState({text})}
          multiline = {true}
          editable={false}
        >
        <Text style = {styles.welcome}
          selectable = {true}

        >
          {test.FirstModule}
        </Text>
        </TextInput>
        
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
    paddingTop: 50,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },
  input: {
    width: 300,
    height: 300,
    borderColor: 'white',
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
