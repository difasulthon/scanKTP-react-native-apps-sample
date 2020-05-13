import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { Slider } from 'react-native-elements';
import { Button, Icon, Header, Left, Body, Title, Right, Spinner } from 'native-base';
import RNTextDetector from 'react-native-text-detector';
import { Overlay } from 'react-native-elements';
import colors from '../../assets/colors';

class CameraUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoomValue: 0,
      flashMode: RNCamera.Constants.FlashMode.off,
      loading: false
    }
  }

  render() {
    const { Memo, LoadingTrue, LoadingFalse } = this.props;
    {
      console.log('render: ',this.state.loading);
    }

    return (
      <View style={styles.container}>
        <Header style={{ backgroundColor: colors.primaryColor }} androidStatusBarColor={colors.secondaryColor}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>TextReco</Title>
          </Body>
          <Right />
        </Header>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={this.state.flashMode}
          autoFocus={RNCamera.Constants.AutoFocus.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          zoom={this.state.zoomValue}
        >
          {this.state.loading == true ? (
            <Overlay
              isVisible={this.state.loading}
              overlayBackgroundColor="white"
              width="75%"
              height="25%"
              // onBackdropPress={ this.setState({ loading: false }) }
            >
            {console.log('overlay: ',this.state.loading)}
              <View>
                <Spinner color={colors.primaryColor} />
                <Text style={{ alignSelf: 'center', fontSize: 20, color: 'black' }}>Processing...</Text>
              </View>
            </Overlay>
          ) : null}
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
              <Slider
                minimumValue={0}
                maximumValue={1}
                step={0.1}
                value={this.state.zoomValue}
                onValueChange={zoomValue => this.setState({ zoomValue })}
                thumbTintColor={colors.primaryColor}
              />
            </View>

            <Icon type="Entypo" onPress={this.takePicture} style={styles.icon} name="flickr-with-circle" />

            <Icon type="Entypo" onPress={this.flash} style={styles.icon} name="flash" />
          </View>
          
        </RNCamera>
      </View>
    );
  }
  flash = () => {
    if (this.state.flashMode == RNCamera.Constants.FlashMode.off) {
      this.setState({ flashMode: RNCamera.Constants.FlashMode.torch });
    } else this.setState({ flashMode: RNCamera.Constants.FlashMode.off });
  };
  takePicture = async () => {
    this.setState({ loading: true });
    const { Memo } = this.props;
    let id = Memo.length;
    try {
      console.log('loading take picture: ',this.state.loading);
      const options = {
        quality: 1,
        base64: true,
        skipProcessing: true,
      };
      const { uri } = await this.camera.takePictureAsync(options);
      const visionResp = await RNTextDetector.detectFromUri(uri);
      // console.log('uri: ',uri);
      this.props.CreateMemo(id,visionResp);
      // this.props.navigation.navigate('CropImage',{source: uri});
    } catch (e) {
      console.warn(e);
    }
    // this.props.LoadingFalse();
    this.setState({ loading: false });
    console.log('loading selesai : ',this.state.loading);
    this.props.navigation.navigate('EditView', {
        otherParam: id,
      });
  };
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  square: {
    height: 75,
    width: '100%',
    borderColor: 'black'
  },
  preview: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: '100%',
  },
  icon: {
    flex: 0,
    color: 'white',
    fontSize: 40,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

export default CameraUI;
