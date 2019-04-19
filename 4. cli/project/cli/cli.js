var readline = require('readline');
var events = require('events');
var e = new events.EventEmitter();

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

// objects for helpMenu 

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
    //  horizontal()
  // process.manual(0);
})
e.on('stats', (val) => {
  console.log("\x1b[33m%s\x1b[0m", horizontal());
  console.log(" ");

  console.log(center("System Specification"));
  console.log(" ");

  console.log( horizontal());
  console.log(" ");
  console.log("\x1b[32m%s\x1b[0m" ,padding("hostname")+ space("hostname")+ os.type());
  console.log(" ");
  console.log("\x1b[33m%s\x1b[0m" ,padding("model")+ space("model")+os.cpus()[0].model);
  console.log(" ");
  console.log("\x1b[32m%s\x1b[0m" ,padding("hostname")+space("hostname")+ os.hostname());
  console.log(" ");
  console.log("\x1b[33m%s\x1b[0m" ,padding("Uptime")+space("Uptime")+ os.uptime().toFixed(2)/3600 +' '+ 'hours');
  console.log(" ");
  console.log( horizontal());
})

e.on('single user', (val) => {
  console.log(val);
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
    // console.log(input);
  })
  rl.prompt();
};

module.exports = cli;