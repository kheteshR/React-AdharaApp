import React, { Component } from 'react';
import {View} from 'react-native';
import CardSection from './cardSection';
// import Cards from './Cards';
import { Input,Card,List,ListItem } from 'react-native-elements';





class  StylistDetails extends Component {
    state = { 
       
          
     }
     
    render() { 
        const list = [
            {
              title: 'Appointments',
              icon: 'av-timer'
            },
            {
              title: 'Trips',
              icon: 'flight-takeoff'
            }
          ]
        return ( 
           <Card titleStyle={{fontSize:20}} title="Add Stylist">
         <View> 
        

         <Input
         placeholder='First Name'
         />
         </View>
         </Card>
         );
    }
}
 
export default StylistDetails;