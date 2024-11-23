import { View, Text } from 'react-native'
import React, { useState } from 'react'
import ComponentOne from './ComponentOne'
import ComponentTwo from './ComponentTwo'

const SharingState = () => {
    const [count, setcount] = useState(0)
  return (
    <View>
        <ComponentOne count={count} onClickHandler = {() => setcount(count+1)} />
        <ComponentTwo count={count} onClickHandler = {() => setcount(count+1)} />
    </View>
  )
}

export default SharingState