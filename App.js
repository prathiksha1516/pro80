import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createSwichNavigator} from 'react-navigaation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import HomeScreen from './screens/HomeScreen';
import ExchangeScreen from './screens/ExchangeScreen';
import CustomSideBar from './component/CustomSideBar'


export default function App() {
  return (
   <AppContainer/>
  );
}
const TabNavigator=createBottomTabNavigator({
  HomeScreen:{screen:HomeScreen},
  ExchangeScreen:{screen:ExchangeScreen}
})

defaultNavigationOptions: ({navigation})=>({
  tabBarIcon: ()=>{
    const routeName = navigation.state.routeName;
    if(routeName === "HomeScreen"){
      return(
        <Image
        source={require("./assets/home-icon.png")}
        style={{width:20, height:20}}
      />
      )

    }
    else if(routeName === "Exchange"){
      return(
        <Image
        source={require("./assets/ads-icon.png")}
        style={{width:20, height:20,}}
      />)

    }
  }
})



const AppDrawNavigator = createDrawerNavigator({
Home : {
screen : TabNavigator
},
Settings : {
screen : SettingScreen
}
},
{
contentComponent:customSidebarMenu
},
{
initialRouteName : 'Home'
})

const switchNavigator = createSwitchNavigator({
WelcomeScreen:{screen: WelcomeScreen},
AppDrawNavigator : AppDrawNavigator,
})

const AppContainer =  createAppContainer(switchNavigator);



