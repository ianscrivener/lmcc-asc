// ##########################
// npm package imports
import * as dotenv from 'dotenv'                // https://www.npmjs.com/package/dotenv
// import chalk from 'chalk';
// import * as _ from 'lodash';                    // https://lodash.com/
// import * as fetch from 'node-fetch';         // https://www.npmjs.com/package/node-fetch
import minimist from 'minimist';                // https://www.npmjs.com/package/minimist  

// ##########################
// private module package imports
import * as Con from './js-modules/console-logging.js';

// ##########################
// Instantiate constants
dotenv.config()
const cliArgs = minimist(process.argv.slice(2))._;


// ##########################
// verbose logging of stuff on start up
if( cliArgs.indexOf("verbose") > 0){
    Con.sep();
    Con.br(); 
    Con.log("Log Level", "2 - error", 2);
    Con.log("Log Level", "1 - message", 1);
    Con.log("Log Level", "0 - verbose", 0);
    Con.br();

    Con.log("Chalk is working","",0);
    Con.log("cli arguments:",cliArgs,0);
    Con.br();
    Con.sep();

}


// ########################################

// .env variables we use
//      OPENDATA_NSW_KEY
// console.log(process.env)




