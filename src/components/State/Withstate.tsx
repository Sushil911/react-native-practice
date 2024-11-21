import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const Withstate = () => {
    const [count, setcount] = useState(0)
  return (
    <View>
      <Text>Count : {count}</Text>
      <Button title='Increment' onPress={() => setcount(count+1)} />
      <Button title='Decrement' onPress={() => setcount(count-1)} />
    </View>
  )
}

export default Withstate