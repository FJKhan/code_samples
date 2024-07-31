export const timeFormat = new Intl.DateTimeFormat('en-US', {
	timeStyle: 'short'
});

export const formatTime = (date: Date): string => {
	const defaultDate = new Date();
	defaultDate.setHours(0, 0, 0, 0);
	if (isNaN(date.getTime())) {
		return timeFormat.format(defaultDate);
	}
	return timeFormat.format(date);
};
