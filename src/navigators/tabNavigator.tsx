import React from 'react'
import { StyleSheet } from 'react-native'
import { HomeScreen,CardScreen,FavoriteScreen,OrderHistoryScreen } from '../screens'
import CustomIcon from '../components/CustomIcon'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { COLORS } from '../theme/theme'
import { BlurView } from '@react-native-community/blur'



const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown : false,tabBarHideOnKeyboard:true,tabBarShowLabel:false,tabBarStyle:styles.tabBarStyle,tabBarBackground : () => {
        return <BlurView overlayColor='' blurAmount={15} style={styles.blurViewStyle}/>
    }}}>
        <Tab.Screen name='Home' component={HomeScreen} options={{tabBarIcon : ({focused,color,size}) => {
            return <CustomIcon name='home' size={25} color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}/>
        }}}/>
        <Tab.Screen name='Card' component={CardScreen} options={{tabBarIcon : ({focused,color,size}) => {
            return <CustomIcon name='cart' size={25} color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}/>
        }}}/>
        <Tab.Screen name='Favorite' component={FavoriteScreen} options={{tabBarIcon : ({focused,color,size}) => {
            return <CustomIcon name='like' size={25} color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}/>
        }}}/>
        <Tab.Screen name='History' component={OrderHistoryScreen} options={{tabBarIcon : ({focused,color,size}) => {
            return <CustomIcon name='bell' size={25} color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}/>
        }}}/>
    </Tab.Navigator>
  )
}


export default TabNavigator



const styles = StyleSheet.create({
    tabBarStyle : {
        height : 60,
        position : 'absolute',
        backgroundColor : COLORS.primaryBlackRGBA,
        borderTopWidth : 0,
        elevation : 0,
        borderTopColor : 'transparent'
    },
    blurViewStyle : {
        position : 'absolute',
        top : 0,
        right : 0,
        bottom : 0,
        left : 0
    }
})