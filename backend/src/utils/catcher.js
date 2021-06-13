module.exports = {
	axiosCatch: (e) => {
		if (!e.response) {
			return {
				success: false,
				error: 3031,
				error_desc: e.message,
			};
		}
		
		if (e.response.status >= 400) {
			return {
				success: false,
				error: 3032,
				error_desc: e.message,
			};
		}
		
		return {
			success: false,
			error: 3033,
			error_desc: e.message,
		};
	},
};