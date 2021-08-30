import { StatusBar } from 'expo-status-bar';
import React, {useContext, useState} from 'react';
import { StyleSheet, Text, View, Image,ScrollView, TouchableOpacity } from 'react-native';
import {Badge, Button, Card} from 'react-native-elements';
import GlobalPrice from "./GlobalPrice";

export default function Size({navigation}) {

    let [pokeprice,setPokePrice] = useContext(GlobalPrice)

    let [small,setSmall] = useState(false)
    let [big,setBig] = useState(false)

    let [next,setNext] = useState(true)

    const bigcolor = big === false ? "lightgray" : "#5ce1e6"
    const bigwidth = big === false ? 0.5 : 4

    const smallcolor = small === false ? "lightgray" : "#5ce1e6"
    const smallwidth = small === false ? 0.5 : 4

    function smallPoke() {
        setSmall(prevState => !prevState)
        setBig(false)
        small === false ? setNext(prevState => false)
            : setNext(prevState => true)

        small === false ? setPokePrice(10)
            : setPokePrice(0)
    }

    function bigPoke() {
        setBig(prevState => !prevState)
        setSmall(false)
        big === false ? setNext(prevState => false) : setNext(prevState => true)

        big === false ? setPokePrice(12)
            : setPokePrice(0)

    }

  return (
      <View style={styles.container}>
    <ScrollView>

     <Image style={{width: 350, height: 200,borderRadius:20,marginLeft:12,marginBottom:10}}
               source = {require('./img/create.jpeg')} />
      <StatusBar style="auto" />


        <View style={{flex:1,flexDirection:'row',justifyContent:'center'}}>

        <Button
                buttonStyle={{backgroundColor:'#5CE1E6',borderRadius:'50%'}}
                style={{width:40, height: 60,marginTop:20}}
                title="1"
                onPress={() => navigation.navigate('Size')}
                />
        <Text style={{marginTop:28,color:"lightgray",fontWeight:"bold"}}>---</Text>
        <Button
                buttonStyle={{backgroundColor:'lightgray',borderRadius:'50%'}}
                style={{width:40, height: 60,marginTop:20}}
                title="2"
                onPress={() => navigation.navigate('Base')}
                />

            <Text style={{marginTop:28,color:"lightgray",fontWeight:"bold"}}>---</Text>

        <Button
                buttonStyle={{backgroundColor:'lightgray',borderRadius:'50%'}}
                style={{width:40, height: 60,marginTop:20}}
                title="3"
                onPress={() => navigation.navigate('Protein')}
                />
        <Text style={{marginTop:28,color:"lightgray",fontWeight:"bold"}}>---</Text>
        <Button
                buttonStyle={{backgroundColor:'lightgray',borderRadius:'50%'}}
                style={{width:40, height: 60,marginTop:20}}
                title="4"
                onPress={() => navigation.navigate('Veggies')}
                />
        <Text style={{marginTop:28,color:"lightgray",fontWeight:"bold"}}>---</Text>
        <Button
                buttonStyle={{backgroundColor:'lightgray',borderRadius:'50%'}}
                style={{width:40, height: 60,marginTop:20}}
                title="5"
                onPress={() => navigation.navigate('Toppings')}
                />

        </View>

        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:30,marginTop:15,paddingBottom:10}}>Choose your size 🍲</Text>


        <View style={{flex: 1, flexDirection: 'row'}}>

            <TouchableOpacity onPress={smallPoke}>
           <Card containerStyle={{width: 150, height: 180,alignItems:'flex-start',borderColor:smallcolor, borderWidth:smallwidth}}>

               <Image style={{width: 100, height: 100,marginLeft:10}}
               source = {require('./img/small.png')} />

               <Card.Title style={{textAlign:'center',fontWeight:'bold',fontSize:20,marginTop:10,marginLeft:5}}>Small Poke 🐠</Card.Title>

          </Card>
          </TouchableOpacity>

            <TouchableOpacity onPress={bigPoke}>
            <Card containerStyle={{width: 150, height: 180,alignItems:'flex-end',borderColor:bigcolor, borderWidth:bigwidth}} >

               <Image style={{width: 100, height: 100,marginLeft:10}}
               source = {require('./img/big.png')} />

               <Card.Title style={{textAlign:'center',fontWeight:'bold',fontSize:20,marginTop:10,marginLeft:5}}>&nbsp;&nbsp;Big Poke &nbsp;&nbsp; 🐠🐠🐠</Card.Title>

      </Card>
      </TouchableOpacity>

        </View>

    </ScrollView>

          <Button
                buttonStyle={{backgroundColor:'#5CE1E6',marginLeft:70,marginTop:10,borderRadius:20}}
                style={{width:300, height: 60}}
                title="NEXT STEP"
                disabled={next}
                onPress={() => navigation.navigate('Base')}
                />

           <Badge badgeStyle={{backgroundColor:"#ff6961",width:60,height:20,borderRadius:50}}
               containerStyle={{ position: 'absolute', top: 610, right: 48 }}
               value={<Text style={{color:"white",fontWeight:'bold'}}>{pokeprice}$</Text>}
        />

          </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});