import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { addExpenses } from '../../Api/Individual/ExpenseApi'


const AddExpenses = () => {
    const [category, setcategory] = useState("")
    const [product, setproduct] = useState("")
    const [amount, setamount] = useState(0)
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")

    const handlesubmit = async() =>{
      try{
        const res = await addExpenses(category,product,amount,description,date);
        if(res=="success"){
          Alert.alert("Expense added successfully");
        }else{
          Alert.alert("Expense not added");
        }
      }catch(err){
        console.log(err);
      }
      
    }

  return (
    <View style={styles.container}>
      <Text>AddExpenses</Text>
      <Text>catogory: {category}</Text>
      <Text>expense thing: {product}</Text>
      <Text>amount: {amount}</Text>
      <TextInput style={styles.input} placeholder='Enter Category' onChangeText={(text) => setcategory(text)} />
      <TextInput style={styles.input} placeholder='Expense Thing' onChangeText={(text) => setproduct(text)} />
      <TextInput style={styles.input} placeholder='Amount' onChangeText={(text) => setamount(text)} />
      <TextInput style={styles.input} placeholder='Enter description' onChangeText={(text)=> setDescription(text)} />
      <TextInput style={styles.input} placeholder='Enter Date' onChangeText={(text)=> setDate(text)} />
      <Button title='submit' onPress={handlesubmit} />
    </View>
  )
}

export default AddExpenses

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 20
    },
    input: {
        borderWidth:1,
        borderColor:'red',
        paddingHorizontal:30,
        borderRadius: 25,
    }
})