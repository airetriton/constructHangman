	
2017 answer based on current trends in the wild:

Vanilla javascript argument parsing:

const args = process.argv;
console.log(args);
This returns:

$ node server.js one two=three four
['node', '/Users/dc/node/server.js', 'one', 'two=three', 'four']
Official docs

Most used NPM packages for argument parsing:

Minimist: For minimal argument parsing.

Commander.js: For building use-and-quit command-line applications, with built-in argument parsing.

Meow: Lighter-weight alternative to Commander.js

Yargs: For more sophisticated argument parsing.

Vorpal.js: For building mature, interactive command-line applications, with built-in argument parsing.

Promptly - getting input from the user with a callback approach

Co-Prompt - input from user with generator approach