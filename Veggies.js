import { StatusBar } from 'expo-status-bar';
import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View, Image, Alert, ScrollView, TouchableOpacity} from 'react-native';
import {Badge, Button, Card} from 'react-native-elements';
import GlobalPrice from "./GlobalPrice";


export default function Veggies({navigation}) {
    let [pokeprice,setPokePrice] = useContext(GlobalPrice)

    let [tomatoes,setTomatoes] = useState(false)
    let [cucumber,setCucumber] = useState(false)
    let [carrots,setCarrots] = useState(false)
    let [avocado,setAvocado] = useState(false)
    let [radish,setRadish] = useState(false)
    let [pepper,setPepper] = useState(false)
    let [mango,setMango] = useState(false)
    let [wakame,setWakame] = useState(false)
    let [edamame,setEdamame] = useState(false)

    const tomatocolor = tomatoes === false ? "lightgray" : "#5ce1e6"
    const tomatowidth = tomatoes === false ? 0.5 : 2

    const cucumbercolor = cucumber === false ? "lightgray" : "#5ce1e6"
    const cucumberwidth = cucumber === false ? 0.5 : 2

    const carrotscolor = carrots === false ? "lightgray" : "#5ce1e6"
    const carrotswidth = carrots === false ? 0.5 : 2

    const avocadocolor = avocado === false ? "lightgray" : "#5ce1e6"
    const avocadowidth = avocado === false ? 0.5 : 2

    const radishcolor = radish === false ? "lightgray" : "#5ce1e6"
    const radishwidth = radish === false ? 0.5 : 2

    const peppercolor = pepper === false ? "lightgray" : "#5ce1e6"
    const pepperwidth = pepper === false ? 0.5 : 2

    const mangocolor = mango === false ? "lightgray" : "#5ce1e6"
    const mangowidth = mango === false ? 0.5 : 2

    const wakamecolor = wakame === false ? "lightgray" : "#5ce1e6"
    const wakamewidth = wakame === false ? 0.5 : 2

    const edamamecolor = edamame === false ? "lightgray" : "#5ce1e6"
    const edamamewidth = edamame === false ? 0.5 : 2

    function chooseTomatoes() {
        setTomatoes(prevState => !prevState)
    }

    function chooseCucumber() {
        setCucumber(prevState => !prevState)
    }

    function chooseCarrots() {
        setCarrots(prevState => !prevState)
    }

    function chooseAvocado() {
        setAvocado(prevState => !prevState)
    }

    function chooseRadish() {
        setRadish(prevState => !prevState)
    }

    function choosePepper() {
        setPepper(prevState => !prevState)
    }

    function chooseMango() {
        setMango(prevState => !prevState)
    }

    function chooseWakame() {
        setWakame(prevState => !prevState)
    }

    function chooseEdamame() {
        setEdamame(prevState => !prevState)
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
                onPress={() => navigation.navigate('Base')}
                title="2"
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
                buttonStyle={{backgroundColor:'#5CE1E6',borderRadius:'50%'}}
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

        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:30,marginTop:15,paddingBottom:10}}>Choose your veggies 🥑</Text>



        <View style={{flex: 1, flexDirection: 'row',marginLeft:-8,marginTop:5}}>

            <TouchableOpacity onPress={chooseTomatoes}>
           <Card containerStyle={{width: 100, height: 100,alignItems:'flex-start',borderColor:tomatocolor, borderWidth:tomatowidth}}>

               <Image style={{width: 50, height: 50,marginLeft:8}}
               source = {require('./img/cherrytom.png')} />

               <Card.Title style={{textAlign:'center',fontWeight:'bold',fontSize:12,marginTop:10,marginLeft:5}}>Tomatoes</Card.Title>

      </Card>
            </TouchableOpacity>

            <TouchableOpacity onPress={chooseCucumber}>
            <Card containerStyle={{width: 100, height: 100,alignItems:'flex-end',borderColor:cucumbercolor, borderWidth:cucumberwidth}}>

               <Image style={{width: 50, height: 50,marginLeft:7}}
               source = {require('./img/cucumber.png')} />

               <Card.Title style={{textAlign:'center',fontWeight:'bold',fontSize:12,marginTop:10,marginRight:3}}>Cucumber</Card.Title>

            </Card>
            </TouchableOpacity>

            <TouchableOpacity onPress={chooseCarrots}>
            <Card containerStyle={{width: 100, height: 100,alignItems:'flex-end',borderColor:carrotscolor, borderWidth:carrotswidth}}>

               <Image style={{width: 50, height: 50,marginRight:8}}
               source = {require('./img/carrots.png')} />

               <Card.Title style={{textAlign:'center',fontWeight:'bold',fontSize:12,marginTop:10,marginRight:3}}>Carrots</Card.Title>
            </Card>
            </TouchableOpacity>

        </View>

        <View style={{flex: 1, flexDirection: 'row',marginLeft:-8,marginTop:8}}>

            <TouchableOpacity onPress={chooseAvocado}>
           <Card containerStyle={{width: 100, height: 100,alignItems:'flex-start',borderColor:avocadocolor, borderWidth:avocadowidth}}>

               <Image style={{width: 50, height: 50,marginLeft:6}}
               source = {require('./img/avocado.png')} />

               <Card.Title style={{textAlign:'center',fontWeight:'bold',fontSize:12,marginTop:10,marginLeft:5}}>Avocado</Card.Title>

            </Card>
            </TouchableOpacity>

            <TouchableOpacity onPress={chooseRadish}>
            <Card containerStyle={{width: 100, height: 100,alignItems:'flex-end',borderColor:radishcolor, borderWidth:radishwidth}}>

               <Image style={{width: 50, height: 50,marginRight:8}}
               source = {require('./img/radish.png')} />

               <Card.Title style={{textAlign:'center',fontWeight:'bold',fontSize:12,marginTop:10,marginRight:3}}>Radish</Card.Title>
             </Card>
            </TouchableOpacity>


            <TouchableOpacity onPress={choosePepper}>
            <Card containerStyle={{width: 100, height: 100,alignItems:'flex-end',borderColor:peppercolor, borderWidth:pepperwidth}}>

               <Image style={{width: 50, height: 50,marginRight:8}}
               source = {require('./img/pepper.png')} />

               <Card.Title style={{textAlign:'center',fontWeight:'bold',fontSize:12,marginTop:10,marginRight:3}}>Pepper</Card.Title>

            </Card>
            </TouchableOpacity>
        </View>

        <View style={{flex: 1, flexDirection: 'row',marginLeft:-8,marginTop:8}}>

            <TouchableOpacity onPress={chooseMango}>

           <Card containerStyle={{width: 100, height: 100,alignItems:'flex-start',borderColor:mangocolor, borderWidth:mangowidth}}>

               <Image style={{width: 50, height: 50,marginLeft:8}}
               source = {require('./img/mango.png')} />

               <Card.Title style={{textAlign:'center',fontWeight:'bold',fontSize:12,marginTop:10,marginLeft:5}}>Mango</Card.Title>

            </Card>
            </TouchableOpacity>

            <TouchableOpacity onPress={chooseWakame}>
            <Card containerStyle={{width: 100, height: 100,alignItems:'flex-end',borderColor:wakamecolor, borderWidth:wakamewidth}}>

               <Image style={{width: 50, height: 50,marginRight:8}}
               source = {require('./img/wakame.png')} />

               <Card.Title style={{textAlign:'center',fontWeight:'bold',fontSize:12,marginTop:10,marginRight:3}}>Wakame</Card.Title>

            </Card>
            </TouchableOpacity>


            <TouchableOpacity onPress={chooseEdamame}>
            <Card containerStyle={{width: 100, height: 100,alignItems:'flex-end',borderColor:edamamecolor, borderWidth:edamamewidth}}>

               <Image style={{width: 50, height: 50,marginLeft:4}}
               source = {require('./img/edamame.png')} />

               <Card.Title style={{textAlign:'center',fontWeight:'bold',fontSize:12,marginTop:10,marginRight:3}}>Edamame</Card.Title>

            </Card>
            </TouchableOpacity>
        </View>

    </ScrollView>

          <Button
                buttonStyle={{backgroundColor:'#5CE1E6',marginLeft:70,marginTop:10,borderRadius:20}}
                style={{width:300, height: 60}}
                title="NEXT STEP"
                onPress={() => navigation.navigate('Toppings')}
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