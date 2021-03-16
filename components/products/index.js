import React, { useState, useEffect } from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    FlatList,
    StatusBar
} from 'react-native'
import * as strings from '../utils/colors'
import * as constants from '../utils/constants'
import * as colors from '../utils/colors'
import * as dimens from '../utils/dimens'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import CustomHeader from './customHeader'
import { productList } from '../utils/samples'  
import Product from './product'

const Products = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.theme} barStyle={'default'} />
      <CustomHeader 
        menuPressed={()=> menuPressed()} />
      <View style={styles.productsContainer}>
        <FlatList 
          showsVerticalScrollIndicator={false}
          data={productList}
          renderItem={(item, index)=> renderProducts(item, index)}/>
      </View>
    </View>
  )
  function menuPressed() {
    // alert('pressed')
    props.navigation.openDrawer()
  }
  function renderProducts(item, index) {
    return (
      <Product 
        item={item.item}
        index={item.index}/>
    )
  }
}

export default Products

const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('100%'),
    },
    productsContainer: {
      width: wp('100%'),
      height: hp('100%') - hp('8%'),
      backgroundColor: colors.lightGrey
    }
})