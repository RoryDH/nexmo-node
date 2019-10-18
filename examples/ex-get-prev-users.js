module.exports = function(callback, config) {

  var Nexmo = require('../lib/Nexmo');

  var nexmo = new Nexmo({
      apiKey: config.API_KEY,
      apiSecret: config.API_SECRET,
      applicationId: config.APP_ID,
      privateKey: config.PRIVATE_KEY
    },
    {debug: config.DEBUG}
  );

  nexmo.users.get({page_size: 20}, (error, response) => {
    nexmo.users.next(response, (error, response) => {
      nexmo.users.prev(response, callback);
    })
  });
};
