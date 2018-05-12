import React from 'react'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  square: {
    flexDirection: 'row',
    backgroundColor: 'red',
    width: 300,
    height: 300,
  },

  blue: {
    flex: 2,
    backgroundColor: 'blue',
  },

  green: {
    flex: 1,
    backgroundColor: 'green',
  },
})

const Exercise1 = () => {
  return (
    <View style = { styles.container }>
      <View style = { styles.square }>
        <View style = { styles.blue }/>
        <View style = { styles.green }/>
      </View>
    </View>
  )
}

export default Exercise1
