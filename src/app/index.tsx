import { View, Text, ScrollView, Pressable, Image, FlatList } from 'react-native'
import React from 'react'
import Product from '../components/Product'
import Conditionalstatement from '../components/Conditionalstatement'
import Withstate from '../components/State/Withstate'
import UpdateArray from '../components/State/UpdateArray'
import UpdateObject from '../components/State/UpdateObject'
import ComponentOne from '../components/SharingState/ComponentOne'
import SharingState from '../components/SharingState/SharingState'
import Toggle from '../components/Toggle'
// import { Link } from 'expo-router'
// import CarComponent from '../components/CarComponent'
// import ListData from '../components/ListData'
// import ArrayOfObjects from '../components/ArrayOfObjects'

const Index = () => {
  // const products = [
  //   {
  //     productName: "Product A",
  //     productImage:
  //       "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     productPrice: 19.99,
  //     productDescription: "Description for Product A",
  //     isFeatured: true,
  //   },
  //   {
  //     productName: "Product B",
  //     productImage:
  //       "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     productPrice: 19.99,
  //     productDescription: "Description for Product A",
  //     isFeatured: true,
  //   },
  //   {
  //     productName: "Product C",
  //     productImage:
  //       "https://images.unsplash.com/photo-1620987278429-ab178d6eb547?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     productPrice: 19.99,
  //     productDescription: "Description for Product A",
  //     isFeatured: true,
  //   },
  //   {
  //     productName: "Product D",
  //     productImage:
  //       "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     productPrice: 19.99,
  //     productDescription: "Description for Product A",
  //     isFeatured: true,
  //   },
  // ];
  return (
    <View>
       {/* <Link href='/about'>Go to about</Link>
       <Link href='/create'>Go to create page</Link>
       <CarComponent />
       <ListData /> 
      <ArrayOfObjects /> */}
      {/* <FlatList data={products} renderItem={({item}) => <Product name={item.productName} price={item.productPrice} description={item.productDescription} image={item.productImage} isFeatured = {item.isFeatured} />} /> */}
      {/* <Conditionalstatement /> */}
      {/* <Withstate /> */}
      {/* <UpdateArray /> */}
      {/* <UpdateObject /> */}
      {/* <SharingState /> */}
      <Toggle />
    </View>
  )
}

export default Index