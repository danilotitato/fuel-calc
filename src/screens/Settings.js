import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

//TODO: placeholder, needs real code
const Settings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Settings
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

export default Settings;