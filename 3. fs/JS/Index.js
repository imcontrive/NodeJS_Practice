// const fs = require('fs');

// creating a file
// fs.writeFile('newfile.txt', 'Learn Node FS module', function (err) {
//   if (err) throw err;
//   console.log('File is created successfully.');
// });

//remove all the content from newfile.txt

// fs.ftruncate(fd, (err) => { 
//   // Execution here
// })


// deleting file from this location
// fs.unlink('/home/shubh/Downloads/k.jpg', (err) => {
//   if (err) throw err;
//   console.log('successfully deleted /home/shubh/Downloads/k.jpg');
// });


const fs = require('fs');

var path = require('path');
var userPath = path.join(__dirname,'users');

console.log(userPath);


var data = {
  name:"shubham",
  status:"Available",
  gmail:"psubham94@gmail.com",
  mob:"8860024**8"
}
// create files into users directory
// fs.open(userPath + '/shubh.json', 'wx',(err,fd) => {
//   if(err) return console.error(err);
//   fs.writeFile(fd, JSON.stringify(data), (err) =>  {
//     if (err) return console.error(err);
//     console.log('File is created successfully.');
//   });
//   fs.close(fd,err => {
//     if (err) return console.error(err);
//     console.log(fd,err);    
//   })
// })

// update files content
// fs.open(userPath + '/shubh.json', 'r+',(err,fd) => {
//   if(err) return console.error(err);
//   fs.writeFile(fd, JSON.stringify(data), (err) =>  {
//     if (err) return console.error(err);
//     console.log('File is created successfully.');
//   });
//   fs.close(fd,err => {
//     if (err) return console.error(err);
//     console.log(fd,err);    
//   })
// })


//deleting content  from users file
// fs.open(userPath + '/shubh.json', 'r+',(err,fd) => {
  // if(err) return console.error(err);
  // fs.ftruncate(fd, (err) => {
  //   if (err) return console.error(err);
  //   console.log('File is deleted successfully.');
  // })
  // fs.close(fd,err => {
  //   if (err) return console.error(err);
  //   console.log(fd,err);    
  // })
// })


// delete file

// fs.open(userPath + '/shubh.json', 'r+',(err,fd) => {
  // if(err) return console.error(err);
  // fs.unlink(user, (err) => {
  //   if (err) return console.error(err);
  //   console.log('File is deleted successfully.');
  // })
  // fs.close(fd,err => {
  //   if (err) return console.error(err);
  //   console.log(fd,err);    
  // })
// })

fs.unlink(userPath + '/shubh.json', (err) => {
  if (err) return console.error(err);
  console.log('File is deleted successfully.');
})