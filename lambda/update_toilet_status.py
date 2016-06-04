from __future__ import print_function

import boto3
import json
from pprint import pprint

print('Loading function')


def lambda_handler(event, context):

    print("Received event: " + json.dumps(event, indent=2))

    id = event['id']
        status = event['status']

    dynamo = boto3.resource('dynamodb').Table('toilets')

    response = dynamo.put_item(
            Item={
                'id': id,
                'status': status
                }
            )

    return response
