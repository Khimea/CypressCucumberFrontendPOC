# POC Cypress + CucumberJS + BrowserStack


[Cucumber-JS](https://github.com/cucumber/cucumber-js) Integration with BrowserStack for E2E functional testing of UI using Selenium and [browserstack-node-sdk](https://www.npmjs.com/package/browserstack-node-sdk).

![BrowserStack Logo](https://d98b8t1nnulk5.cloudfront.net/production/images/layout/logo-header.png?1469004780)

<img src = "https://media-exp1.licdn.com/dms/image/C5612AQHKVqQUMDeNJA/article-cover_image-shrink_600_2000/0/1568764160343?e=1675296000&v=beta&t=72fehWB4RAv66uV6sSFEoMfzeuK3D7pDUE0Hy4bJkHg" height = "100">


- Clone the repo
- Install dependencies `npm install`
- Set your [BrowserStack Username and Access Key](https://www.browserstack.com/accounts/settings) in [browserstack.json](browserstack.json) `npx setup --username userName --key accessKey``
- To run tests on private websites,
  - run `npm run test:cypress` or `yarn run test:remoto`

Understand how many parallel sessions you need by using our [Parallel Test Calculator](https://www.browserstack.com/automate/parallel-calculator?ref=github)

## Integrate your test suite
```
npm i @badeball/cypress-cucumber-preprocessor
npm i @bahmutov/cypress-esbuild-preprocessor
npm i cypress
npm i esbuild
npm i multiple-cucumber-html-reporter
```

2. Setup

```
npx setup --username userName --key accessKey
```

- Adds a browserstack.json file at root of your mocha project with your [BrowserStack Username and Access Key](https://www.browserstack.com/accounts/settings).
- Adds a new command for running tests on browserstack in scripts tag of package.json,

```
"scripts": {
  "browserstack-test": "browserstack-cypress run [args]",
  "cypress-test": "cypress run [args]",
  "cypress-ui": "cypress open"
},

```



## Notes

---

- You can view your test results on the [BrowserStack Automate dashboard](https://www.browserstack.com/automate)
- To test on a different set of browsers, check out our [platform configurator](https://www.browserstack.com/automate/node#setting-os-and-browser)

## Additional Resources

---

- [Documentation for writing Automate test scripts in Node](https://www.browserstack.com/automate/node)
- [Customizing your tests on BrowserStack](https://www.browserstack.com/automate/capabilities)
- [Browsers & mobile devices for selenium testing on BrowserStack](https://www.browserstack.com/list-of-browsers-and-platforms?product=automate)
- [Using REST API to access information about your tests via the command-line interface](https://www.browserstack.com/automate/rest-api)

```
