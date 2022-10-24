import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StatusBar, TextInput  } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MenuBar from './src/components/MenuBar';

const App = () => {

  const [pencarian, setPencarian] = useState('');

  return (
    <View style={{flex: 1, backgroundColor:'#f4f4f4'}}>
      <View style={{flex: 1,marginHorizontal:20, marginTop:10 }}>
        <StatusBar barStyle="dark-content" backgroundColor={'#f4f4f4'} />
        <Text style={{ color:'#212121' }}>Hello</Text>
        <Text style={{ fontSize:22, fontWeight:'bold', color:'#212121' }}>Fajar Dwi 👋</Text>
        <View style={{ flexDirection:'row' }}>
          <TextInput 
          value={pencarian}
          onChangeText={text => setPencarian(text)}
          placeholder="Cari informasi hewan" 
          style={{ 
            backgroundColor:'#FFFFFF', 
            elevation:3, 
            marginTop:20,
            paddingLeft:10,
            borderRadius:5,
            flex:1,
          }}
          />
          <TouchableOpacity
          style={{ 
            justifyContent:'center', 
            alignItems:'center', 
            backgroundColor:'#0082F7',
            marginTop:20,
            paddingHorizontal:20,
            borderRadius:5,
            marginLeft:10,
            elevation:3,
          }}>
            <Icon name="search" size={25} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
      <MenuBar />
    </View>
  );
}

export default App;