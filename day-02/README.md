# 🕰️ Day 02

## 🚀 sam it up and add integration test

- recap 🕰️ Day 01
```
$ tree playground/ -I node_modules
playground/
├── babel.config.js
├── build
│   └── hey.js
├── hey.ts
├── package-lock.json
├── package.json
├── test
│   └── unit
│       └── test-handler.test.ts
└── tsconfig.json
```

- 🚀 sam it up
create the s3 bucket to store your deployment first:
```
$ aws s3 mb s3://serverless-ts-log
```

add `samconfig.toml`
```
$ touch samconfig.toml

// samconfig.toml
version = 0.1
[default]
[default.deploy]
[default.deploy.parameters]
stack_name = "sam-app"
s3_bucket = "serverless-ts-log"
region = "eu-west-1"
capabilities = "CAPABILITY_IAM"
```

add `template.yaml`
```
$ touch template.yaml

// template.yaml

AWSTemplateFormatVersion: '2010-09-09'
Transform: AWS::Serverless-2016-10-31
Description: >
  👋 hey
  
# More info about Globals: https://github.com/awslabs/serverless-application-model/blob/master/docs/globals.rst
Globals:
  Function:
    Timeout: 3

Resources:
  HelloWorldFunction:
    Type: AWS::Serverless::Function # More info about Function Resource: https://github.com/awslabs/serverless-application-model/blob/master/versions/2016-10-31.md#awsserverlessfunction
    Properties:
      CodeUri: build
      Handler: hey.lambdaHandler
      Runtime: nodejs14.x
      Events:
        HelloWorld:
          Type: Api # More info about API Event Source: https://github.com/awslabs/serverless-application-model/blob/master/versions/2016-10-31.md#api
          Properties:
            Path: /poke
            Method: get

Outputs:
  HelloWorldApi:
    Description: "API Gateway endpoint URL for Prod stage for Hello World function"
    Value: !Sub "https://${ServerlessRestApi}.execute-api.${AWS::Region}.amazonaws.com/Prod/poke/"
  HelloWorldFunction:
    Description: "Hello World Lambda Function ARN"
    Value: !GetAtt HelloWorldFunction.Arn
  HelloWorldFunctionIamRole:
    Description: "Implicit IAM Role created for Hello World function"
    Value: !GetAtt HelloWorldFunctionRole.Arn
```

- 🕹️ hit the deploy button
```
$ sam deploy

Successfully created/updated stack - sam-app in eu-west-1
```
```
$ curl https://<endpoint-id>.execute-api.eu-west-1.amazonaws.com/Prod/poke 
👋 hey
```

- 🔗 add local integration test
```
$ mkdir -p test/integration
$ touch test/integration/handler.integration.test.ts

// test/integration/handler.integration.test.ts
import axios from "axios";

describe("Integration Test", () => {
    it("hello world integration test", async () => {
        const response = await axios.get("http://localhost:3000/poke", {
        });

        expect(response.status).toEqual(200);
        expect(response.data).toEqual(`👋 hey`);
    });
});
```
install more stuffs
```
$ npm i -D axios @types/axios
```

🔨 test it
before hit the test button, you will need to run the stack locally with sam 
```
$ sam local start-api -t template.yaml
Mounting HelloWorldFunction at http://127.0.0.1:3000/poke [GET]
You can now browse to the above endpoints to invoke your functions. You do not need to restart/reload SAM CLI while working on your functions, changes will be reflected instantly/automatically. You only need to restart SAM CLI if you update your AWS SAM template
2021-02-19 00:48:46  * Running on http://127.0.0.1:3000/ (Press CTRL+C to quit)
```

tweak the `package.json`:
```
 "scripts": {
    "test": "jest --env=node"
  },
```

```
$ npm run test

> playground@1.0.0 test /Users/pingzhou.liu/Documents/TS_test/serverless-ts-log/playground
> jest --env=node

 PASS  test/unit/test-handler.test.ts
 PASS  test/integration/handler.integration.test.ts

Test Suites: 2 passed, 2 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        1.594 s, estimated 2 s
Ran all test suites.
```
<p align="center">
  <img width=300 src="https://media.giphy.com/media/lr2bkSkxMWFCo/giphy.gif">
</p>
