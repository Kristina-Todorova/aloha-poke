import { StatusBar } from 'expo-status-bar';
import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View, Image, Alert, ScrollView, TouchableOpacity} from 'react-native';
import {Badge, Button, Card} from 'react-native-elements';
import GlobalPrice from "./GlobalPrice";

export default function Base({navigation}) {

    let [pokeprice,setPokePrice] = useContext(GlobalPrice)

    let [white,setWhite] = useState(false)
    let [brown,setBrown] = useState(false)
    let [quinoa,setQuinoa] = useState(false)
    let [salad,setSalad] = useState(false)

    const whitecolor = white === false ? "lightgray" : "#5ce1e6"
    const whitewidth = white === false ? 0.5 : 4

    const browncolor = brown === false ? "lightgray" : "#5ce1e6"
    const brownwidth = brown === false ? 0.5 : 4

    const quinoacolor = quinoa === false ? "lightgray" : "#5ce1e6"
    const quinoawidth = quinoa === false ? 0.5 : 4

    const saladcolor = salad === false ? "lightgray" : "#5ce1e6"
    const saladwidth = salad === false ? 0.5 : 4

    function whiteRice() {
        setWhite(prevState => !prevState)

        setBrown(false)
        setQuinoa(false)
        setSalad(false)


    }

    function brownRice() {
        setBrown(prevState => !prevState)
        setWhite(false)
        setQuinoa(false)
        setSalad(false)

    }

     function quinoaBase() {
        setQuinoa(prevState => !prevState)

        setBrown(false)
        setWhite(false)
        setSalad(false)
    }

    function mixedSalad() {
        setSalad(prevState => !prevState)

        setWhite(false)
        setQuinoa(false)
        setBrown(false)


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
                buttonStyle={{backgroundColor:'#5CE1E6',borderRadius:'50%'}}
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

        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:30,marginTop:15,paddingBottom:10}}>Choose your base 🥗</Text>

        <View style={{flex: 1, flexDirection: 'row'}}>

           <TouchableOpacity onPress={whiteRice}>
            <Card containerStyle={{width: 150, height: 150,alignItems:'flex-start',borderColor:whitecolor, borderWidth:whitewidth}}>

               <Image style={{width: 80, height: 80,marginLeft:18}}
               source = {require('./img/whiterice.png')} />

               <Card.Title style={{textAlign:'center',fontWeight:'bold',fontSize:18,marginTop:15,marginLeft:15}}>White rice
               </Card.Title>
      </Card>
      </TouchableOpacity>

            <TouchableOpacity onPress={brownRice}>
            <Card containerStyle={{width: 150, height: 150,alignItems:'flex-end',borderColor:browncolor, borderWidth:brownwidth}}>

               <Image style={{width: 80, height: 80,marginLeft:5}}
               source = {require('./img/brownrice.png')} />

               <Card.Title style={{textAlign:'center',fontWeight:'bold',fontSize:18,marginTop:15,marginRight:10}}>Brown rice</Card.Title>

            </Card>
            </TouchableOpacity>

        </View>


        <View style={{flex: 1, flexDirection: 'row',marginTop:10}}>

            <TouchableOpacity onPress={quinoaBase}>
           <Card containerStyle={{width: 150, height: 150,alignItems:'flex-start',borderColor:quinoacolor, borderWidth:quinoawidth}}>

               <Image style={{width: 80, height: 80,marginLeft:18}}
               source = {require('./img/quinoa.png')} />

               <Card.Title style={{textAlign:'center',fontWeight:'bold',fontSize:18,marginTop:15,marginLeft:18}}>Quinoa</Card.Title>

                 </Card>
                </TouchableOpacity>

               <TouchableOpacity onPress={mixedSalad}>
            <Card containerStyle={{width: 150, height: 150,alignItems:'flex-end',borderColor:saladcolor, borderWidth:saladwidth}}>

               <Image style={{width: 80, height: 80,marginLeft:10}}
               source = {require('./img/salad.png')} />

               <Card.Title style={{textAlign:'center',fontWeight:'bold',fontSize:18,marginTop:15,marginRight:3}}>Mixed salad</Card.Title>

              </Card>
              </TouchableOpacity>

        </View>

    </ScrollView>

          <Button
                buttonStyle={{backgroundColor:'#5CE1E6',marginLeft:70,marginTop:10,borderRadius:20}}
                style={{width:300, height: 60}}
                title="NEXT STEP"
                onPress={() => navigation.navigate('Protein')}
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