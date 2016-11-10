const path = require('path')
const AddonTestApp = require('../lib/index').AddonTestApp
const exec = require('child_process').exec

class AppTester {

  static create(options) {
    const path = options.path

    return new Promise(function(resolve, reject) {
      exec(`sleep 0.5; echo Hello world`, (err, stdout, stderr) => {
        if (err) {
          reject(err)
          return
        }

        console.log(`Command done`)
        resolve()
      })
    })
  }
}

describe('AddonTestApp', function() {
  it('should create an app', () => {

    return AppTester.create({
      path: path.join(__dirname, 'apps/simple-app'),
    })
      .then(() => {
        console.log(`Hello world`)
      })

    // const app = new AddonTestApp();
    // return app.create('simple-app', {
    //   fixturesPath: path.join(__dirname, 'apps/simple-app'),
    // })
    //   .then(function() {
    //     return app.startServer({
    //       command: 'build',
    //       // additionalArguments: ['--serve-assets']
    //     });
    //   });
  })
})