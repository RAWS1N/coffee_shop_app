import {  Pressable, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useStore } from '../store/store'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'
import HeaderBar from '../components/HeaderBar'
import CustomIcon from '../components/CustomIcon'
import { NativeSyntheticEvent } from 'react-native'


interface categoryTypes {
  index : number,
  category : string
}

const getCoffeeListByCategory = (category:string,data:any) => {
  if(category === 'All') return data
  const coffeeByCategoryList = data.filter((value:any) => value.name === category)
  return coffeeByCategoryList
}



const HomeScreen = () => {
  const CoffeeList = useStore((state:any) => state.CoffeeList)
  const coffeeCategories = CoffeeList.reduce((acc:string[],value:any) => acc.includes(value.name) ? acc : [...acc,value.name],['All'])
  const BeanList = useStore((state:any) => state.BeanList)
  const [categories,setCategories] = useState<string[]>(coffeeCategories)
  const [searchText,setSearchText] = useState<string>('')
  const [categoryIndex,setCategoryIndex] = useState<categoryTypes>({
    index : 0,
    category : categories[0]
  })
  
  const [sortedCoffee,setSortedCoffee] = useState(getCoffeeListByCategory(categoryIndex.category,CoffeeList))
  const tabBarHeight = useBottomTabBarHeight()

  const handleChange = (text:string) => {
    setSearchText(text)
  }

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex}/>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}
      >
        <HeaderBar title='Home Screen'/>
        <Text style={styles.screenTitle}>Find the best {'\n'} coffee for you</Text>
        {/* search input */}
        <View style={styles.InputContainerComponent}>
          <TouchableOpacity onPress={() => console.log('Pressed')}>
            <CustomIcon name='search' style={styles.InputIcon} size={FONTSIZE.size_18} color={searchText.length > 0 ? COLORS.primaryOrangeHex : COLORS.primaryGreyHex}/>
          </TouchableOpacity>
          <TextInput 
          placeholder='Find your coffee...' 
          value={searchText} 
          onChangeText={(text) => handleChange(text)}
          placeholderTextColor={COLORS.primaryLightGreyHex}
          style={styles.TextInputContainer}
          />
        </View>
      </ScrollView>
    </View>

  )
}

export default HomeScreen

  const styles = StyleSheet.create({
    ScreenContainer: {
      flex: 1,
      backgroundColor: COLORS.primaryBlackHex,
    },
    ScrollViewFlex: {
      flexGrow: 1,
    },
    screenTitle : {
      fontSize : FONTSIZE.size_28,
      fontFamily : FONTFAMILY.poppins_semibold,
      color : COLORS.primaryWhiteHex,
      paddingLeft : SPACING.space_30
    },
    InputContainerComponent : {
      margin : SPACING.space_30,
      borderRadius : BORDERRADIUS.radius_20,
      backgroundColor : COLORS.primaryDarkGreyHex,
      flexDirection : 'row',
      alignItems : 'center'
    },
    TextInputContainer : {
      flex : 1,
      height : SPACING.space_20*3,
      fontFamily : FONTFAMILY.poppins_medium,
      fontSize : FONTSIZE.size_14,
      color : COLORS.primaryWhiteHex
    },
    InputIcon : {
      marginHorizontal : SPACING.space_20
    }
})