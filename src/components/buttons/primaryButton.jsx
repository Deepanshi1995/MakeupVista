import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { STYLE } from '../../common';
import { UploadWhite } from '../../assets/svg';
import { SPACING } from '../../constants';

export const PrimaryButton = (props) => {
    const {label = '', onPress, disabled, style, media = false} = props; 
  return (
    <TouchableOpacity disabled={disabled} activeOpacity={0.5} onPress={onPress} style={[STYLE.buttonContainer, style]}>
      <LinearGradient
        colors={['#511069', '#B84087']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[STYLE.buttonGradient, {opacity: disabled ? 0.5 : 1}]}
      >
        {media ?
          <View style={[STYLE.flexAlign]}>
            <Text style={[STYLE.buttonText, {marginRight: SPACING.v5}]}>{label}</Text>
            <View style={{marginTop: SPACING.v5}}>
              <UploadWhite />
            </View>
          </View>
          :
           <Text style={STYLE.buttonText}>{label}</Text>
        }
      </LinearGradient>
    </TouchableOpacity>
  );
};