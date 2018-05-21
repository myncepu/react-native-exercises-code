/*
 * GenericScreen.js
 * Copyright (C) 2018 yanpengqiang <yan2010@live.com>
 *
 * Distributed under terms of the MIT license.
 */
import React from 'react'
import {
  View,
  StyleSheet,
  StatusBar,
} from 'react-native'
import { Button } from 'react-native-elements'

export default ({ navigation, title, Name }) => (
  <View style={styles.container}>
    <StatusBar
      backgroundColor="blue"
      barStyle="light-content"
    />
    <Button
      title={`Open ${title}+1`}
      onPress={() => navigation.navigate(`${Name}+1`)}
      color="#fff"
      buttonStyle={ styles.button }
    />
    <Button
      title="Open Settings"
      onPress={() => navigation.navigate('Settings')}
      color="#fff"
      buttonStyle={ styles.button }
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    alignSelf: 'auto',
    width: 300,
    backgroundColor: '#f4511e',
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
})
