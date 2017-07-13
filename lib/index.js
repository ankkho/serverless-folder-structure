'use strict'

const hello = require('./functions/hello')

const helloResponse = (event, cb) => {

	/*
		Call your middleware functions here,for eg:
		- schema validation
		- authorization based on custom roles
	*/

	return cb(null, hello(event))
}


module.exports = {
	helloResponse
};
