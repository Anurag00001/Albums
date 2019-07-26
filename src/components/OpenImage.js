import React from 'react'
import {Image,Button} from 'react-native'

const OpenImage=({onPress,data})=>{

    const {image}=data;
    return(
      <Image
      style={{flex:1,height:300,width:null}}
      source={{uri:image}} 
      
      />
    )
}

export default OpenImage;