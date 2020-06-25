import React from 'react';
import { View, StyleSheet, ImageBackground, Image } from 'react-native';
import { SvgUri, SvgCssUri, SvgWithCssUri } from 'react-native-svg';
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

  class PrograssiveSVG extends React.Component {
    render() {
      const {
        thumbnailSource,
        source,
        style,
        ...props
      } = this.props;
  
      return (
        <View style={styles.container}>
          <SvgUri
            {...props}
            source={thumbnailSource}
            style={style}
          />
          <SvgUri
            {...props}
            source={source}
            style={[styles.imageOverlay, style]}
          />
        </View>
      );
    }
  }
  
  export default PrograssiveSVG;