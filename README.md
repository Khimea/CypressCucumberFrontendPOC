# POC Cypress + CucumberJS


[Cucumber-JS](https://github.com/cucumber/cucumber-js) Integration with E2E functional testing of UI using cypress


- Clone the repo
- Install dependencies `npm install`
- To run tests on private websites,
  - run `npm run test:cypress` 

Understand how many parallel sessions you need by using our [Parallel Test Calculator](https://www.browserstack.com/automate/parallel-calculator?ref=github)

## Integrate your test suite
```
npm i cypress
npm i cypress-cucumber-preprocessor
```

2. Setup

- Adds a new command for running tests on browserstack in scripts tag of package.json,

```
"scripts": {
  "cypress-test": "cypress run [args]",
  "cypress-ui": "cypress open"
},

```
