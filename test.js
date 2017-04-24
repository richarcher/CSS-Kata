const backstop = require('backstopjs');
const args = require('yargs').argv;

let commandToRun = "";

if( args.reference ) {
    commandToRun = "reference";
}

if( args.test ) {
    commandToRun = "test";
}

if( args.openReport ) {
    commandToRun = "openReport";
}

console.log(commandToRun);

if( "" !== commandToRun ) {
    backstop(commandToRun, { config: './backstop.json' });
}
