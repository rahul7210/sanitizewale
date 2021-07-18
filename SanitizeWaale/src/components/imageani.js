import React, { Component } from 'react';
import MarqueeText from 'react-native-marquee'

import {View,Text,Button , StyleSheet, Animated,Alert,TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Picker from './newform'
// import {Appp} from './newform'

import { useNavigation } from '@react-navigation/native'



class ImageLoader extends Component {
 
  constructor(props){
    super(props);

    }
   
  
  state = {
    opacity: new Animated.Value(0),
  }

  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }

  
 
  render=()=> {
  
    
    return (
      <Animated.Image
        onLoad={this.onLoad}
        {...this.props}
        style={[
          {
            opacity: this.state.opacity,
            transform: [
              {
                scale: this.state.opacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.85, 1],
                })
              },
            ],
          },
          this.props.style,
        ]}
      />
    );
  }
}
var comonent = this 
const App = ({navigation}) => (

 
    <View style={styles.container}>
<ScrollView>

<MarqueeText
    style={{ fontSize: 24 }}
    duration={10000}
    marqueeOnStart
    loop
    marqueeDelay={1000}
    marqueeResetDelay={1000}
  >
   <Text style={{textDecorationStyle:"solid",fontSize:25,backgroundColor:"black",color:"white",textAlign:"center"}}> Hurry and Register now , get best offers on sanitization.... </Text>
  </MarqueeText>

<Text style={{textAlign:"center",textDecorationStyle:"solid",fontSize:40,marginTop:30,backgroundColor:"black",color:"white"}}>SanitizeWale </Text>  
<Text style={{textAlign:"center",textDecorationStyle:"solid",fontSize:24,marginTop:0,backgroundColor:"black",color:"white"}}>we sanitize your surroundings</Text>  
<Text style={{textAlign:"center",textDecorationStyle:"solid",fontSize:18,marginTop:20,backgroundColor:"black",color:"white",textAlign:'justify'}}>“if every individual sweeps in front of their house, the community will be clean. If the community is clean; our coastal ecosystems (rivers, lagoons, wetlands etc) shall be clear clean waters.”
― Lailah Gifty Akita </Text>  
<Text style={{textAlign:"center",textDecorationStyle:"solid",fontSize:18,marginTop:20,backgroundColor:"black",color:"white",}}></Text>

  
    <ImageLoader
      style={styles.image}
      source={{ uri:'https://i.ibb.co/VQh3PzQ/i.jpg'}}
    />
<Text style={{textAlign:"center",textDecorationStyle:"solid",fontSize:25,marginTop:20,backgroundColor:"black",color:"white",}}>Registration Form</Text>
<Button
          title="Registration form  guidelines for sanitization"
          color='black'
          position='left'
           
        
  onPress={() =>  Alert.alert(  
    'Account creation is not required',  
    'You just have to register by the below form to get our service',  
    [  
        {text: 'Read me later', onPress: () => Alert.alert('You can read guidelines any time')},  
        {  
            text: 'Cancel',  
            onPress: () => Alert.alert('You should read the guidelines'),  
            style: 'cancel',  
        },  
        {text: 'OK', onPress: () => Alert.alert('Dont worry! you data is safe with us')},  
    ],  
    {cancelable: false}  
)  }
        />

<Picker/>

        <Text style={{textAlign:"center",textDecorationStyle:"solid",fontSize:18,marginTop:20,backgroundColor:"black",color:"white",textAlign:'justify'}}>As this is covid-19 time, sanitization became an integral part of our life to protect you and your family from corona virus. We provide sanitization solution for our customers so that they cant get infect from corona virus you just have to fill the form our team will reach at your place to sanitize.Your health is very important for us</Text>
        <Text style={{textAlign:"center",textDecorationStyle:"solid",fontSize:18,marginTop:20,backgroundColor:"black",color:"white",}}>Feel free to contact us at :- </Text>
        <Text style={{textAlign:"center",textDecorationStyle:"solid",fontSize:18,marginTop:0,backgroundColor:"black",color:"white",}}>Mail :- sanitizewale@gmail.com</Text>
        <Text style={{textAlign:"center",textDecorationStyle:"solid",fontSize:18,marginTop:0,backgroundColor:"black",color:"white",}}>Phone no :- +95 67542345</Text>
        <Text style={{textAlign:"center",textDecorationStyle:"solid",fontSize:18,marginTop:0,backgroundColor:"black",color:"white",}}>Addresss :- Mohan Garden, Uttam Ngar, Delhi-354676</Text>

</ScrollView>          

  </View>

  
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 360,
    height: 270,
    borderRadius: 0
    ,
  },
});

export default App;