/*
 * Header.js
 * Copyright (C) 2018 yanpengqiang <yan2010@live.com>
 *
 * Distributed under terms of the MIT license.
 */
import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native'

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
  },
  headerText: {
    fontWeight: '600',
    fontSize: 23,
    color: '#F9FDFF',
    letterSpacing: 0,
    marginBottom: 12,
    marginTop: 60,
  },
  headerBorder: {
    height: 1,
    backgroundColor: '#575B67',
    width: Dimensions.get('window').width * 0.25,
  },
})

export const Header = ({ children }) => (
  <View style={ styles.headerContainer }>
    <Text style={ styles.headerText }>{ children }</Text>
    <View style={ styles.headerBorder } />
  </View>
)
