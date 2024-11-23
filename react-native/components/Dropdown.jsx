import React from 'react';
import {Text, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import ArrowDown from '../../../assets/images/common/arrow-down.svg';
import styles from '../ui/forms/Dropdown/styles';

const Dropdown = ({label, handleChange, listOptions, required = false}) => {
  return (
    <View
      style={styles.pickerContainer}
      accessible={true}
      accessibilityLabel={label}>
      <Text style={styles.label}>
        {label}
        {required ? '*' : null}
      </Text>
      <RNPickerSelect
        placeholder={{label: label}}
        onValueChange={value => handleChange(value)}
        items={listOptions}
        useNativeAndroidPickerStyle={false}
        style={{
          inputIOS: styles.picker,
          inputAndroid: styles.picker,
          iconContainer: styles.arrowDown
        }}
        Icon={() => {
          return <ArrowDown />;
        }}
      />
    </View>
  );
};

export default Dropdown;
