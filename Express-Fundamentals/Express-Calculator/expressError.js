class ExpressError extends Error {
	constructor(msg, status) {
		// super runs the constructor on Error
		super();
		this.msg = msg;
		this.status = status;
		// the stack property is defined on every Error instance
		console.error(this.stack);
	}
}

module.exports = ExpressError;
