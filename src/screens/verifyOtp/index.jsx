import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import { STYLE } from '../../common';
import { BackHeader, LinearBackground, OtpInput, PrimaryButton } from '../../components';
import { COLOR, SPACING } from '../../constants';
import {Cursor} from 'react-native-confirmation-code-field';
import { navigateTo } from '../../utils';
import { SCREENS } from '../../routes/screen_names';

const VerifyOTPScreen = (props) => {
  const [otp, setOtp] = useState('');

  const renderCell = ({ index, symbol, isFocused }) => (
    <Text key={index} style={[STYLE.cell, isFocused && STYLE.focusCell]}>
      {symbol || (isFocused ? <Cursor /> : null)}{' '}
    </Text>
  );

  const onChangeOTP = (value) => {
    setOtp(value);
    if (value.length === 5) {
      Keyboard.dismiss();
    }
  };

  return (
    <LinearBackground style={STYLE.topPadding}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={[STYLE.flex, {marginBottom: SPACING.v25}]}>
        <View style={STYLE.flex}>
            <BackHeader navigation={props.navigation} />
            <View style={[STYLE.alignFlex, {marginTop: SPACING.v35}]}>
                <Text style={STYLE.heading}>OTP verification</Text>
                <Text style={[STYLE.buttonBlackText, {color: COLOR.lightGrey}]}>Enter your OTP code</Text>
                <OtpInput value={otp} onChangeText={val => onChangeOTP(val)} renderCell={renderCell}  />
                <View style={[STYLE.flexAlign, {marginTop: SPACING.v20}]}>
                    <Text style={STYLE.buttonBlackText}>Didn't receive code ?</Text>
                    <TouchableOpacity style={{marginLeft: SPACING.v5}}>
                        <Text style={[STYLE.buttonBlackText, {color: COLOR.darkPink}]}>Resend Again</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <PrimaryButton disabled={otp.length != 5} onPress={() => navigateTo(props.navigation, SCREENS.PROFILE, {}, false)} label={'Verify'} />
        </View>
    </KeyboardAvoidingView>
    </LinearBackground>
    
  );
};

export default VerifyOTPScreen;