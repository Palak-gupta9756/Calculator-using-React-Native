import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'


const calculator = () => {
  const [firstValue, setFirstValue] = useState('');
  const [displayValue, setdisplayValue] = useState('0');
  const [operator, setOperator] = useState('');

  const handleNumberInput = (num: string) => {
    if (displayValue == '0') {
      setdisplayValue(num);
    } else {
      setdisplayValue(displayValue + num);
    }

  }
  const handleDelete = () => {
    if (displayValue.length === 1) {
      setdisplayValue("0");
    } else {
      setdisplayValue(displayValue.slice(0, -1));
    }


  };
  const handleClear = () => {
    setdisplayValue("0");
    setFirstValue("");
    setOperator("");
  };

  const handleOperator = (selectedOperator: string) => {

    setFirstValue(displayValue);
    setOperator(selectedOperator);
    setdisplayValue('0');
  };

  const handleEqual = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);

    if (!operator || isNaN(num1) || isNaN(num2)) return;

    let result = 0;

    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          setdisplayValue("Error: Divide by 0");
          setFirstValue('');
          setOperator('');
          return;
        }
        result = num1 / num2;
        break;

      case "%":
        result = num1 % num2;
        break;
      default:
        return;
    }

    setdisplayValue(result.toString());
    setFirstValue('');
    setOperator('');
  };
  return (

    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {firstValue !== '' && operator !== '' && (
          <Text style={styles.secondaryInput}>
            {firstValue} {operator}
          </Text>
        )}
        <Text style={styles.input}>{displayValue}</Text>
      </View>

      <View style={{
        borderBottomColor: 'white',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical: 10,

      }}>

      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={
          () => handleClear()
        }>
          <Text style={styles.buttonstyle1}>AC</Text>

        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={
          () => handleDelete()
        }>
          <Text style={styles.buttonstyle1}>DEL</Text>

        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={
          () => handleOperator("%")
        }>
          <Text style={styles.buttonstyle1}>%</Text>

        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={
          () => handleOperator("/")
        }>
          <Text style={styles.buttonstyle1}>/</Text>

        </TouchableOpacity>

      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={
          () => handleNumberInput("7")
        }>
          <Text style={styles.buttonstyle1}>7</Text>

        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={
          () => handleNumberInput("8")
        }>
          <Text style={styles.buttonstyle1}>8</Text>

        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={
          () => handleNumberInput("9")
        }>
          <Text style={styles.buttonstyle1}>9</Text>

        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={
          () => handleOperator("*")
        }>
          <Text style={styles.buttonstyle1}>*</Text>

        </TouchableOpacity>

      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={
          () => handleNumberInput("4")
        }>
          <Text style={styles.buttonstyle1}>4</Text>

        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={
          () => handleNumberInput("5")
        }>
          <Text style={styles.buttonstyle1}>5</Text>

        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={
          () => handleNumberInput("6")
        }>
          <Text style={styles.buttonstyle1}>6</Text>

        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={
          () => handleOperator("-")
        }>
          <Text style={styles.buttonstyle1}>- </Text>

        </TouchableOpacity>

      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={
          () => handleNumberInput("1")
        }>
          <Text style={styles.buttonstyle1}>1</Text>

        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={
          () => handleNumberInput("2")
        }>
          <Text style={styles.buttonstyle1}>2</Text>

        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={
          () => handleNumberInput("3")
        }>
          <Text style={styles.buttonstyle1}>3</Text>

        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={
          () => handleOperator("+")
        }>
          <Text style={styles.buttonstyle1}>+</Text>

        </TouchableOpacity>

      </View>


      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={
          () => handleNumberInput("00")
        }>
          <Text style={styles.buttonstyle1}>00</Text>

        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={
          () => handleNumberInput("0")
        }>
          <Text style={styles.buttonstyle1}>0</Text>

        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={
          () => handleNumberInput(".")
        }>
          <Text style={styles.buttonstyle1}>.</Text>

        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={
          () => handleEqual()
        }>
          <Text style={styles.buttonstyle1}>=</Text>

        </TouchableOpacity>

      </View>
    </View>

  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(18,18,18)",
    flex: 1,
  },
  inputContainer: {
    height: 270,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 10,
  },
  secondaryInput: {
    color: 'gray',
    fontSize: 28,
    textAlign: 'right',
    paddingBottom: 5,
  },


  input: {
    color: "white",
    fontSize: 45,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },

  button: {
    backgroundColor: "rgb(45,45,45)",
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 5,
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonstyle1: {
    fontSize: 30,
    color: "white",
    textAlign: 'center',
    textAlignVertical: 'center',
  },


  button1: {
    backgroundColor: "orange",
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 5,
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default calculator;