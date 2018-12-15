//import library for making a component
import React from 'react';
import {View} from 'react-native';


const Cards=(props)=>{
    console.log("renderd children component=====",props);
    return(
    <View style={styles.containerStyle}>
       {props.children}
    </View>
    );
};

const styles={
     containerStyle:{
            borderWidth:1, //give border to view container
            borderRadius:2,  //give  border radius 
            borderColor:'#ddd' ,  //give border color
            borderBottomWidth:0 ,  //modification of border bottom width
            //shadowColor:'#000',
            //shadowOffset:{width:0,height:2},
            elevation:2,
            marginLeft:5,
            marginRight:5,
            marginTop:10
     }

};

export default Cards;