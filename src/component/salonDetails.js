//import library for making a component
import React from 'react';
import {Text,View,Image,Linking} from 'react-native';
import Cards from './Cards';
import CardSection from './cardSection';
import Button from './Button';

//create functional component
const AdminDetail=({album})=>{
    // console.log("{}",{album})
    const {title,artist,thumbnail_image,image,url}=album;
    const {thumbnailContainerStyle,
           thumbnailStyle,
           headerContentStyle,
           headerTextStyle,
           ImageStyle }=styles;
   
    return(
     <Cards>
     <CardSection>
 
        <View style={thumbnailContainerStyle}>
        <Image style={thumbnailStyle}
            source={{uri:thumbnail_image}}>
        </Image>
        </View>


        <View style={headerContentStyle}>
        <Text style={headerTextStyle}>{title}</Text>
        <Text>{artist}</Text>
        </View>


        </CardSection>
        <CardSection>
        <Image style={ImageStyle} 
        source={{uri:image}}
        />
        </CardSection>

        <CardSection>
        <Button onPress={()=>Linking.openURL(url)}>
        Buy Now
        </Button>
        </CardSection>


        </Cards>
    );

};

const styles={
    headerContentStyle:{
        flexDirection:'column',
        justifyContent:'space-around'
    },
    headerTextStyle:{
      fontSize:18
    },
    thumbnailStyle:{
        height:50,
        width:50
    },
    thumbnailContainerStyle:{

        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10

    },
    ImageStyle:{
        height:300,
        flex:1,
        width:null
    }


}

//export functional component
export default AdminDetail;