

const yargsparser = require('yargs-parser');
const pkgJSON = require('../../package.json');
const chalk = require('chalk');

module.exports = {
  showWelcomeMsg: () => {
    console.log(`
    ${chalk.hex('#ff9933').inverse.bold(' Sakam ')} ${chalk
      .hex('#FFF')
      .bold('v' + pkgJSON.version)}

      ${chalk.hex('#FFF').bold('Use:')} ${chalk.green('sakam')} ${chalk.cyan(
      '[path/to/script.ba]'
    )} 
      
      ❯ To see help run command ${chalk.green('sakam')} ${chalk.yellow(
      '--help'
    )}

    `);
  },
  showVersion: () => {
    console.log(chalk.hex('#FFFFFF').bold('v' + pkgJSON.version));
  },
  showHelp: () => {
    console.log(`
    ${chalk.hex('#ff9933').inverse.bold(' Sakam ')} 

    ${chalk.hex('#FFF').bold(' Version :')} ${chalk.whiteBright(
      pkgJSON.version
    )}

    ${chalk.hex('#FFF').bold(' Description: ')}
      ${chalk.whiteBright(pkgJSON.description)}

    ${chalk.hex('#FFF').bold(' Usage: ')}
      ${chalk.green('sakam')} ${chalk.cyan(
      '[path/to/script.ba]'
    )} ${chalk.yellow('[--options]')}

    ${chalk.hex('#FFF').bold(' Options: ')}
      ${chalk.yellow('-d --debug')}    Run in Debug Mod
      ${chalk.yellow('-v --version')}  Print version number
      ${chalk.yellow('-h --help')}     Print Sakam CLI help

    ${chalk.hex('#FFF').bold(' Examples: ')}    
      ${chalk.green('sakam')} ${chalk.cyan('script.ba')}

      ❯ You can also run command + option at once:
      ${chalk.green('sakam')} ${chalk.cyan('script.ba')} ${chalk.yellow(
      '-d'
    )}  
      `);
  },
  end: () => {
    process.exit(0);
  },
  input: yargsparser(process.argv.slice(2), {
    alias: {
      help: ['h'],
      version: ['v'],
      debug: ['d'],
    },
    boolean: ['help', 'version', 'debug'],
    // string: [{ key: 'output' }],
    default: {
      help: false,
      version: false,
      log: false,
      debug: false,
    },
  }),
};
