import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { STYLE } from '../../common';

export const OutlinedButton = () => {
  return (
    <TouchableOpacity activeOpacity={0.5} style={STYLE.outlineContainer}>
        <LinearGradient
            colors={['#511069', '#B84087']}
            style={STYLE.gradientBorder}
        >
        <View style={STYLE.gradientButton}>
            <Text style={STYLE.buttonBlackCenterText}>Customer</Text>
        </View>
        </LinearGradient>
    </TouchableOpacity>
  );
};