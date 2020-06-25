import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableNativeFeedback } from 'react-native';
import * as Constant from '../Constants/Constant';
import ProgressiveImage from '../Constants/ProgressiveImage';
export default class Start extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ width: Constant.deviceWidth, height: Constant.deviceHeight, backgroundColor: '#1B1E31' }}>
                <StatusBar hidden />
                <ProgressiveImage
                    thumbnailSource={require('../Constants/logo.png')}
                    style={{ height: Constant.deviceHeight, width: Constant.deviceWidth }}
                    source={{
                        uri: 'https://images.unsplash.com/photo-1541338784564-51087dabc0de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
                    }}
                >

                    <View style={{ marginTop: Constant.deviceHeight - 230, }}>
                        <Text style={{ fontFamily: 'Montserrat-Bold', fontSize: 32, color: Constant.textColor, marginLeft: 15, width: 200 }}>The <Text style={{color:Constant.buttonColor}}>perfect app</Text> for your workout</Text>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, }}>
                            <TouchableNativeFeedback
                                onPress={() => this.props.navigation.navigate("Start2")}
                                background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}
                            >
                                <View style={{ height: 50, width: Constant.deviceWidth - 20, borderRadius: 10, backgroundColor: Constant.buttonColor, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 20, color: '#19223C', marginLeft: 2 }}>Start Training</Text>
                                </View>
                            </TouchableNativeFeedback>

                        </View>
                    </View>
                </ProgressiveImage>
            </View>
        );
    }
}
