var twilio = require('twilio');

var accountSid = 'AC5c9057538e3bb7d9c4584420ec3a2a17'; // Your Account SID from www.twilio.com/console
var authToken = '782fa8b9da09c999356c107188c0dc62';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Hello from Twilio. This is a test Twilio message from Purna Baral. Happy Coding!!!',
    to: '+358**********',  // Text this number
    from: '+1**********' // From a valid Twilio number
})
.then(message => console.log(message.sid));