import React ,{Component}from 'react'
import {StyleSheet,FlatList,View,Text,TouchableOpacity,TextInput,Alert,Modal, ScrollView,KeyboardAvoidingView} from 'react-native'
import db from '../config'
import firebase from 'firebase'
import MyHeader from '../component/MyHeader'


export default class HomeScreen extends Component{

constructor(){
    super()
    this.state = {
        HomeList : []
    }

this.requestRef = null
}






keyExtractor = (item, index) => index.toString()

renderItem = ( {item, i} ) =>{
    return (
      <ListItem
        key={i}
        title={item.item_name}
        subtitle={item.item_description}
        titleStyle={{ color: 'black', fontWeight: 'bold' }}
        rightElement={
            <TouchableOpacity style={styles.button}>
              <Text style={{color:'#ffff'}}>View</Text>
            </TouchableOpacity>
          }
        bottomDivider
      />
    )
  }

  getitemDescriptionList =()=>{
    this.requestRef = db.collection("requested_items")
    .onSnapshot((snapshot)=>{
      var itemDescriptionList = snapshot.docs.map(document => document.data());
      this.setState({
        itemDescriptionList : requestedBooksList
      });
    })
  }

  componentDidMount(){
    this.getitemDescriptionList()
  }

  componentWillUnmount(){
    this.requestRef();
  }

render(){
return(
<View style = {{flex:1}}>
<MyHeader title = "HomeScreen"/>
<View style = {{flex:1}}>ook itemDescription Screen

{
            this.state.itemDescriptionList.length === 0
            ?(
                <View style={styles.subContainer}>
                <Text style={{ fontSize: 20}}>List Of All Requested Books</Text>
              </View>

            )
            :(
                <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.itemDescriptionList}
                renderItem={this.renderItem}
              />

            )

            }
            </View>
</View>

)

}

}

const styles = StyleSheet.create({
    subContainer:{
      flex:1,
      fontSize: 20,
      justifyContent:'center',
      alignItems:'center'
    },
    button:{
      width:100,
      height:30,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8
       }
    }
  })


