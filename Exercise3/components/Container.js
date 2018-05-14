import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333542',
    flex: 1,
  },
});

export const Container = ({ children }) => (
  // 1. KeyboardAvoidingView
  <SafeAreaView style={styles.container}>
    <StatusBar barStyle="light-content" />
    <KeyboardAvoidingView behavior="position" enabled keyboardVerticalOffset={50}>
      {children}
    </KeyboardAvoidingView>
  </SafeAreaView>

  // 2. KeyboardAwareScrollView
  // <SafeAreaView style={styles.container}>
  //   <KeyboardAwareScrollView>
  //     <StatusBar barStyle="light-content" />
  //     {children}
  //   </KeyboardAwareScrollView>
  // </SafeAreaView>
);
