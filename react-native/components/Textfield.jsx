import React from 'react';
import { Text, TextInput, View, Image } from 'react-native';
import styles from './styles';

const TextField = React.forwardRef(
	(
		{ label, required = false, inputType = 'none', handleChange, ...rest },
		ref
	) => {
		return (
			<View
				style={styles.inputContainer}
				accessible={true}
				accessibilityLabel={label}>
				{label && (
					<Text style={styles.label}>
						{label}
						{required ? '*' : null}
					</Text>
				)}

				<TextInput
					ref={ref}
					style={styles.input}
					textContentType={inputType}
					{...rest}
				/>
			</View>
		);
	}
);

export default TextField;
