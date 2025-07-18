import React, {useState} from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Button } from 'react-native';
import { STYLE } from '../../common';
import { GenderPicker, NavigationHeader, ProfileInput } from '../../components';
import { COLOR, FONT_SIZE, FONTS, SPACING } from '../../constants';
import { PencilIcon } from '../../assets/svg';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

export const DatePicker = (props) => {
    const {onPress, label, show, value, onChange} = props;
  return (
    <View>
        <TouchableOpacity onPress={onPress} style={STYLE.topPadding}>
            <Text style={[STYLE.skip, {color: COLOR.grey}]}>{'DOB'}</Text>
            <Text style={STYLE.dateText}>{label}</Text>
        </TouchableOpacity>
        {show && (
            <DateTimePicker
                testID="dateTimePicker"
                value={value}
                mode={'date'}
                is24Hour={true}
                onChange={onChange}
            />
        )}
    </View>
  );
};

const styles = StyleSheet.create({
    imageContainer: {
        width: SPACING.v100, 
        height: SPACING.v100, 
        borderRadius: SPACING.v50, 
        backgroundColor: COLOR.lightIndicator
    },
    pencilContainer: {
        width: SPACING.v25, 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: SPACING.v25, 
        borderRadius: SPACING.v10, 
        position: 'absolute', 
        bottom: 0, 
        right: SPACING.v10, 
        backgroundColor: COLOR.darkPink
    },
     input: {
        height: SPACING.v45,
        fontSize: FONT_SIZE.f16,
        color: COLOR.darkBlack,
        fontFamily: FONTS.poppinsBold,
        borderBottomWidth: 2,
        borderColor: COLOR.borderGrey
    },
    label: {
        color: COLOR.grey, 
        fontSize: FONT_SIZE.f12, 
        fontFamily: FONTS.poppinsMedium
    },
})