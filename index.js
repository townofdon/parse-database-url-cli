
function main() {
  if (!process.argv || !process.argv.length > 1) {
    errorDie('You need to supply the database url as the first command line arg.')
  }
  const dbUrl = process.argv[1];

  // parse the db and display
  exitSuccess();
}

function errorDie(err) {
  console.log(err);
  process.exit(1);
}

function exitSuccess(msg) {
  if (msg) { console.log(msg); }
  console.log('success!!');
  process.exit(0);
}

main();
