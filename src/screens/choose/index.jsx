import React from 'react';
import { View, Text } from 'react-native';
import {MakeupGirl} from '../../assets/svg';
import { STYLE } from '../../common';
import { LinearBackground, OutlinedButton, PrimaryButton } from '../../components';
import { navigateTo } from '../../utils';
import { SCREENS } from '../../routes/screen_names';

const ChooseScreen = (props) => {
  return (
    <LinearBackground>
       <View style={STYLE.justifyFlex}>
          <MakeupGirl />
          <Text style={STYLE.girlHeading}>ARE YOU A</Text>
          <PrimaryButton label={'Vendor'} onPress={() => navigateTo(props.navigation, SCREENS.LOGIN, {}, false)} />
          <OutlinedButton />
        </View>
    </LinearBackground>
  );
};

export default ChooseScreen;
