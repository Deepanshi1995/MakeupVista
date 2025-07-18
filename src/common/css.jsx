import {StyleSheet} from 'react-native';
import { COLOR, FONT_SIZE, FONTS, SPACING} from '../constants/index';

export const STYLE = StyleSheet.create({
  commonWhiteHorizontalPad: {
    paddingHorizontal: SPACING.v20,
    flex: 1,
    backgroundColor: COLOR.white
  },
  commonTopHorizontalPad: {
    paddingHorizontal: SPACING.v20,
    flex: 1,
    paddingTop: SPACING.v20,
    backgroundColor: COLOR.white
  },
  commonHorizontal: {
    paddingHorizontal: SPACING.v20,
    flex: 1,
  },
  flex: {
    flex: 1
  },
  justifyFlex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alignFlex: {
    flex: 1,
    alignItems: 'center'
  },
  centerFlex: {
    flex: 1,
    justifyContent: 'center',
  },
  whiteLogoText: {
    fontSize: FONT_SIZE.f14,
    color: COLOR.white,
    textAlign: 'center',
    marginTop: SPACING.v10,
    fontFamily: FONTS.cinzelDecorative,
    // lineHeight: 20,
    // letterSpacing: 2,
    fontWeight: '600'
  },
  girlHeading: {
    color: COLOR.black,
    fontSize: FONT_SIZE.f22,
    fontFamily: FONTS.poppinsMedium,
    marginVertical: SPACING.v25
  },
  buttonContainer: {
    width: '100%',
    height: SPACING.v50,
    borderRadius: SPACING.v10,
    overflow: 'hidden',
  },
  outlineContainer: {
    marginHorizontal: SPACING.v20, 
    width: '100%'
  },
  buttonGradient: {
    flex: 1,
    borderRadius: SPACING.v10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: COLOR.white,
    fontSize: FONT_SIZE.f16,
    fontFamily: FONTS.poppinsMedium,
    marginTop: SPACING.v5,
    textAlign: 'center'
  },
  gradientBorder: {
    borderRadius: SPACING.v10,
    marginTop: SPACING.v20,
    padding: SPACING.v1,
  },
  gradientButton: {
    backgroundColor: COLOR.white,
    borderRadius: SPACING.v10,
    height: SPACING.v50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonBlackCenterText: {
    color: COLOR.black,
    fontSize: FONT_SIZE.f16,
    fontFamily: FONTS.poppinsMedium,
    textAlign: 'center'
  },
  buttonBlackText: {
    color: COLOR.black,
    fontSize: FONT_SIZE.f16,
    fontFamily: FONTS.poppinsMedium,
  },
  heading: {
    color: COLOR.black,
    fontSize: FONT_SIZE.f25,
    fontFamily: FONTS.poppinsMedium,
  },
  headerText: {
    color: COLOR.darkBlack,
    fontSize: FONT_SIZE.f18,
    fontFamily: FONTS.poppinsBold,
  }, 
  skip: {
    color: COLOR.darkPink,
    fontSize: FONT_SIZE.f12,
    fontFamily: FONTS.poppinsMedium
  },
  flexAlign: {
    flexDirection: 'row', 
    alignItems: 'center'
  },
  otpContainer:{
    marginTop: SPACING.v35, 
    flexDirection: 'row', 
    paddingHorizontal: SPACING.v10
  },
  codeFieldRoot: {
    marginTop: SPACING.v10,
  },
  cell: {
    fontFamily: FONTS.poppinsMedium,
    width: SPACING.h50,
    height: SPACING.h50,
    textAlign: 'center',
    justifyContent: 'center',
    paddingTop: SPACING.v7,
    paddingLeft: SPACING.v5,
    color: COLOR.black,
    fontSize: FONT_SIZE.f25,
    backgroundColor: COLOR.white,
    borderColor: COLOR.placeholder,
    borderWidth: SPACING.v1,
    borderRadius: SPACING.v7,
    marginHorizontal: SPACING.v5
  },
  focusCell: {
    borderColor: COLOR.darkPurple,
  },
  indicatorContainer: {
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: SPACING.v30, 
    flexDirection: 'row'
  },
  pinkIndicator: {
    width: SPACING.v35, 
    height: SPACING.v7, 
    backgroundColor: COLOR.darkPink, 
    borderRadius: SPACING.v10
  },
  lightIndicator: {
    width: SPACING.v35, 
    height: SPACING.v7, 
    backgroundColor: COLOR.lightIndicator, 
    borderRadius: SPACING.v10
  },
  pickerItem: {
    fontSize: FONT_SIZE.f16,
    color: COLOR.darkBlack,
    fontFamily: FONTS.poppinsBold,
  },
  bottomBorder: {
    borderBottomWidth: 2, 
    borderColor: COLOR.borderGrey
  },
  topPadding: {
    marginTop: SPACING.v20
  },
  dateText: {
    paddingBottom: SPACING.v10,
    marginTop: SPACING.v10,
    fontSize: FONT_SIZE.f16,
    color: COLOR.darkBlack,
    fontFamily: FONTS.poppinsBold,
    borderBottomWidth: 2,
    borderColor: COLOR.borderGrey
  },
  justifySpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: SPACING.v20,
    marginTop: SPACING.v30
  },
  certification: {
    justifyContent: 'space-between', 
    flexDirection: 'row', 
    alignItems: 'center', 
    borderBottomWidth: 1
  },
  topPadding: {
    paddingTop: SPACING.v20
  },
  bigFont: {
    fontFamily: FONTS.poppinsBold,
    color: COLOR.darkPink,
    fontSize: FONT_SIZE.f25
  },
  purpleText: {
    fontFamily: FONTS.poppinsRegular,
    color: COLOR.darkPurple,
    fontSize: FONT_SIZE.f14
  },
  spaceRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
});
