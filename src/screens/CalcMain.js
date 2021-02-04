import React, { Component } from 'react';
import { TextInput } from 'react-native';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const CalcMain = () => {
  const [ethanolPropInput, setEPText] = React.useState('');
  const [gasolineInput, setGText] = React.useState('');
  const [ethanolInput, setEText] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.textInfo}>
        Ethanol Proportion
        </Text>
      <TextInput
        value={ethanolPropInput}
        style={styles.textInfo}
        testID={TEST_ID_ETHANOL_PROP_INPUT}
        onChangeText={(ethanolPropInput) => {
          setEPText(ethanolPropInput)
          setGText(getRemainingFuel(ethanolInput, ethanolPropInput, true))
          setEText(getRemainingFuel(gasolineInput, ethanolPropInput, false))
        }}
      />

      <Text style={styles.textInfo}>
        Gasoline (L)
        </Text>
      <TextInput
        value={gasolineInput}
        style={styles.textInfo}
        testID={TEST_ID_GASOLINE_INPUT}
        onChangeText={(gasolineInput) => {
          setGText(gasolineInput)
          setEText(getRemainingFuel(gasolineInput, ethanolPropInput, false))
        }}
      />

      <Text style={styles.textInfo}>
        Ethanol (L)
        </Text>
      <TextInput
        value={ethanolInput}
        style={styles.textInfo}
        testID={TEST_ID_ETHANOL_INPUT}
        onChangeText={(ethanolInput) => {
          setEText(ethanolInput)
          setGText(getRemainingFuel(ethanolInput, ethanolPropInput, true))
        }}
      />
    </View>
  );
}

function getRemainingFuel(fuelInput, ethanolPropInput, isEthanol) {
  const defaultGEProp = 27.5; //TODO: let it be configured by the user

  if(!isInputValid(fuelInput) || !isInputValid(ethanolPropInput, defaultGEProp, 100)) {
    return '0';
  }

  const fuelValue = Number(fuelInput);
  const ethanolPropValue = Number(ethanolPropInput);

  const remainingFuelValue = isEthanol
    ? fuelValue*(100 - ethanolPropValue)/(ethanolPropValue - defaultGEProp) // gasoline value
    : fuelValue*(ethanolPropValue - defaultGEProp)/(100 - ethanolPropValue); // ethanol value

    return remainingFuelValue.toString();
}


function isInputValid(input, lowerLimit=0, upperLimit=Number.MAX_SAFE_INTEGER) {
  return (!isNullOrWhiteSpace(input) && !isNaN(input) && Number(input) >= lowerLimit && Number(input) <= upperLimit);
}

function isNullOrWhiteSpace(str) {
  return (str == null || str.trim() === '');
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