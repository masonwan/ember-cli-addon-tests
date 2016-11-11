const childProcess = require('child_process')
const _ = require('lodash')

module.exports = class AppTester {

  constructor(options = {}) {
    this.appPath = options.appPath
    this.childProcess = null
  }

  installNpm() {
    return new Promise(function(resolve, reject) {
      console.log(`Installing NPM`)
      const child = childProcess.spawn('npm', ['install'], { cwd: this.appPath })
      child.stdout.pipe(process.stdout)
      child.stderr.pipe(process.stderr)
      child.once('close', () => resolve())
      child.once('error', (err) => reject(err))
    })
  }

  installBower() {
    return new Promise(function(resolve, reject) {
      const child = childProcess.spawn('bower', ['install'], { cwd: this.appPath })
      console.log(`Installing Bower`)
      child.stdout.pipe(process.stdout)
      child.stderr.pipe(process.stderr)
      child.once('close', () => resolve())
      child.once('error', (err) => reject(err))
    })
  }

  startEmberServe() {
    // TODO: Detect the ember serve ends
    console.log(`Serving Ember at '${appPath}'`)
    return new Promise(function(resolve, reject) {
      const child = childProcess.spawn('ember', ['serve'], { cwd: this.appPath })
      child.stdout.pipe(process.stdout)
      child.stderr.pipe(process.stderr)
      child.once('close', () => {
        return resolve(child);
      })
      child.once('error', (err) => reject(err))

      this.childProcess = child
    })
  }

  stopEmberServe() {
    this.childProcess.kill('SIGKILL')
  }
}