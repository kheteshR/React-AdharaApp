import React ,{Component} from 'react';
import {View,TextInput,TouchableOpacity,Text,KeyboardAvoidingView,StatusBar} from 'react-native';


class LoginForm extends Component {
    state = {  }
    render() { 
     
        return ( 
            <KeyboardAvoidingView behaviour="padding" style={styles.container}>
            
          <StatusBar
           backgroundColor="blue"
           barStyle="light-content"
           />
          <TextInput 
          placeholder="Enter Username or email"
          keyboardType='email-address'
          autoCapitalize='none'
          autoCorrect={false}
          style={styles.input}>
          </TextInput>
          <TextInput  
          placeholder="Enter password"
          secureTextEntry
          ref={(input)=>this.passwordInput=input}
          style={styles.input}>
          
          </TextInput>
         
       
            <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.button}>Login</Text>
            </TouchableOpacity>
            </KeyboardAvoidingView>
         );
    }
};


//Apply CSS
const styles = {
    container: {
      padding:20,
    },
    input:{
        height:40,
        backgroundColor:'rgba(255,255,255,0.7)',
        marginBottom:20,
        color:'grey',
        paddingHorizontal:10

    },
    button:{
        textAlign:'center',
        color:'#FFFFFF',
        fontWeight:'700'
    },
    buttonContainer:{
        backgroundColor:'#336e7b',
        paddingVertical:15

    }
   
};

export default LoginForm;
