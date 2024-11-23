import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const Toggle = () => {
    const [isOn, setisOn] = useState(false)
    const onPresshandler = () => {setisOn(!isOn)}
  return (
    <View>
        <Text> {isOn ? 'On':'Off'} </Text>
        <Button title='Toggle' onPress={onPresshandler} />
    </View>
  )
}

export default Toggle