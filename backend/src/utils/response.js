module.exports = {
	genericError: (e) => {
		if (e instanceof thinky.r.Error.ReqlServerError) {
			return {
				success: false,
				error: 3011,
				error_desc: e.name + ' ' + e.message,
			};
		}
		
		if (e instanceof thinky.Errors.ValidationError) {
			return {
				success: false,
				error: 3012,
				error_desc: e.name + ' ' + e.message,
			};
		}
		
		if (e instanceof Error) {
			return {
				success: false,
				error: 3001,
				error_desc: e.name + ' ' + e.message,
			};
		}
		
		return {
			success: false,
			...e,
		};
	},
	
	axiosError: (e) => {
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