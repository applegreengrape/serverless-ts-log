# 🕰️ Day 03

## 🦾 I am a state machine 🦿

### Recap & Restructure

make a `ts` folder to handle the typescript build and test. And it will be easier to add more typescript functions/lambdas
```
$ tree -I node_modules
.
├── samconfig.toml
├── template.yaml
└── ts
    ├── babel.config.js
    ├── build
    │   └── src
    │       ├── hey.js
    │       └── package.json
    ├── package-lock.json
    ├── package.json
    ├── src
    │   └── hey.ts
    ├── test
    │   ├── integration
    │   │   └── handler.integration.test.ts
    │   └── unit
    │       └── test-handler.test.ts
    └── tsconfig.json

```
N.B. make sure the `package.json` is included in the build location (`ts/build/src`) before `sam build`


### Background readings:
- [What is AWS Step Functions?](https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html)
- [Tutorials for Step Functions](https://docs.aws.amazon.com/step-functions/latest/dg/tutorials.html)

Très bien! Let's start with a super simple step functions:

<img src="./sf.png">

