import React from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';

import styles from '../ui/atoms/SelectableRow/styles';

const SelectableRow = ({label, handleTap, selected, children}) => {
  return (
    <TouchableWithoutFeedback onPress={handleTap}>
      <View style={selected ? [styles.selectableRow, styles.selectedRow] : styles.selectableRow}>
        {children}
        <Text style={styles.selectableText}>{label}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SelectableRow;
