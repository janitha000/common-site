const AWS = require('aws-sdk')

const dynamoDB = new AWS.DynamoDB.DocumentClient();


module.exports.handler = async (event) => {
    let users;

    try {
        const result = await dynamoDB
            .scan({
                TableName: 'CommonSite-User',
            })
            .promise();
        users = result.Items;
    } catch (error) {
        console.error(error);
        throw new Error(error);
    }

    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify(users),
    };
};


module.exports.getUserByName = async (event) => {
    let user;
    let username = event.pathParameters.name
    //let username = 'test2';

    try {
        var params = {
            ExpressionAttributeValues: {
                ":userName": `${username}`
            },
            FilterExpression: "#user_name = :userName",
            TableName: "CommonSite-User",
            ExpressionAttributeNames: {
                "#user_name": "name"
            }
        };
        const result = await dynamoDB
            .scan(params).promise();
        users = result.Items[0];
    } catch (error) {
        console.error(error);
        throw new Error(error);
    }

    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify(users),
    };
};