const path = require('path')

const AppTester = require('./lib/app-tester')

describe('AddonTestApp', function() {
  this.timeout(10000)

  let appTester

  before(() => {
    appTester = new AppTester({
      appPath: path.join(__dirname, 'apps/simple-app'),
    })

    return appTester.startEmberServe()
  })

  after(() => {
    return appTester.stopEmberServe()
  })

  it('should create an app', () => {

  })
})