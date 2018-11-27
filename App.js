/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
//Library for react
import React, {Component} from 'react';
import {Platform,StyleSheet,View} from 'react-native';
import Header from './src/component/header';
// import { TextField } from 'react-native-material-textfield'
import SalonList from './src/component/SalonList';
import LoginPageComponent from './src/component/LoginPage';
import Routes from './src/component/routes';
import firebase from 'firebase';
import RegistrationPage from './src/component/SignUp';



//Create Component
export default class App extends Component{
  constructor(){
    super()

  this.state={
    loggedIn:false
    
  }
  }
 
 componentWillMount(){
  if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyD4zANj3ToI8OBqjxMvc84M6beLTgju0Pc',
    authDomain: 'authentication-53681.firebaseapp.com',
    databaseURL: 'https://authentication-53681.firebaseio.com',
    projectId: 'authentication-53681',
    storageBucket: 'authentication-53681.appspot.com',
    messagingSenderId: '947889780489'
  })

  firebase.auth().onAuthStateChanged((user)=>{
    console.log("user logged in ",user)
    if(user){
     this.setState({loggedIn:true})
    } else{
      this.setState({loggedIn:false})

    }
    console.log("user logged in ",user)
  });
  
 }
 }
 renderContent(){

  switch(this.state.loggedIn){
    case true:
    return (
      <View>
      <Header headerText={'Adhaara Sign Out'}/>
      <SalonList/>
      </View>
      );
    case false:
    return (
      <View style={styles.LoginContainer}>
      <Header headerText={'Adhaara Sign In'}/>
      <LoginPageComponent/>
      </View>
    );
    default:
    return <Spinner size="large"/>
  }
  
}
  render() {
    return (
      <View style={styles.container}>
      <Routes/>
    </View>
 );
  }
}

//Apply CSS
const styles = StyleSheet.create({
  container:{
    flexGrow:1,
    // backgroundColor: 'radial-gradient(circle at 50% 43%, #e81d62, rgba(188, 25, 80, 0.4) 96%, #e81d62)'


  },
  LoginContainer: {
    flexGrow: 1,
    backgroundColor: 'radial-gradient(circle at 50% 43%, #e81d62, rgba(188, 25, 80, 0.4) 96%, #e81d62)'
  }

});
