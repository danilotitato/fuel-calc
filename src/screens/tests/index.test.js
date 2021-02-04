import 'react-native'
import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'

import CalcMain from './screens/CalcMain';

describe('<CalcMain />', () => {
  it('Does not calculate with fuel proportion under the lower limit', () => { //TODO: reminder that in the future the lower limit will be configurable
    const underMinInput = '20';
    const validFuelInput = '15';
    const invalidAttemptOutput = '0';

    const screen = render(<CalcMain />);

    const ethanolPropField = screen.getByTestId(TEST_ID_ETHANOL_PROP_INPUT);
    const gasolineField = screen.getByTestId(TEST_ID_GASOLINE_INPUT);
    const ethanolField = screen.getByTestId(TEST_ID_ETHANOL_INPUT);

    fireEvent.changeText(ethanolPropField, underMinInput);
    expect(ethanolPropField.props.value).toBe(underMinInput);

    fireEvent.changeText(gasolineField, validFuelInput);
    expect(gasolineField.props.value).toBe(validFuelInput);

    expect(ethanolField.props.value).toBe(invalidAttemptOutput);
  });

  it('Does not calculate fuel proportion over 100%', () => {
    const overMaxInput = '101';
    const validFuelInput = '15';
    const invalidAttemptOutput = '0';

    const screen = render(<CalcMain />);

    const ethanolPropField = screen.getByTestId(TEST_ID_ETHANOL_PROP_INPUT);
    const gasolineField = screen.getByTestId(TEST_ID_GASOLINE_INPUT);
    const ethanolField = screen.getByTestId(TEST_ID_ETHANOL_INPUT);

    fireEvent.changeText(ethanolPropField, overMaxInput);
    expect(ethanolPropField.props.value).toBe(overMaxInput);

    fireEvent.changeText(gasolineField, validFuelInput);
    expect(gasolineField.props.value).toBe(validFuelInput);

    expect(ethanolField.props.value).toBe(invalidAttemptOutput);
  });

  it('Does not calculate with non-numeric fuel proportion input', () => {
    const nonNumericInput = 'bruh';
    const validFuelInput = '15';
    const invalidAttemptOutput = '0';

    const screen = render(<CalcMain />);

    const ethanolPropField = screen.getByTestId(TEST_ID_ETHANOL_PROP_INPUT);
    const gasolineField = screen.getByTestId(TEST_ID_GASOLINE_INPUT);
    const ethanolField = screen.getByTestId(TEST_ID_ETHANOL_INPUT);

    fireEvent.changeText(ethanolPropField, nonNumericInput);
    expect(ethanolPropField.props.value).toBe(nonNumericInput);

    fireEvent.changeText(gasolineField, validFuelInput);
    expect(gasolineField.props.value).toBe(validFuelInput);

    expect(ethanolField.props.value).toBe(invalidAttemptOutput);
  });
});
