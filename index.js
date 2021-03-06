#!/usr/bin/env node
const pkgJson = require('./package.json');
const welcome = require('cli-welcome')

welcome({
  title: pkgJson.name,
  tagLine: `Howdy, nice to meet you`,
  description: pkgJson.description,
  version: pkgJson.version,
  bgColor: `#FADC00`,
  color: `#000000`,
  bold: true,
  clear: true
})
console.log(`
Igwe Chinonso 

I'm a Fullstack Javascript Engineer and Tech writer with over 3 years of experience building large scale web applications for both small and medium sized companies. I specialize in building efficient fullstack web applications that work across multiple platform and browsers and that are usable and pleasant for the most number of people possible. I use React, Typescript, GraphQL, Javascript, Node.js, SCSS and HTML.

🐦 Twitter: https://twitter.com/thorsgardian_
📖 GitHub: https://github.com/chiboycalix
😎 Blog: https://dev.to/cigwe416
💼 Portfolio: https://chiboycalix.github.io/chinonso.dev/

`);

