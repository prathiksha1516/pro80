import React ,{Component}from 'react'
import {StyleSheet,View,Text,TouchableOpacity,TextInput,Alert,Modal, ScrollView,KeyboardAvoidingView} from 'react-native'
import db from '../config'
import firebase from 'firebase'
import myHeader from '../component/MyHeader'

 export default class BookRequestScreen extends Component{

constructor(){
super()
this.state = {
    userId : firebase.auth().currentUser.email,
    itemName : "",
itemDescription : ""
}
}


createUniqueId(){
    return Math.random().toString(36).substring(7);
  }

addItem =(itemName,itemDescription)=>{
    var userId = this.state.userId
    var randomRequestId = this.createUniqueId()
    db.collection('requested_items').add({
        "user_id": userId,
        "item_name":itemName,
        "item_description":itemDescription,
        "request_id"  : randomRequestId,
    })

    this.setState({
        itemName :'',
         itemDescription: ''
    })

    return Alert.alert("item Requested Successfully")
  }









render(){

return(
<View style = {{flex:1}}>
<MyHeader title = "Exchange Screen"/>
<KeyboardAvoidingView style = {StyleSheet.keyBoardStyle}>
  
             <TextInput
                style ={styles.formTextInput}
                placeholder={"Enter item name"}
                onChangeText={(text)=>{
                    this.setState({
                        itemName:text
                    })
                }}
                value={this.state.itemName}
              />
              <TextInput
                style ={[styles.formTextInput,{height:300}]}
                multiline
                numberOfLines ={8}
                placeholder={"itemdescription"}
                onChangeText ={(text)=>{
                    this.setState({
                        itemDescription:text
                    })
                }}
                value ={this.state.itemDescription}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={()=>{this.addItem(this.state.itemName,this.state.itemDescription)}}
                >
                <Text>addItem</Text>
              </TouchableOpacity>

    </KeyboardAvoidingView>
    </View>
)
}
 }

 const styles = StyleSheet.create({
    keyBoardStyle : {
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    formTextInput:{
      width:"75%",
      height:35,
      alignSelf:'center',
      borderColor:'#ffab91',
      borderRadius:10,
      borderWidth:1,
      marginTop:20,
      padding:10,
    },
    button:{
      width:"75%",
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
      marginTop:20
      },
    }
  )
  
