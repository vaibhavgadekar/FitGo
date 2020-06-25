import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableNativeFeedback, Dimensions, TextInput } from 'react-native';
import * as Constant from '../Constants/Constant';
import ProgressiveImage from '../Constants/ProgressiveImage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: '',
      Password: ''
    };
  }

  render() {
    return (
      <View style={{ width: Constant.deviceWidth, height: Constant.deviceHeight, backgroundColor: '#1B1E31' }}>
        <StatusBar hidden />




        <Text style={{ fontFamily: 'Montserrat-Bold', fontSize: 40, color: Constant.buttonColor, marginLeft: 15, marginTop: 55 }}>LOGIN</Text>

        {/* Login Section */}
        <View style={{ justifyContent: 'center', alignItems: 'center', width: Constant.deviceWidth, marginTop: 80 }}>
          {/* Username */}
          <View>
            <TextInput
              style={{ height: 40, width: Constant.deviceWidth - 60, backgroundColor: '#1B1E31', fontSize: 20, fontFamily: 'Montserrat-Regular', color: Constant.buttonColor }}
              placeholder="Username"
              placeholderTextColor="#84847F"
              onChangeText={(Username) => this.setState({ Username })}
            />
            <View style={{ width: Constant.deviceWidth - 60, borderWidth: 1, borderColor: Constant.buttonColor }}></View>
          </View>

          {/* PAssword */}
          <View>
            <TextInput
              style={{ height: 40, width: Constant.deviceWidth - 90, backgroundColor: '#1B1E31', fontSize: 20, marginTop: 50, fontFamily: 'Montserrat-Regular', color: Constant.buttonColor }}
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor="#84847F"
              onChangeText={(Password) => this.setState({ Password })}
            />
            <View style={{ width: Constant.deviceWidth - 60, borderWidth: 1, borderColor: Constant.buttonColor, }}></View>
          </View>
        </View>

        {/* forgot Password */}
        <TouchableNativeFeedback
          onPress={() => this.props.navigation.navigate("ForgotPassword")}
          background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}
        >
          <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 15, color: Constant.buttonColor, textAlign: 'right', marginRight: 25, marginTop: 25 }}>Forgot Password?</Text>
        </TouchableNativeFeedback>


        {/* login button */}
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20, }}>
          <TouchableNativeFeedback
            onPress={() => this.props.navigation.navigate("App")}
            background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}
          >
            <View style={{ height: 50, width: Constant.deviceWidth - 60, borderRadius: 10, backgroundColor: Constant.buttonColor, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 20, color: '#19223C', marginLeft: 2 }}>Log in</Text>
            </View>
          </TouchableNativeFeedback>
          <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 14, color: Constant.buttonColor, marginTop: 8 }}>or Login with</Text>
        </View>

        {/* Google facebook */}
        <View style={{ justifyContent: 'center', alignItems: 'center', width: Constant.deviceWidth, flexDirection: 'row', marginTop: 10 }}>
          {/* Facebook */}
          <View style={{ height: 50, width: 120, borderColor: Constant.textColor, borderWidth: 1, borderRadius: 10, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginRight: 15 }}>
            <FontAwesome name="facebook-square" color={Constant.textColor} size={20} />
            <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 14, color: Constant.textColor, marginLeft: 5, }}>Facebook</Text>
          </View>
          {/* Google */}
          <View style={{ height: 50, width: 120, borderColor: Constant.textColor, borderWidth: 1, borderRadius: 10, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <FontAwesome name="google" color={Constant.textColor} size={20} />
            <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 14, color: Constant.textColor, marginLeft: 5, }}>Google</Text>
          </View>
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
          <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 14, color: 'gray', marginTop: 40 }}>Don't have an account? </Text>
          <TouchableNativeFeedback
            onPress={() => this.props.navigation.navigate("SetGoal")}
            background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}
          >
            <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 14, color: Constant.buttonColor, marginTop: 40 }}> Sign up </Text>
          </TouchableNativeFeedback>
        </View>



      </View>
    );
  }
}
