$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/search.feature");
formatter.feature({
  "name": "Check the description of a property in the nobroker application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Search property to buy on nobroker and verify description exists",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Buyer opens the nobroker application \"https://www.nobroker.in/\"",
  "keyword": "When "
});
formatter.step({
  "name": "Buyer clicks on Buy option",
  "keyword": "And "
});
formatter.step({
  "name": "Buyer selects the City \"\u003ccity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Buyer enters keyword to search the localities \"\u003ckeyword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Search Results are displayed with at least \u003clocality_search_count\u003e results",
  "keyword": "Then "
});
formatter.step({
  "name": "Buyer selects locality \"\u003clocality1\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Locality \"\u003clocality1\u003e\" is selected in the search box",
  "keyword": "Then "
});
formatter.step({
  "name": "Buyer enters keyword to search the localities \"\u003ckeyword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Search Results are displayed with at least \u003clocality_search_count\u003e results",
  "keyword": "Then "
});
formatter.step({
  "name": "Buyer selects locality \"\u003clocality2\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Locality \"\u003clocality2\u003e\" is selected in the search box",
  "keyword": "Then "
});
formatter.step({
  "name": "Buyer selects apartment types \"\u003ctypes\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Buyer clicks on Search button",
  "keyword": "And "
});
formatter.step({
  "name": "Property Listing page is opened with at least \u003cresult_count\u003e result",
  "keyword": "Then "
});
formatter.step({
  "name": "Buyer clicks on \u003cproperty_index\u003eth property on the page",
  "keyword": "When "
});
formatter.step({
  "name": "Property page opens with description",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "city",
        "keyword",
        "locality1",
        "locality2",
        "types",
        "result_count",
        "locality_search_count",
        "property_index"
      ]
    },
    {
      "cells": [
        "Mumbai",
        "Malad",
        "Malad East, Malkani Estate, Pushpa Park, Malad East, Mumbai, Maharashtra",
        "Malad west, Sundar Ln, Kanchpada, Malad West, Mumbai, Maharashtra, India",
        "2 BHK,3 BHK",
        "1",
        "1",
        "4"
      ]
    },
    {
      "cells": [
        "Bangalore",
        "Koramangala",
        "Koramangala 6th Block, Koramangala, Bengaluru, Karnataka, India",
        "Koramangala 1st Block, HSR Layout 5th Sector, Bengaluru, Karnataka, India",
        "1 RK,4+ BHK",
        "1",
        "1",
        "10"
      ]
    },
    {
      "cells": [
        "nosuchcity",
        "na",
        "na",
        "na",
        "1 RK,4+ BHK",
        "1",
        "1",
        "10"
      ]
    },
    {
      "cells": [
        "Chennai",
        "nosuchlocality",
        "na",
        "na",
        "1 RK,4+ BHK",
        "1",
        "1",
        "10"
      ]
    },
    {
      "cells": [
        "Bangalore",
        "Koramangala",
        "Koramangala 6th Block, Koramangala, Bengaluru, Karnataka, India",
        "Koramangala 1st Block, HSR Layout 5th Sector, Bengaluru, Karnataka, India",
        "1 RK,100 BHK",
        "1",
        "1",
        "10"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Search property to buy on nobroker and verify description exists",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Buyer opens the nobroker application \"https://www.nobroker.in/\"",
  "keyword": "When "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.openApplication(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Buyer clicks on Buy option",
  "keyword": "And "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.clickBuyOption()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Buyer selects the City \"Mumbai\"",
  "keyword": "And "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.selectCity(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Buyer enters keyword to search the localities \"Malad\"",
  "keyword": "And "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.EnterKeyword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Search Results are displayed with at least 1 results",
  "keyword": "Then "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.localitySearchDisplayed(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Buyer selects locality \"Malad East, Malkani Estate, Pushpa Park, Malad East, Mumbai, Maharashtra\"",
  "keyword": "When "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.SelectLocality(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Locality \"Malad East, Malkani Estate, Pushpa Park, Malad East, Mumbai, Maharashtra\" is selected in the search box",
  "keyword": "Then "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.localitySelectedInSearchBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Buyer enters keyword to search the localities \"Malad\"",
  "keyword": "When "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.EnterKeyword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Search Results are displayed with at least 1 results",
  "keyword": "Then "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.localitySearchDisplayed(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Buyer selects locality \"Malad west, Sundar Ln, Kanchpada, Malad West, Mumbai, Maharashtra, India\"",
  "keyword": "When "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.SelectLocality(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Locality \"Malad west, Sundar Ln, Kanchpada, Malad West, Mumbai, Maharashtra, India\" is selected in the search box",
  "keyword": "Then "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.localitySelectedInSearchBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Buyer selects apartment types \"2 BHK,3 BHK\"",
  "keyword": "When "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.ApartmentTypes(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Buyer clicks on Search button",
  "keyword": "And "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.ClickSearchButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Property Listing page is opened with at least 1 result",
  "keyword": "Then "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.assertPropertyListingPage(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Buyer clicks on 4th property on the page",
  "keyword": "When "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.clicksProperty(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Property page opens with description",
  "keyword": "Then "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.propertyPageOpen()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Search property to buy on nobroker and verify description exists",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Buyer opens the nobroker application \"https://www.nobroker.in/\"",
  "keyword": "When "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.openApplication(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Buyer clicks on Buy option",
  "keyword": "And "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.clickBuyOption()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Buyer selects the City \"Bangalore\"",
  "keyword": "And "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.selectCity(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Buyer enters keyword to search the localities \"Koramangala\"",
  "keyword": "And "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.EnterKeyword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Search Results are displayed with at least 1 results",
  "keyword": "Then "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.localitySearchDisplayed(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Buyer selects locality \"Koramangala 6th Block, Koramangala, Bengaluru, Karnataka, India\"",
  "keyword": "When "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.SelectLocality(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Locality \"Koramangala 6th Block, Koramangala, Bengaluru, Karnataka, India\" is selected in the search box",
  "keyword": "Then "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.localitySelectedInSearchBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Buyer enters keyword to search the localities \"Koramangala\"",
  "keyword": "When "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.EnterKeyword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Search Results are displayed with at least 1 results",
  "keyword": "Then "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.localitySearchDisplayed(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Buyer selects locality \"Koramangala 1st Block, HSR Layout 5th Sector, Bengaluru, Karnataka, India\"",
  "keyword": "When "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.SelectLocality(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Locality \"Koramangala 1st Block, HSR Layout 5th Sector, Bengaluru, Karnataka, India\" is selected in the search box",
  "keyword": "Then "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.localitySelectedInSearchBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Buyer selects apartment types \"1 RK,4+ BHK\"",
  "keyword": "When "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.ApartmentTypes(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Buyer clicks on Search button",
  "keyword": "And "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.ClickSearchButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Property Listing page is opened with at least 1 result",
  "keyword": "Then "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.assertPropertyListingPage(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Buyer clicks on 10th property on the page",
  "keyword": "When "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.clicksProperty(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Property page opens with description",
  "keyword": "Then "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.propertyPageOpen()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Search property to buy on nobroker and verify description exists",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Buyer opens the nobroker application \"https://www.nobroker.in/\"",
  "keyword": "When "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.openApplication(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Buyer clicks on Buy option",
  "keyword": "And "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.clickBuyOption()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Buyer selects the City \"nosuchcity\"",
  "keyword": "And "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.selectCity(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for presence of element located by: By.xpath: //div[text()\u003d\u0027nosuchcity\u0027] (tried for 1 second(s) with 500 milliseconds interval)\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:87)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:231)\n\tat nobroker.buyproperty.SearchSteps.waitForElement(SearchSteps.java:44)\n\tat nobroker.buyproperty.SearchSteps.selectCity(SearchSteps.java:66)\n\tat ✽.Buyer selects the City \"nosuchcity\"(file:///Users/rohit/nobroker-search-test/src/test/resources/search.feature:6)\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[text()\u003d\u0027nosuchcity\u0027]\"}\n  (Session info: chrome\u003d104.0.5112.20)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.3.0\u0027, revision: \u0027a4995e2c09*\u0027\nSystem info: host: \u0027CLPT1396.lan\u0027, ip: \u0027fe80:0:0:0:ca2:a8c4:bb6f:b7b1%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [06f09e2655ed85f2833c1c0766f99f42, findElement {using\u003dxpath, value\u003d//div[text()\u003d\u0027nosuchcity\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 104.0.5112.20, chrome: {chromedriverVersion: 104.0.5112.20 (9ac43f954ebb..., userDataDir: /var/folders/7m/c6tj94zn6lg...}, goog:chromeOptions: {debuggerAddress: localhost:55288}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: MAC, proxy: Proxy(), se:cdp: ws://localhost:55288/devtoo..., se:cdpVersion: 104.0.5112.20, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 06f09e2655ed85f2833c1c0766f99f42\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:569)\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:387)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:379)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:174)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:171)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\n\tat nobroker.buyproperty.SearchSteps.waitForElement(SearchSteps.java:44)\n\tat nobroker.buyproperty.SearchSteps.selectCity(SearchSteps.java:66)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:66)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:221)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\n",
  "status": "failed"
});
formatter.step({
  "name": "Buyer enters keyword to search the localities \"na\"",
  "keyword": "And "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.EnterKeyword(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Search Results are displayed with at least 1 results",
  "keyword": "Then "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.localitySearchDisplayed(java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Buyer selects locality \"na\"",
  "keyword": "When "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.SelectLocality(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Locality \"na\" is selected in the search box",
  "keyword": "Then "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.localitySelectedInSearchBox(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Buyer enters keyword to search the localities \"na\"",
  "keyword": "When "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.EnterKeyword(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Search Results are displayed with at least 1 results",
  "keyword": "Then "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.localitySearchDisplayed(java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Buyer selects locality \"na\"",
  "keyword": "When "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.SelectLocality(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Locality \"na\" is selected in the search box",
  "keyword": "Then "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.localitySelectedInSearchBox(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Buyer selects apartment types \"1 RK,4+ BHK\"",
  "keyword": "When "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.ApartmentTypes(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Buyer clicks on Search button",
  "keyword": "And "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.ClickSearchButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Property Listing page is opened with at least 1 result",
  "keyword": "Then "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.assertPropertyListingPage(java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Buyer clicks on 10th property on the page",
  "keyword": "When "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.clicksProperty(java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Property page opens with description",
  "keyword": "Then "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.propertyPageOpen()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Search property to buy on nobroker and verify description exists",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Buyer opens the nobroker application \"https://www.nobroker.in/\"",
  "keyword": "When "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.openApplication(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Buyer clicks on Buy option",
  "keyword": "And "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.clickBuyOption()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Buyer selects the City \"Chennai\"",
  "keyword": "And "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.selectCity(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Buyer enters keyword to search the localities \"nosuchlocality\"",
  "keyword": "And "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.EnterKeyword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Search Results are displayed with at least 1 results",
  "keyword": "Then "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.localitySearchDisplayed(java.lang.Integer)"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for presence of element located by: By.id: autocomplete-dropdown-container (tried for 10 second(s) with 500 milliseconds interval)\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:87)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:231)\n\tat nobroker.buyproperty.SearchSteps.waitForElement(SearchSteps.java:44)\n\tat nobroker.buyproperty.SearchSteps.localitySearchDisplayed(SearchSteps.java:86)\n\tat ✽.Search Results are displayed with at least 1 results(file:///Users/rohit/nobroker-search-test/src/test/resources/search.feature:8)\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#autocomplete\\-dropdown\\-container\"}\n  (Session info: chrome\u003d104.0.5112.20)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.3.0\u0027, revision: \u0027a4995e2c09*\u0027\nSystem info: host: \u0027CLPT1396.lan\u0027, ip: \u0027fe80:0:0:0:ca2:a8c4:bb6f:b7b1%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [6422ddfaad7bc5606b18cd8c9957a358, findElement {using\u003did, value\u003dautocomplete-dropdown-container}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 104.0.5112.20, chrome: {chromedriverVersion: 104.0.5112.20 (9ac43f954ebb..., userDataDir: /var/folders/7m/c6tj94zn6lg...}, goog:chromeOptions: {debuggerAddress: localhost:55351}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: MAC, proxy: Proxy(), se:cdp: ws://localhost:55351/devtoo..., se:cdpVersion: 104.0.5112.20, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 6422ddfaad7bc5606b18cd8c9957a358\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:569)\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:387)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:379)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:174)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:171)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\n\tat nobroker.buyproperty.SearchSteps.waitForElement(SearchSteps.java:44)\n\tat nobroker.buyproperty.SearchSteps.localitySearchDisplayed(SearchSteps.java:86)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:66)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:221)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\n",
  "status": "failed"
});
formatter.step({
  "name": "Buyer selects locality \"na\"",
  "keyword": "When "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.SelectLocality(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Locality \"na\" is selected in the search box",
  "keyword": "Then "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.localitySelectedInSearchBox(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Buyer enters keyword to search the localities \"nosuchlocality\"",
  "keyword": "When "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.EnterKeyword(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Search Results are displayed with at least 1 results",
  "keyword": "Then "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.localitySearchDisplayed(java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Buyer selects locality \"na\"",
  "keyword": "When "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.SelectLocality(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Locality \"na\" is selected in the search box",
  "keyword": "Then "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.localitySelectedInSearchBox(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Buyer selects apartment types \"1 RK,4+ BHK\"",
  "keyword": "When "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.ApartmentTypes(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Buyer clicks on Search button",
  "keyword": "And "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.ClickSearchButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Property Listing page is opened with at least 1 result",
  "keyword": "Then "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.assertPropertyListingPage(java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Buyer clicks on 10th property on the page",
  "keyword": "When "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.clicksProperty(java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Property page opens with description",
  "keyword": "Then "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.propertyPageOpen()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Search property to buy on nobroker and verify description exists",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Buyer opens the nobroker application \"https://www.nobroker.in/\"",
  "keyword": "When "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.openApplication(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Buyer clicks on Buy option",
  "keyword": "And "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.clickBuyOption()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Buyer selects the City \"Bangalore\"",
  "keyword": "And "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.selectCity(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Buyer enters keyword to search the localities \"Koramangala\"",
  "keyword": "And "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.EnterKeyword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Search Results are displayed with at least 1 results",
  "keyword": "Then "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.localitySearchDisplayed(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Buyer selects locality \"Koramangala 6th Block, Koramangala, Bengaluru, Karnataka, India\"",
  "keyword": "When "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.SelectLocality(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Locality \"Koramangala 6th Block, Koramangala, Bengaluru, Karnataka, India\" is selected in the search box",
  "keyword": "Then "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.localitySelectedInSearchBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Buyer enters keyword to search the localities \"Koramangala\"",
  "keyword": "When "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.EnterKeyword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Search Results are displayed with at least 1 results",
  "keyword": "Then "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.localitySearchDisplayed(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Buyer selects locality \"Koramangala 1st Block, HSR Layout 5th Sector, Bengaluru, Karnataka, India\"",
  "keyword": "When "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.SelectLocality(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Locality \"Koramangala 1st Block, HSR Layout 5th Sector, Bengaluru, Karnataka, India\" is selected in the search box",
  "keyword": "Then "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.localitySelectedInSearchBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Buyer selects apartment types \"1 RK,100 BHK\"",
  "keyword": "When "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.ApartmentTypes(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for presence of element located by: By.xpath: //*[text()\u003d\u0027100 BHK\u0027] (tried for 5 second(s) with 500 milliseconds interval)\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:87)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:231)\n\tat nobroker.buyproperty.SearchSteps.waitForElement(SearchSteps.java:44)\n\tat nobroker.buyproperty.SearchSteps.ApartmentTypes(SearchSteps.java:141)\n\tat ✽.Buyer selects apartment types \"1 RK,100 BHK\"(file:///Users/rohit/nobroker-search-test/src/test/resources/search.feature:15)\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[text()\u003d\u0027100 BHK\u0027]\"}\n  (Session info: chrome\u003d104.0.5112.20)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.3.0\u0027, revision: \u0027a4995e2c09*\u0027\nSystem info: host: \u0027CLPT1396.lan\u0027, ip: \u0027fe80:0:0:0:ca2:a8c4:bb6f:b7b1%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [c440b6fc58f92cd3c4137bddb1f2bd96, findElement {using\u003dxpath, value\u003d//*[text()\u003d\u0027100 BHK\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 104.0.5112.20, chrome: {chromedriverVersion: 104.0.5112.20 (9ac43f954ebb..., userDataDir: /var/folders/7m/c6tj94zn6lg...}, goog:chromeOptions: {debuggerAddress: localhost:55464}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: MAC, proxy: Proxy(), se:cdp: ws://localhost:55464/devtoo..., se:cdpVersion: 104.0.5112.20, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c440b6fc58f92cd3c4137bddb1f2bd96\n\tat sun.reflect.GeneratedConstructorAccessor18.newInstance(Unknown Source)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:569)\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:387)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:379)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:174)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:171)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\n\tat nobroker.buyproperty.SearchSteps.waitForElement(SearchSteps.java:44)\n\tat nobroker.buyproperty.SearchSteps.ApartmentTypes(SearchSteps.java:141)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:66)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:221)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\n",
  "status": "failed"
});
formatter.step({
  "name": "Buyer clicks on Search button",
  "keyword": "And "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.ClickSearchButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Property Listing page is opened with at least 1 result",
  "keyword": "Then "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.assertPropertyListingPage(java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Buyer clicks on 10th property on the page",
  "keyword": "When "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.clicksProperty(java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Property page opens with description",
  "keyword": "Then "
});
formatter.match({
  "location": "nobroker.buyproperty.SearchSteps.propertyPageOpen()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});