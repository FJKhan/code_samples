import React, { Fragment } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';

const ButtonGroup = ({
	forwardTitle,
	backwardTitle,
	onForwardPress,
	onBackwardPress,
	previousDisabled = false,
	nextDisabled = false
}) => {
	const handleBackwardPress = () => {
		if (previousDisabled) return;
		onBackwardPress();
	};
	const handleForwardPress = () => {
		if (nextDisabled) return;
		onForwardPress();
	};
	return (
		<Fragment>
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={[styles.button, styles.buttonLeft]}
					onPress={handleBackwardPress}>
					<Text
						style={
							previousDisabled
								? [styles.buttonText, styles.disabledButton]
								: styles.buttonText
						}>
						{backwardTitle}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.button, styles.buttonRight]}
					onPress={handleForwardPress}>
					<Text
						style={
							nextDisabled
								? [styles.buttonText, styles.disabledButton]
								: styles.buttonText
						}>
						{forwardTitle}{' '}
					</Text>
				</TouchableOpacity>
			</View>
		</Fragment>
	);
};

export default ButtonGroup;
