import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableNativeFeedback, Dimensions,TextInput,Alert,ActivityIndicator } from 'react-native';
import * as Constant from '../Constants/Constant';
import ProgressiveImage from '../Constants/ProgressiveImage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import DeviceInfo from 'react-native-device-info';
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      Username:'',
      mobileno:'',
      Password:'',
      instanceid:'',
      submit:false,
      data:[]
    };

  }

  componentDidMount()
  {
   
    this.setState({instanceid:DeviceInfo.getUniqueId()})
    
  }

  regsiter()
  {
    this.setState({submit:true})
    fetch('http://oruga.in/Vaibhav/API/Register.php?name='+this.state.name+'&username='+this.state.Username+'&mobileno='+this.state.mobileno+'&password='+this.state.Password+'&deviceid='+this.state.instanceid+'&APIkey='+Constant.APIkey,
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        data: responseJson
      })
      if (this.state.data.response == 'success') {
        // Alert.alert("Registration Successful ! Please Login Now");
        this.props.navigation.navigate('Login');
        this.setState({submit:false})
      }
      else {
        Alert.alert("" + this.state.data.response);
        console.log(this.state.data.response)
        this.setState({submit:false})
      }

    })
    .catch((error) => {
      Alert.alert("" + error);
      console.log(error)
    });
  
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


        <Text style={{ fontFamily: 'Montserrat-Bold', fontSize: 40, color: Constant.buttonColor, marginLeft: 15, marginTop: 15 }}>Sign Up</Text>

        {/* Login Section */}
        <View style={{ justifyContent: 'center', alignItems: 'center', width: Constant.deviceWidth, marginTop: 30 }}>
         {/* Name */}
         <View>
            <TextInput
              style={{ height: 40, width: Constant.deviceWidth - 60, backgroundColor: '#1B1E31', fontSize: 20, fontFamily: 'Montserrat-Regular', color: Constant.buttonColor }}
              placeholder="Name"
              placeholderTextColor="#84847F"
              onChangeText={(name) => this.setState({ name })}
            />  
            <View style={{ width: Constant.deviceWidth - 60, borderWidth: 1, borderColor: Constant.buttonColor }}></View>
          </View>
          {/* Username */}
          <View>
            <TextInput
              style={{ height: 40, width: Constant.deviceWidth - 60, backgroundColor: '#1B1E31', fontSize: 20, marginTop: 20,fontFamily: 'Montserrat-Regular', color: Constant.buttonColor }}
              placeholder="Username"
              placeholderTextColor="#84847F"
              onChangeText={(Username) => this.setState({ Username })}
            />  
            <View style={{ width: Constant.deviceWidth - 60, borderWidth: 1, borderColor: Constant.buttonColor }}></View>
          </View>
           {/* mobile */}
           <View>
            <TextInput
              style={{ height: 40, width: Constant.deviceWidth - 60, backgroundColor: '#1B1E31', fontSize: 20, marginTop: 20,fontFamily: 'Montserrat-Regular', color: Constant.buttonColor }}
              placeholder="Mobile number"
              placeholderTextColor="#84847F"
              maxLength={10}
              textContentType='oneTimeCode'
              onChangeText={(mobileno) => this.setState({ mobileno })}
            />  
            <View style={{ width: Constant.deviceWidth - 60, borderWidth: 1, borderColor: Constant.buttonColor }}></View>
          </View>

          {/* PAssword */}
          <View>
          <TextInput
              style={{ height: 40, width: Constant.deviceWidth - 60, backgroundColor: '#1B1E31', fontSize: 20,  marginTop: 20,fontFamily: 'Montserrat-Regular', color: Constant.buttonColor }}
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor="#84847F"
              onChangeText={(Password) => this.setState({ Password })}
            />  
            <View style={{ width: Constant.deviceWidth - 60, borderWidth: 1, borderColor: Constant.buttonColor, }}></View>
          </View>
        </View>

        {/* <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 15, color: Constant.buttonColor, textAlign: 'right', marginRight: 25, marginTop: 25 }}>Forgot Password?</Text> */}
      
      {/* login button */}
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20, }}>
          <TouchableNativeFeedback
            onPress={() => this.regsiter()}
            background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}
          >
            <View style={{ height: 50, width: Constant.deviceWidth - 90, borderRadius: 10, backgroundColor: Constant.buttonColor, justifyContent: 'center', alignItems: 'center' }}>
            {this.state.submit?(<ActivityIndicator size="large" color="#19223C"/>):
              <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 20, color: '#19223C', marginLeft: 2 }}>Sign up</Text>
               }
            </View>
          </TouchableNativeFeedback>
        </View>

        {/* Google facebook */}
        <View style={{ justifyContent: 'center', alignItems: 'center', width: Constant.deviceWidth,flexDirection:'row',marginTop:10 }}>
         {/* Facebook */}
          <View style={{ height: 50, width: 120, borderColor: Constant.textColor, borderWidth: 1, borderRadius: 10, justifyContent: 'center', alignItems: 'center', flexDirection: 'row',marginRight:15 }}>
           <FontAwesome name="facebook-square" color={Constant.textColor} size={20}/>
            <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 14, color: Constant.textColor,marginLeft: 5, }}>Facebook</Text>
          </View>
           {/* Google */}
           <View style={{ height: 50, width: 120, borderColor: Constant.textColor, borderWidth: 1, borderRadius: 10, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
           <FontAwesome name="google" color={Constant.textColor} size={20}/>
            <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 14, color: Constant.textColor,marginLeft: 5, }}>Google</Text>
          </View>

        </View>

        <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
        <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 14, color: 'gray',marginTop:40 }}>Already have an account? </Text>
        <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 14, color: Constant.buttonColor,marginTop:40  }}> Sign In </Text>
        </View>



      </View>
    );
  }
}
