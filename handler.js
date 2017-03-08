'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies
const dynamoDb = new AWS.DynamoDB.DocumentClient();

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
            event: event
        })
    };
    callback(null, response);
};
module.exports.createUser = (event, context, callback) => {
        const timestamp = new Date().getTime();
        const data = JSON.parse(event.body);
        console.log(data);
        if (typeof data.text !== 'string') {
            console.error('Validation Failed');
            callback(new Error('Couldn\'t create the todo item.'));
            return;
        }

        const params = {
            TableName: process.env.DYNAMODB_TABLE,
            Item: {
                id: uuid.v1(),
                engineerId: data.engineerId,
                engineerName: data.engineerName,
                checked: false,
                createdAt: timestamp,
                updatedAt: timestamp,
            }
        };

        // write the todo to the database
        dynamoDb.put(params, (error, result) => {
                // handle potential errors
                if (error) {
                    console.error(error);
                    callback(new Error('Couldn\'t create the todo item.'));
                    return;
                }

                // create a response
                const response = {
                    statusCode: 200,
                    body: JSON.stringify(result.Item),
                };
                callback(null, response);
            });
        };
        module.exports.deleteUser = (event, context, callback) => {
            var body_data = ("string" === typeof event.body) ? JSON.parse(event.body) : event.body;

            const response = {
                statusCode: 200,
                body: JSON.stringify({
                    message: 'Delete User Data v1.0!',
                    event: event
                })
            };
            callback(null, response);
        };
