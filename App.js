
import React, {Component} from 'react';
import {StyleSheet, View,Image} from 'react-native';
import Spinner from './src/component/Spinner'
import Header from './src/component/header';
import Routes from './src/component/routes';
import AddStylist from './src/component/AddStylist'
import AddStylistScreen from './src/component/home';
import {Provider} from 'react-redux'; // provider is only for sending state to react component
import { createStore } from 'redux';
import reducers from './src/reducers'; //for manipulation of state


export default class App extends Component{
  state={
    loggedIn:false
  }
  renderContent(){

    switch(this.state.loggedIn){
      case true:
      return (
        <View>
        <Header headerText={'Adhaara Sign Out'}/>
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
      <Provider store={createStore(reducers)}>
      <View style={styles.container}>
       <AddStylist/>
      </View>
      </Provider>
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