// multipack.js
const twilio = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);
const body = 'Ice creams are coming!';

const numbers = ['+919547276700', '+919064307641' ];

const service = twilio.notify.services(process.env.TWILIO_NOTIFY_SERVICE_SID);

const bindings = numbers.map(number => {
  return JSON.stringify({ binding_type: 'sms', address: number });
});

service.notifications
  .create({
        toBinding: bindings,
        body: body
  })
  .then(notification => {
        console.log(notification);
  })
  .catch(err => {
        console.error(err);
  });
