console.log('Loading function');

var doc = require('dynamodb-doc');
var dynamo = new doc.DynamoDB();

exports.handler = function(event, context) {
        //console.log('Received event:', JSON.stringify(event, null, 2));

        var params = {
            "TableName": "toilets"
            };

        dynamo.scan(params, function(err, data) {
        if (err) {
            context.fail(new Error('Unknown error occurd'))
        } else {
            var response = {"member": data.Items}
            context.succeed(response)
        }
    })
};
