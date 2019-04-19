var readline = require('readline');
var events = require('events');
var e = new events.EventEmitter();
var path = require('path');
var baseDir = path.join(__dirname, 'users');
var fs = require('fs');
var chalk = require('chalk');

var os = require('os');

// for horizontal line

function horizontal(){
  var line = "";
  var width = process.stdout.columns;
  for(var i =0 ; i< width ; i++){
    line+="_";
  }
return line;
}
// for center

function center(string){
  var line = "";
  var len = string.length;
  var width = process.stdout.columns - len;
  var half = width/2 ;
  for(var i =0 ; i< half ; i++){
    line+=" ";
  }
  return line+string;
}
 function padding(string){
  var line ="";
  var len = string.length;
  var width = process.stdout.columns - len;
  var leftPadding = width/4;
  for(var i =0 ; i< leftPadding ; i++){
    line+=" ";
  }
  return line+string;
 }
 function space(string){
  var line ="";
  var len = string.length;

  var width = process.stdout.columns -len;
  var minispace = width/6;
  for(var i =0 ; i< minispace ; i++){
    line+=" ";
  }
  return line;
 }
//  verticle space
function verSpace(string){
  var line ="";
  var len = string.length;
  var width = process.stdout.columns -len;
  var minispace = width/6;
  for(var i =0 ; i< minispace ; i++){
    line+=" ";
  }
  return line;
 }
// objects for helpMenu 
var helpman = {
  "chalk":"colorizes the output",
  "clear":"clears the terminal screen",
  "clui":" draws command-line tables, gauges and spinners",
  "figlet":" creates ASCII art from text",
  "inquirer":"creates interactive command-line user interface",
  "minimist":" parses argument options",
  "configstore":"easily loads and saves config without you having to think about where and how"
}

e.on('exit', (val) => {
  process.exit(0);
});

e.on('date', () => {
  var date = new Date();
  console.log(horizontal());
  console.log(" ");
  console.log("\x1b[32m%s\x1b[0m",padding('Date:')+ space("")+ date);
  console.log(" ");
  console.log( horizontal());

})
e.on('manual', (val) => {
  console.log(horizontal());
  console.log("");
  console.log("\x1b[32m%s\x1b[0m",center("Manual"));
  console.log("");

  for(var key in helpman){
    console.log(padding("")+ key+ space(key) + helpman[key])
    console.log("");
  }
  console.log(horizontal());
})
e.on('stats', (val) => {
  console.log("\x1b[33m%s\x1b[0m", horizontal());
  console.log(" ");

  console.log(center("System Specification"));
  console.log(" ");

  console.log( horizontal());
  console.log(" ");
  console.log("\x1b[32m%s\x1b[0m" ,padding("")+ "type"+padding(os.type()));
  console.log(" ");
  console.log("\x1b[33m%s\x1b[0m" ,padding("")+ 'model'+padding(os.cpus()[0].model));
  console.log(" ");
  console.log("\x1b[32m%s\x1b[0m" ,padding("")+'hostname'+padding(os.hostname()));
  console.log(" ");
  console.log("\x1b[33m%s\x1b[0m" ,padding("")+"Uptime"+ padding(os.uptime().toFixed(2)/3600 +' '+ 'hours'));
  console.log(" ");
  console.log( horizontal());
})

e.on('single user', (val) => {
  console.log(val);
})

// multiple users
e.on('list users', (str) => {

	horizontal("");
  console.log("");
  console.log("");
	horizontal("");
	fs.readdir(baseDir, (err, userDatas) => {
		if (!err) {
      
			userDatas.forEach((userData) => {
				fs.readFile(baseDir + '/' + userData, (err, data) => {
					if (!err) {
            horizontal("");
            let userFile = '';
            // console.log(data,"datattatattatattat")
						let stringifyData = data.toString();
            let parsedData = JSON.parse(stringifyData)
            // console.log(padding(parsedData));
						userFile = `${chalk.hex('#CD5156')('Name')}: ${chalk.hex('#BB6A48')(parsedData.name)} ${chalk.hex('#CD5156')('username')}: ${chalk.hex('#BB6A48')(parsedData.username)} ${chalk.hex('#CD5156')('age')}: ${chalk.hex('#BB6A48')(parsedData.age)} ${chalk.hex('#CD5156')('rollNo')}: ${chalk.hex('#BB6A48')(parsedData.rollNo)}`;
            console.log(center(" " + userFile));
            console.log(" ");
					} else {
						console.log('Could not read the file', err);
					}
				})
			})
		} else {
			console.log('Could not read the file', err);
		}
	})
})

var cli = {};

cli.processInput = (val) => {
  var uniqueInputs = ["exit", "manual", "date", "stats", "list users", "single user"];
  var matchFound = false;
  uniqueInputs.some(input => {
    if(val.toLowerCase().indexOf(input) > -1) {
      matchFound = true;
      e.emit(input, val);
    }
  })
  if(!matchFound) {
    console.log('No match found');
  }
}

cli.init = () => {
  console.log('CLI is running');
  var readline = require('readline');
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Shubh >>"
  });
  rl.on('line', (input) => {
    cli.processInput(input);
  })
  rl.prompt();
};
module.exports = cli;