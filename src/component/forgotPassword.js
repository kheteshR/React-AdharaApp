import React, { Component } from 'react';
import {View,TextInput,Text,Button} from 'react-native'

class ForgotPassword extends Component {
    state = {  }
    render() { 
        return ( 
            <View style={styles.container}>
            <Text style={{fontWeight:'bold'}}>Registered Email Address:</Text>
            <TextInput style={styles.input} placeholder="Enter your registered email address"/>
            <Button style={styles.buttonContainer}
            title="submit"
            color="#841584"
           
          />
            </View>
         );
    }
}
 const styles={
     container:{
         flexGrow:1,
         justifyContent:'center',
         alignItems:'center'
     },
     input:{
        height:40,
        backgroundColor:'rgba(255,255,255,0.7)',
        margin:15,
        borderRadius:5,
        color:'black',
        paddingHorizontal:10
    },
    buttonContainer:{
        backgroundColor:'#e81d62',
        borderRadius:5,
        paddingVertical:15,
        marginBottom:20

    }
 }
export default ForgotPassword;