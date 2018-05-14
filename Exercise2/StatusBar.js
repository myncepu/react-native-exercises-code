/*
 * StatusBar.js
 * Copyright (C) 2018 yanpengqiang <yan2010@live.com>
 *
 * Distributed under terms of the MIT license.
 */

import { Component } from 'react'
import { StatusBar } from 'react-native'

export class StatusBarDeclarative extends Component {
  componentWillMount() {
    this.updateStatusBar(this.props)
  }

  componentWillUpdate(nextProps) {
    this.updateStatusBar(nextProps)
  }

  updateStatusBar = ({ lightBar = true, visible = true }) => {
    const barStyle = lightBar ? 'light-content' : 'dark-content'
    StatusBar.setBarStyle(barStyle)

    StatusBar.setHidden(!visible)
  }

  render() {
    return null
  }
}
