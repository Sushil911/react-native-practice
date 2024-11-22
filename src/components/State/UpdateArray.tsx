import { View, Text, FlatList, Button, Pressable } from 'react-native'
import React, { useState } from 'react'

const UpdateArray = () => {
    const [friends, setfriends] = useState(["Sushil","Ram","Shyam"])
    const addFriend = () => {setfriends([...friends,"Suman"])}
    const removeFriend = () => {setfriends(friends.filter((f)=>f!="Ram"))}
    const updateFriend = () => {setfriends(friends.map((f)=>f==='Sushil'?'Sushil Basyal':f) )}
  return (
    <View>
        <FlatList data={friends} renderItem={({item})=><Text>{item}</Text>} />
        <Button title='Add friend' onPress={addFriend} />
        <Pressable onPress={updateFriend} style={{ display:'flex', alignItems:'center', justifyContent:'center', margin:10}}>
          <Text>Update Friend</Text>
        </Pressable>
        <Button title='Remove friend' onPress={removeFriend} />
    </View>
  )
}

export default UpdateArray