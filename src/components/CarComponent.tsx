import { View, Text, Image, Button } from 'react-native'
import React from 'react'

const CarComponent = () => {
  const price = "$2000"
  const imgsource = require("../assets/mountain.jpg")
  const imgwidth = 200
  const imgheight =200
  const rating =3.5
  const description = "Here is some random car description"
  const name = "Bugatti"
  const buttontitle = "Add To Cart"
  return (
    <View>
      <Text>{price}</Text>
      <Image source={imgsource} style={{width:imgwidth,height:imgheight}} />
      <Text> {name} </Text>
      <Text>{rating}</Text>
      <Text>{description}</Text>
      <Button title={buttontitle} />
    </View>
  )
}

export default CarComponent