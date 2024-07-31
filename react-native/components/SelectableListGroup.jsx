import React, { useState } from 'react';
import { FlatList } from 'react-native';

const SelectableListGroup = ({
	items,
	onSelectionChange,
	maxSelect,
	renderRowItem,
	...flatListProps
}) => {
	const [selectedOptions, setSelectedOptions] = useState([]);
	const maxSelections = maxSelect ?? items.length;
	const isItemSelected = ({ item }) =>
		selectedOptions.some((i) => i === item.key);

	const toggleSelect = (row) => {
		const { label, key } = row.item;
		let selectedItems = selectedOptions;
		const index = selectedItems.findIndex(
			(selectedItem) => selectedItem === key
		);
		if (index > -1) {
			selectedItems = selectedItems.filter(
				(selectedItem) => selectedItem !== key
			);
		} else {
			if (selectedItems.length >= maxSelections && maxSelections === 1) {
				selectedItems = [key];
			} else if (selectedItems.length >= maxSelections && maxSelections > 1) {
				return;
			} else {
				selectedItems = selectedItems.concat(key);
			}
		}
		setSelectedOptions(selectedItems);
		onSelectionChange(selectedItems);
	};

	return (
		<FlatList
			data={items}
			renderItem={(row) =>
				renderRowItem(row, isItemSelected(row), toggleSelect)
			}
			keyExtractor={(item) => item.key}
			{...flatListProps}
		/>
	);
};
export default SelectableListGroup;
