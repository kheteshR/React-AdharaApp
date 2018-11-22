import React ,{Component} from 'react';
import {Alert,View,TextInput,TouchableOpacity,Text,KeyboardAvoidingView,StatusBar} from 'react-native';


class LoginForm extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        username:'',
        password:''
     }
    }
    getValueUsername=(text)=>{
        console.log("get username----->",text);
        this.setState({username:text});
        
        console.log("get username----->",this.state.username);
    }
    getValuePassword=(text)=>{
        this.setState({password:text});
        console.log("get password----->",this.state.password);
    }
  

      LoginApi_Integartion=async ()=>{
        fetch('http://192.168.1.22:3007/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
           "walletName":this.state.username,
           "password":this.state.password
            })
      })
          .then((response) => 
          console.log("response",response))
      
          Alert.alert('Credentials Submit Successfully')

      }
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
          onChangeText={this.getValueUsername}
          value={this.state.username}
          style={styles.input}>
          </TextInput>
         
          <TextInput  
          placeholder="Enter password"
          secureTextEntry
          onChangeText={this.getValuePassword}
          style={styles.input}>
          
          </TextInput>
          
            <TouchableOpacity style={styles.buttonContainer} 
              onPress={this.LoginApi_Integartion}
              title="OK!"
              color="#841584"
              >
            <Text style={styles.button}>Login</Text>
            </TouchableOpacity>
            </KeyboardAvoidingView>
         );
    }
};


//Apply CSS
const styles = {
    container: {
      padding:25,
    },
    input:{
        height:40,
        backgroundColor:'rgba(255,255,255,0.7)',
        marginBottom:20,
        borderRadius:5,
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
        borderRadius:5,
        paddingVertical:15

    }
   
};

export default LoginForm;
