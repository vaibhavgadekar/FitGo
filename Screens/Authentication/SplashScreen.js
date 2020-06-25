import React, { Component } from 'react';
import { View, Text ,StatusBar,Dimensions} from 'react-native';
import * as Constant from '../Constants/Constant';
import DeviceInfo from 'react-native-device-info';
import { AsyncStorage } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkInstall:false,
    };
  }

  componentDidMount() {
    // DeviceInfo.getAndroidId().then(androidId => {
    //  console.log(androidId)
    // });
    // DeviceInfo.getBatteryLevel().then(batteryLevel => {
    //   console.log(batteryLevel*100)
    // });
    // DeviceInfo.getCarrier().then(carrier => {
    //   console.log(carrier)
   
    // });

    // DeviceInfo.getDeviceName().then(deviceName => {
    //   console.log(DeviceInfo.getBrand()+""+deviceName)

    // });
    // DeviceInfo.getInstanceId().then(id => {
    //  console.log(id)
    // });
    // DeviceInfo.getPowerState().then(state => {
    //   // {
    //   //   batteryLevel: 0.759999,
    //   //   batteryState: 'unplugged',
    //   console.log(state+" "+DeviceInfo.getUniqueId())
    //   //   lowPowerMode: false,
    //   // }
    // });

    AsyncStorage.getItem('isInstalled').then(value =>
      this.setState({checkInstall:value})
  );
    
   
    setTimeout(() => {
      console.log(this.state.checkInstall)
        if(this.state.checkInstall)
        {

          this.props.navigation.navigate("App");
          // coret code
          // this.props.navigation.navigate("AuthenticationStack");
        }
        else{
          this.props.navigation.navigate("Start");
        }

    }, 1500)
}

  render() {
    return (
        <View style={{ width: Constant.deviceWidth, height: Constant.deviceHeight, backgroundColor: Constant.bgColor }}>
      <StatusBar backgroundColor={Constant.bgColor}/>
         <View style={{justifyContent:'center',alignItems:'center',marginTop:250}}>
         <FontAwesome5 name="typo3" size={50} color='#1B1E31' style={{ marginTop: 0}} />
           <Text style={{fontFamily:'Montserrat-Bold',fontSize:29,color:'#1B1E31'}}>FitGo</Text>
        </View>
       </View>
    );
  }
}
