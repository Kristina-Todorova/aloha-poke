import { StatusBar } from 'expo-status-bar';
import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View, Image, Alert, ScrollView, TouchableOpacity} from 'react-native';
import {Badge, Button, Card} from 'react-native-elements';
import GlobalPrice from "./GlobalPrice";

export default function Protein({navigation}) {

    let [pokeprice,setPokePrice] = useContext(GlobalPrice)

    let [salmon,setSalmon] = useState(false)
    let [tuna,setTuna] = useState(false)
    let [shrimp,setShrimp] = useState(false)
    let [chicken,setChicken] = useState(false)

    const salmoncolor = salmon === false ? "lightgray" : "#5ce1e6"
    const salmonwidth = salmon === false ? 0.5 : 4

    const tunacolor = tuna === false ? "lightgray" : "#5ce1e6"
    const tunawidth = tuna === false ? 0.5 : 4

    const shrimpcolor = shrimp === false ? "lightgray" : "#5ce1e6"
    const shrimpwidth = shrimp === false ? 0.5 : 4

    const chickencolor = chicken === false ? "lightgray" : "#5ce1e6"
    const chickenwidth = chicken === false ? 0.5 : 4

    function salmonProtein() {
        setSalmon(prevState => !prevState)

        setTuna(false)
        setChicken(false)
        setShrimp(false)


    }

    function tunaProtein() {
        setTuna(prevState => !prevState)
        setSalmon(false)
        setChicken(false)
        setShrimp(false)

    }

     function shrimpProtein() {
        setShrimp(prevState => !prevState)
        setTuna(false)
        setChicken(false)
        setSalmon(false)
    }

    function chickenProtein() {
        setChicken(prevState => !prevState)
        setTuna(false)
        setSalmon(false)
        setShrimp(false)


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
                buttonStyle={{backgroundColor:'#5CE1E6',borderRadius:'50%'}}
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

        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:30,marginTop:15,paddingBottom:10}}>Choose your protein 🐠</Text>

        <View style={{flex: 1, flexDirection: 'row'}}>

          <TouchableOpacity onPress={salmonProtein}>
           <Card containerStyle={{width: 150, height: 150,alignItems:'flex-start',borderColor:salmoncolor, borderWidth:salmonwidth}}>

               <Image style={{width: 80, height: 80,marginLeft:20}}
               source = {require('./img/salmon.png')} />

               <Card.Title style={{textAlign:'center',fontWeight:'bold',fontSize:18,marginTop:15,marginLeft:20}}>Salmon</Card.Title>

                </Card>
              </TouchableOpacity>

            <TouchableOpacity onPress={tunaProtein}>
            <Card containerStyle={{width: 150, height: 150,alignItems:'flex-end',borderColor:tunacolor, borderWidth:tunawidth}}>

               <Image style={{width: 80, height: 80,marginRight:15}}
               source = {require('./img/tuna.png')} />

               <Card.Title style={{textAlign:'center',fontWeight:'bold',fontSize:18,marginTop:15,marginRight:15}}>Tuna</Card.Title>
      </Card>
            </TouchableOpacity>

        </View>

        <View style={{flex: 1, flexDirection: 'row',marginTop:10}}>

            <TouchableOpacity onPress={shrimpProtein}>
           <Card containerStyle={{width: 150, height: 150,alignItems:'flex-start',borderColor:shrimpcolor, borderWidth:shrimpwidth}}>

               <Image style={{width: 80, height: 80,marginLeft:20}}
               source = {require('./img/shrimp.png')} />

               <Card.Title style={{textAlign:'center',fontWeight:'bold',fontSize:18,marginTop:15,marginLeft:20}}>Shrimp</Card.Title>
             </Card>
          </TouchableOpacity>

             <TouchableOpacity onPress={chickenProtein}>
            <Card containerStyle={{width: 150, height: 150,alignItems:'flex-end',borderColor:chickencolor, borderWidth:chickenwidth}}>

               <Image style={{width: 80, height: 80,marginRight:18}}
               source = {require('./img/chicken.png')} />

               <Card.Title style={{textAlign:'center',fontWeight:'bold',fontSize:18,marginTop:15,marginRight:18}}>Chicken</Card.Title>

            </Card>
             </TouchableOpacity>

        </View>

    </ScrollView>

          <Button
                buttonStyle={{backgroundColor:'#5CE1E6',marginLeft:70,marginTop:10,borderRadius:20}}
                style={{width:300, height: 60}}
                title="NEXT STEP"
                onPress={() => navigation.navigate('Veggies')}
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