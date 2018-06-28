#!/usr/bin/env node

const SwaggerParser = require('swagger-parser')
let args = process.argv.slice(2)

SwaggerParser.validate(args[0])
  .then(api => console.log(api))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
