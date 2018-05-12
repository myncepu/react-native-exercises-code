import React, { Component } from 'react';
import { View, Button, SafeAreaView, StatusBar } from 'react-native';

import StatusBarDeclarative from './CustomStatusBar'

class Exercise10 extends Component {
  state = {
    lightStatusBar: true,
    statusBarVisible: true,
  }

  render() {
    return (
      <SafeAreaView style={{ backgroundColor: '#878E88', flex: 1 }}>
        <StatusBarDeclarative
          lightBar={this.state.lightStatusBar}
          visible={this.state.statusBarVisible}
        />
        <Button
          title="Show/Hide Status Bar"
          onPress={() => this.setState({ statusBarVisible: !this.state.statusBarVisible })}
        />
        <Button
          title="Light/Dark Status Bar"
          onPress={() => this.setState({ lightStatusBar: !this.state.lightStatusBar })}
        />
      </SafeAreaView>
    );
  }
}

export default Exercise10;
