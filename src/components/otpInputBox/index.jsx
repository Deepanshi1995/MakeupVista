import React, {useState} from 'react';
import { View, Text } from 'react-native';
import { STYLE } from '../../common';
import {CodeField, Cursor} from 'react-native-confirmation-code-field';

export const OtpInput = (props) => {
  const {value, onChangeText, renderCell} = props;
  return (
        <View style={STYLE.otpContainer}>
            <CodeField 
                value={value} 
                onChangeText={onChangeText} 
                cellCount={5} 
                rootStyle={STYLE.codeFieldRoot} 
                keyboardType="number-pad" 
                textContentType="oneTimeCode" 
                renderCell={renderCell} 
            />
        </View>
  );
};