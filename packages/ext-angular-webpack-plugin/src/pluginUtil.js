//**********
export function _constructor(options) {
  const path = require('path')
  const fs = require('fs')

  var thisVars = {}
  var thisOptions = {}
  var plugin = {}

  if (options.framework == undefined) {
    thisVars.pluginErrors = []
    thisVars.pluginErrors.push('webpack config: framework parameter on ext-webpack-plugin is not defined - values: react, angular, extjs')
    plugin.vars = thisVars
    return plugin
  }

  const validateOptions = require('schema-utils')
  validateOptions(require(`./${options.framework}Util`).getValidateOptions(), options, '')

  thisVars = require(`./${options.framework}Util`).getDefaultVars()
  thisVars.framework = options.framework
  switch(thisVars.framework) {
    case 'extjs':
      thisVars.pluginName = 'ext-webpack-plugin'
      break;
    case 'react':
      thisVars.pluginName = 'ext-react-webpack-plugin'
      break;
    case 'angular':
      thisVars.pluginName = 'ext-angular-webpack-plugin'
      break;
    default:
      thisVars.pluginName = 'ext-webpack-plugin'
  }

  //fix fashion dist problem
  const fsx = require('fs-extra')
  var toFashionDist = path.resolve(process.cwd(),`node_modules/@sencha/cmd/dist/js/node_modules/fashion/dist`)
  logv(options, `toFashionDist ${toFashionDist}`)
  if (!fs.existsSync(toFashionDist)) {
    logv(options, `copy`)
    var fromFashionDist = path.join(process.cwd(), 'node_modules/@sencha/' + thisVars.pluginName + '/fashion/dist/')
    fsx.copySync(fromFashionDist, toFashionDist)
  }
  else {
    logv(options, `no copy of fashion`)
  }

  thisVars.app = require('./pluginUtil')._getApp()
  logv(options, `pluginName - ${thisVars.pluginName}`)
  logv(options, `thisVars.app - ${thisVars.app}`)

  const rc = (fs.existsSync(`.ext-${thisVars.framework}rc`) && JSON.parse(fs.readFileSync(`.ext-${thisVars.framework}rc`, 'utf-8')) || {})
  thisOptions = { ...require(`./${thisVars.framework}Util`).getDefaultOptions(), ...options, ...rc }
  logv(options, `thisOptions - ${JSON.stringify(thisOptions)}`)
  if (thisOptions.environment == 'production') {
    thisVars.production = true
    thisOptions.genProdData = options.genProdData
    if (!options.genProdData && options.framework == 'angular' && options.prodFileReplacementConfig.length) {
      options.prodFileReplacementConfig.forEach((value) => {
        if(typeof value === 'object' && value.replace && value.with) {
          let filePath = path.resolve(process.cwd(), value.with)
          if (fs.existsSync(filePath)) {
            const data = fsx.readFileSync(filePath).toString()
            filePath = path.resolve(process.cwd(), value.replace)
            if (fs.existsSync(filePath))
              fsx.writeFileSync(filePath, data, 'utf-8', ()=>{return})
          }
        } else {
          compilation.errors.push('Invalid prodFileReplacementConfig')
        }
      })
    }
  }
  else 
    {thisVars.production = false}
  log(require('./pluginUtil')._getVersions(thisVars.app, thisVars.pluginName, thisVars.framework))
  log(thisVars.app + 'Building for ' + thisOptions.environment)
  log(thisVars.app + 'genProdData: ' + thisOptions.genProdData)

  plugin.vars = thisVars
  plugin.options = thisOptions
  return plugin
}

//**********
export function _compilation(compiler, compilation, vars, options) {
  try {
    require('./pluginUtil').logv(options, 'FUNCTION _compilation')

    const fsx = require('fs-extra')
    const fs = require('fs')
    const mkdirp = require('mkdirp')
    const path = require('path')
    const extAngularPackage = '@sencha/ext-angular'
    const extAngularFolder = 'ext-angular-prod'
    const extAngularModule = 'ext-angular.module'
    var extComponents = []

    if (vars.production) {
      logv(options, `ext-compilation: production is ` + vars.production)

      if (options.framework == 'angular') {


        if (options.genProdData) {

          // Reads all ext components source code to get all ext-components list
          var usedExtComponents = []

          const packagePath = path.resolve(process.cwd(), 'node_modules/' + extAngularPackage)
          var files = fsx.readdirSync(`${packagePath}/lib`)
          files.forEach((fileName) => {
            if (fileName && fileName.substr(0, 4) == 'ext-') {
              var end = fileName.substr(4).indexOf('.component')
              if (end >= 0) {
                extComponents.push(fileName.substring(4, end + 4))
              }
            }
          })



          // Update `app.module.ts` to include prod data folder.
          try {
            var rewrite = false
            const appModulePath = path.resolve(process.cwd(), 'src/app/app.module.ts')
            var js = fsx.readFileSync(appModulePath).toString()
            var i = js.indexOf(extAngularPackage)
            i = js.substring(0, i).lastIndexOf('import')

            if (js.substr(i - 3, 3) !== '// ') {
              js = js.substring(0, i) + '\n // ' + js.substring(i)
              rewrite = true
            }

            const pathToExtAngularModern = path.resolve(process.cwd(), `src/app/${extAngularFolder}`)
            
            // Create s the prod folder if does not exists.
            if (!fs.existsSync(pathToExtAngularModern)) {
              mkdirp.sync(pathToExtAngularModern)
              const t = require('./artifacts').extAngularModule('', '', '')
              fsx.writeFileSync(
                `${pathToExtAngularModern}/${extAngularModule}.ts`, t, 'utf-8', () => {return}
              )
              rewrite = true
            }
            var j = js.indexOf(`./${extAngularFolder}/${extAngularModule}`)
            if (j < 0) {
              js = js.substring(0, i) + `import {ExtAngularModule} from './${extAngularFolder}/${extAngularModule}'\n` + js.substr(i)
              rewrite = true
            }
            else {
              var i = js.substring(0, j).lastIndexOf('import')
              if (js.substr(i - 3, 3) == '// ') {
                js = js.substring(0, i - 3) + '\n' + js.substring(i)
                rewrite = true
              } else if (js.substring(i-2, 2) == '//') {
                js = js.substring(0, i - 2) + '\n' + js.substring(i)
                rewrite = true
              }
            }
            if (rewrite)
              fsx.writeFileSync(appModulePath, js, 'utf-8', ()=>{return})
          }
          catch (e) {
            console.log(e)
            compilation.errors.push('buildModule hook in _compilation: ' + e)
            return []
          }
        }
      }

      if (options.framework == 'angular' && !options.genProdData) {
        compilation.hooks.succeedModule.tap(`ext-succeed-module`, module => {
          if (extComponents.length && module.resource && (module.resource.match(/\.(j|t)sx?$/) ||
          options.framework == 'angular' && module.resource.match(/\.html$/)) &&
          !module.resource.match(/node_modules/) && !module.resource.match(`/ext-{$options.framework}/dist/`)) {
            vars.deps = [...(vars.deps || []), ...require(`./${vars.framework}Util`).extractFromSource(module, options, compilation, extComponents)]
          }
        })
      }

      if (options.framework == 'angular' && options.genProdData) {
        compilation.hooks.finishModules.tap(`ext-finish-modules`, modules => {
          const string = 'Ext.create({\"xtype\":\"'
          vars.deps.forEach(code => {
            var index = code.indexOf(string)
            if (index >= 0) {
              code = code.substring(index + string.length)
              var end = code.indexOf('\"')
              usedExtComponents.push(code.substr(0, end))
            }
          })
          usedExtComponents = [...new Set(usedExtComponents)]
          const readFrom = path.resolve(process.cwd(), 'node_modules/' + extAngularPackage + '/src/lib')
          const writeToPath = path.resolve(process.cwd(), `src/app/${extAngularFolder}`)

          const baseContent = fsx.readFileSync(`${readFrom}/base.ts`).toString()
          fsx.writeFileSync(`${writeToPath}/base.ts`, baseContent, 'utf-8', ()=>{return})
          
          var writeToPathWritten = false
          var moduleVars = {
            imports: '',
            exports: '',
            declarations: ''
          }
          usedExtComponents.forEach(xtype => {
            var capclassname = xtype.charAt(0).toUpperCase() + xtype.replace(/-/g, "_").slice(1)
            moduleVars.imports = moduleVars.imports + `import { Ext${capclassname}Component } from './ext-${xtype}.component';\n`
            moduleVars.exports = moduleVars.exports + `    Ext${capclassname}Component,\n`
            moduleVars.declarations = moduleVars.declarations + `    Ext${capclassname}Component,\n`
            var classFile = `/ext-${xtype}.component.ts`
            const contents = fsx.readFileSync(`${readFrom}${classFile}`).toString()
            fsx.writeFileSync(`${writeToPath}${classFile}`, contents, 'utf-8', ()=>{return})
            writeToPathWritten = true
          })
          if (writeToPathWritten) {
            var t = require('./artifacts').extAngularModule(
              moduleVars.imports, moduleVars.exports, moduleVars.declarations
            )
            fsx.writeFileSync(`${writeToPath}/${extAngularModule}.ts`, t, 'utf-8', ()=>{return})
          }
        })
      }
    }

    if (options.framework != 'extjs' && !options.genProdData) {

      compilation.hooks.htmlWebpackPluginBeforeHtmlGeneration.tap(`ext-html-generation`,(data) => {
        logv(options,'HOOK ext-html-generation')
        const path = require('path')
        var outputPath = ''
        if (compiler.options.devServer) {
          if (compiler.outputPath === '/') {
            outputPath = path.join(compiler.options.devServer.contentBase, outputPath)
          }
          else {
            if (compiler.options.devServer.contentBase == undefined) {
              outputPath = 'build'
            }
            else {
              outputPath = ''
            }
          }
        }
        else {
          outputPath = 'build'
        }
        outputPath = outputPath.replace(process.cwd(), '').trim()
        var jsPath = path.join(outputPath, vars.extPath, 'ext.js')
        var cssPath = path.join(outputPath, vars.extPath, 'ext.css')
        data.assets.js.unshift(jsPath)
        data.assets.css.unshift(cssPath)
        log(vars.app + `Adding ${jsPath} and ${cssPath} to index.html`)
      })
    }
    else {
      logv(options,'skipped HOOK ext-html-generation')
    }
  }
  catch(e) {
    require('./pluginUtil').logv(options,e)
    compilation.errors.push('_compilation: ' + e)
  }
}

//**********
export async function emit(compiler, compilation, vars, options, callback) {
  try {
    const log = require('./pluginUtil').log
    const logv = require('./pluginUtil').logv
    logv(options,'FUNCTION emit')
    var app = vars.app
    var framework = vars.framework
    const path = require('path')
    const _buildExtBundle = require('./pluginUtil')._buildExtBundle
    let outputPath = path.join(compiler.outputPath,vars.extPath)
    if (compiler.outputPath === '/' && compiler.options.devServer) {
      outputPath = path.join(compiler.options.devServer.contentBase, outputPath)
    }
    logv(options,'outputPath: ' + outputPath)
    logv(options,'framework: ' + framework)
    if (options.emit == true) {
      if (framework != 'extjs') {
        _prepareForBuild(app, vars, options, outputPath, compilation)
      }
      else {
        if (options.framework == 'angular' && !options.genProdData) {
          require(`./${framework}Util`)._prepareForBuild(app, vars, options, outputPath, compilation)
        }
        else {
          require(`./${framework}Util`)._prepareForBuild(app, vars, options, outputPath, compilation)
        }
      }

      var command = ''
      if (options.watch == 'yes' && vars.production == false) {
        command = 'watch'
      }
      else {
        command = 'build'
      }

      if (vars.rebuild == true) {
        var parms = []
        if (options.profile == undefined || options.profile == '' || options.profile == null) {
          if (command == 'build') {
            parms = ['app', command, options.environment]
          }
          else {
            parms = ['app', command, '--web-server', 'false', options.environment]
          }

        }
        else {
          if (command == 'build') {
            parms = ['app', command, options.profile, options.environment]
          }
          else {
            parms = ['app', command, '--web-server', 'false', options.profile, options.environment]
          }
        }

        if (vars.watchStarted == false) {
          await _buildExtBundle(app, compilation, outputPath, parms, options)
          vars.watchStarted = true
        }
        callback()
      }
      else {
        callback()
      }
    }
    else {
      log(`${vars.app}FUNCTION emit not run`)
      callback()
    }
  }
  catch(e) {
    require('./pluginUtil').logv(options,e)
    compilation.errors.push('emit: ' + e)
    callback()
  }
}

//**********
export function _prepareForBuild(app, vars, options, output, compilation) {
  try {
    logv(options,'FUNCTION _prepareForBuild')
    const rimraf = require('rimraf')
    const mkdirp = require('mkdirp')
    const fsx = require('fs-extra')
    const fs = require('fs')
    const path = require('path')

    var packages = options.packages
    var toolkit = options.toolkit
    var theme = options.theme

    theme = theme || (toolkit === 'classic' ? 'theme-triton' : 'theme-material')
    logv(options,'firstTime: ' + vars.firstTime)
    if (vars.firstTime) {
      rimraf.sync(output)
      mkdirp.sync(output)
      const buildXML = require('./artifacts').buildXML
      const createAppJson = require('./artifacts').createAppJson
      const createWorkspaceJson = require('./artifacts').createWorkspaceJson
      const createJSDOMEnvironment = require('./artifacts').createJSDOMEnvironment

      fs.writeFileSync(path.join(output, 'build.xml'), buildXML(vars.production, options, output), 'utf8')
      fs.writeFileSync(path.join(output, 'app.json'), createAppJson(theme, packages, toolkit, options, output), 'utf8')
      fs.writeFileSync(path.join(output, 'jsdom-environment.js'), createJSDOMEnvironment(options, output), 'utf8')
      fs.writeFileSync(path.join(output, 'workspace.json'), createWorkspaceJson(options, output), 'utf8')

      if (vars.framework == 'angular') {

        //because of a problem with colorpicker
        if (fs.existsSync(path.join(process.cwd(),'ext-angular/ux/'))) {
          var fromPath = path.join(process.cwd(), 'ext-angular/')
          var toPath = path.join(output)
          fsx.copySync(fromPath, toPath)
          log(app + 'Copying (ux) ' + fromPath.replace(process.cwd(), '') + ' to: ' + toPath.replace(process.cwd(), ''))
        }

        if (fs.existsSync(path.join(process.cwd(),'ext-angular/packages/'))) {
          var fromPath = path.join(process.cwd(), 'ext-angular/')
          var toPath = path.join(output)
          fsx.copySync(fromPath, toPath)
          log(app + 'Copying ' + fromPath.replace(process.cwd(), '') + ' to: ' + toPath.replace(process.cwd(), ''))
        }
        if (fs.existsSync(path.join(process.cwd(),'ext-angular/overrides/'))) {
          var fromPath = path.join(process.cwd(), 'ext-angular/')
          var toPath = path.join(output)
          fsx.copySync(fromPath, toPath)
          log(app + 'Copying ' + fromPath.replace(process.cwd(), '') + ' to: ' + toPath.replace(process.cwd(), ''))
        }
      }
      if (vars.framework == 'react')  {
        if (fs.existsSync(path.join(process.cwd(),'ext-react/packages/'))) {
          var fromPath = path.join(process.cwd(), 'ext-react/packages/')
          var toPath = path.join(output, 'packages')
          fsx.copySync(fromPath, toPath)
          log(app + 'Copying ' + fromPath.replace(process.cwd(), '') + ' to: ' + toPath.replace(process.cwd(), ''))
        }
        if (fs.existsSync(path.join(process.cwd(),'ext-react/overrides/'))) {
          var fromPath = path.join(process.cwd(), 'ext-react/overrides/')
          var toPath = path.join(output, 'overrides')
          fsx.copySync(fromPath, toPath)
          log(app + 'Copying ' + fromPath.replace(process.cwd(), '') + ' to: ' + toPath.replace(process.cwd(), ''))
        }
      }

      if (fs.existsSync(path.join(process.cwd(),'resources/'))) {
        var fromResources = path.join(process.cwd(), 'resources/')
        var toResources = path.join(output, '../resources')
        fsx.copySync(fromResources, toResources)
        log(app + 'Copying ' + fromResources.replace(process.cwd(), '') + ' to: ' + toResources.replace(process.cwd(), ''))
      }

      // if (fs.existsSync(path.join(process.cwd(),'resources/'))) {
      //   var fromResources = path.join(process.cwd(), 'resources/')
      //   var toResources = path.join(output, 'resources')
      //   fsx.copySync(fromResources, toResources)
      //   log(app + '6Copying ' + fromResources.replace(process.cwd(), '') + ' to: ' + toResources.replace(process.cwd(), ''))
      // }
      
      if (fs.existsSync(path.join(process.cwd(),'packages/'))) {
        var fromPackages = path.join(process.cwd(), 'packages/')
        var toPackages = path.join(output, 'packages')
        fsx.copySync(fromPackages, toPackages)
        log(app + 'Copying ' + fromPackages.replace(process.cwd(), '') + ' to: ' + toPackages.replace(process.cwd(), ''))
      }

      if (fs.existsSync(path.join(process.cwd(),'overrides/'))) {
        var fromPath = path.join(process.cwd(), 'overrides/')
        var toPath = path.join(output, 'overrides')
        fsx.copySync(fromPath, toPath)
        log(app + 'Copying ' + fromPath.replace(process.cwd(), '') + ' to: ' + toPath.replace(process.cwd(), ''))
      }

    }
    vars.firstTime = false
    var js = ''
    if (vars.production) {
      if (!vars.deps.includes('Ext.require("Ext.layout.*");\n'))
        vars.deps.push('Ext.require("Ext.layout.*");\n')
      js = vars.deps.join(';\n');
    }
    else {
      js = 'Ext.require("Ext.*")'
    }
    if (vars.manifest === null || js !== vars.manifest) {
      vars.manifest = js
      const manifest = path.join(output, 'manifest.js')
      fs.writeFileSync(manifest, js, 'utf8')
      vars.rebuild = true
      var bundleDir = output.replace(process.cwd(), '')
      if (bundleDir.trim() == '') {bundleDir = './'}
      log(app + 'Building Ext bundle at: ' + bundleDir)
    }
    else {
      vars.rebuild = false
      log(app + 'Ext rebuild NOT needed')
    }
  }
  catch(e) {
    require('./pluginUtil').logv(options,e)
    compilation.errors.push('_prepareForBuild: ' + e)
  }
}

//**********
export function _buildExtBundle(app, compilation, outputPath, parms, options) {
  try {
    const fs = require('fs')
    const logv = require('./pluginUtil').logv
    logv(options,'FUNCTION _buildExtBundle')

    let sencha; try { sencha = require('@sencha/cmd') } catch (e) { sencha = 'sencha' }
    if (fs.existsSync(sencha)) {
      logv(options,'sencha folder exists')
    }
    else {
      logv(options,'sencha folder DOES NOT exist')
    }

    return new Promise((resolve, reject) => {
      const onBuildDone = () => {
        logv(options,'onBuildDone')
        resolve()
      }

      var opts = { cwd: outputPath, silent: true, stdio: 'pipe', encoding: 'utf-8'}
      executeAsync(app, sencha, parms, opts, compilation, options).then (
        function() { onBuildDone() }, 
        function(reason) { reject(reason) }
      )
    })
  }
  catch(e) {
    console.log('e')
    require('./pluginUtil').logv(options,e)
    compilation.errors.push('_buildExtBundle: ' + e)
    callback()
  }
}

//**********
export async function executeAsync (app, command, parms, opts, compilation, options) {
  try {
    //const DEFAULT_SUBSTRS = ['[INF] Loading', '[INF] Processing', '[LOG] Fashion build complete', '[ERR]', '[WRN]', "[INF] Server", "[INF] Writing", "[INF] Loading Build", "[INF] Waiting", "[LOG] Fashion waiting"];
    const DEFAULT_SUBSTRS = ["[INF] xServer", '[INF] Loading', '[INF] Append', '[INF] Processing', '[INF] Processing Build', '[LOG] Fashion build complete', '[ERR]', '[WRN]', "[INF] Writing", "[INF] Loading Build", "[INF] Waiting", "[LOG] Fashion waiting"];
    var substrings = DEFAULT_SUBSTRS 
    var chalk = require('chalk')
    const crossSpawn = require('cross-spawn')
    const log = require('./pluginUtil').log
    logv(options, 'FUNCTION executeAsync')
    await new Promise((resolve, reject) => {
      logv(options,`command - ${command}`)
      logv(options, `parms - ${parms}`)
      logv(options, `opts - ${JSON.stringify(opts)}`)
      let child = crossSpawn(command, parms, opts)
      child.on('close', (code, signal) => {
        logv(options, `on close: ` + code) 
        if(code === 0) { resolve(0) }
        else { compilation.errors.push( new Error(code) ); resolve(0) }
      })
      child.on('error', (error) => { 
        logv(options, `on error`) 
        compilation.errors.push(error)
        resolve(0)
      })
      child.stdout.on('data', (data) => {
        var str = data.toString().replace(/\r?\n|\r/g, " ").trim()
        logv(options, `${str}`)
        if (data && data.toString().match(/waiting for changes\.\.\./)) {
          resolve(0)
        }
        else {
          if (substrings.some(function(v) { return data.indexOf(v) >= 0; })) { 
            str = str.replace("[INF]", "")
            str = str.replace("[LOG]", "")
            str = str.replace(process.cwd(), '').trim()
            if (str.includes("[ERR]")) {
              compilation.errors.push(app + str.replace(/^\[ERR\] /gi, ''));
              str = str.replace("[ERR]", `${chalk.red("[ERR]")}`)
            }
            log(`${app}${str}`) 
          }
        }
      })
      child.stderr.on('data', (data) => {
        logv(options, `error on close: ` + data) 
        var str = data.toString().replace(/\r?\n|\r/g, " ").trim()
        var strJavaOpts = "Picked up _JAVA_OPTIONS";
        var includes = str.includes(strJavaOpts)
        if (!includes) {
          console.log(`${app} ${chalk.red("[ERR]")} ${str}`)
        }
      })
    })
  }
  catch(e) {
    require('./pluginUtil').logv(options,e)
    compilation.errors.push('executeAsync: ' + e)
    callback()
  } 
}

export function log(s) {
  require('readline').cursorTo(process.stdout, 0)
  try {
    process.stdout.clearLine()
  }
  catch(e) {}
  process.stdout.write(s)
  process.stdout.write('\n')
}

export function logv(options, s) {
  if (options.verbose == 'yes') {
    require('readline').cursorTo(process.stdout, 0)
    try {
      process.stdout.clearLine()
    }
    catch(e) {}
    process.stdout.write(`-verbose: ${s}`)
    process.stdout.write('\n')
  }
}

export function _getApp() {
  var chalk = require('chalk')
  var prefix = ``
  const platform = require('os').platform()
  if (platform == 'darwin') { prefix = `ℹ ｢ext｣:` }
  else { prefix = `i [ext]:` }
  return `${chalk.green(prefix)} `
}

export function _getVersions(app, pluginName, frameworkName) {
  const path = require('path')
  const fs = require('fs')

  var v = {}
  var pluginPath = path.resolve(process.cwd(),'node_modules/@sencha', pluginName)
  var pluginPkg = (fs.existsSync(pluginPath+'/package.json') && JSON.parse(fs.readFileSync(pluginPath+'/package.json', 'utf-8')) || {});
  v.pluginVersion = pluginPkg.version
  v._resolved = pluginPkg._resolved
  if (v._resolved == undefined) {
    v.edition = `Commercial`
  }
  else {
    if (-1 == v._resolved.indexOf('community')) {
      v.edition = `Commercial`
    }
    else {
      v.edition = `Community`
    }
  }

  var webpackPath = path.resolve(process.cwd(),'node_modules/webpack')
  var webpackPkg = (fs.existsSync(webpackPath+'/package.json') && JSON.parse(fs.readFileSync(webpackPath+'/package.json', 'utf-8')) || {});
  v.webpackVersion = webpackPkg.version

  var extPath = path.resolve(process.cwd(),'node_modules/@sencha/ext')
  var extPkg = (fs.existsSync(extPath+'/package.json') && JSON.parse(fs.readFileSync(extPath+'/package.json', 'utf-8')) || {});
  v.extVersion = extPkg.sencha.version

  var cmdPath = path.resolve(process.cwd(),`node_modules/@sencha/cmd`)
  var cmdPkg = (fs.existsSync(cmdPath+'/package.json') && JSON.parse(fs.readFileSync(cmdPath+'/package.json', 'utf-8')) || {});
  v.cmdVersion = cmdPkg.version_full

  if (v.cmdVersion == undefined) {
    var cmdPath = path.resolve(process.cwd(),`node_modules/@sencha/${pluginName}/node_modules/@sencha/cmd`)
    var cmdPkg = (fs.existsSync(cmdPath+'/package.json') && JSON.parse(fs.readFileSync(cmdPath+'/package.json', 'utf-8')) || {});
    v.cmdVersion = cmdPkg.version_full
  }

  var frameworkInfo = ''
   if (frameworkName != undefined && frameworkName != 'extjs') {
    var frameworkPath = ''
    if (frameworkName == 'react') {
      frameworkPath = path.resolve(process.cwd(),'node_modules/react')
    }
    if (frameworkName == 'angular') {
      frameworkPath = path.resolve(process.cwd(),'node_modules/@angular/core')
    }
    var frameworkPkg = (fs.existsSync(frameworkPath+'/package.json') && JSON.parse(fs.readFileSync(frameworkPath+'/package.json', 'utf-8')) || {});
    v.frameworkVersion = frameworkPkg.version
    frameworkInfo = ', ' + frameworkName + ' v' + v.frameworkVersion
  }
  return app + 'ext-webpack-plugin v' + v.pluginVersion + ', Ext JS v' + v.extVersion + ' ' + v.edition + ' Edition, Sencha Cmd v' + v.cmdVersion + ', webpack v' + v.webpackVersion + frameworkInfo
 }