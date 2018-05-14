/*
 * Button.js
 * Copyright (C) 2018 yanpengqiang <yan2010@live.com>
 *
 * Distributed under terms of the MIT license.
 */
import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native'

const styles = StyleSheet.create({
  touchable: {
    marginHorizontal: 50,
  },
  button: {
    backgroundColor: '#0CD38A',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 2,
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    letterSpacing: 0,
  },
})

export const Button = ({ onPress = () => null, children }) => (
  <TouchableHighlight
    onPress={ onPress }
    style={ styles.touchable }
  >
    <View style={ styles.button }>
      <Text style={ styles.text }>{ children }</Text>
    </View>
  </TouchableHighlight>
)
