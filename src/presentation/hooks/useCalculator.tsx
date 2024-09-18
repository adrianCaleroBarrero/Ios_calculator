import React, {useRef, useState} from 'react';

enum Operator {
  add,
  subtract,
  multiply,
  divide,
}

export default function useCalculator() {
  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');
  const lastOperation = useRef<Operator>();
  const clean = () => {
    setPrevNumber('0');
    setNumber('0');
  };
  const deleteOperation = () => {
    if (number.length === 1 || (number.length === 2 && number.startsWith('-')))
      return setNumber('0');
    return setNumber(number.slice(0, -1));
  };
  const toggleSign = () => {
    if (number.includes('-')) {
      return setNumber(number.replace('-', ''));
    }
    setNumber('-' + number);
  };
  const buildNumber = (numberString: string) => {
    if (number.includes('.') && numberString === '.') return;
    if (number.startsWith('0') || number.startsWith('-0')) {
      //Decimal point
      if (numberString === '.') {
        return setNumber(number + numberString);
      }
      if (numberString === '0' && number.includes('.')) {
        return setNumber(number + numberString);
      }
      if (numberString !== '0' && !number.includes('.')) {
        return setNumber(numberString);
      }
      if (numberString === '0' && !number.includes('.')) return;
      return setNumber(number + numberString);
    }
    setNumber(number + numberString);
  };

  const setLastNumber = () => {
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }
    setNumber('0');
  };

  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.divide;
  };
  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply;
  };
  const subtractOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.subtract;
  };
  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.add;
  };

  const calculateResult = () => {
    switch (lastOperation.current) {
      case Operator.add:
        setNumber(`${Number(number) + Number(prevNumber)}`);
        break;
      case Operator.subtract:
        setNumber(`${Number(prevNumber) - Number(number)}`);
        break;
      case Operator.multiply:
        setNumber(`${Number(number) * Number(prevNumber)}`);
        break;
      case Operator.divide:
        setNumber(`${Number(prevNumber) / Number(number)}`);
        break;
      default:
        throw new Error('Operation not implemented');
    }
    setPrevNumber('0');
  };

  return {
    //Properties
    number,
    prevNumber,
    //Methods
    buildNumber,
    clean,
    deleteOperation,
    toggleSign,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    calculateResult,
  };
}
