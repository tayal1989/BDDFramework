$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature/login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#First Way of doing BDD - the hard code way"
    },
    {
      "line": 5,
      "value": "#Scenario: Free CRM Login Test Scenario"
    },
    {
      "line": 6,
      "value": "#"
    },
    {
      "line": 7,
      "value": "#Given User is already on Login Page"
    },
    {
      "line": 8,
      "value": "#When Title of login page is Free CRM"
    },
    {
      "line": 9,
      "value": "#Then User enters username and password"
    },
    {
      "line": 10,
      "value": "#And User clicks on login button"
    },
    {
      "line": 11,
      "value": "#And User is on home page"
    },
    {
      "line": 12,
      "value": "#And User closes the browser"
    },
    {
      "line": 14,
      "value": "# Second way of doing BDD - writing values of variable here"
    },
    {
      "line": 15,
      "value": "#Scenario: Free CRM Login Test Scenario 2"
    },
    {
      "line": 16,
      "value": "#"
    },
    {
      "line": 17,
      "value": "#Given User is already on Login Page"
    },
    {
      "line": 18,
      "value": "#When Title of login page is Free CRM"
    },
    {
      "line": 19,
      "value": "#Then User enters \"tayal1989@gmail.com\" and \"Com@1357\""
    },
    {
      "line": 20,
      "value": "#And User clicks on login button"
    },
    {
      "line": 21,
      "value": "#And User is on home page"
    },
    {
      "line": 22,
      "value": "#And User closes the browser"
    },
    {
      "line": 24,
      "value": "# Third way of doing BDD - writing values as examples"
    },
    {
      "line": 25,
      "value": "#Scenario Outline: Free CRM Login Test Scenario 2"
    },
    {
      "line": 26,
      "value": "#"
    },
    {
      "line": 27,
      "value": "#Given User is already on Login Page"
    },
    {
      "line": 28,
      "value": "#When Title of login page is Free CRM"
    },
    {
      "line": 29,
      "value": "#Then User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\""
    },
    {
      "line": 30,
      "value": "#And User clicks on login button"
    },
    {
      "line": 31,
      "value": "#And User is on home page"
    },
    {
      "line": 32,
      "value": "#And User closes the browser"
    },
    {
      "line": 33,
      "value": "#"
    },
    {
      "line": 34,
      "value": "#Examples:"
    },
    {
      "line": 35,
      "value": "#\t|\tusername | password |"
    },
    {
      "line": 36,
      "value": "#\t| tayal1989@gmail.com | Com@1357 |"
    },
    {
      "line": 37,
      "value": "#\t| tom\t\t\t\t\t\t\t\t\t| test456\t |"
    },
    {
      "line": 39,
      "value": "# Third way of doing BDD - writing values as examples and message"
    }
  ],
  "line": 40,
  "name": "Free CRM Login Test Scenario 2",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario-2",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 42,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "Title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User is on home page with message as \"\u003cmessage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User closes the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 49,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario-2;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "message"
      ],
      "line": 50,
      "id": "free-crm-login-feature;free-crm-login-test-scenario-2;;1"
    },
    {
      "cells": [
        "tayal1989@gmail.com",
        "Com@1357",
        "Cogmento CRM"
      ],
      "line": 51,
      "id": "free-crm-login-feature;free-crm-login-test-scenario-2;;2"
    },
    {
      "cells": [
        "tom",
        "test456",
        "Cogmento CRM"
      ],
      "line": 52,
      "id": "free-crm-login-feature;free-crm-login-test-scenario-2;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 51,
  "name": "Free CRM Login Test Scenario 2",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario-2;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 42,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "Title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "User enters \"tayal1989@gmail.com\" and \"Com@1357\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User is on home page with message as \"Cogmento CRM\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 12096134518,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 13770496,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tayal1989@gmail.com",
      "offset": 13
    },
    {
      "val": "Com@1357",
      "offset": 39
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 340051602,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 63839144,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cogmento CRM",
      "offset": 38
    }
  ],
  "location": "LoginStepDefinition.user_is_on_home_page(String)"
});
formatter.result({
  "duration": 5081630,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_closes_browser()"
});
formatter.result({
  "duration": 1096390712,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Free CRM Login Test Scenario 2",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario-2;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 42,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "Title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "User enters \"tom\" and \"test456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User is on home page with message as \"Cogmento CRM\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 8500054081,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 5601123,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tom",
      "offset": 13
    },
    {
      "val": "test456",
      "offset": 23
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 156167867,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 68391808,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cogmento CRM",
      "offset": 38
    }
  ],
  "location": "LoginStepDefinition.user_is_on_home_page(String)"
});
formatter.result({
  "duration": 4367132,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_closes_browser()"
});
formatter.result({
  "duration": 826660462,
  "status": "passed"
});
});