/* eslint-env jest */

const util = require('util')
const execFile = util.promisify(require('child_process').execFile)

describe('Run CLI tool', () => {
  test('Should parse swagger file from first cli argument', async () => {
    const {stdout, stderr} = await execFile('node', ['index.js', 'tests/swagger-example.yml'])
    expect(stdout).toContain(/petstore.swagger.io/)
    expect(stderr).toBe('')
  })

  test('Should print error when an invalid file is passed', async () => {
    await expect(execFile('node', ['index.js', 'not-a-file'])).rejects.toThrowError(/no such file/)
  })
})
