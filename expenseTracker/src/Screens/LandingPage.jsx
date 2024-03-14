import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LangingPage = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Text>Welcome to our app</Text>
      <Button title='individual' onPress={()=>navigation.navigate('login')}/>
      <Button title='management' onPress={()=>navigation.navigate('login-management')} />
    </View>
  )
}

export default LangingPage

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        rowGap:20
    }
})