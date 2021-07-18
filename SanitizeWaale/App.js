import React , {Component} from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import { NavigationContainer } from '@react-navigation/native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';

import Home from './screen/Home'
import newform from './src/components/newform'
import { View, StyleSheet, Animated } from 'react-native'

import Picker from './src/components/imageani'



const Stack = createStackNavigator({
  Home: { screen :Home},
  newform: { screen : newform},
}
  )



const Appp = createAppContainer(Stack)

const Apppp = () => {
  return (
    <Picker />
  );
};

// export default createAppContainer(stackNavigator);

export default class App extends Component {
  
  
  

  render(){

  //   <Stack.Navigator>
  //   <Stack.Screen name="newform" component={newform}/>

  
  // </Stack.Navigator>
    return (
      
      
      <View style={{backgroundColor:'black',height:'100%',width:'100%'}}>
       
         <Appp/>
        <Picker />
      
       
      </View>
      
      
  );
  }
}
