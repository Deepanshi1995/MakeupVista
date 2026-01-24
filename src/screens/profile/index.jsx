import React, {useState, useEffect} from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STYLE } from '../../common';
import { DatePicker, CustomPicker, NavigationHeader, PrimaryButton, ProfileInput } from '../../components';
import { COLOR, SPACING, USER_ROLE, VENDOR } from '../../constants';
import { PencilIcon } from '../../assets/svg';
import { navigateTo } from '../../utils';
import { SCREENS } from '../../routes/screen_names';

const ProfileScreen = (props) => {
    const [fullName, setFullName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [userRole, setUserRole] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    useEffect(() => {
        const user_role = AsyncStorage.getItem(USER_ROLE)
        setUserRole(user_role)
    }, [])

    const genderArray = [
        {pickerLabel: 'Female', pickerValue: 'female'},
        {pickerLabel: 'Male', pickerValue: 'male'}
    ]

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const showDatepicker = () => {
        setShow(true);
    };

  return (
    <View style={STYLE.commonTopHorizontalPad}>
      <NavigationHeader label={'Complete Profile'} navigation={props.navigation} />
        {userRole === VENDOR &&
            <View style={STYLE.indicatorContainer}>
                <View style={STYLE.pinkIndicator} />
                <View style={[STYLE.lightIndicator, {marginHorizontal: SPACING.v8}]} />
                <View style={STYLE.lightIndicator} />
            </View>
        }
        <View style={STYLE.indicatorContainer}>
            <View style={styles.imageContainer}>
                <TouchableOpacity style={styles.pencilContainer}>
                    <PencilIcon />
                </TouchableOpacity>
            </View>
        </View>
        <ProfileInput value={fullName} onChangeText={setFullName} placeholder={'Full Name'} />
        <ProfileInput value={mobileNumber} onChangeText={setMobileNumber} placeholder={'Mobile Number'} />
        <ProfileInput value={age} onChangeText={setAge} placeholder={'Age'} />
        <CustomPicker label={'Gender'} selectedValue={gender} onValueChange={(itemValue, itemIndex) => setGender(itemValue)} pickerArray={genderArray} />
        <DatePicker onPress={showDatepicker} label={date.toLocaleDateString()} show={show} value={date} onChange={onChange} />
        <View style={STYLE.justifyFlex}>
            {userRole === VENDOR ?
                <PrimaryButton onPress={() => navigateTo(props.navigation, SCREENS.PROFILE_MEDIA)} style={{width: '40%'}} label={'Next'} />
                :
                <PrimaryButton onPress={() => navigateTo(props.navigation, SCREENS.USER_DASHBOARD)} label={'Save Changes'} />
            }
        </View>
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
    }
})

export default ProfileScreen;
