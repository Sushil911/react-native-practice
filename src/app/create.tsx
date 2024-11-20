import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import DynamicContent from '../components/DynamicContent'

const dynamicContent = () => {
  return (
    <View>
      <Link href='/'>Goto home page</Link>
      <Link href='/about'>Goto about page</Link>
      <DynamicContent />
    </View>
  )
}

export default dynamicContent