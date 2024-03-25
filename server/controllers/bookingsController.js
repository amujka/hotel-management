export const getBookings = (req, res) => {
	res.locals.page = 'bookings';
	res.render('bookings');
};
