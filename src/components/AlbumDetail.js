import React from 'react'
import {Alert,View,Text,Image,StyleSheet,Linking,TouchableOpacity} from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'
import WatchButton from './WatchButton'

const AlbumDetail=({data})=>{

const {title,artist,thumbnail_image,image,url}=data;


    return(
        
        <Card>
             
            <CardSection>
               
                <View style={styles.imageStyle}>
                <Image 
                style={{width:50,height:50}}
                source={{uri:thumbnail_image}} />

                    </View>
                <View style={styles.textStyle}>
            <Text style={{fontSize:18}}>{title}</Text>
            <Text>{artist}</Text>
                </View>
            </CardSection>


            <CardSection>
            <TouchableOpacity style={{flex:1}} onPress={()=>Linking.openURL(image)}>
                    <Image 
                    style={{flex:1,height:300,width:null}}
                    source={{uri:image}} 
                    />
                </TouchableOpacity>
                </CardSection>

                <CardSection>
                    <Button onPress={()=>Linking.openURL(url)} >Buy Now</Button>
                    </CardSection>

                <CardSection>
                    <WatchButton onPress={()=>Linking.openURL('https://www.youtube.com')}>Watch Now</WatchButton>
                    </CardSection>


               
            </Card>
    )
}

const styles=StyleSheet.create({
    textStyle:{
        flexDirection:"column",
        justifyContent:"space-around"
    },
    imageStyle:{
        
        justifyContent:"center",
        alignItems:"center",
        marginLeft:5,
        marginRight:5
    }
})

export default AlbumDetail;