import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const UpdateObject = () => {
    const [movie, setmovie] = useState({
        name:"Sita Ramam",
        rating:8
    })
    const updateRating = () => {
        setmovie({...movie,rating:9})
    }
  return (
    <View>
        <Text> {movie.name} </Text>
        <Text> {movie.rating} </Text>
        <Button title='Update Rating' onPress={updateRating} />
    </View>
  )
}


export default UpdateObject