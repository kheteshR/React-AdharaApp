//import library for making a component
import React ,{Component} from 'react';
import {Text,ScrollView} from 'react-native';
import axios from 'axios';
import AdminDetail from './salonDetails';

 //#StateFull Component
 class SalonList extends Component{
   
    // class property state
    state={albums:[]}
     
    //automatically executed Lifecycle methods
     componentWillMount(){
         console.log("componentWillMount in AlnumList");
         axios.get('https://rallycoding.herokuapp.com/api/music_albums')
         .then(response=>{
             this.setState({albums: response.data});
         })  
         console.log("my class state prop",this.state);
     }

     // mapping each elements in array 
     renderSalonList(){
        return this.state.albums.length > 0 ? this.state.albums.map(album=> <AdminDetail key={album.title} album={album} />) : null
     }


     render(){
         
     return(
         <ScrollView>
         {this.renderSalonList()}
         </ScrollView>
     );
     }
 }

 export default SalonList;
