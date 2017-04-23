var moment = require('moment');

console.log(moment().format());

// January 1st 1970 @ 12:00am -> 0
// January 1st 1970 @ 12:01am -> 60

var now = moment();

console.log('current timestamp', now.unix());

var timestamp = 1492774928;
var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format('MMM D, YY @ h:m a' ));


console.log('current moment', currentMoment.format('MMMM Do, YYYY @ h:m A' ));
