import { View, Text, TextInput, Button, Pressable } from 'react-native'
import React,{useContext, useState} from 'react'
import {AuthContext} from "../../Context/AuthContext";
const LoginPage = ({navigation}) => {
  const [MobileNo, setMobileNo] = useState("")
  const [Password, setPassword] = useState("")

  
  const {login} = useContext(AuthContext);

  const handleSubmit = async () => {
    const result = await login(MobileNo, Password);
    if (result === "success") {
      console.log("Login Successful");
      navigation.navigate('home');
    }
  };
  
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',rowGap:30}}>
    <Text>Login Page for Individual</Text>
    <TextInput placeholder='Enter you Mobile Number' value={MobileNo} onChangeText={(text)=>{setMobileNo(text)}} style={{borderWidth:1,borderColor:'red',paddingHorizontal:30}} />
    <TextInput placeholder='Enter Password' value={Password} onChangeText={(text)=>{setPassword(text)}} style={{borderWidth:1,borderColor:'red',paddingHorizontal:30}} />
    <Button title="submit" onPress={handleSubmit} />
    <Pressable onPress={()=>{navigation.navigate('register')}} >
      <Text style={{color:'green'}}>dont have account sign up here</Text>
    </Pressable>
    </View>
  )
}


export default LoginPage
