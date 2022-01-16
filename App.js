import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput ,Button} from 'react-native';



export default function App() {
  // use State for name and show name where your name is 
  const [name, setName] = useState('')

  // Intial we set submiteed value false
  const [submitted, setSubmitted] = useState(false)
  // Button function on press handler
  const onPressHandler=()=>{
      setSubmitted(!submitted);
  }
  return (
    <View style={styles.body}>
      <Text style={styles.txt}>Please Write Your Name:</Text>
      <TextInput 
        // multiline    for Multiline in a input field
        // secureTextEntry    //for show ... at the place of character
        style={styles.input}
        placeholder='Please Enter Your Name'
        onChangeText={(val)=>setName(val)}
      />
     
      
     {
      submitted? <Text>You are Register as {name}</Text> : null
    }
      <Button 
        
        title={submitted?'Clear':'Submit' }
        onPress={onPressHandler}
      />
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
    marginBottom:10,
    // height:40,
  }
});
