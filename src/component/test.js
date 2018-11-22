import React ,{Component} from 'react';
import {View,TextInput,ScrollView,TouchableOpacity} from 'react-native';



class AwesomeProject extends Component {

    constructor(props){
      super(props)
      this.state = {
        username: '',
        password: '',
      }
    }
  
    _handlePress() {
       console.log(this.state.username);
       console.log(this.state.password);
    }
  
    render() {
      return (
      <ScrollView>
        <View>
  
         
          <TextInput
            placeholder="Enter Name"
            onChangeText={(text) => this.setState({username:text})}/>
  
         
  
          <TextInput
           
            placeholder="Enter Name"
            
            onChangeText={(text) => this.setState({password:text})}
          />
  
          <TouchableOpacity 
            onPress={() => this._handlePress()}
            >
                Submit
          </TouchableOpacity>
  
          </View>
        </ScrollView>
      );
    }
  }
  

  export default AwesomeProject;