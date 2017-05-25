require('./check-versions')()

process.env.NODE_ENV = 'production'

var ora = require('ora')
var rm = require('rimraf')
var glob = require("glob")
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var _module = process.argv[2]
if (!_module) {
  const modulesPath = path.join( __dirname, '../src/modules')
  const moudules = glob.sync(path.join( modulesPath, '*/'))
  if (moudules.length > 0) {
    async function syncEach(i) {
      const item = moudules[i]
      const module = path.relative(modulesPath, item)
      await build(module)
      if (i < moudules.length - 1) {
        syncEach(i+1)
      } else {
        console.log('build result: ', `All modules build is successful. \n`)
        return 
      }
    }
    syncEach(0)
  }
} else {
  (async () => {
    await build(_module)
  })()
}

async function build(_module) {
  var webpackConfig = require('./webpack.prod.conf')(_module)
  var spinner = ora(`building module [${_module}] for production...`)
  spinner.start()
  return new Promise((resolve, reject) => {
    rm(path.join(config.build.assetsRoot, _module, config.build.assetsSubDirectory), err => {
      if (err) throw err
      webpack(webpackConfig, function (err, stats) {
        spinner.stop()
        if (err) throw err
        process.stdout.write(stats.toString({
          colors: true,
          modules: false,
          children: false,
          chunks: false,
          chunkModules: false
        }) + '\n\n')

        console.log(chalk.cyan('  Build complete.\n'))
        console.log(chalk.yellow(
          '  Tip: built files are meant to be served over an HTTP server.\n' +
          '  Opening index.html over file:// won\'t work.\n'
        ))
        console.log(`build moudule ${_module} success. \n`)
        resolve(true)
      })
    })
  })
}
