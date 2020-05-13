import React, {Component} from 'react';
import RNTextDetector from 'react-native-text-detector';
import ImagePicker from 'react-native-image-crop-picker';
import {
  View,StyleSheet, ScrollView, Alert,
  Image, TouchableOpacity, NativeModules, Dimensions
} from 'react-native';
import { Button, Text } from 'native-base';
import colors from '../../assets/colors';

// import Video from 'react-native-video';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: 'blue',
    marginBottom: 10
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  }
});

class ImageCropPickerUI extends Component {

  constructor() {
    super();
    this.state = {
      image: null,
      images: null
    };
  }

  pickSingleWithCamera(cropping, mediaType='photo') {
    ImagePicker.openCamera({
      cropping: cropping,
      width: 300,
      height: 200,
      includeExif: true,
      mediaType,
    }).then(image => {
      // console.log('received image', image);
      this.setState({
        image: {uri: image.path, width: image.width, height: image.height, mime: image.mime},
        images: null
      });
      // console.log('final crop uri: ',this.state.image.uri);
    }).catch(e => alert(e));
  }

  scaledHeight(oldW, oldH, newW) {
    return (oldH / oldW) * newW;
  }

  renderImage(image) {
    return <Image style={{width: 300, height: 300, resizeMode: 'contain'}} source={image} />
  }

  renderAsset(image) {
    return this.renderImage(image);
  }

  scanImage = async () => {
    const { Memo } =this.props;
    const id = Memo.length;
    const uri = this.state.image.uri;
    // console.log('uri: ', uri);
    try {
      const visionResp = await RNTextDetector.detectFromUri(uri);
      this.props.CreateMemo(id,visionResp);
      // console.log('visionResp: ',visionResp);
    } catch (e) {
      console.warn(e);
    }
    this.props.navigation.navigate('EditView', {
        otherParam: id,
      });
  }

  render() {
    return (<View style={styles.container}>
      <ScrollView>
        {this.state.image ? this.renderAsset(this.state.image) : null}
        {this.state.images ? this.state.images.map(i => <View key={i.uri}>{this.renderAsset(i)}</View>) : null}
      </ScrollView>
      <View style={{ padding: 10 }}>
        <Button
          style={{ backgroundColor: colors.primaryColor, width: '100%' }}
          onPress={() => this.pickSingleWithCamera(true)}>
            <Text >Take Picture</Text>
        </Button>
      </View>
      <View style={{ padding: 10 }}>
        <Button
          style={{ backgroundColor: colors.primaryColor, width: '100%' }}
          onPress={() => this.scanImage()}>
            <Text >Scan Image To Text</Text>
        </Button>
      </View>
    </View>);
  }
}

export default ImageCropPickerUI;
