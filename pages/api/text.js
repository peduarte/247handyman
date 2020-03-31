const client = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

export default (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  client.messages
    .create({
      from: process.env.TWILIO_NUMBER,
      to: '+447813246247',
      body: `Anti-viral spray callback requested. From ${req.body.name} on ${req.body.number}`,
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch((err) => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
};
