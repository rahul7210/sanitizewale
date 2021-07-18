import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Animated,
    TextInput,
    Alert,
    TouchableOpacity,
    Image
} from 'react-native';
 
import AnimatedForm from 'react-native-animated-form';
import Background from '../../assets/a.jpg';
 
const AnimatedInput = Animated.createAnimatedComponent(TextInput);
export default class Appp extends Component {

     
    render=()=> {
       const showAlert = () =>{
            Alert.alert(
               'Submitted !! Our executive will contact you within an hour'
            )
         }
        return (
            <View style={styles.container}>
                <Image style={[StyleSheet.absoluteFill, {width: null, height: null}]} source={Background} />
                <AnimatedForm delay={500} distance={5}>
                    <AnimatedInput placeholder='Name' underlineColorAndroid='transparent' style={styles.text} />
                    <AnimatedInput placeholder='Email' underlineColorAndroid='transparent' style={styles.text} />
                    <AnimatedInput placeholder='Phone Number' underlineColorAndroid='transparent' style={styles.text} />
                    <AnimatedInput placeholder='Address' underlineColorAndroid='transparent' style={styles.text} />
                    <AnimatedInput placeholder='Place to sanitize' underlineColorAndroid='transparent' style={styles.text} />
                    <AnimatedInput placeholder='City' underlineColorAndroid='transparent' style={styles.text} />
                    <AnimatedInput placeholder='State' underlineColorAndroid='transparent' style={styles.text} />
                    <Animated.View style={styles.buttonView}>
                        <TouchableOpacity style={styles.button} onPress = {showAlert}>
                            <Text style={{color: '#fff' }}>Register</Text>
                        </TouchableOpacity>
                    </Animated.View>
                </AnimatedForm>
            </View>
        );
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#919191',
    },
    text: {
        width: 300,
        height:50 ,
        paddingHorizontal: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#FFF",
        color: "#333",
        backgroundColor: "#FFF",
      },
      buttonView: {
        height: 40,
        marginTop: 10,
        backgroundColor: "tomato",
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderRadius: 5,
      },
      button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }
});