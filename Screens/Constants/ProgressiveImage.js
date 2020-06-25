import React from 'react';
import { View, StyleSheet, ImageBackground, Image } from 'react-native';

const styles = StyleSheet.create({
    imageOverlay: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
    },
    container: {
      backgroundColor: 'transparent',
    },
  });

  class ProgressiveImage extends React.Component {
    render() {
      const {
        thumbnailSource,
        source,
        style,
        ...props
      } = this.props;
  
      return (
        <View style={styles.container}>
          <ImageBackground
            {...props}
            source={thumbnailSource}
            style={style}
          />
          <ImageBackground
            {...props}
            source={source}
            style={[styles.imageOverlay, style]}
          />
        </View>
      );
    }
  }
  
  export default ProgressiveImage;