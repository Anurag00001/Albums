import React from 'react'
import {Text,StyleSheet,TouchableOpacity} from 'react-native'

const WatchButton=({onPress,children})=>{
    return(
        <TouchableOpacity style={styles.buttonStyles} onPress={onPress} >
            <Text style={styles.textStyles}>{children}</Text>
            </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    buttonStyles:{
        flex:1,
        alignSelf:"stretch",
        backgroundColor:"#fff",
        borderRadius:5,
        borderWidth:1,
        borderColor:"red",
        marginLeft:5,
        marginRight:5
    },
    textStyles:{
        paddingTop:10,
        paddingBottom:10,
        alignSelf:"center",
        color:"red",
        fontSize:16,
        fontWeight:'600'
    }
})

export default WatchButton;