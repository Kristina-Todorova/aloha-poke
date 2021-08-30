import { StatusBar } from 'expo-status-bar';
import React, {useContext} from 'react';
import { StyleSheet, Text, View, Image, Alert, TextInput } from 'react-native';
import {Button, Card,Overlay} from 'react-native-elements';
import {useState} from "react";
import GlobalPrice from "./GlobalPrice";


export default function Delivery({navigation}) {

    let [pokeprice,setPokePrice] = useContext(GlobalPrice)

    const [visible, setVisible] = useState(false)

    const toggleOverlay = () => {
    setVisible(!visible);
    };


  return (
    <View style={styles.container}>
        <Image style={{width: 100, height: 100, alignItems:'center',marginTop:50}}
               source = {require('./img/poke.png')} />
        <Text style={{fontSize:30,fontWeight:'bold'}}>Delivery Information 🚲</Text>

        <Card containerStyle={{borderRadius:30,width:300}}>
        <TextInput placeholder="Name"/>
        </Card>

        <Card containerStyle={{borderRadius:30,width:300}}>
        <TextInput placeholder="Street"/>
        </Card>

        <View style={{flex:1,flexDirection:'row',justifyContent:'center'}}>
        <Card containerStyle={{borderRadius:30,width:120,height:50}}>
        <TextInput placeholder="City"/>
        </Card>

        <Card containerStyle={{borderRadius:30,width:150,height:50}}>
        <TextInput placeholder="Post code"/>
        </Card>
        </View>

        <Card containerStyle={{borderRadius:30,width:300,height:150}}>
        <TextInput placeholder="Comments . . ."/>
        </Card>


        <Text style={{fontSize:20,fontWeight:'bold', margin:20}}>Delivery time: 30 minutes ⏳</Text>


        <Button
                buttonStyle={{backgroundColor:'#5CE1E6',borderRadius:20}}
                style={{width:300, height: 60}}
                title="ORDER NOW"
                onPress={toggleOverlay}
                />

        <Overlay isVisible={visible} onBackdropPress={toggleOverlay} >

        <Image style={{width: 100, height: 100,marginTop:20,alignSelf:'center'}}
               source = {require('./img/poke.png')} />
        <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center',margin:10}}>Thank you for your order! 🌺</Text>
            <Text style={{fontSize:12,fontWeight:'normal',textAlign:'center'}}>The estimated delivery time for your poke bowl is 30 mins. &nbsp; You can track the delivery from the home page menu.</Text>
        <Button
                buttonStyle={{backgroundColor:'#5CE1E6',borderRadius:20}}
                style={{width:100, height: 60, color:'#5ce1e6',justifyContent:'center',alignSelf:'center',margin:10}}
                title="OKAY"
                onPress={() => navigation.navigate('Home')}
                />
      </Overlay>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});