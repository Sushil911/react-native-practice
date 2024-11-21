import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

interface Person {
  name:string;
  age:number;
  place:string
}

const PersonInfo = (props:Person) => {
    return (
      <Text>Hi my name is {props.name}, my age is {props.age} and I live in {props.place} </Text>
    )
}

const about = () => {
  return (
    <View>
      <Text>Hello from about</Text>
      <Link href='/create'>Goto create page</Link>
      <Link href='/'>Goto home screen</Link>
      <PersonInfo name='Sushil Basyal' place='Kawasoti' age={19} />
    </View>
  )
}

export default about