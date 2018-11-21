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
import SalonList from './src/component/SalonList';
// import Button from './src/component/Button';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

//Create Component
export default class App extends Component{
  constructor(){
    super()
  this.state={
    showMainScreen: true
  }
 
  }
  toggleViewHandler=()=>{
    console.log("toggleViewHandler**********");
    const doesShow=this.state.showMainScreen;
    this.setState({showMainScreen:!doesShow})
  };
 
  render() {
    console.log("toggleViewHandler**********",this.state.showMainScreen);
    return (
      <View style={{flex:1}} showMainScreen={this.state.showMainScreen}>
         <Header headerText={'Adhaara Project'}/>
         <SalonList/>
    </View>
 );
  }
}

//Apply CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent:'center',
    padding:'10%'
  }

});
