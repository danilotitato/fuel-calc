import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const CalcMain = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textInfo}>
        Gasoline (L)
        </Text>
      <Text style={styles.textInfo}>
        Ethanol (L)
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
  textInfo: {
    fontSize: 14,
    textAlign: 'left',
    margin: 10,
  }
});

export default CalcMain;