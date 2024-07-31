import React from 'react';
import { View } from 'react-native';
import styles from './styles';
const DefaultDot = ({ active, ...restProps }) => {
	return (
		<View
			{...restProps}
			style={
				active
					? [styles.paginationDot, styles.paginationActiveDot]
					: [styles.paginationDot, styles.paginationInactiveDot]
			}
		/>
	);
};

const CarouselPagination = ({ dotsLength, activeIndex }) => {
	const dots = [...Array(dotsLength).keys()].map((i) => {
		const isActive = i === activeIndex;
		return <DefaultDot key={`pagination-dot-${i}`} active={isActive} />;
	});
	return (
		<View style={styles.paginationContainer}>
			<View style={styles.paginationInnerContainer}>{dots}</View>
		</View>
	);
};

export default CarouselPagination;
