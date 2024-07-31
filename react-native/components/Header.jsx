import PropTypes from 'prop-types';
import React from 'react';
import {
	StatusBar,
	View,
	Text,
	TouchableOpacity,
	Keyboard
} from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import TranscapsuleLogo from '@assets/images/common/transcapsule-logo-small.svg';
import globals from '@lib/globals';
import styles from './styles';

const Header = (props) => {
	const { goBack } = useNavigation();
	const {
		headerTitle,
		isBackButtonRequired,
		customBackButtonFn,
		isTickIconRequired,
		onTickIconPress,
		primary,
		logo
	} = props;

	const onLeftMenuPress = () => {
		Keyboard.dismiss();
		if (isBackButtonRequired) goBack();
	};

	return (
		<View
			style={styles.headerContainer}
			backgroundColor={
				primary ? globals.COLOR.primaryGray : globals.COLOR.secondaryGray
			}>
			<StatusBar
				barStyle={globals.STATUS_BAR_STYLE.light}
				backgroundColor={globals.COLOR.primaryGray}
			/>
			{isBackButtonRequired ? (
				<TouchableOpacity
					style={styles.leftIconContainer}
					onPress={customBackButtonFn ?? onLeftMenuPress}>
					<Text style={styles.headerOptionText}>{globals.STRING.back}</Text>
				</TouchableOpacity>
			) : null}
			<View style={styles.headerTitleContainer}>
				<Text style={styles.headerTitleText}>{headerTitle}</Text>
			</View>
			<View style={styles.rightIconContainer}>
				{isTickIconRequired ? (
					<TouchableOpacity
						style={styles.rightIconItemContainer}
						onPress={onTickIconPress}>
						<Text style={styles.headerOptionText}>{globals.STRING.done}</Text>
					</TouchableOpacity>
				) : logo ? (
					<TouchableOpacity style={styles.rightIconItemContainer}>
						<TranscapsuleLogo />
					</TouchableOpacity>
				) : null}
			</View>
		</View>
	);
};

Header.propTypes = {
	headerTitle: PropTypes.string,
	isBackButtonRequired: PropTypes.bool,
	isTickIconRequired: PropTypes.bool,
	onTickIconPress: PropTypes.func
};

export default Header;
