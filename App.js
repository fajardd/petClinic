import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={{ flex:1,paddingTop:20,justifyContent:'center',padding:20,backgroundColor: '#FF8787' }}>
      <Text style={Styles.text1}>Hello World</Text>
      <Text style={Styles.text2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
    </View>
  );
};

export default App;

const Styles = StyleSheet.create({
  text1:{
    fontSize:20,
    textAlign:'center',
    fontWeight: 'bold',
    color:'white',
  },
  text2:{
    textAlign:'justify',
    color:'white',
  },
});