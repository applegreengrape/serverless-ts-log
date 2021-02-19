
# 🕰️ Day 01 

## 👋 hello world typescript lambda

- 🍺 install typescript
```
$ npm install -g typescript
```

- 🎬 init 
```
$ npm init -y
$ tsc --init
```

- ✍🏻 create the typescipt file
```
$ touch hey.ts

// hey.ts
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export const lambdaHandler = async (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
    return {
        statusCode: 200,
        body: `👋 hey`
    }
}
```

- 🍺 install required packages
```
$ npm install --save @types/aws-lambda
```

- 🔧 tweak `tsconfig.json`
An async function or method in ES5/ES3 requires the 'Promise' constructor. Make sure you have a declaration for the 'Promise' constructor or include 'ES2015' in your `--lib` option.
```
// tsconfig.json
{
  "compilerOptions": {
    "lib": [ "es2015" ]
    "outDir": "./build",
    "rootDir": "./",
  }
}
```

- ⚒️ compile it
```
$ tsc
```

- 🥳 it's compiled 
```
├── README.md
├── build
│   └── hey.js
├── hey.ts
├── package-lock.json
├── package.json
└── tsconfig.json
```

## 🔍 unit test

- 🍺 install the tool kits and configure it
```
$ npm install --save-dev jest
$ npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-typescript
``` 
```
$ touch babel.config.js

// babel.config.js
module.exports = {
    presets: [
        ['@babel/preset-env', {targets: {node: 'current'}}],
        '@babel/preset-typescript',
    ],
};
```

- 🧪 create unit test script
```
$ mkdir -p test/unit
$ touch test/unit/test-handler.test.ts

// test/unit/test-handler.test.ts
import { APIGatewayProxyEvent } from "aws-lambda";
import { lambdaHandler } from "../../hey";

describe('Unit test for app handler', function () {
    it('verifies successful response', async () => {
        const event: APIGatewayProxyEvent = {
        } as any
        const result = await lambdaHandler(event)

        expect(result.statusCode).toEqual(200);
        expect(result.body).toEqual(`👋 hey`);
    });
});
```

- 🦾 test it

$ unit test:
```
$ ./node_modules/.bin/jest init

$ ./node_modules/.bin/jest init .
 PASS  test/unit/test-handler.test.ts
  Unit test for app handler
    ✓ verifies successful response (2 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.537 s
Ran all test suites matching /init|./i.

```
<p align="center">
  <img width=300 src="https://media.giphy.com/media/j4FjeSKl2nn5R89cmi/giphy.gif">
</p>