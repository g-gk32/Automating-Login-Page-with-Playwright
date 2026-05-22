This an framework developed with Playwright and Typescript desgned on Page Object Model
It also have options to integrate allure repors if the user is not ok with playwright report(Depenencies installed not configured)
Tests are executed in parallel using Playwright’s built-in worker mechanism.
=========================================================================================================
Framework Structure
========================================================================================================
lib/
 ├── baseTest.ts
 ├── webActions.ts

pagefactory/
 ├── pageRepo/
 │     └── LoginPage.ts
 ├── objectRepo/
 │     └── LoginPageObjects.ts

tests/
 └── login.spec.ts

* lib/webActions.ts -> Reusable Action Layer, this is your core utility/helper class.
* lib/baseTest.ts > Test Foundation Layer, this is your custom test wrapper using Playwright fixtures
* pagefactory/pageRepo -> Page Action Layer,this contains Page Object Classes (POM classes)
* pagefactory/objectRepo -> Locator Layer,place for all selectors (locators)
* tests/ -> Test Layer,this is where actual test cases are written

======================================================================================================
The test cases are annotated with @suite and the tests run parallely

To Execute all Tests with annotations @suite - npm run test:suite
To Generate Playwright HTML report - npx playwright show-report

Setup And config
npm install
npx playwright install

