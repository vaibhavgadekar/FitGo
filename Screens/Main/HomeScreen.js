import React, { Component } from 'react';
import { View, Text, StatusBar, Image, ScrollView } from 'react-native';
import * as Constant from '../Constants/Constant';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import ProgressiveImage from '../Constants/ProgressiveImage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { SvgUri, SvgCssUri, SvgWithCssUri } from 'react-native-svg';
import Swiper from 'react-native-swiper'
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recommeded: [
        {
          img: "https://images.pexels.com/photos/1671217/pexels-photo-1671217.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "Intense Cardio",
          time: "25 min",
          type: "full body",
          screen: ""
        },
        {
          img: "https://images.pexels.com/photos/2294352/pexels-photo-2294352.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "Upper Back",
          time: "14 min",
          type: "full body",
          screen: ""
        }
        ,
        {
          img: "https://images.pexels.com/photos/2824020/pexels-photo-2824020.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "Intense Cardio",
          time: "25 min",
          type: "full body",
          screen: ""
        }
        ,
        {
          img: "https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "Intense Cardio",
          time: "25 min",
          type: "full body",
          screen: ""
        }
        ,
        {
          img: "https://images.pexels.com/photos/2780762/pexels-photo-2780762.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "Intense Cardio",
          time: "25 min",
          type: "full body",
          screen: ""
        }
        ,
        {
          img: "https://images.pexels.com/photos/700446/pexels-photo-700446.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "Intense Cardio",
          time: "25 min",
          type: "full body",
          screen: ""
        }
      ],


      trainer: [
        {
          img: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          name: "Kim Jorder",
          time: "25 min",
          type: "full body",
          screen: ""
        },
        {
          img: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          name: "Natalia K",
          time: "14 min",
          type: "full body",
          screen: ""
        }
        ,
        {
          img: "https://images.pexels.com/photos/2824020/pexels-photo-2824020.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          name: "Intense Cardio",
          time: "25 min",
          type: "full body",
          screen: ""
        }
        ,
        {
          img: "https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          name: "Ben Joseph",
          time: "25 min",
          type: "full body",
          screen: ""
        }
        ,
        {
          img: "https://images.pexels.com/photos/2780762/pexels-photo-2780762.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          name: "Ema watson",
          time: "25 min",
          type: "full body",
          screen: ""
        }
        ,
        {
          img: "https://images.pexels.com/photos/700446/pexels-photo-700446.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          name: "Cakil Guet",
          time: "25 min",
          type: "full body",
          screen: ""
        }
      ]
    };
  }


  recommneded = () => {
    return this.state.recommeded.map(element => {
      return (
        <ScrollView horizontal={true}>
          <View style={{ height: 220, width: 180, margin: 10, }}>
            <ProgressiveImage
              borderRadius={8}
              thumbnailSource={require('../Constants/logo.png')}
              style={{ height: 180, width: 180, }}
              source={{
                uri: element.img,
              }}
            ></ProgressiveImage>
            <View style={{ marginLeft: 10, marginTop: 5 }}>
              <Text style={{ fontFamily: Constant.regularFont, fontSize: 14, color: Constant.textColor, }}>{element.title}</Text>
              {/* timing */}
              <View>
                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                  <Entypo name="clock" size={15} color="gray" />
                  <Text style={{ fontFamily: Constant.regularFont, fontSize: 12, color: 'gray', marginLeft: 5 }}>{element.time}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 5, right: 0, position: 'absolute', marginRight: 10 }}>
                  <Entypo name="hair-cross" size={15} color="gray" />
                  <Text style={{ fontFamily: Constant.regularFont, fontSize: 12, color: 'gray', marginLeft: 5 }}>{element.type}</Text>
                </View>
              </View>
              {/* timing end */}
            </View>
          </View>

        </ScrollView>
      );
    })
  }


  popularCouse = () => {
    return this.state.recommeded.map(element => {
      return (
        <ScrollView horizontal={true}>
          <View style={{ height: 220, width: 240, margin: 10, }}>
            <ProgressiveImage
              borderTopRightRadius={8}
              borderTopLeftRadius={8}
              thumbnailSource={require('../Constants/logo.png')}
              style={{ height: 180, width: 240, }}
              source={{
                uri: element.img,
              }}
            >
              <View style={{ width: 240, height: 3, backgroundColor: 'gray', bottom: 0, position: 'absolute', }}>
                <View style={{ width: Math.floor(Math.random() * 140), height: 3, backgroundColor: Constant.bgColor, bottom: 0, position: 'absolute', borderRadius: 8 }}>
                </View>
              </View>
            </ProgressiveImage>
            <View style={{ marginLeft: 10, marginTop: 5 }}>
              <Text style={{ fontFamily: Constant.regularFont, fontSize: 14, color: Constant.textColor, }}>{element.title}</Text>
              {/* timing */}
              <View>
                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                  <Entypo name="clock" size={15} color="gray" />
                  <Text style={{ fontFamily: Constant.regularFont, fontSize: 12, color: 'gray', marginLeft: 5 }}>{element.time}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 5, right: 0, position: 'absolute', marginRight: 10 }}>
                  <Entypo name="hair-cross" size={15} color="gray" />
                  <Text style={{ fontFamily: Constant.regularFont, fontSize: 12, color: 'gray', marginLeft: 5 }}>{element.type}</Text>
                </View>
              </View>
              {/* timing end */}
            </View>
          </View>

        </ScrollView>
      );
    })
  }

popularTrainer=()=>{
  return this.state.trainer.map(element => {
    return (
      <View style={{ justifyContent: 'space-between',flexDirection:'row', width: Constant.deviceWidth-20, marginRight: 15, marginLeft: 15,marginTop: 10, }}>
        <View>
          <View style={{flexDirection:'row'}}>
        <ProgressiveImage
              borderRadius={55}
              borderWidth={1}
              // borderColor={Constant.textColor}
              thumbnailSource={require('../Constants/logo.png')}
              style={{ height: 55, width: 55 }}
              source={{
                uri: element.img,
              }}
            ></ProgressiveImage>
           {/* name AND VIDEO */}
            <View style={{ marginTop: 5, marginLeft: 10, }}>
              <Text style={{ fontFamily: Constant.regularFont, fontSize: 15, color: Constant.textColor, marginLeft: 5 }}>{element.name}</Text>
              <View style={{ flexDirection: 'row', marginTop: 3 }}>
                <Entypo name="video-camera" size={15} style={{ color: 'gray', marginLeft: 5 }} />
                <Text style={{ fontFamily: Constant.regularFont, fontSize: 14, color: 'gray', marginLeft: 1 }}>{" " + Math.floor(Math.random() * 140) + " videos"}</Text>
              </View>
            </View>
            </View>
        </View>

        {/* FOLOWER SECTION */}
        <View>
        <View style={{ marginTop: 5, marginRight:5,right:0,position:'absolute' }}>
              <Text style={{ fontFamily: Constant.regularFont, fontSize: 15, color: Constant.textColor,}}>{Math.floor(Math.random() * 40) + "k"}</Text>
      
                <Text style={{ fontFamily: Constant.regularFont, fontSize: 14, color: 'gray', marginLeft: 1 }}>Followers</Text>
             
            </View>
        </View>
      </View>
  )})
}


workout = () => {
  return this.state.recommeded.map(element => {
    return (
      <ScrollView horizontal={true}>
        <View style={{ height: 240, width: Constant.deviceWidth-40, margin: 10, }}>
          <ProgressiveImage
           borderRadius={8}
            thumbnailSource={require('../Constants/logo.png')}
            style={{ height: 200, width: Constant.deviceWidth-40, }}
            source={{
              uri: element.img,
            }}
          >
             <Entypo name="renren" size={25} style={{right:0,position:'absolute', marginRight: 15, color: Constant.textColor, marginTop: 14, }} />
          </ProgressiveImage>
          <View style={{ marginLeft: 10, marginTop: 5 }}>
            <Text style={{ fontFamily: Constant.regularFont, fontSize: 14, color: Constant.textColor, }}>{element.title}</Text>
            {/* timing */}
            <View>
              <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <Entypo name="clock" size={15} color="gray" />
                <Text style={{ fontFamily: Constant.regularFont, fontSize: 12, color: 'gray', marginLeft: 5 }}>{element.time}</Text>
              </View>
              <View style={{ flexDirection: 'row', marginTop: 5, right: 0, position: 'absolute', marginRight: 10 }}>
                <Entypo name="hair-cross" size={15} color="gray" />
                <Text style={{ fontFamily: Constant.regularFont, fontSize: 12, color: 'gray', marginLeft: 5 }}>{element.type}</Text>
              </View>
            </View>
            {/* timing end */}
          </View>
        </View>

      </ScrollView>
    );
  })
}
  render() {
    return (
      <View style={{ width: Constant.deviceWidth, height: Constant.deviceHeight, backgroundColor: Constant.viewBgColor }}>
        <StatusBar backgroundColor={Constant.bottomTabColor} barStyle={'light-content'} />
        <View style={{ elevation: 10, height: 54, width: Constant.deviceWidth, backgroundColor: Constant.bottomTabColor, justifyContent: 'space-between', flexDirection: 'row' }}>
          <Text style={{ fontFamily: Constant.boldFont, fontSize: 20, color: Constant.textColor, marginTop: 10 }}></Text>
         <View style={{flexDirection:'row', marginTop: 10, marginLeft: 20}}>
         <FontAwesome5 name="typo3" size={24} color={Constant.textColor} style={{ marginTop: 2,marginRight:4 }} />
          <Text style={{ fontFamily: Constant.boldFont, fontSize: 25, color: Constant.textColor, }}>FitGo</Text>
          </View>
          <Entypo name="bell" size={24} style={{ fontFamily: Constant.boldFont, color: Constant.textColor, marginTop: 15, marginRight: 20 }} />
        </View>

        <ScrollView>
          <View style={{ marginTop: 10, justifyContent: 'center', alignItems: 'center', width: Constant.deviceWidth - 20, marginLeft: 10 }}>
            <Swiper
              showsPagination={false}
              activeDot={<View style={{ backgroundColor: 'white', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 8, marginBottom: 0, }} />}
              dot={<View style={{ backgroundColor: 'gray', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 8, marginBottom: 0, }} />}
              autoplay={true}
              height={160} style={{ justifyContent: 'center', alignItems: 'center' }}>
              <View >

                <SvgUri
                  width={Constant.deviceWidth - 20}
                  height="150"

                  style={{ height: 250, width: Constant.deviceWidth - 20, borderRadius: 10, marginTop: 5 }}
                  uri="http://oruga.in/Vaibhav/fitgo/red.svg"
                />
              </View>
              <View >
                <ProgressiveImage
                  thumbnailSource={require('../Constants/logo.png')}
                  style={{ height: 150, width: Constant.deviceWidth - 20, borderRadius: 10, marginTop: 5 }}
                  source={{
                    uri: 'http://oruga.in/Vaibhav/fitgo/training.png',
                  }}
                />
              </View>
              <View >
                <ProgressiveImage
                  thumbnailSource={require('../Constants/logo.png')}
                  style={{ height: 150, width: Constant.deviceWidth - 20, borderRadius: 10, marginTop: 5 }}
                  source={{
                    uri: 'http://oruga.in/Vaibhav/fitgo/skill.png',
                  }}
                />
              </View>
            </Swiper>
          </View>



          {/* Recommended View */}
          <View style={{ width: Constant.deviceWidth, justifyContent: 'space-between', flexDirection: 'row' }}>
            <Text style={{ fontFamily: Constant.boldFont, fontSize: 15, color: Constant.textColor, marginLeft: 15, marginTop: 10, marginBottom: 10, }}>Recommended</Text>
          </View>
          <ScrollView horizontal={true}>
            {this.recommneded()}
          </ScrollView>
          {/* Recommended View end */}


          {/* Popular course View */}
          <View style={{ width: Constant.deviceWidth, justifyContent: 'space-between', flexDirection: 'row' }}>
            <Text style={{ fontFamily: Constant.boldFont, fontSize: 15, color: Constant.textColor, marginLeft: 15, marginTop: 15, marginBottom: 10, }}>Popular Courses</Text>
            <Entypo name="chevron-right" size={20} style={{ marginRight: 15, color: Constant.textColor, marginTop: 14, }} />
          </View>
          <ScrollView horizontal={true}>
            {this.popularCouse()}
          </ScrollView>
          {/* Popular course end */}


          {/* Popular trainer View */}
          <View style={{ width: Constant.deviceWidth, justifyContent: 'space-between', flexDirection: 'row' }}>
            <Text style={{ fontFamily: Constant.boldFont, fontSize: 15, color: Constant.textColor, marginLeft: 15, marginTop: 15, marginBottom: 10, }}>Popular Trainers</Text>
            <Entypo name="chevron-right" size={20} style={{ marginRight: 15, color: Constant.textColor, marginTop: 14, }} />
          </View>
         
            {this.popularTrainer()}
        
          {/* Popular trainer end */}


           {/* Workout View */}
           <View style={{ width: Constant.deviceWidth, justifyContent: 'space-between', flexDirection: 'row' }}>
            <Text style={{ fontFamily: Constant.boldFont, fontSize: 15, color: Constant.textColor, marginLeft: 15, marginTop: 15, marginBottom: 10, }}>Popular Courses</Text>
            <Entypo name="chevron-right" size={20} style={{ marginRight: 15, color: Constant.textColor, marginTop: 14, }} />
          </View>
          <ScrollView horizontal={true} >
            {this.workout()}
          </ScrollView>
          {/* Workout end */}



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
