import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const Toggle = () => {
    const [isOn, setisOn] = useState(false)
    const onPressHandler = () => {
        setisOn(!isOn)
    }
  return (
    <View>
      <Text> {isOn ? 'On':'Off'} </Text>
      <Button title='Toggle' onPress={onPressHandler} />
    </View>
  )
}

export default Toggle