import { Button, StyleSheet, Text, View } from 'react-native'
import React,{useContext} from 'react'
import { AuthContext } from '../../Context/AuthContext'

const HomePage = ({navigation}) => {
  const {userInfo,logout} = useContext(AuthContext);

  const handleLogout= ()=>{
    logout();
    navigation.navigate('landing-page');
  }

  return (
    <View style={styles.container}>
      <Text>HomePage!!!!!! {'\n'} {userInfo && `${userInfo.user.username} ${userInfo.user.mobileNo}`}</Text>
      <Button title="logut" onPress={handleLogout} />
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})