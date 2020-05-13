import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeContainer from '../src/screens/welcome/WelcomeContainer';
import CameraContainer from '../src/screens/camera/Camera.container';
import MemoViewContainer from '../src/screens/memoView/MemoView.container';
import EditViewContainer from '../src/screens/editView/EditView.container';
import ImageCropPickerContainer from '../src/screens/imageCropPicker/ImageCropPicker.container';


const Routes = createStackNavigator();

export const RoutesNavigator = () => {
  return (
    <Routes.Navigator screenOptions={{
      headerShown: false
    }}>
      <Routes.Screen 
        name="Welcome"
        component={WelcomeContainer}
      />
      <Routes.Screen 
        name="MemoView"
        component={MemoViewContainer}
      />
      <Routes.Screen 
        name="Camera"
        component={CameraContainer}
      />
      <Routes.Screen 
        name="EditView"
        component={EditViewContainer}
      />
      <Routes.Screen 
        name="ImageCropPicker"
        component={ImageCropPickerContainer}
      />
    </Routes.Navigator>
  );
}
