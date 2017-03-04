'use strict';

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: ' v1.0!'
    })
  };
  callback(null, response);
};
module.exports.getUser = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Get User data v1.0!',
      event:event
    })
  };
  callback(null, response);
};
module.exports.createUser = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Create User Data v1.0!',
      event:event
    })
  };
  callback(null, response);
};
