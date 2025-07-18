import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { STYLE } from '../../common';
import { NavigationHeader } from '../../components';
import { DIMENSIONS, SPACING } from '../../constants';
import { PhotoFrame, PlusIcon } from '../../assets/svg';
import { navigateTo } from '../../utils';
import { SCREENS } from '../../routes/screen_names';

const AddPhotosScreen = (props) => {
  return (
    <View style={STYLE.commonTopHorizontalPad}>
      <NavigationHeader label={'Add Photos'} navigation={props.navigation} skipPress={() => navigateTo(props.navigation, SCREENS.DASHBOARD)} />
        <View style={STYLE.indicatorContainer}>
            <View style={STYLE.lightIndicator} />
            <View style={[STYLE.lightIndicator, {marginHorizontal: SPACING.v8}]} />
            <View style={STYLE.pinkIndicator} />
        </View>
        <View style={styles.frameContainer}>
            <PhotoFrame />
        </View>
        <TouchableOpacity style={styles.plusIcon}>
            <PlusIcon /> 
        </TouchableOpacity>
        <Text style={[STYLE.buttonBlackText, {marginBottom: SPACING.v10}]}>Quick Tips:</Text>
        <View style={STYLE.flexAlign}>
            <Text style={STYLE.headerText}>Clear, well-lit photos</Text>
        </View>
         <View style={STYLE.flexAlign}>
            <Text style={STYLE.headerText}>Show your natural look</Text>
        </View>
         <View style={STYLE.flexAlign}>
            <Text style={STYLE.headerText}>Include different angles</Text>
        </View>
        <Text style={[STYLE.buttonBlackText, {marginTop: SPACING.v50}]}>...Trust us on this one!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    frameContainer: {
        marginLeft: SPACING.v50, 
        marginTop: SPACING.v30, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    plusIcon: {
        position: 'absolute', 
        top: DIMENSIONS.WINDOW_WIDTH / 1.3, 
        right: DIMENSIONS.WINDOW_WIDTH / 7
    }
})

export default AddPhotosScreen;
