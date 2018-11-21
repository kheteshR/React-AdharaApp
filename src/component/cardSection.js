//import library for making a component
import React from 'react';
import {View,Text} from 'react-native';



//Make a components
const CardSection=(props)=>{
   return (
       
    <View style={styles.containerStyle}> 
     
    {props.children}
    </View>

   );
};

const styles={
containerStyle:{
    borderBottomWidth:1,
    padding:5,
    backgroundColor:'#fff',
    // justifyContent:'center',
    flexDirection:'row',
    borderColor:'#ddd',
    position:'relative'
}
}

export default CardSection;