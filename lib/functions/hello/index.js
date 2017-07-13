'use strict'

const hello = event => ({
  statusCode: 200,
  body: JSON.stringify({
	message: 'Go Serverless v1.0! Your function executed successfully!'
  })
})

module.exports = hello;
