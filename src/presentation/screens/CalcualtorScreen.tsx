import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, globalStyles} from '../../config/theme/app-theme';
import CalculatorButton from '../components/CalculatorButton';
import useCalculator from '../hooks/useCalculator';

const CalcualtorScreen = () => {
  const {
    number,
    prevNumber,
    formula,
    buildNumber,
    clean,
    deleteOperation,
    toggleSign,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    calculateResult,
  } = useCalculator();
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{paddingHorizontal: 30, paddingBottom: 20}}>
        <Text
          style={globalStyles.mainResult}
          adjustsFontSizeToFit
          numberOfLines={1}>
          {formula}
        </Text>
        {formula !== prevNumber && (
          <Text
            style={globalStyles.subResult}
            adjustsFontSizeToFit
            numberOfLines={1}>
            {prevNumber === '0' ? '' : prevNumber}
          </Text>
        )}
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={clean}
          label="C"
          color={colors.lightGray}
          darkText
        />
        <CalculatorButton
          onPress={toggleSign}
          label="+/-"
          color={colors.lightGray}
          darkText
        />
        <CalculatorButton
          onPress={deleteOperation}
          label="del"
          color={colors.lightGray}
          darkText
        />
        <CalculatorButton
          onPress={divideOperation}
          label="/"
          color={colors.orage}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton onPress={() => buildNumber('7')} label="7" />
        <CalculatorButton onPress={() => buildNumber('8')} label="8" />
        <CalculatorButton onPress={() => buildNumber('9')} label="9" />
        <CalculatorButton
          onPress={multiplyOperation}
          label="x"
          color={colors.orage}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton onPress={() => buildNumber('4')} label="4" />
        <CalculatorButton onPress={() => buildNumber('5')} label="5" />
        <CalculatorButton onPress={() => buildNumber('6')} label="6" />
        <CalculatorButton
          onPress={subtractOperation}
          label="-"
          color={colors.orage}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton onPress={() => buildNumber('1')} label="1" />
        <CalculatorButton onPress={() => buildNumber('2')} label="2" />
        <CalculatorButton onPress={() => buildNumber('3')} label="3" />
        <CalculatorButton
          onPress={addOperation}
          label="+"
          color={colors.orage}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={() => buildNumber('0')}
          label="0"
          doubleSize
        />
        <CalculatorButton onPress={() => buildNumber('.')} label="." />
        <CalculatorButton
          onPress={calculateResult}
          label="="
          color={colors.orage}
        />
      </View>
    </View>
  );
};

export default CalcualtorScreen;
