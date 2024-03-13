# POC Cypress + CucumberJS + BrowserStack


[Cucumber-JS](https://github.com/cucumber/cucumber-js) Integration with E2E functional testing of UI using cypress

<img src = "https://media-exp1.licdn.com/dms/image/C5612AQHKVqQUMDeNJA/article-cover_image-shrink_600_2000/0/1568764160343?e=1675296000&v=beta&t=72fehWB4RAv66uV6sSFEoMfzeuK3D7pDUE0Hy4bJkHg" height = "100">


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
