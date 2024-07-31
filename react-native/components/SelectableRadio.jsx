import React from 'react';
import SelectableRow from '../../atoms/SelectableRow';

import globals from '../../../lib/globals';
import Radio from '../../../assets/images/common/radio.svg';

const SelectableRadio = ({ label, handleTap, selected }) => {
	const selectedRadio = {
		fill: globals.COLOR.pink,
		stroke: globals.COLOR.pink
	};
	const unselectedRadio = {
		fill: 'none',
		stroke: globals.COLOR.slate
	};
	return (
		<SelectableRow handleTap={handleTap} selected={selected} label={label}>
			<Radio
				height={16}
				width={16}
				style={selected ? selectedRadio : unselectedRadio}
			/>
		</SelectableRow>
	);
};
export default SelectableRadio;
