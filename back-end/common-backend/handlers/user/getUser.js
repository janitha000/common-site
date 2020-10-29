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
        body: JSON.stringify(users),
    };
};
