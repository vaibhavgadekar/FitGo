import React, { Component } from 'react';
import { View, Text, StatusBar, Image, ScrollView,Button, DevSettings} from 'react-native';
import * as Constant from '../Constants/Constant';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import ProgressiveImage from '../Constants/ProgressiveImage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { AsyncStorage } from 'react-native';
import { SvgUri, SvgCssUri, SvgWithCssUri } from 'react-native-svg';
import Swiper from 'react-native-swiper'
export default class ExploreScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
 
      recommeded: [
        {
          img: "https://images.pexels.com/photos/1671217/pexels-photo-1671217.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "Intense Cardio",
          time: "25 min",
          type: "full body",
          tag:"BodyWight Cardio",
          screen: ""
        },
        {
          img: "https://images.pexels.com/photos/2294352/pexels-photo-2294352.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "Upper Back",
          time: "14 min",
          type: "full body",
          tag:"Uppar Disk",
          screen: ""
        }
        ,
        {
          img: "https://images.pexels.com/photos/2824020/pexels-photo-2824020.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "Intense Cardio",
          time: "25 min",
          type: "full body",
          tag:"Hight Weight",
          screen: ""
        }
        ,
        {
          img: "https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "Intense Cardio",
          time: "25 min",
          type: "full body",
          tag:"Muscles Tag",
          screen: ""
        }
        ,
        {
          img: "https://images.pexels.com/photos/2780762/pexels-photo-2780762.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "Intense Cardio",
          time: "25 min",
          tag:"Hand Rufles",
          screen: ""
        }
        ,
        {
          img: "https://images.pexels.com/photos/700446/pexels-photo-700446.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "Intense Cardio",
          time: "25 min",
          type: "full body",
          tag:"Neck Traio",
          screen: ""
        }
      ],
    };
  }

  popularCouse = () => {
    return this.state.recommeded.map(element => {
      return (
        <ScrollView horizontal={true}>
          <View style={{ height: 260, width: 280, margin: 10,marginTop: 15, }}>
            <ProgressiveImage
              borderRadius= {8}
              thumbnailSource={require('../Constants/logo.png')}
              style={{ height: 240, width: 280, }}
              source={{
                uri: element.img,
              }}
            >
              <View style={{ bottom:0,position:'absolute' }}>
              <Text style={{ fontFamily: Constant.boldFont, fontSize: 32, color: Constant.textColor,marginLeft:5 }}>{element.tag}</Text>
              <View style={{height:2,width: 80,backgroundColor:Constant.bgColor,marginLeft:10,marginBottom:15}}></View>
              </View>
            </ProgressiveImage>
          </View>
        </ScrollView>
      );
    })
  }





  render() {
    return (
      <View style={{ width: Constant.deviceWidth, height: Constant.deviceHeight, backgroundColor: Constant.viewBgColor }}>
        <StatusBar backgroundColor={Constant.viewBgColor} />
        <View style={{  height: 54, width: Constant.deviceWidth, backgroundColor: Constant.viewBgColor, justifyContent: 'space-between', flexDirection: 'row' }}>
          <Text style={{ fontFamily: Constant.boldFont, fontSize: 20, color: Constant.textColor, marginTop: 10 }}></Text>
         <View style={{flexDirection:'row', marginTop: 10, marginLeft: 20}}>
          <Text style={{ fontFamily: Constant.regularFont, fontSize: 20, color: Constant.textColor, }}>Explore</Text>
          </View>
          <Entypo name="dots-three-horizontal" size={24} style={{ fontFamily: Constant.boldFont, color: Constant.textColor, marginTop: 15, marginRight: 20 }} />
        </View>

        <ScrollView showsHorizontalScrollIndicator={false}>
         {/* search view */}
          <View style={{ justifyContent: 'center', alignItems: 'center',height:60, width: Constant.deviceWidth,backgroundColor:Constant.viewBgColor }}>
            <View style={{ width: Constant.deviceWidth - 25, height: 50, borderRadius: 10, backgroundColor: Constant.statusBarColor, marginTop: 4, }}>
              <View style={{ flexDirection: 'row' }}>
                <FontAwesome5 name="search" size={21} style={{ fontFamily: Constant.boldFont, color: 'gray', marginTop: 13, marginRight: 8, marginLeft: 15 }} />
                <Text style={{ fontFamily: Constant.regularFont, fontSize: 18, color: 'gray', marginTop: 13 }}>Explore</Text>
                <FontAwesome5 name="microphone" size={21} style={{ right: 0, position: 'absolute', fontFamily: Constant.boldFont, color: 'gray', marginTop: 13, marginRight: 15, marginLeft: 15 }} />
              </View>
            </View>
          </View>
          {/* serch view end */}

          {/* scroll view hashtag */}
          <View style={{marginLeft: 10,marginBottom:15}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} scrollEventThrottle={700}>
            <Text style={{ fontFamily: Constant.boldFont, fontSize: 20, color: 'gray', marginTop: 13,marginRight:8 }}>#Courses</Text>
            <Text style={{ fontFamily: Constant.boldFont, fontSize: 20, color: 'gray', marginTop: 13,marginRight:8 }}>#Tips</Text>
            <Text style={{ fontFamily: Constant.boldFont, fontSize: 20, color: 'gray', marginTop: 13,marginRight:8 }}>#Video</Text>
            <Text style={{ fontFamily: Constant.boldFont, fontSize: 20, color: 'gray', marginTop: 13,marginRight:8 }}>#Training</Text>
            <Text style={{ fontFamily: Constant.boldFont, fontSize: 20, color: 'gray', marginTop: 13,marginRight:8 }}>#Workout</Text>
            <Text style={{ fontFamily: Constant.boldFont, fontSize: 20, color: 'gray', marginTop: 13,marginRight:8 }}>#Courses</Text>
            <Text style={{ fontFamily: Constant.boldFont, fontSize: 20, color: 'gray', marginTop: 13,marginRight:8 }}>#Courses</Text>
            </ScrollView>
          </View>
          {/* scroll view hashtag end */}
         




          


          {/* Popular course View */}
       
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {this.popularCouse()}
          </ScrollView>
          {/* Popular course end */}


          {/* <View style={{ marginTop: 10, justifyContent: 'center', alignItems: 'center', marginBottom: 85 }}>

            <ProgressiveImage
              thumbnailSource={require('../Constants/logo.png')}
              style={{ height: 150, width: Constant.deviceWidth - 10, borderRadius: 10 }}
              source={{
                uri: 'http://oruga.in/Vaibhav/fitgo/red.png',
              }}
            />
           
          </View> */}
         <View style={{marginBottom: 100,marginTop:15}}>
          {/* <View style={{ height: 150, width: Constant.deviceWidth - 20 ,borderColor: Constant.bottomTabColor,borderRadius: 8,borderWidth:2,backgroundColor:Constant.statusBarColor}}>
            <Entypo name="quote" size={25} style={{ color: 'gray', marginTop: 14, }} />
            <Text style={{color:Constant.textColor,fontSize:20,fontFamily:Constant.regularFont}}>ok</Text>
          </View> */}
          
  
          </View>
        


         

        </ScrollView>



      </View>
    );
  }
}
