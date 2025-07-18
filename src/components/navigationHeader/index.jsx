import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { BackArrow } from "../../assets/svg";
import { STYLE } from "../../common";
import { SPACING } from "../../constants";

export const NavigationHeader = (props) => {
    const {skipPress, label} = props;
    return (
        <View style={[STYLE.flexAlign, {marginTop: SPACING.v20, justifyContent: 'space-between'}]}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <BackArrow />
            </TouchableOpacity>
            <Text style={[STYLE.headerText, {alignSelf: 'center'}]}>{label}</Text>
            <TouchableOpacity onPress={skipPress}>
                <Text style={STYLE.skip}>SKIP</Text>
            </TouchableOpacity>
        </View>
    )
}