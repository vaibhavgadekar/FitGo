import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableNativeFeedback, Dimensions } from 'react-native';
import * as Constant from '../Constants/Constant';
import ProgressiveImage from '../Constants/ProgressiveImage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
export default class SetGoal extends Component {
    constructor(props) {
        super(props);
        this.state = {
         
        };
    }

    render() {
        return (
            <View style={{ width: Constant.deviceWidth, height: Constant.deviceHeight, backgroundColor: '#1B1E31' }}>
                <StatusBar  />
                <ProgressiveImage
                    thumbnailSource={require('../Constants/logo.png')}
                    style={{ height: 300, width: Constant.deviceWidth, marginTop: -10, }}
                    source={{
                        uri: 'https://images.unsplash.com/photo-1551984427-6d77a1918093?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=653&q=80',
                    }}
                >
                    <LinearGradient
                        style={{
                            height: 150, width: Constant.deviceWidth,
                            bottom: 0, position: 'absolute'
                        }}
                        colors={['transparent', '#1B1E31']}></LinearGradient>
                </ProgressiveImage>
                
                <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 20, color: Constant.buttonColor, marginLeft: 2,marginTop:-15 }}>YOUR GOAL</Text>
                </View>

                <View style={{ width: Constant.deviceWidth, marginTop: 15, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                   
                    <TouchableNativeFeedback
                        onPress={() => this.setState({firstselected:true,secondSelected:false})}
                        background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}
                    >
                        <View style={{ height: 200, width: 150, margin: 10, borderColor:this.state.firstselected?Constant.buttonColor:'gray', borderRadius: 10, borderWidth: this.state.firstselected?2:1,justifyContent:'center',alignItems:'center'  }}>
                        <AntDesign size={30} color={this.state.firstselected?Constant.buttonColor:'gray'} name={this.state.firstselected?'checkcircle':'checkcircleo'}/>
                            <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 20, color: this.state.firstselected?Constant.buttonColor:'gray', marginLeft: 2 ,marginTop:15}}>Get Fitter</Text>
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback
                        onPress={() => this.setState({firstselected:false,secondSelected:true})}
                        background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}
                    >
                        <View style={{ height: 200, width: 150, margin: 10,borderColor:this.state.secondSelected?Constant.buttonColor:'gray', borderRadius: 10,  borderWidth: this.state.secondSelected?2:1,justifyContent:'center',alignItems:'center' }}>
                            <AntDesign size={30} color={this.state.secondSelected?Constant.buttonColor:'gray'} name={this.state.secondSelected?'checkcircle':'checkcircleo'}/>
                            <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 20, color: this.state.secondSelected?Constant.buttonColor:'gray', marginLeft: 2,marginTop:15 }}>Loss Weight</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>


                {this.state.firstselected || this.state.secondSelected ?
                    (<View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                        <View style={{ height: 50, width: Constant.deviceWidth - 40, borderRadius: 10, backgroundColor: Constant.buttonColor, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 20, color: '#19223C', marginLeft: 2 }}>Start Training</Text>
                        </View>
                    </View>) : (<View></View>)
                }

            </View>
        );
    }
}
