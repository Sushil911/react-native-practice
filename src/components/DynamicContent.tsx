import { View, Text } from 'react-native'
import React from 'react'

const DynamicContent = () => {
  const username = "Sushil"
  const multiply = (a:number,b:number) => a*b 
  return (
    <View>
      <Text>My name is {username} </Text>
      <Text>My friends are : {["Sushil ","Sudip ","Suman"]}</Text>
      <Text>2+3={2+3}</Text>
      <Text>2*3={multiply(2,3)}</Text>
    </View>
  )
}

export default DynamicContent