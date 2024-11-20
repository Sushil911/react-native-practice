import { View, Text, ScrollView, Pressable, Image } from 'react-native'
import React from 'react'
// import { Link } from 'expo-router'
// import CarComponent from '../components/CarComponent'
// import ListData from '../components/ListData'
import ArrayOfObjects from '../components/ArrayOfObjects'

const Index = () => {
  return (
    <View>
      {/* <Link href='/about'>Go to about</Link>
      <Link href='/create'>Go to create page</Link>
      <CarComponent />
      <ListData /> */}
      <ArrayOfObjects />
    </View>
  )
}

export default Index