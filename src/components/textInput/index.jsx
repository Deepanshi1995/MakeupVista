import React from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native';
import { STYLE } from '../../common';
import { BackHeader } from '../../components';
import { COLOR, FONT_SIZE, FONTS, SPACING } from '../../constants';

export const LoginInput = (props) => {
    const {value, onChangeText, style} = props;
  return (
        <View style={[styles.inputContainer, style]}>
          <TextInput 
            value={value} 
            onChange={onChangeText} 
            placeholderTextColor={COLOR.placeholder}
            placeholder='Email or Phone Number' 
            style={styles.input} />
        </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: SPACING.v35, 
    borderWidth: 1, 
    height: SPACING.v50, 
    justifyContent: 'center', 
    borderRadius: SPACING.v10, 
    borderColor: COLOR.border
  },
  input: {
    paddingLeft: SPACING.v15,
    fontFamily: FONTS.poppinsMedium,
    fontSize: FONT_SIZE.f15,
    color: COLOR.black,
  }
})