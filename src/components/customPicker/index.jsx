import React from 'react';
import { View, Text } from 'react-native';
import { STYLE } from '../../common';
import { COLOR, SPACING } from '../../constants';
import {Picker} from '@react-native-picker/picker';

export const CustomPicker = (props) => {
    const {selectedValue, onValueChange, pickerArray, label} = props;
    return (
        <View style={{marginTop: SPACING.v20}}>
            <Text style={[STYLE.skip, {color: COLOR.grey}]}>{label}</Text>
            <Picker
                selectedValue={selectedValue}
                style={{ marginTop: -9}}
                onValueChange={onValueChange}>
                    {pickerArray.map((item) => {
                        return (
                            <Picker.Item style={STYLE.pickerItem} label={item.pickerLabel} value={item.pickerValue} />
                        )
                    })}
            </Picker>
            <View style={STYLE.bottomBorder} />
        </View>
  );
};