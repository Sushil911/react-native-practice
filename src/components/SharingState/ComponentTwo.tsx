import { View, Text, Button } from 'react-native'
import React from 'react'

interface componentprops {
    count:number;
    onClickHandler: () => void;
}

const ComponentTwo = ({count,onClickHandler}:componentprops) => {
  return (
    <View>
      <Text>ComponentTwo</Text>
      <Text> {count} </Text>
      <Button title='Press Me' onPress={onClickHandler} />
    </View>
  )
}

export default ComponentTwo