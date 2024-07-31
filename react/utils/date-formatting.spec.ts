import { formatTime, timeFormat } from './date-formatting';

describe('formatting util', () => {
	it('should return formatted default date if datetime parameter is invalid', () => {
		const defaultDate = new Date();
		defaultDate.setHours(0, 0, 0, 0);
		const result = formatTime(new Date('0070-00-00'));
		expect(result).toBe(timeFormat.format(defaultDate));
	});

	it('should return the time formatted to with "short" timestlye', () => {
		const date = new Date('2023-02-02T20:30:00');
		const result = formatTime(date);
		expect(result).toMatch(/8:30.*PM/);
	});
});
