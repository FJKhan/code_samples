import React from 'react';
import Checkbox from '@ui/atoms/Checkbox';
import SelectableRow from '@ui/atoms/SelectableRow';

const SelectableCheckbox = ({label, handleTap, selected}) => {
  return (
    <SelectableRow handleTap={handleTap} selected={selected} label={label}>
        <Checkbox selected={selected}/>
    </SelectableRow >
  );
};

export default SelectableCheckbox;
