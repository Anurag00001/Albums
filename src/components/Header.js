import React from 'react'
import {View,Text} from 'react-native'

const Header=(props)=>{
  const {textStyle,viewStyle} =styles;
  return(
      <View style={viewStyle}>
  <Text style={textStyle}>{props.headerText}</Text>
  </View>
  )
}


const styles={
    viewStyle:{
    backgroundColor:"#ddd",
    justifyContent:"center",
    alignItems:"center",
    height:60,
    paddingTop:15,
    shadowColor:"black",
    shadowOffset:{width: 0,height: 2},
    shadowOpacity:0.9
    },
  textStyle:{
    fontSize:40,
    
  }
}
export default Header;
