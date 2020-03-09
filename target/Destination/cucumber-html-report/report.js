$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/OrangeLogin.feature");
formatter.feature({
  "name": "Login functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.scenarioOutline({
  "name": "user shold not be login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user types username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user types password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "name": "user should not be logged in",
  "keyword": "Then "
});
formatter.step({
  "name": "user sholud see error message as \"\u003cerrormessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "errormessage"
      ]
    },
    {
      "cells": [
        "Admin",
        "admin123",
        "Invalid credentials"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User should be on OrangeHrm login page",
  "keyword": "Given "
});
formatter.match({
  "location": "OrangeHemDemoHomeWork.MyStepdefs.userShouldBeOnOrangeHrmLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user shold not be login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user types username as \"Admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "OrangeHemDemoHomeWork.MyStepdefs.userTypesUsernameAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user types password as \"admin123\"",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeHemDemoHomeWork.MyStepdefs.userTypesPasswordAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeHemDemoHomeWork.MyStepdefs.userClickOnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "OrangeHemDemoHomeWork.MyStepdefs.userShouldNotBeLoggedIn()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [false] but found [true]\r\n\tat org.testng.Assert.fail(Assert.java:97)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:969)\r\n\tat org.testng.Assert.assertFalse(Assert.java:65)\r\n\tat org.testng.Assert.assertFalse(Assert.java:75)\r\n\tat OrangeHemDemoHomeWork.MyStepdefs.userShouldNotBeLoggedIn(MyStepdefs.java:39)\r\n\tat ✽.user should not be logged in(file:///C:/Users/Toshiba/Downloads/OrangeHrmDemo/./src/test/resources/features/OrangeLogin.feature:11)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user sholud see error message as \"Invalid credentials\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OrangeHemDemoHomeWork.MyStepdefs.userSholudSeeErrorMessageAs(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.write("!!!!!!......Scenario Failed....!!!!!! Please see attached screenshot for the error/issue");
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
});