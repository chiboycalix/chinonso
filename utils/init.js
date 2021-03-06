const pkgJson = require('./../package.json');
const welcome = require('cli-welcome');
const checkNode = require('cli-check-node');
const unhandled = require('cli-handle-unhandled')

module.exports = () => {
  unhandled()
  welcome({
    title: `Igwe Chinonso`,
    tagLine: `Howdy, nice to meet you`,
    description: pkgJson.description,
    version: pkgJson.version,
    bgColor: `#228B22`,
    color: `#ffffff`,
    bold: true,
    clear: true
  });

  checkNode('10', { fail: false })
}