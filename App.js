import React,{Component} from "react"
import {Button,View,Text,TouchableOpacity,StyleSheet, TextInput, Image } from "react-native"
import {Header} from "react-native-elements"
import {SafeAreaProvider,SafeAreaView} from "react-native-safe-area-context"

import * as Speech from "expo-speech"

export default class App extends Component{
  constructor(){
    super()
    this.state={
      name:""
    }
  }
  
  speak=()=>{
var thingToSay = this.state.name
this.state.name==="" ? alert("Please enter a word in the box") :
Speech.speak(thingToSay)
  }
render(){
  return(
    <SafeAreaProvider>
    <View style={styles.container}>
    <Header 
    backgroundColor={"#00ffa5"}
    centerComponent={{
         text:"Text To Speech",
       style:{color:"black",fontSize:40, fontFamily:"French Script MT"} 
       }}>
    </Header>
    <Image  style={styles.imageIcon}
      source={require("./text-tospeech.png")}>
    </Image>
    <TextInput style={styles.inputBox} onChangeText={(text)=>{
      this.setState({name:text})
    }}>
    </TextInput>
    

    <TouchableOpacity style={styles.button} onPress={()=>{this.speak()}}> <Text style={styles.speechbutton}> Hear speech
    </Text>
    </TouchableOpacity>
    </View>
    </SafeAreaProvider>
  )
}
}

const styles=StyleSheet.create({
  container:{
  backgroundColor:"#ff8787",
  height:560
  },
  inputBox:{
    borderWidth:5,
    marginTop:50,
    width:"70%",
    height:40,
    marginLeft:55,
    borderRadius:30,
    textAlign:"center",
    outline:"none"
  },
 button:{
width:"50%",
height:35, 
alignSelf:"center",
padding:10,
margin:10,
borderWidth:4,
borderRadius:20,
borderColor:"black",
backgroundColor:"#ba02f7",
marginTop:50
},

speechbutton:{
fontSize:20,
marginTop:-13,
color:"black",
textAlign:"center",
fontWeight:"bold"

},
imageIcon:{
  width:250,
  height:150,
  marginLeft:50,
  marginTop:50
}
})