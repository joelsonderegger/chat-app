var moment = require('moment');

// var date = new Date();
// var months = ['Jan', 'Feb', 'March', 'April']
// console.log(months[date.getMonth()]);

// var date = moment();
// date.add(100, 'y').subtract(9, 'months');
// console.log(date.format('MMM Do YYYY HH:MM:SS'));

// 10:35 am

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var time = 123;
var date = moment(time);
console.log(date.format('h:mm a'));