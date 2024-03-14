import { View, Text, TextInput, Button, Pressable, StyleSheet } from 'react-native'
import React,{useContext, useState} from 'react'
import {AuthContext} from "../../Context/AuthContext";

const LoginManagement = ({navigation}) => {
    const [MobileNo, setMobileNo] = useState("")
  const [Password, setPassword] = useState("")

  const {LoginManagement} = useContext(AuthContext);

  const handleSubmit = async () => {
    const result = await LoginManagement(MobileNo, Password);
    if (result === "success") {
      console.log("Login Successful");
      navigation.navigate('dashboard-management');
    }
  };

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',rowGap:30}}>
    <Text>Login page for Management</Text>
    <TextInput placeholder='Enter you Mobile Number' value={MobileNo} onChangeText={(text)=>{setMobileNo(text)}} style={{borderWidth:1,borderColor:'red',paddingHorizontal:30}} />
    <TextInput placeholder='Enter Password' value={Password} onChangeText={(text)=>{setPassword(text)}} style={{borderWidth:1,borderColor:'red',paddingHorizontal:30}} />
    <Button title="submit" onPress={handleSubmit} />
    <Pressable onPress={()=>{navigation.navigate('register-management')}} >
      <Text style={{color:'green'}}>dont have account sign up here</Text>
    </Pressable>
    </View>
  )
}

export default LoginManagement

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})