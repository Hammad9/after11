import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';


export default function App() {
  const [name, setName] = useState('')
  return (
    <View style={styles.body}>
      <Text style={styles.txt}>Please Write Your Name:</Text>
      <TextInput 
        // multiline    for Multiline in a input field
        secureTextEntry    //for show ... at the place of character
        style={styles.input}
        placeholder='Please Enter Your Name'
        onChangeText={(val)=>setName(val)}
      />
      <Text>Your name is: {name}</Text>
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
  body:{
    flex: 1,
    alignItems:'center',
    backgroundColor: '#fff',
    marginTop:30,
  },
  txt:{
    fontSize:20,
  },
  input:{
    marginTop:20,
    borderWidth:1,
    paddingLeft:150,
    paddingRight:150,
    // height:40,
  }
});
