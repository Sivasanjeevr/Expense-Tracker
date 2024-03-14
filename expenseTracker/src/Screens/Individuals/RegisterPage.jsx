import { View, Text, TextInput, Button, Pressable, Alert } from 'react-native'
import React,{useContext, useState} from 'react'

import {AuthContext} from '../../Context/AuthContext'

const RegisterPage = ({navigation}) => {
  const [name, setname] = useState("")
  const [mobileno, setmobileno] = useState("")
  const [password, setpassword] = useState("")
  const [confirmPassword, setconfirmPassword] = useState("")
  const [email, setemail] = useState("")

  const {register} = useContext(AuthContext)

  handleSubmit = async()=>{
    if(password!=confirmPassword){
      Alert.alert("Password and confirm password are not match");
    }
    else{
      const result = await register(name,mobileno,password,confirmPassword,email)
      if (result === "success") {
        console.log("Regsiter Successful");
        navigation.navigate('home');
      }
    }
    
  }

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',rowGap:30}}>
      <TextInput placeholder='Enter your name' value={name}  onChangeText={(text)=>{setname(text)}} style={{borderWidth:1,borderColor:'red',paddingHorizontal:30}} />
      <TextInput placeholder='Enter you mobile number' onChangeText={(text)=>{setmobileno(text)}} style={{borderWidth:1,borderColor:'red',paddingHorizontal:30}}/>
      <TextInput placeholder='Enter password' onChangeText={(text)=>{setpassword(text)}} secureTextEntry style={{borderWidth:1,borderColor:'red',paddingHorizontal:30}}/>
      <TextInput placeholder='Enter password again' onChangeText={(text)=>{setconfirmPassword(text)}} style={{borderWidth:1,borderColor:'red',paddingHorizontal:30}}/>
      {(password!=confirmPassword) && <Text>password and confirm password dosent match</Text>}
      <TextInput placeholder='Enter email' onChangeText={(text)=>{setemail(text)}} style={{borderWidth:1,borderColor:'red',paddingHorizontal:30}} />
      <Button title="Submit" onPress={handleSubmit} />
      <Pressable onPress={()=>{navigation.navigate('login')}}>
        <Text style={{color:'green'}}>already have account then login here</Text>
      </Pressable>
    </View>
  )
}

export default RegisterPage