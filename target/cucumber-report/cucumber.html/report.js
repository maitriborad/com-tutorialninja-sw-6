$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TopMenu.feature");
formatter.feature({
  "line": 1,
  "name": "TopMenu Test",
  "description": "As a user I want to test my top menu",
  "id": "topmenu-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 32392235500,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should be navigated to Desktop page",
  "description": "",
  "id": "topmenu-test;user-should-be-navigated-to-desktop-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on Desktop",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on \"Show AllDesktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify that User is navigated to Desktop page using \"Desktops\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 563291300,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iMouseHoverOnDesktop()"
});
formatter.result({
  "duration": 2422083500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show AllDesktops",
      "offset": 12
    }
  ],
  "location": "TopMenuSteps.iClickOn(String)"
});
formatter.result({
  "duration": 1369164700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 53
    }
  ],
  "location": "TopMenuSteps.verifyThatUserIsNavigatedToDesktopPageUsing(String)"
});
formatter.result({
  "duration": 181669400,
  "status": "passed"
});
formatter.after({
  "duration": 1271471000,
  "status": "passed"
});
formatter.before({
  "duration": 11049030300,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User should be navigated to Laptop and Notebook page",
  "description": "",
  "id": "topmenu-test;user-should-be-navigated-to-laptop-and-notebook-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I mouse hover on Laptop and Notebook",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on \"Show AllLaptops \u0026 Notebooks\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify that User is navigated to Laptop page using \"Laptops \u0026 Notebooks\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 18600,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iMouseHoverOnLaptopAndNotebook()"
});
formatter.result({
  "duration": 1643500700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show AllLaptops \u0026 Notebooks",
      "offset": 12
    }
  ],
  "location": "TopMenuSteps.iClickOn(String)"
});
formatter.result({
  "duration": 942388600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Laptops \u0026 Notebooks",
      "offset": 52
    }
  ],
  "location": "TopMenuSteps.verifyThatUserIsNavigatedToLaptopPageUsing(String)"
});
formatter.result({
  "duration": 48956700,
  "status": "passed"
});
formatter.after({
  "duration": 810584800,
  "status": "passed"
});
formatter.before({
  "duration": 5728164600,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User should be navigated to Component page",
  "description": "",
  "id": "topmenu-test;user-should-be-navigated-to-component-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@smoke"
    },
    {
      "line": 18,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I mouse hover on Component",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I click on \"Show AllComponents\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Verify that User is navigated to Component page using \"Components\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 16000,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iMouseHoverOnComponent()"
});
formatter.result({
  "duration": 655976400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show AllComponents",
      "offset": 12
    }
  ],
  "location": "TopMenuSteps.iClickOn(String)"
});
formatter.result({
  "duration": 589103900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Components",
      "offset": 55
    }
  ],
  "location": "TopMenuSteps.verifyThatUserIsNavigatedToComponentPageUsing(String)"
});
formatter.result({
  "duration": 40384290000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h2[contains(text(),\u0027Laptops \u0026 Notebooks\u0027)]\"}\n  (Session info: chrome\u003d113.0.5672.93)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [403ea38a92369340f403bc13a31c6cf0, findElement {using\u003dxpath, value\u003d//h2[contains(text(),\u0027Laptops \u0026 Notebooks\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.93, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\milan\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50255}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:50255/devtoo..., se:cdpVersion: 113.0.5672.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 403ea38a92369340f403bc13a31c6cf0\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat demo.com.tutorialninja.utility.Utility.getTextFromElement(Utility.java:62)\r\n\tat demo.com.tutorialninja.pages.LaptopsAndNotebooksPage.getLaptopsAndNotebooksText(LaptopsAndNotebooksPage.java:33)\r\n\tat demo.com.tutorialninja.steps.TopMenuSteps.verifyThatUserIsNavigatedToComponentPageUsing(TopMenuSteps.java:49)\r\n\tat ✽.Then Verify that User is navigated to Component page using \"Components\"(TopMenu.feature:23)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1061899100,
  "status": "passed"
});
});