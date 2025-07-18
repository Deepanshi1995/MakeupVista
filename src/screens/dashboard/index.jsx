import React, {useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { STYLE } from '../../common';
import { CustomPicker, NavigationHeader, ProfileInput, PrimaryButton } from '../../components';
import { COLOR, DIMENSIONS, FONT_SIZE, FONTS, SPACING } from '../../constants';

const DashboardScreen = (props) => {
   
  return (
    <View style={{backgroundColor: COLOR.lightIndicator, flex: 1}}>
      <View style={[STYLE.flexAlign, {marginTop: SPACING.v30, backgroundColor: COLOR.white, paddingHorizontal: SPACING.v20, paddingTop: SPACING.v5}]}>
        <View>
            <Text style={[STYLE.skip, {color: COLOR.black, marginTop: 6}]}>Priya Tiwari</Text>
            <Text style={[STYLE.headerText, {color: COLOR.darkPink, marginBottom: 10}]}>WELCOME BACK!</Text>
        </View>
      </View>
      <View style={{height: DIMENSIONS.WINDOW_HEIGHT / 5.4, backgroundColor: COLOR.white, marginTop: SPACING.v20, marginHorizontal: 20, borderRadius: 20}}>
        <View style={{paddingHorizontal: SPACING.v10, paddingTop: SPACING.v10}}>
            <Text style={[STYLE.headerText, {fontFamily: FONTS.poppinsMedium}]}>Earnings</Text>
          <Text style={STYLE.bigFont}>₹ 97,476</Text>
        </View>
       
        <View style={{borderBottomWidth: 1, borderColor: COLOR.lineBorder, marginTop: SPACING.v20}} />
        <View style={{paddingHorizontal: SPACING.v10, paddingTop: SPACING.v10, flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={STYLE.purpleText}>44 Bookings</Text>
          <Text style={STYLE.purpleText}>25D 12H</Text>
        </View>

      </View>
      <View style={{height: DIMENSIONS.WINDOW_HEIGHT / 2.5, backgroundColor: COLOR.white, marginTop: SPACING.v20, marginHorizontal: 20, borderRadius: 20}}>
          <View style={{paddingHorizontal: SPACING.v10, paddingTop: SPACING.v10}}>
            <View style={STYLE.spaceRow}>
              <Text style={[STYLE.headerText, {fontFamily: FONTS.poppinsMedium}]}>Upcoming Appointments</Text>
              <Text style={[STYLE.purpleText, {color: COLOR.darkPink}]}>View All</Text>
            </View>
            <View style={[STYLE.flexAlign, {marginTop: SPACING.v10}]}>
              <View style={{width: SPACING.v40, height: SPACING.v40, borderRadius: SPACING.v20, borderWidth: 1}} />
              <View>
                <Text></Text>
              </View>
            </View>

          </View>
      </View>
    </View>
  );
};

export default DashboardScreen;
