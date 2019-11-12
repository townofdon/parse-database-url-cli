#!/usr/bin/env node

const parseDbUrl = require("parse-database-url");

function main() {
  if (!process.argv || !process.argv.length > 1) {
    errorDie('You need to supply the database url as the first command line arg.')
  }

  const dbUrl = process.argv[2];
  const dbConfig = parseDbUrl(dbUrl);

  printLine('DB User', dbConfig.user);
  printLine('DB Pass', dbConfig.password);
  printLine('DB Host', dbConfig.host);
  printLine('DB Port', dbConfig.port);
  printLine('DB used', dbConfig.database);

  exitSuccess();
}

function printLine(label, val) {
  process.stdout.write(`${label || ''}: `);
  process.stdout.write(val || '');
  process.stdout.write('\n');
}

function errorDie(err) {
  console.log(err);
  process.exit(1);
}

function exitSuccess(msg) {
  if (msg) { console.log(msg); }
  process.exit(0);
}

main();
