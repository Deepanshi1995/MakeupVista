import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { BackArrow } from "../../assets/svg";
import { STYLE } from "../../common";
import { SPACING } from "../../constants";

export const BackHeader = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.5} 
            onPress={() => props.navigation.goBack()}
            style={[STYLE.flexAlign, {marginTop: SPACING.v20}]}
        >
            <BackArrow />
            <Text style={[STYLE.buttonBlackText, {marginLeft: SPACING.v5, marginTop: SPACING.v2}]}>
                Back
            </Text>
        </TouchableOpacity>
    )
}