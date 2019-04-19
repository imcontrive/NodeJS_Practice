// var fs = require('fs');
// var http = require('http');
// var url = require('url');
// var path = require('path');
// var userPath = path.join(__dirname, 'users');

// var server = http.createServer();
// console.log(userPath);

// server.on('request', (req, res) => {
// 	var data = '';
// 	// console.log(req.method);
// 	var parsed = url.parse(req.url);
// 	console.log(req.url);

// 	req.on('data', (chunk) => {
// 		data += chunk;
// 		// console.log(data);
// 	})
// 	req.on('end', () => {
// 		if(req.method === 'POST') {
// 			// console.log(data);
// 			var userData = JSON.parse(data);
// 			// console.log(userData);
// 			fs.open(userPath + '/' + userData.username + '.json', 'wx', (err, fd) => {
// 				// console.log(fd);
// 				if(err) return console.error(err, 'error aaya hai');
// 				fs.writeFile(fd, data, (err) => {
// 					if(err) return res.end(err);
// 					fs.close(fd, (err) => {
// 						res.end(data);
// 					})
// 				})
// 			})
// 		}
// 	})
// })

// server.listen(4000, () => {
//     console.log("server started at port 4000");
// })



// for PUT method

// var fs = require('fs');
// var http = require('http');
// var url = require('url');
// var path = require('path');
// var userPath = path.join(__dirname, 'users');

// var server = http.createServer();
// console.log(userPath);

// server.on('request', (req, res) => {
// 	var data = '';
// 	// console.log(req.method);
// 	var parsed = url.parse(req.url);
// 	console.log(req.url);

// 	req.on('data', (chunk) => {
// 		data += chunk;
// 		// console.log(data);
// 	})
// 	req.on('end', () => {
// 		if(req.method === 'PUT') {
// 			// console.log(data);
// 			var userData = JSON.parse(data);
// 			// console.log(userData);
// 			fs.open(userPath + '/' + userData.username + '.json', 'wx', (err, fd) => {
// 				// console.log(fd);
// 				if(err) return console.error(err, 'error aaya hai');
// 				if(err) return console.error(err);
// 				fs.ftruncate(fd, (err) => {
// 					if (err) return console.error(err);
// 					console.log('File is deleted successfully.');
// 				})
// 				fs.close(fd,err => {
// 					if (err) return console.error(err);
// 					console.log(fd,err);    
// 				})
// 			})
// 		}
// 	})
// })

// server.listen(4000, () => {
//     console.log("server started at port 4000");
// })


// for DELETE method 
var fs = require('fs');
var http = require('http');
var url = require('url');
var path = require('path');
var userPath = path.join(__dirname, 'users');

var server = http.createServer();
console.log(userPath);

server.on('request', (req, res) => {
	var data = '';
	// console.log(req.method);
	var parsed = url.parse(req.url);
	console.log(req.url);

	req.on('data', (chunk) => {
		data += chunk;
		// console.log(data);
	})
	req.on('end', () => {
		if(req.method === 'DELETE') {
			// console.log(data);
			var userData = JSON.parse(data);
			// console.log(userData);
			// fs.open(userPath + '/' + userData.username + '.json', 'r+', (err, fd) => {
				// console.log(fd);
				// if(err) return console.error(err, 'error aaya hai');
					fs.unlink(userPath + '/' + userData.username + '.json', (err) => {
						if (err) return console.error(err);
						console.log('File is deleted successfully.');
					})
			// })
		}
	})
})

server.listen(4000, () => {
    console.log("server started at port 4000");
})
