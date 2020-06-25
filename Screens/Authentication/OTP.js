import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableNativeFeedback, Dimensions,TextInput,ActivityIndicator } from 'react-native';
import * as Constant from '../Constants/Constant';
import ProgressiveImage from '../Constants/ProgressiveImage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
export default class OTP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Username:'',
      Password:'',
      timer:60,
      submit:false
    };
  }
  componentDidMount()
{

}

show(){
  setTimeout(() => {
   
    this.setState({submit:false})
}, 2000)
}

  render() {
    return (
      <View style={{ width: Constant.deviceWidth, height: Constant.deviceHeight, backgroundColor: '#1B1E31' }}>
        <StatusBar hidden />

       {/* back button */}
       <TouchableNativeFeedback
            onPress={() => this.props.navigation.goBack()}
            background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}
          >
        <View>
          <Entypo name="chevron-thin-left" size={30} color={Constant.buttonColor} style={{ marginLeft: 10, marginTop: Constant.statusBarHeight, fontWeight: 'bold' }} />
        </View>
        </TouchableNativeFeedback>


        <Text style={{ fontFamily: 'Montserrat-Bold', fontSize: 30, color: Constant.buttonColor, marginLeft: 15, marginTop: 25 }}>OTP VERIFICATION</Text>

        
        <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row',width: Constant.deviceWidth-20,}}>
        <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 12, color: 'gray',marginTop:40 }}>Verification code sent to </Text>
        <TouchableNativeFeedback
            onPress={() => this.props.navigation.navigate("Register")}
            background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}
          >
        <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 12, color: Constant.buttonColor,marginTop:40,  }}> gadekarv1@gmail.com </Text>
        </TouchableNativeFeedback>
        </View>

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

          
        </View>

    <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 15, color: Constant.buttonColor, textAlign: 'right', marginRight: 35, marginTop: 25 }}>{this.state.timer}</Text>
      
      {/* login button */}
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20, }}>
          <TouchableNativeFeedback
            onPress={() => this.setState({submit:true},this.show())}
            background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}
          >
            <View style={{ height: 50, width: Constant.deviceWidth - 90, borderRadius: 10, backgroundColor: Constant.buttonColor, justifyContent: 'center', alignItems: 'center' }}>
            {this.state.submit?(<ActivityIndicator size="large" color="#19223C"/>):
              <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 20, color: '#19223C', marginLeft: 2 }}>Verify</Text>
               }
            </View>
          </TouchableNativeFeedback>
        </View>

        

      



      </View>
    );
  }
}
