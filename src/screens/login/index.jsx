import React, {useState} from 'react';
import { View, Text } from 'react-native';
import { STYLE } from '../../common';
import { BackHeader, LinearBackground, LoginInput, PrimaryButton } from '../../components';
import { COLOR, SPACING } from '../../constants';
import { navigateTo } from '../../utils';
import { SCREENS } from '../../routes/screen_names';

const LoginScreen = (props) => {
  const [email, setEmail] = useState('')
  return (
      <LinearBackground style={STYLE.topPadding}>
        <BackHeader navigation={props.navigation} />
        <View style={STYLE.centerFlex}>
          <Text style={STYLE.heading}>Sign in</Text>
          <LoginInput value={email} onChangeText={setEmail} style={{marginBottom: SPACING.v35, backgroundColor: COLOR.white}} />
          <PrimaryButton label={'Generate OTP'} onPress={() => navigateTo(props.navigation, SCREENS.OTP, {}, false)} />
        </View>
      </LinearBackground>
  );
};

export default LoginScreen;
