const express = require('express');
const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
require('dotenv').config();
const app = express();
// const awsKey = process.env.AWS_KEY;




app.get('/', async (req, res) => {
    const client = new S3Client({region:'us-west-2'});
    const input = {
        "Bucket": "cat-test-bucket-1201",
        "Key": "test.json",
      };
    const command = new GetObjectCommand(input);
    const response = await client.send(command);

    res.send(response);
}); 

const PORT = 3000

app.listen(PORT, () => {
    console.log ('running on port ' + PORT)
}); 