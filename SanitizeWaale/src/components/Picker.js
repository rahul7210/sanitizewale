import React, {useState} from 'react';
import {Picker, Text, StyleSheet, View, TextInput, Button} from 'react-native';

const App = () => {
  const [currency, setCurrency] = useState('US Dollar');
  return (
    <View >
      <Text > Registration Form </Text>
      <View>
        <TextInput 
          placeholder="Name" />
          <TextInput 
          placeholder="Email" />
          <TextInput 
          placeholder="Address" />
          <TextInput 
          placeholder="phone Number" />
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
        />
        <Picker
          selectedValue={currency}
          onValueChange={currentCurrency => setCurrency(currentCurrency)}>
          <Picker.Item label="USD" value="US Dollars" />
          <Picker.Item label="EUR" value="Euro" />
          <Picker.Item label="NGN" value="Naira" />
        </Picker>
        <Text>
          Selected: {currency}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  //Check project repo for styles
});

export default App;