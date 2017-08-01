# serverless-folder-structure
> A simple folder structure for serverless apps which allows you to add middleware functions for each lambda handler.


### lib

	functions (folder): Provide all your business logic within this folder.

	index.js: Response for handler functions are generated within this file.

	schema.js: Provide all your schema validation within this module.

#### util.js:
A module for utility functions.

#### handler.js:
Collection of all Lambda handler functions.

> You can use [joi](https://github.com/hapijs/joi) for schema validation.

### How to run this example

`git clone git@github.com:ankkho/serverless-folder-structure.git`

1) `npm i`

2) `sls offline start`
Checkout [serverless-offline](https://github.com/dherault/serverless-offline). I would highly recommend this plugin!

3) To invoke your lambda function either use postman or run a simple curl command `curl http://localhost:3000/sample/hello`.
