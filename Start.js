import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import { Button } from 'react-native-elements';

export default function Start({navigation}) {
  return (
    <View style={styles.container}>

         <Image style={{width: 350, height: 350, marginBottom:50}}
               source = {require('./img/poke.png')} />

        <Button
                buttonStyle={{backgroundColor:'#5CE1E6',borderRadius:20}}
                style={{width:300, height: 60, color:'#5ce1e6'}}
                title="View Signature Bowls"
                onPress={() => navigation.navigate('Signature')}
                />

        <Button
                buttonStyle={{backgroundColor:'#5CE1E6',borderRadius:20}}
                style={{width:300, height: 60}}
                title="Create your own poke"
                onPress={() => navigation.navigate('Size')}
                />

        <Button
                buttonStyle={{backgroundColor:'#5CE1E6',borderRadius:20}}
                color={'#5ce1e6'}
                style={{width:300, height: 60}}
                title="Track your order"
                onPress={() => Alert.alert('Right button pressed')}
                disabled={true}
                />
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
