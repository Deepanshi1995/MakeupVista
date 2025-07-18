import React from 'react';
import { View, Text } from 'react-native';
import {MakeupGirl} from '../../assets/svg';
import { STYLE } from '../../common';
import { OutlinedButton, PrimaryButton } from '../../components';
import { navigateTo } from '../../utils';
import { SCREENS } from '../../routes/screen_names';
import { COLOR } from '../../constants';
import LinearGradient from 'react-native-linear-gradient';

export const LinearBackground = (props) => {
  return (
    <View style={STYLE.flex}>
      <LinearGradient
        colors={[COLOR.backgroundL1, COLOR.backgroundL2]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={[STYLE.commonHorizontal, props.style]}
      >
        {props?.children}
      </LinearGradient>
    </View>
  );
};