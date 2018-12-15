import React, { Component } from 'react';
import {View,ImageBackground} from 'react-native';
import Header from './header';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem'

class HomeScreen extends Component {
    state = {  }


    ItemsRender(state){
        console.log("check items render",state)
        return <ListItem listData={state} />

    }
    render() { 
        return (
            <View style={{flex:1}}> 
            <Header headerText={"Add Stylist"}/>
            <ImageBackground source={require('./Images/AdhaaraBackground.png')}  style={{width: '100%', height: '100%'}} >
            <FlatList
            data={this.props.listData}
            renderItem={this.ItemsRender}
            keyExtractor={(abc) => abc.key}
            ></FlatList>
    </ImageBackground>
            </View> 

        );
    }
}
 
//mapStateToProps is used to pass state as prop to  HomeScreen
const mapStateProps=(state,ownProps)=>{
    console.log("lets show state passed by provider myprops...",ownProps);
    return { listData:state.listData };


};

const styles={
    
    absoluteFillObject:{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
       }
}
export default connect(mapStateProps)(HomeScreen);