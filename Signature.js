import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Alert, ScrollView } from 'react-native';
import { Button, Card, Badge,Icon} from 'react-native-elements';
import {useState} from "react";


export default function Signature({navigation}) {

    const [price,setPrice] = useState(0)
    const [order,setOrder] = useState(true)

    const [scolor,setScolor] = useState(true)
    const shrimp = scolor===true ? "#5ce1e6" : "#3bacaf"

    const [salmonpoke,setSalmonpoke] = useState(true)
    const salmon = salmonpoke===true ? "#5ce1e6" : "#3bacaf"

    const [tunapoke,setTunapoke] = useState(true)
    const tuna = tunapoke===true ? "#5ce1e6" : "#3bacaf"

    const [seabream,setSeabream] = useState(true)
    const bream = seabream===true ? "#5ce1e6" : "#3bacaf"

    function spicyShrimp(){
        setScolor(prevState => !prevState)

        scolor === true ? setOrder(false)
            : seabream === false ? setOrder(false)
            : salmonpoke === false ? setOrder(false)
            : tunapoke === false ? setOrder(false)
            : setOrder(true)

        scolor ===true ? setPrice(prevState => prevState+12.5)
        : setPrice(prevState => prevState - 12.5)
    }

    function seaBream(){
        setSeabream(prevState => !prevState)

        seabream === true ? setOrder(false)
            : scolor === false ? setOrder(false)
            : salmonpoke === false ? setOrder(false)
            : tunapoke === false ? setOrder(false)
            : setOrder(true)

        seabream ===true ? setPrice(prevState => prevState+12.5)
        : setPrice(prevState => prevState - 12.5)
    }

    function salmonPoke(){
        setSalmonpoke(prevState => !prevState)

        salmonpoke === true ? setOrder(false)
            : seabream === false ? setOrder(false)
            : scolor === false ? setOrder(false)
            : tunapoke === false ? setOrder(false)
            : setOrder(true)

        salmonpoke ===true ? setPrice(prevState => prevState+12.5)
        : setPrice(prevState => prevState - 12.5)
    }

    function tunaPoke(){
        setTunapoke(prevState => !prevState)

        tunapoke === true ? setOrder(false)
            : seabream === false ? setOrder(false)
            : salmonpoke === false ? setOrder(false)
            : scolor === false ? setOrder(false)
            : setOrder(true)

        tunapoke ===true ? setPrice(prevState => prevState+12.5)
        : setPrice(prevState => prevState - 12.5)
    }


  return (
    <View style={styles.container}>

        <ScrollView>

            <Image style={{width: 350, height: 200,borderRadius:20,marginLeft:12,marginTop:25,marginBottom:10}}
               source = {require('./img/bowls.jpeg')} />

        <Text style={{textAlign:"left",fontWeight:'bold',fontSize:20}}>&nbsp;&nbsp;&nbsp;🔥 NEW BOWLS 🔥</Text>

      <Card containerStyle={{width: 350, height: 130}}>
          <Card.Title style={{textAlign:'left',fontWeight:'bold'}}>Spicy Shrimp Poke 🍤</Card.Title>
          <Text style={{textAlign:'left',fontSize:7, marginBottom:15}}> Shrimp, Brown rice, Cucumber, Spicy Mayo, Mango</Text>


          <Button
              buttonStyle={{width:100,borderRadius: 30, backgroundColor:shrimp}}
              title='12.50$'
              onPress={spicyShrimp}
          />


          <Image style={{width: 100, height: 100, marginLeft:220, marginTop:-100}}
               source = {require('./img/spicyshrimp.png')} />


      </Card>

        <Card containerStyle={{width: 350, height: 130}}>
          <Card.Title style={{textAlign:'left',fontWeight:'bold'}}>Sea Bream Poke 🐟</Card.Title>
          <Text style={{textAlign:'left',fontSize:7, marginBottom:15}}> Sea Bream, Quinoa, Avocado, Cucumber, Sweet Soya</Text>
          <Button
              buttonStyle={{width:100,borderRadius: 30, backgroundColor:bream}}
              color={'#5ce1e6'}
              title='12.50$'
              onPress={seaBream}/>

          <Image style={{width: 100, height: 100, marginLeft:220, marginTop:-100}}
               source = {require('./img/seabream.png')} />

      </Card>

        <Text style={{textAlign:"left",fontWeight:'bold',marginTop:20,fontSize:20}}>&nbsp;&nbsp;&nbsp;⭐️ SIGNATURE BOWLS ⭐️</Text>
        <Card containerStyle={{width: 350, height: 130}}>
          <Card.Title style={{textAlign:'left',fontWeight:'bold'}}>Salmon Poke 🐠</Card.Title>
          <Text style={{textAlign:'left',fontSize:7, marginBottom:15}}> Salmon, Rice, Edamame, Carrots, Avocado, Wakame</Text>
          <Button
          buttonStyle={{width:100,borderRadius: 30, backgroundColor:salmon}}
          color={'#5ce1e6'}
          title='12.50$'
          onPress={salmonPoke}/>
          <Image style={{width: 100, height: 100, marginLeft:220, marginTop:-100}}
               source = {require('./img/salmonpoke.png')} />

      </Card>

        <Card containerStyle={{width: 350, height: 130}}>
          <Card.Title style={{textAlign:'left',fontWeight:'bold'}}>Tuna Poke 🐟</Card.Title>
          <Text style={{textAlign:'left',fontSize:7, marginBottom:15}}> Tuna, Quinoa, Mango, Cucumbers, Radish, Ginger</Text>
          <Button
          buttonStyle={{width:100,borderRadius: 30, backgroundColor:tuna}}
          color={'#5ce1e6'}
          title='12.50$'
          onPress={tunaPoke}/>
          <Image style={{width: 100, height: 100, marginLeft:220, marginTop:-100}}
               source = {require('./img/tunapoke.png')} />

      </Card>
            </ScrollView>

        <Button
                buttonStyle={{backgroundColor:'#5CE1E6',marginLeft:70,marginTop:10,borderRadius:20}}
                disabled={order}
                style={{width:300, height: 60}}
                title="ORDER NOW"
                onPress={() => navigation.navigate('Delivery')}
                />

        <Badge badgeStyle={{backgroundColor:"#ff6961",width:60,height:20,borderRadius:50}}
               containerStyle={{ position: 'absolute', top: 610, right: 48 }}
               value={<Text style={{color:"white",fontWeight:'bold'}}>{price}$</Text>}
        />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});