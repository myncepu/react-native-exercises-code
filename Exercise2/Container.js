/*
 * Container.js
 * Copyright (C) 2018 yanpengqiang <yan2010@live.com>
 *
 * Distributed under terms of the MIT license.
 */

import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333542',
    flex: 1,
  },
})

export const Container = ({ children }) => (
  <SafeAreaView style={ styles.container }>
    { children }
  </SafeAreaView>
)
