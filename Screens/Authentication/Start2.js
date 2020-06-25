import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableNativeFeedback } from 'react-native';
import * as Constant from '../Constants/Constant';
import ProgressiveImage from '../Constants/ProgressiveImage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { AsyncStorage } from 'react-native';
export default class Start2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    componentDidMount()
    {
        AsyncStorage.setItem('isInstalled', 'true');  
        AsyncStorage.setItem('lightTheme', 'true');  
    }

    render() {
        return (
            <View style={{ width: Constant.deviceWidth, height: Constant.deviceHeight, backgroundColor: '#1B1E31' }}>
                <StatusBar hidden />
                <View style={{ width: Constant.deviceWidth, height: Constant.deviceHeight - 120, backgroundColor: Constant.buttonColor, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                    <View style={{ width: Constant.deviceWidth, height: Constant.deviceHeight - 250, marginTop: 50, marginLeft: 15, }}>
                        <Text style={{ fontFamily: 'Montserrat-Bold', fontSize: 39, color: '#19223C', marginLeft: 2, width: 310, textDecorationLine: 'underline', }}>GET STRONG IN SILENCE, LET YOUR SUCCESS MAKE ALL THE NOISE.</Text>
                        <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 15, color: '#19223C', marginLeft: 2, width: 310, marginTop: 180 }}>Focus on your goal everyday</Text>
                    </View>
                </View>
                <TouchableNativeFeedback
                    onPress={() => this.props.navigation.navigate("AuthenticationStack")}
                    background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}
                >
                    <View style={{ marginTop: 40, flexDirection: 'row' }}>
                        <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 20, color: Constant.textColor, marginLeft: 15, }}>Start Training</Text>
                        <AntDesign name="arrowright" color={Constant.textColor} size={20} style={{ marginTop: 5, marginLeft: 10, }} />
                    </View>
                </TouchableNativeFeedback>

            </View>
        );
    }
}
