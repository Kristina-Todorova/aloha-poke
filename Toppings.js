import { StatusBar } from 'expo-status-bar';
import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View, Image, Alert, ScrollView,TouchableOpacity} from 'react-native';
import {Badge, Button, Card} from 'react-native-elements';
import GlobalPrice from "./GlobalPrice";

export default function Toppings({navigation}) {
    let [pokeprice,setPokePrice] = useContext(GlobalPrice)

    let [sesame,setSesame] = useState(false)
    let [parsley,setParsley] = useState(false)
    let [mint,setMint] = useState(false)
    let [wasabi,setWasabi] = useState(false)
    let [chilli,setChilli] = useState(false)
    let [spicy,setSpicy] = useState(false)
    let [soy,setSoy] = useState(false)
    let [sweet,setSweet] = useState(false)
    let [lemon,setLemon] = useState(false)

    const sesamecolor = sesame === false ? "lightgray" : "#5ce1e6"
    const sesamewidth = sesame === false ? 0.5 : 2

    const parsleycolor = parsley === false ? "lightgray" : "#5ce1e6"
    const parsleywidth = parsley === false ? 0.5 : 2

    const mintcolor = mint === false ? "lightgray" : "#5ce1e6"
    const mintwidth = mint === false ? 0.5 : 2

    const wasabicolor = wasabi === false ? "lightgray" : "#5ce1e6"
    const wasabiwidth = wasabi === false ? 0.5 : 2

    const chillicolor = chilli === false ? "lightgray" : "#5ce1e6"
    const chilliwidth = chilli === false ? 0.5 : 2

    const spicycolor = spicy === false ? "lightgray" : "#5ce1e6"
    const spicywidth = spicy === false ? 0.5 : 2

    const soycolor = soy === false ? "lightgray" : "#5ce1e6"
    const soywidth = soy === false ? 0.5 : 2

    const sweetcolor = sweet === false ? "lightgray" : "#5ce1e6"
    const sweetwidth = sweet === false ? 0.5 : 2

    const lemoncolor = lemon === false ? "lightgray" : "#5ce1e6"
    const lemonwidth = lemon === false ? 0.5 : 2

    function sesameTop() {
        setSesame(prevState => !prevState)
    }

    function parsleyTop() {
        setParsley(prevState => !prevState)
    }

    function mintTop() {
        setMint(prevState => !prevState)
    }

    function wasabiTop() {
        setWasabi(prevState => !prevState)
    }

    function chilliTop() {
        setChilli(prevState => !prevState)
    }

    function spicyTop() {
        setSpicy(prevState => !prevState)
    }

    function soyTop() {
        setSoy(prevState => !prevState)
    }

    function sweetTop() {
        setSweet(prevState => !prevState)
    }

    function lemonTop() {
        setLemon(prevState => !prevState)
    }

  return (

      <View style={styles.container}>
    <ScrollView>


        <View style={{flex:1,flexDirection:'row',justifyContent:'center',marginTop:50}}>

        <Button
                buttonStyle={{backgroundColor:'lightgray',borderRadius:'50%'}}
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
                buttonStyle={{backgroundColor:'#5CE1E6',borderRadius:'50%'}}
                style={{width:40, height: 60,marginTop:20}}
                title="5"
                onPress={() => navigation.navigate('Toppings')}
                />

        </View>

        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:30,marginTop:15,paddingBottom:10}}>Choose your toppings 🍋</Text>



        <View style={{flex: 1, flexDirection: 'row',marginLeft:-8,marginTop:5}}>

            <TouchableOpacity onPress={sesameTop}>
           <Card containerStyle={{width: 100, height: 100,alignItems:'flex-start',borderColor:sesamecolor, borderWidth:sesamewidth}}>

               <Image style={{width: 50, height: 50,marginLeft:10}}
               source = {require('./img/sesame.png')} />

               <Card.Title style={{textAlign:'center',fontWeight:'bold',fontSize:12,marginTop:10,marginLeft:5}}>Sesame</Card.Title>

            </Card>
            </TouchableOpacity>

            <TouchableOpacity onPress={parsleyTop}>
            <Card containerStyle={{width: 100, height: 100,alignItems:'flex-end',borderColor:parsleycolor, borderWidth:parsleywidth}}>

               <Image style={{width: 50, height: 50,marginRight:8}}
               source = {require('./img/parsley.png')} />

               <Card.Title style={{textAlign:'center',fontWeight:'bold',fontSize:12,marginTop:10,marginRight:3}}>Parsley</Card.Title>

            </Card>
                </TouchableOpacity>


            <TouchableOpacity onPress={mintTop}>
            <Card containerStyle={{width: 100, height: 100,alignItems:'flex-end',borderColor:mintcolor, borderWidth:mintwidth}}>

               <Image style={{width: 50, height: 50,marginRight:8}}
               source = {require('./img/mint.png')} />

               <Card.Title style={{textAlign:'center',fontWeight:'bold',fontSize:12,marginTop:10,marginRight:3}}>Mint</Card.Title>

      </Card>
            </TouchableOpacity>
        </View>

        <View style={{flex: 1, flexDirection: 'row',marginLeft:-8,marginTop:8}}>
             <TouchableOpacity onPress={wasabiTop}>
           <Card containerStyle={{width: 100, height: 100,alignItems:'flex-start',borderColor:wasabicolor, borderWidth:wasabiwidth}}>

               <Image style={{width: 50, height: 50,marginLeft:10}}
               source = {require('./img/wasabi.png')} />

               <Card.Title style={{textAlign:'center',fontWeight:'bold',fontSize:12,marginTop:2,marginLeft:7}}>Wasabi Mayo</Card.Title>

            </Card>
             </TouchableOpacity>


             <TouchableOpacity onPress={chilliTop}>
            <Card containerStyle={{width: 100, height: 100,alignItems:'flex-end',borderColor:chillicolor, borderWidth:chilliwidth}}>

               <Image style={{width: 50, height: 50,marginRight:10}}
               source = {require('./img/dragon.png')} />

               <Card.Title style={{textAlign:'center',fontWeight:'bold',fontSize:12,marginTop:2,marginRight:5}}>Chilli sauce</Card.Title>

            </Card>
             </TouchableOpacity>


             <TouchableOpacity onPress={spicyTop}>
            <Card containerStyle={{width: 100, height: 100,alignItems:'flex-end',borderColor:spicycolor, borderWidth:spicywidth}}>

               <Image style={{width: 50, height: 50,marginRight:10}}
               source = {require('./img/mayo.png')} />

               <Card.Title style={{textAlign:'center',fontWeight:'bold',fontSize:12,marginTop:2,marginRight:5}}>Spicy mayo</Card.Title>

            </Card>
             </TouchableOpacity>
        </View>

        <View style={{flex: 1, flexDirection: 'row',marginLeft:-8,marginTop:8}}>

             <TouchableOpacity onPress={soyTop}>
           <Card containerStyle={{width: 100, height: 100,alignItems:'flex-start',borderColor:soycolor, borderWidth:soywidth}}>

               <Image style={{width: 50, height: 50,marginLeft:10}}
               source = {require('./img/soya.png')} />

               <Card.Title style={{textAlign:'center',fontWeight:'bold',fontSize:12,marginTop:10,marginLeft:3}}>Soy sauce</Card.Title>

           </Card>
             </TouchableOpacity>

             <TouchableOpacity onPress={sweetTop}>
            <Card containerStyle={{width: 100, height: 100,alignItems:'flex-end',borderColor:sweetcolor, borderWidth:sweetwidth}}>

               <Image style={{width: 50, height: 50,marginLeft:5}}
               source = {require('./img/sweetsoya.png')} />

               <Card.Title style={{textAlign:'center',fontWeight:'bold',fontSize:12,marginTop:10}}>Sweet soy</Card.Title>

            </Card>
             </TouchableOpacity>


             <TouchableOpacity onPress={lemonTop}>
            <Card containerStyle={{width: 100, height: 100,alignItems:'flex-end',borderColor:lemoncolor, borderWidth:lemonwidth}}>

               <Image style={{width: 50, height: 50,marginRight:10}}
               source = {require('./img/lemon.png')} />

               <Card.Title style={{textAlign:'center',fontWeight:'bold',fontSize:12,marginTop:2}}>Lemon juice</Card.Title>

            </Card>
             </TouchableOpacity>
        </View>

    </ScrollView>

          <Button
                buttonStyle={{backgroundColor:'#5CE1E6',marginLeft:70,marginTop:10,borderRadius:20}}
                style={{width:300, height: 60}}
                title="PLACE ORDER"
                onPress={() => navigation.navigate('Delivery')}
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