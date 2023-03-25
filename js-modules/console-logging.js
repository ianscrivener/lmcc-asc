export { sep,br,log };

import chalk from 'chalk';


const sep = function(){console.log(chalk.blue.bold('#################################################')); }
const br  = function(){console.log(); }
const log = function(str1,str2,level){
    /* levels
        0 - verbous debug
        1 - standard blue
        2 - error red
    */        

    switch (level) {
        case 0:
            console.log("   ",chalk.bgGrey.bold(str1),chalk.magenta(str2));
            break;
        case 1:
            console.log("  ",chalk.bgBlueBright.white.bold(str1),chalk.blueBright(str2));
            break;            
        case 2:
            console.log(" ",chalk.bgRedBright.bold(str1),chalk.redBright.bold(str2));
            break;
    }
}