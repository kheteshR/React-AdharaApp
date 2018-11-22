import React ,{Component} from 'react';
import {View,Text,Image} from 'react-native';
import LoginForm from './LoginForm';



class LoginPageComponent extends Component {
    state = {  }
    render() { 
       
        return ( 
            <View style={styles.container}>
            <View style={styles.logoContainer}>
            <Image  style={styles.logo} source={require('./Images/ActualUaE.png')}/>
            <Text style={{fontWeight: 'bold',fontSize:20}}>An app made for Beauty Salon</Text>
            </View>
            <View style={styles.formContainer}>
            <LoginForm/>
            </View>
            </View>
            
         );
    }
};
//Apply CSS
const styles = {
    container: {
      flex: 1
      
    },
    logoContainer:{
        alignItems:'center',
        flexGrow:1,
        justifyContent:'center'
    },
    logo:{
        height:100,
        width:100,
        marginBottom:2,
     
    },
    title:{
        color:'#FFF',
        marginTop:'10',
        width:160,
        textAlign:'center',
        opacity:0.9
    }
};

export default LoginPageComponent;
