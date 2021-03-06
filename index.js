#!/usr/bin/env node
const pkgJson = require('./package.json');
const welcome = require('cli-welcome');
const chalk = require('chalk');

const log = console.log;
const twitterColor = chalk.hex(`#1da1f2`).bold.inverse;
const portfolioColor = chalk.hex(`#fbbc05`).bold.inverse;
const githubColor = chalk.hex(`#6cc644`).bold.inverse;
const blogColor = chalk.hex(`#c9510c`).bold.inverse;
const dim = chalk.dim;
const italic = chalk.italic;

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
log(`
${italic(`
I'm a Fullstack Javascript Engineer and Tech writer with over 3 years of experience building large scale web applications
for both small and medium sized companies.I specialize in building efficient fullstack web applications that work across
multiple platform and browsers and that are usable and pleasant for the most number of people possible. I use React,Typescript,
GraphQL, Javascript, Node.js, SCSS and HTML.
`)}


💼 ${portfolioColor(` Portfolio `)} ${dim(`https://chiboycalix.github.io/chinonso.dev/`)}
🐦 ${twitterColor(` Twitter `)} ${dim(`https://twitter.com/thorsgardian_`)}
📖 ${githubColor(` GitHub `)} ${dim(`https://github.com/chiboycalix`)}
😎 ${blogColor(` Blog `)} ${dim(`https://dev.to/cigwe416`)}

`);

