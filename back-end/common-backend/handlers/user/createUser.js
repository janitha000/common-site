const AWS = require("aws-sdk")
const { v4: uuidv4 } = require('uuid');

const dynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports.handler = async (event) => {
    console.log("================ event body =============")
    const { user } = JSON.parse(event.body);
    const now = new Date();

    const newUser = {
        ...user,
        id: uuidv4(),
        created: now.toISOString(),
        updated: now.toISOString(),
    };

    try {
        await dynamoDB.put({ TableName: 'CommonSite-User', Item: newUser }).promise();
    }
    catch (err) {
        console.error(error);
        throw new Error(error);
    }

    return {
        statusCode: 201,
        body: JSON.stringify(newUser),
    };

}