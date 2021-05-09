import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';

const Myheader = props =>{

return(
<Header

centerComponent={{ text: props.title, style: { color: '7BF6F7', fontSize:20,fontWeight:"bold", } }}
backgroundColor = 'EE89F6'
/>
);


}
