import { View, Text } from 'react-native'
import React from 'react'

const ValidPassword = () => <Text>Password is Valid</Text>
const InvalidPassword = () => <Text>Password is Invalid</Text>

const Passwordchecker = (isValid:any) => {
    if (isValid) {
        return <ValidPassword />
    }
    return <InvalidPassword />
}

const Conditionalstatement = () => {
  return (
    <View>
        <Passwordchecker isValid={false} />
    </View>
  )
}

export default Conditionalstatement