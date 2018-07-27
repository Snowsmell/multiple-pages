const gulp = require('gulp')
const argv = require('yargs').argv
const del = require('del')
const runSequence = require('run-sequence')
const gulpif = require('gulp-if')
const jEditor = require('gulp-json-editor')
const lazypipe = require('lazypipe')
const connect = require('gulp-connect')
const proxy = require('http-proxy-middleware')
const open = require('open')
const chalk = require('chalk')
const log = require('fancy-log')

const plumber = require('gulp-plumber')
const eslint = require('gulp-eslint')
const rename = require('gulp-rename')
const concat = require('gulp-concat')
const replace = require('gulp-replace')
const sourcemaps = require('gulp-sourcemaps')
const rev = require('gulp-rev')
const revCollector = require('gulp-rev-collector')
const preprocess = require('gulp-preprocess-file')

const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const nano = require('cssnano')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const imagemin = require('gulp-imagemin')
const template = require('gulp-art-tpl')


/*******************************************************************************************
 * 配置
 */
const Utils = require('./gulp.util')
const CONFIG = require('./gulp.conf')
const ENV = argv.env ? argv.env : 'development'     // 当前环境： development、testing、production
const isPROD = ENV !== 'development' ? true : false // 是否打包环境
const isHASH = argv.hash // 是否启用文件hash版本

const SRC = CONFIG.src
const DIST = CONFIG.dist
const SRC_OPTION = {
  base: SRC.dir
}
const DIST_OPTION = {
  base: DIST.dir
}
const MANIFEST_PATH = `${DIST.dir}/manifest/`


/*******************************************************************************************
 * 管道任务
 */
function manifestTask(name) {
  let task = lazypipe()
    .pipe(rev)
    .pipe(rev.manifest, `${name}_manifest.json`)
    .pipe(jEditor, function (file) {
      return Utils.transformHash(file)
    })
    .pipe(gulp.dest, MANIFEST_PATH)
  return task()
}

const pathTask = lazypipe()
  .pipe(replace, CONFIG.alias.root[1], CONFIG.alias.root[0])
  .pipe(replace, CONFIG.alias.asset[1], CONFIG.alias.asset[0])


/*******************************************************************************************
 * 任务：启动本地HTTP 服务
 */
gulp.task('server', function () {
  var webServe = connect.server({
    name: 'web',
    host: CONFIG.host,
    root: DIST.dir,
    port: CONFIG.port.dev,
    livereload: true,
    middleware: function (connect, opt) {
      return CONFIG.proxy.map(item => {
        return proxy(item.context, {
          target: item.target,
          changeOrigin: true
        })
      })
    }
  }, function () {
    const { https, host, port } = this
    let webUrl = `${https ? 'https' : 'http'}://${host}:${port}/`
    setTimeout(() => {
      open(webUrl)
    }, 1000)
    log(chalk.yellow('😀 :::::::::::::::::::::::::::::::::::::::: 😀'))
    log(`Open in browser : ${chalk.blue(webUrl)}`)
    log(chalk.yellow('😀 :::::::::::::::::::::::::::::::::::::::: 😀'))
  })
})


/*******************************************************************************************
 * 任务：copy无需处理的资源
 */
gulp.task('build:static', done => {
  gulp.src([SRC.public])
    .pipe(gulp.dest(DIST.asset))
    .pipe(connect.reload())
    .on('end', () => {
      done()
      log('🚀 . build public done ... ')
    })
})


/*******************************************************************************************
 * 任务：处理 image文件
 */
gulp.task('build:image', done => {
  gulp.src(SRC.image, SRC_OPTION)
    // .pipe(gulpif(isPROD, imagemin()))
    .pipe(gulp.dest(DIST.asset))
    .pipe(gulpif(isHASH, manifestTask('image')))
    .pipe(connect.reload())
    .on('end', () => {
      done()
      log('🚀 . build image done ... ')
    })
})


/*******************************************************************************************
 * 任务：处理 style文件
 */
gulp.task('build:style', done => {
  const plugins = [
    autoprefixer({
      browsers: CONFIG.pkg.browserslist
    })
  ]
  if (isPROD) {
    plugins.push(nano({
      autoprefixer: false,
      discardUnused: false,
      mergeIdents: false,
      reduceIdents: false,
      zindex: false
    }))
  }
  gulp.src(SRC.style, SRC_OPTION)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(pathTask())
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(DIST.asset))
    .pipe(gulpif(isHASH, manifestTask('style')))
    .pipe(connect.reload())
    .on('end', () => {
      done()
      log('🚀 . build style done ... ')
    })
})


/*******************************************************************************************
 * 任务：处理 script文件
 */
gulp.task('build:script', done => {
  const Entries = Object.entries(SRC.scriptMap)
  const buildIt = (function () {
    let i = 0
    return function (file, list) {
      const files = list.map(item => `${SRC.dir}/scripts/${item}`)
      gulp.src(files, SRC_OPTION)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(preprocess({
          env: ENV
        }))
        .pipe(concat(`scripts/${file}.js`))
        .pipe(pathTask())
        .pipe(babel({
          babelrc: false,
          presets: [
            ["env", {
              "targets": {
                "browsers": ["> 1%", "last 3 versions", "not ie <= 8"]
              }
            }]
          ]
        }))
        .pipe(gulpif(isPROD, uglify()))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(DIST.asset))
        .pipe(connect.reload())
        .on('end', () => {
          i++
          if (i === Entries.length) {
            if (isHASH) {
              gulp.start('build:script:hash')
            }
            done()
            log('🚀 . build script done ... ')
          }
        })
    }
  }())
  Entries.map(item => {
    buildIt(item[0], item[1])
  })
})
gulp.task('build:script:hash', done => {
  gulp.src(`${DIST.asset}/scripts/**`, DIST_OPTION)
    .pipe(manifestTask('script'))
    .on('end', done)
})


/*******************************************************************************************
 * 任务：处理 html文件
 */
gulp.task('build:html', done => {
  let htmlArr = [SRC.html]
  if (isHASH) {
    htmlArr.push(`${MANIFEST_PATH}/*.json`)
  }
  gulp.src(htmlArr, { base: '' })
    .pipe(plumber())
    .pipe(preprocess({
      env: ENV
    }))
    .pipe(template({
      env: ENV,
      title: '华瑞物联'
    }))
    .pipe(pathTask())
    .pipe(gulpif(isHASH, revCollector({
      revSuffix: '\\?[0-9a-f]{8,10}'
    })))
    .pipe(gulp.dest(DIST.dir))
    .pipe(connect.reload())
    .on('end', () => {
      done()
      log('🚀 . build html done ... ')
    })
})


/********************************************************************************************/

/**
 * 任务：监控文件
 */
gulp.task('watch', () => {
  gulp.watch(SRC.public, ['build:static'])
  gulp.watch(SRC.image, ['build:image'])
  gulp.watch(SRC.style, ['build:style'])
  gulp.watch(SRC.script, ['build:script'])
  gulp.watch(SRC.html, ['build:html'])
})

/**
 * 任务：lint
 */
gulp.task('lint', done => {
  gulp.src(SRC.script, SRC_OPTION)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
})

/**
 * 任务：删除已发布的文件
 */
gulp.task('clean', done => {
  return del([DIST.dir], {
    force: true
  }).then(paths => {
    log('Files be deleted: \n', paths.join('\n'))
  })
})

/**
 * 任务：发布站点
 */
gulp.task('build', ['clean'], taskDone => {
  runSequence(['build:static', 'build:image'], ['build:style', 'build:script'], () => {
    runSequence('build:html')
    taskDone()
    log(chalk.bgGreen('build success .... ✅ .'))
  })
})

// 默认任务
gulp.task('default', ['build'], () => {
  if (argv.watch) {
    gulp.start('watch');
  }
  if (argv.server) {
    gulp.start('server')
  }
})
