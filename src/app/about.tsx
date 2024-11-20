import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const about = () => {
  return (
    <View>
      <Text>Hello from about</Text>
      <Link href='/create'>Goto create page</Link>
      <Link href='/'>Goto home screen</Link>
    </View>
  )
}

export default about