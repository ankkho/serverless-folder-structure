'use strict';

const {
	helloResponse
} = require('./lib')


const hello = (event, context) => helloResponse(event, (error, response) => context.done(error, response))

module.exports = {
	hello
};
