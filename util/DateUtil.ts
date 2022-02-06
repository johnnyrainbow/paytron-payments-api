export const isValidDateFormat = (dateString: string) => {
	var regEx = /^\d{4}-\d{2}-\d{2}$/;
	if (!dateString.match(regEx)) return false; // Invalid format
	var d = new Date(dateString);
	var dNum = d.getTime();
	if (!dNum && dNum !== 0) return false; // NaN value, Invalid date
	return d.toISOString().slice(0, 10) === dateString;
};

export const isDateBusinessDay = (dateObject: Date) => {
	var dayOfWeek = dateObject.getDay();
	var isWeekend = dayOfWeek === 6 || dayOfWeek === 0; // 6 = Saturday, 0 = Sunday

	return !isWeekend;
};
export const isDateToday = (dateObject: Date) => {
	const today = new Date();
	return (
		dateObject.getDate() == today.getDate() &&
		dateObject.getMonth() == today.getMonth() &&
		dateObject.getFullYear() == today.getFullYear()
	);
};
export const isDateInPast = (dateString: string) => {
	const dateObject = new Date(dateString);
	const now = new Date();
	if (dateObject < now && !isDateToday(dateObject)) return true;
};