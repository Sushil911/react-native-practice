import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'

const UpdateArray = () => {
    const [friends, setfriends] = useState(["Sushil","Ram","Shyam"])
  return (
    <View>
        <FlatList data={friends} renderItem={({item})=><Text>{item}</Text>} />
    </View>
  )
}

export default UpdateArray