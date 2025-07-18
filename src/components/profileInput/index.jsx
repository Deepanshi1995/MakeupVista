import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import { COLOR, FONT_SIZE, FONTS, SPACING } from '../../constants';

export const ProfileInput = (props) => {
    const {placeholder, value, onChangeText} = props;
    return (
        <View style={{marginTop: SPACING.v20}}>
            <Text style={styles.label}>{placeholder}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={COLOR.darkBlack}
                    keyboardType="default"
                />
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        color: COLOR.grey, 
        fontSize: FONT_SIZE.f12, 
        fontFamily: FONTS.poppinsMedium
    },
    input: {
        // height: SPACING.v45,
        fontSize: FONT_SIZE.f16,
        color: COLOR.darkBlack,
        fontFamily: FONTS.poppinsBold,
        borderBottomWidth: 2,
        borderColor: COLOR.borderGrey
    },
})