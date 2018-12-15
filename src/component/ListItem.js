import React ,{Component} from 'react';
import CardSection from './cardSection';
import { connect } from 'react-redux';
import {Text,TouchableWithoutFeedback,View,LayoutAnimation} from 'react-native';
import * as actions from '../actions';




class ListItem extends Component{
    componentWillUpdate(){
       LayoutAnimation.spring();    
    }
    renderDiscription=()=>{
        console.log("***********<Inside ListItems props fromhome component>*******",
        this.props.SelectedStylistId);

        if(this.props.listData.item.key === this.props.SelectedStylistId){
        return (
            <CardSection>
            <Text style={styles.titleStyles}>{this.props.listData.item.Duration}</Text>
            </CardSection>
        
            );
        }
    }
    render(){
        console.log("check inside listItem component",this.props.listData.item.key);
        const {key,Service_Category}=this.props.listData.item

    return(
    <TouchableWithoutFeedback onPress={()=> this.props.selectedItems(key)}>
    <View>
    <CardSection>
    <Text style={styles.titleStyles}>{Service_Category}</Text>
    </CardSection>
    {this.renderDiscription()}
    </View>
    </TouchableWithoutFeedback>
    );
    }
};

const styles={
    titleStyles:{
        fontSize:18,
        paddingLeft:15,
        color:'white'
    }
}

mapStateToProps=(state)=>{
    return { SelectedStylistId:state.SelectedStylistId}
}

export default connect(mapStateToProps,actions)(ListItem);