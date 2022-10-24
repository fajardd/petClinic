import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MenuBar = () => {
    return (
        <View 
        style={{ 
          flexDirection: 'row', 
          backgroundColor:'#FFFFFF', 
          elevation:3, 
          paddingTop:7,
          paddingBottom:5,
          marginHorizontal:20,
          marginBottom:10,
          borderRadius:5, 
        }}>
        <TouchableOpacity style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
          <Icon name="home" size={23} color="#34354E" />
          <Text style={{ fontSize:12 }}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
          <Icon name="calendar" size={23} color="#bdbdbd" />
          <Text style={{ fontSize:12 }}>Jadwal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
          <Icon name="chatbox" size={23} color="#bdbdbd" />
          <Text style={{ fontSize:12 }}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
          <Icon name="person" size={23} color="#bdbdbd" />
          <Text style={{ fontSize:12 }}>User</Text>
        </TouchableOpacity>
      </View>
    );
}

export default MenuBar;