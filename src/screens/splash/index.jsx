import React, {useEffect} from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {AppLogo} from '../../assets/svg';
import { STYLE } from '../../common';
import { navigateTo } from '../../utils';
import { SCREENS } from '../../routes/screen_names';

const SplashScreen = (props) => {

  useEffect(() => {
    setTimeout(() => {
      navigateTo(props.navigation, SCREENS.CHOOSE, {}, true)
    }, 3000)
  }, [])

  return (
    <LinearGradient
        colors={['#511069', '#B84087']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={STYLE.flex}
    >
      <View style={STYLE.justifyFlex}>
        <AppLogo />
        <Text style={STYLE.whiteLogoText}>ENHANCING THE BEAUTY WITHIN YOU</Text>
      </View>
    </LinearGradient>
  );
};

export default SplashScreen;
