import React ,{Component} from 'react';
import {View,Text,Image,KeyboardAvoidingView} from 'react-native';
import LoginForm from './LoginForm';



class LoginPageComponent extends Component {
    state = {  }
    render() { 
       
        return ( 
            <KeyboardAvoidingView behaviour="padding" style={styles.container}>
            <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('./Images/beauty.png')}/>
            <Text style={styles.textStyling}>Adhaara</Text>
            </View>
            <View styles={styles.formContainer}>
            <LoginForm/>
            </View>
            </KeyboardAvoidingView>
         );
    }
};

//Apply CSS
const styles = {
    textStyling:{
        fontWeight: 'bold',
        fontSize:20,
        color:'white',
        marginTop:1, 
        fontStyle: 'italic'
    },
    container: {

        //backgroundColor: 'powderblue',
        // marginBottom:15,
        // backgroundColor: 'radial-gradient(circle at 50% 43%, #e81d62, rgba(188, 25, 80, 0.4) 96%, #e81d62)',
    },
    logoContainer:{
        alignItems:'center',
        marginTop:25, 
        flexGrow:1,
        justifyContent:'center'
    },
    logo:{
        height:100,
        width:100,
        // marginBottom:2,
     
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
