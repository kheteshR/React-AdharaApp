import React, { Component } from 'react';
import {View,Alert,ImageBackground,Image,Text,TouchableOpacity,TouchableHighlight,Modal} from 'react-native';
import StylistDetails from './AddStylistDetails'
class AddStylist extends Component {
    state = {
        modalVisible: false,
      };
    
      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }
 
    render() { 
     
        return (
            <ImageBackground source={require('./Images/AdhaaraBackground.png')}  style={{width: '100%', height: '100%'}} >
            <View style={styles.wrapper}>
               <View>
                <View style={{flexDirection:"row"}}>
                    <View style={{flex:0.5}}>
                    <Image style={styles.img} source={require('./Images/salon.png')}/>
                    </View>
                    <View style={{flex:1,paddingTop:5}}>
                    <Text style={styles.viewStyleOne}>Adam and Eve family Salon</Text>
                    <TouchableOpacity
                    onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                      }}
                    style={styles.button}>
                    <Text style={{color:'white'}}> Add Stylist </Text>
                    </TouchableOpacity>
                    </View>
                </View>
             </View>
            </View>
          
            <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
              }}>
              <View style={{marginTop: 22}}>
                <View>
                
                  <StylistDetails/>
                   <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}
                    style={styles.buttonForModal}
                    >
                    <Text style={{color:'white'}}>Add</Text>
                  </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
        
            </ImageBackground>
        );
    }
}
 
const styles={
  buttonContainer:{
    alignItems:'center'
  },
    viewStyleOne: {
        color: 'white',
        justifyContent:'center',
        padding:5,
        fontSize: 18
      },
      buttonForModal: {
        margin:10,
        position: 'relative',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#e81d62',
        borderRadius: 5,
        width:113,
        height:24
      },
      button: {
        position: 'relative',
        alignItems: 'center',
        backgroundColor: '#e81d62',
        margin: 30,
        borderRadius: 5,
        width:113,
        height:24
      },
    img: {
        height: 100,
        width: 100,
        borderRadius: 10,
       },
       wrapper: {
        marginLeft: 10,
        marginTop:40
    }
}

export default AddStylist;