
import React, { Component } from 'react';
import { StyleSheet,
Text,
View,
TouchableOpacity,
TextInput
} from 'react-native';
import {Actions} from 'react-native-router-flux';




class RegistrationPage extends Component {
 state={
   name_of_salon : '',
   type_of_salon : '',
   first_name_salon_owner : '',
   last_name_salon_owner : '',
   salon_owner_phone : '',
   address_of_owner : '',
   address_of_salon : '',
   city_of_owner : '',
   city_of_salon : '',
   country_of_salon : '',
   emirates_id_of_owner : '',
   email_of_owner : '',
   email_of_salon : '',
   pin_of_owner : '',
   pin_of_salon : '',
   gender_of_owner : '',
   image_of_salon : '',
   salon_open_time : '',
   salon_close_time : '',
   bank_name : '',
   branch_of_bank : '',
   bank_account_number : '',
   account_holder_name : '',
   iban_number : '',
   user_name : '',
   password : '',
   status_of_registration:''
     }

    signupButton(){
       Actions.pop();
    }
    goBack=()=>{
        Actions.login();
    }
    SignupApi_Integartion=async ()=>{
          
        console.log(this.state.name_of_salon,this.state.first_name_salon_owner,this.state.salon_owner_phone);
        fetch('http://192.168.1.22:4003/request', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
           "name_of_salon":this.state.name_of_salon,
           "first_name_salon_owner":this.state.first_name_salon_owner,
           "last_name_salon_owner":this.state.last_name_salon_owner,
           "salon_owner_phone":this.state.salon_owner_phone,
           "address_of_salon":this.state.address_of_salon,
           "emirates_id_of_owner":this.state.emirates_id_of_owner,
           "email_of_salon":this.state.email_of_salon

            })
      })
          .then((response) => {
         
            return response.json();
       
          }).then((data)=>{
              console.log("response object returned by response.json() here response.json returns promise so resolve it",data);
          this.setState({
              "status_of_registration":false
          })
          
          
          
            })
          
          .catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
             // ADD THIS THROW error
              throw error;
            });
       }

       renderButton(){
        switch(this.state.status_of_registration){
            case true:
             return <Text>Successfully Register</Text>;
            case false:
            return <Text>Waiting for Admin approval</Text>;
             default:
            return(
                <TouchableOpacity  style={styles.buttonContainer} onPress={this.SignupApi_Integartion}>
            <Text style={styles.button}>Sign up</Text>
            </TouchableOpacity>
            );
         }
        }

    render() { 
        return (  
            <View style={styles.container}>
            <TextInput  style={styles.textInput} placeholder="salon name" underlineColorAndroid={'transparent'}
            onChangeText={(name_of_salon) => this.setState({"name_of_salon":name_of_salon})}
            ></TextInput>
            <TextInput  style={styles.textInput} placeholder="first name of salon owner" underlineColorAndroid={'transparent'}
            onChangeText={(first_name_salon_owner) => this.setState({"first_name_salon_owner":first_name_salon_owner})}
            ></TextInput>
            <TextInput placeholder="last name of salon owner" style={styles.textInput} underlineColorAndroid={'transparent'}
            onChangeText={(last_name_salon_owner) => this.setState({"last_name_salon_owner":last_name_salon_owner})}
            ></TextInput>
            <TextInput placeholder="contact number" style={styles.textInput} underlineColorAndroid={'transparent'}
            onChangeText={(salon_owner_phone) => this.setState({"salon_owner_phone":salon_owner_phone})}
            ></TextInput>
            <TextInput placeholder="address" style={styles.textInput} underlineColorAndroid={'transparent'}
            onChangeText={(address_of_salon) => this.setState({"address_of_salon":address_of_salon})}
            ></TextInput>
            <TextInput placeholder="emirated id" style={styles.textInput} underlineColorAndroid={'transparent'}
            onChangeText={(emirates_id_of_owner) => this.setState({"emirates_id_of_owner":emirates_id_of_owner})}
            ></TextInput>
            
            <TextInput placeholder="email id" style={styles.textInput} underlineColorAndroid={'transparent'}
            onChangeText={(email_of_salon) => this.setState({"email_of_salon":email_of_salon})}
            ></TextInput>

            {this.renderButton()}
            <View style={styles.SignUpContainer} >
            <Text style={styles.Signuptext}>Already have an account?</Text>
            <TouchableOpacity onPress={this.goBack}>
            <Text style={styles.signupButton}>Sign in</Text>
            </TouchableOpacity>
            </View>
            </View>
        );
    }
}
 const styles=StyleSheet.create({
     container:{
        alignItems:'center',
         flexGrow:1,
         backgroundColor: 'white'

     },
     button:{
        textAlign:'center',
        color:'#FFFFFF',
        fontWeight:'700'
    },
     buttonContainer:{
        backgroundColor:'#e81d62',
        borderRadius:5,
        paddingVertical:15,
        alignSelf:'stretch',
        margin:10

    },
    SignUpContainer:{
        flexGrow:1,
        alignItems:'flex-end',
        justifyContent:'center',
        paddingVertical:10,
        flexDirection:'row',
     },
     signupButton:{
        color:'#5333ed',
        fontWeight:'500',
        fontSize:16

    },
    textInput:{
        alignSelf:'stretch',
        height:40,
        margin:10,
        color:'black',
        borderBottomColor:'#f8f8f8',
        borderBottomWidth:1

    },
         Signuptext:{
             color:'black',
             fontSize:16
         }
 })
export default RegistrationPage;