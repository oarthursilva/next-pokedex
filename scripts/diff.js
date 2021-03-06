/* eslint-disable no-console */
const shelljs = require('shelljs');

const currentBranch = shelljs.exec('git branch --show-current', { silent: true }).stdout;
console.log('starting analysis from branch:', currentBranch);

const result = shelljs.exec(`git diff --name-only ${currentBranch}..master`, { silent: true });

console.log(result.stdout.split('\n').filter((data) => Boolean(data)));
