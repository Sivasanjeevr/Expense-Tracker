import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SplashLoading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator animating={true} color="black" size="large" />
      <Text>Loading... Please Wait</Text>
    </View>
  )
}

export default SplashLoading

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    }
})