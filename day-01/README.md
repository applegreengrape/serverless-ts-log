
# 🕰️ Day 01 

## 👋 hello world typescript lambda (part one)

- 🍺 install typescript
```
npm install -g typescript
```

- 🎬 init 
```
npm init -y
tsc --init
```

- ✍🏻 create the typescipt file
```
touch hey.ts
```
```
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
npm install --save @types/aws-lambda
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
tsc
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

## 🔍 unit test and integration test (part two)