import React, { Component } from 'react';
import { View, Text, Dimensions,StatusBar } from 'react-native';
import * as Constant from './Screens/Constants/Constant';
import DeviceInfo from 'react-native-device-info';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
//import createStackNavigator, createBottomTabNavigator, createAppContainer in our project
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './Screens/Main/HomeScreen';
import ExploreScreen from './Screens/Main/ExploreScreen';
import ProfileScreen from './Screens/Main/ProfileScreen';
import SplashScreen from './Screens/Authentication/SplashScreen';
import Start from './Screens/Authentication/Start';
import Start2 from './Screens/Authentication/Start2';
import SetGoal from './Screens/Authentication/SetGoal';
import Login from './Screens/Authentication/Login';
import Register from './Screens/Authentication/Register';
import OTP from './Screens/Authentication/OTP';
import ForgotPassword from './Screens/Authentication/ForgotPassword';

const HomeStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Home: { screen: HomeScreen },
  },
  {
    //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
    defaultNavigationOptions: {
      gestureEnabled: true,
      animationEnabled: true,
      animationTypeForReplace: 'pop',
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#42f44b',
      },
      headerTintColor: '#FFFFFF',
      headerShown: false,
    },
  }
);

const ExploreStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Explore: { screen: ExploreScreen }
  },
  {
    //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
    defaultNavigationOptions: {
      gestureEnabled: true,
      animationEnabled: true,
      animationTypeForReplace: 'pop',
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#42f44b',
      },
      headerTintColor: '#FFFFFF',
      headerShown: false,
    },
  }
);

const ProfileStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Profile: { screen: ProfileScreen }
  },
  {
    //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
    defaultNavigationOptions: {
      gestureEnabled: true,
      animationEnabled: true,
      animationTypeForReplace: 'pop',
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#42f44b',
      },
      headerTintColor: '#FFFFFF',
      headerShown: false,
    },
  }
);
const AuthenticationStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Login:{screen:Login},
    Register:{screen:Register},
    OTP: { screen: OTP },
    ForgotPassword:{screen:ForgotPassword},
    SetGoal: { screen: SetGoal },
    
  },
  {
    //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
    defaultNavigationOptions: {
      gestureEnabled: true,
      animationEnabled: true,
      animationTypeForReplace: 'pop',
      header:false,
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#42f44b',
      },
      headerTintColor: '#FFFFFF',
      headerShown: false,
    },
  }
);



const App = createBottomTabNavigator(
  {
    //Defination of Navigaton bottom options
    Home: {
      screen: HomeStack,
    },
    Explore: { screen: ExploreStack },
    // Profile: { screen: ProfileStack },
    Profile: { screen: ProfileStack },
    // Explore3: { screen: NetInfoDetect },
  },
  {
    //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = AntDesign;
        let iconName;
        if (routeName === 'Home') {
          return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              {focused ? <View style={{ flexDirection: 'row', width: 80, height: 35,  borderRadius: 60, justifyContent: 'center', alignItems: 'center',borderWidth:1,borderColor:Constant.textColor }}>
                <FontAwesome5 name="typo3" size={22} color={focused ? Constant.textColor : "lightgray"} style={{ marginTop: 0 }} />
                <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 13, color: Constant.textColor, marginLeft: 2 }}>Home</Text>
              </View> :
                <FontAwesome5 name="typo3" size={22} color={focused ? Constant.bottomIconColor : "lightgray"} style={{ marginTop: 0 }} />
              }
            </View>
          );

        }
        
        else if (routeName === 'Explore') {
          return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            {focused ? <View style={{ flexDirection: 'row', width: 85, height: 35, borderRadius: 60, justifyContent: 'center', alignItems: 'center' ,borderWidth:1,borderColor:Constant.textColor}}>
              <FontAwesome5 name="fire" size={22} color={focused ? Constant.textColor : "lightgray"} style={{ marginTop: 0 }} />
              <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 13, color: Constant.textColor, marginLeft: 2 }}>Explore</Text>
            </View> :
              <FontAwesome5 name="fire" size={22} color={focused ? Constant.bottomIconColor : "lightgray"} style={{ marginTop: 0 }} />
            }
          </View>
          );
        }
        else if (routeName === 'Profile') {
          return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            {focused ? <View style={{ flexDirection: 'row', width: 80, height: 35,  borderRadius: 60, justifyContent: 'center', alignItems: 'center',borderWidth:1,borderColor:Constant.textColor }}>
              <FontAwesome5 name="napster" size={22} color={focused ? Constant.textColor : "lightgray"} style={{ marginTop: 0 }} />
              <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 13, color: Constant.textColor, marginLeft: 2 }}>Profile</Text>
            </View> :
              <FontAwesome5 name="napster" size={22} color={focused ? Constant.bottomIconColor : "lightgray"} style={{ marginTop: 0 }} />
            }
          </View>
          );
        }
       

      },
    }),
    tabBarOptions: {
    
      showLabel: false,
      style: {
        zIndex:1,
        bottom: 0,
        position: 'absolute',
        borderTopRightRadius: 30,
        marginBottom: 0,
        height: 50,
        backgroundColor: Constant.bottomTabColor,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
        borderTopLeftRadius: 30,
        borderTopColor: "transparent",
        elevation: 20,
      },
      labelStyle: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 10,
        marginTop: -5,
        color:Constant.bottomIconColor
      }
    },
  }
);

const switchNav = createSwitchNavigator(
  {
    SplashScreen: { screen: SplashScreen },
    Start: { screen: Start },
    Start2: { screen: Start2 },
    AuthenticationStack: { screen: AuthenticationStack },


    // Intro:{screen:Intro},
    App: { screen: App }
  }
);

export default createAppContainer(switchNav);
