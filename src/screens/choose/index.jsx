import React from 'react';
import { View, Text } from 'react-native';
import {MakeupGirl} from '../../assets/svg';
import { STYLE } from '../../common';
import { LinearBackground, OutlinedButton, PrimaryButton } from '../../components';
import { navigateTo } from '../../utils';
import { SCREENS } from '../../routes/screen_names';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CUSTOMER, USER_ROLE, VENDOR } from '../../constants';

const ChooseScreen = (props) => {

  const pressVendor = () => {
    AsyncStorage.setItem(USER_ROLE, VENDOR)
    navigateTo(props.navigation, SCREENS.LOGIN, {}, false)
  }

  const pressCustomer = () => {
    AsyncStorage.setItem(USER_ROLE, CUSTOMER)
    navigateTo(props.navigation, SCREENS.LOGIN, {}, false)
  }

  return (
    <LinearBackground>
       <View style={STYLE.justifyFlex}>
          <MakeupGirl />
          <Text style={STYLE.girlHeading}>ARE YOU A</Text>
          <PrimaryButton label={'Vendor'} onPress={pressVendor} />
          <OutlinedButton onPress={pressCustomer} />
        </View>
    </LinearBackground>
  );
};

export default ChooseScreen;
