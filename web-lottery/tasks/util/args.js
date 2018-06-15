import yargs from 'yargs';

const args = yargs
.option('production', {
  boolean: true,
  default: false,
  describe: 'min all scripts'
})
.option('watch', {
  boolean: true,
  default: false,
  describe: 'watch all files'
})
.options('verbose', {
  boolean: true,
  default: false,
  describe: 'log'
})
.option('sourcemap', {
  describe: 'force the creation of sourcemaps'
})
.option('port', {
  string: true,
  default: 8000,
  describe: 'server port'
})
.argv
export default args;