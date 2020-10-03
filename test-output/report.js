$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature/loginusingtable.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature with table",
  "description": "",
  "id": "free-crm-login-feature-with-table",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "# Fourth way of doing BDD - writing values as data tables"
    }
  ],
  "line": 4,
  "name": "Free CRM Login Test Scenario 2",
  "description": "",
  "id": "free-crm-login-feature-with-table;free-crm-login-test-scenario-2",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters username and password",
  "rows": [
    {
      "cells": [
        "tayal1989@gmail.com",
        "Com@1357"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User is on home page with message",
  "rows": [
    {
      "cells": [
        "Cogmento CRM"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "TableStepDefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 13324053131,
  "status": "passed"
});
formatter.match({
  "location": "TableStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 16713760,
  "status": "passed"
});
formatter.match({
  "location": "TableStepDefinition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 304981916,
  "status": "passed"
});
formatter.match({
  "location": "TableStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 56472299,
  "status": "passed"
});
formatter.match({
  "location": "TableStepDefinition.user_is_on_home_page_with_message(DataTable)"
});
formatter.result({
  "duration": 3510916,
  "status": "passed"
});
formatter.match({
  "location": "TableStepDefinition.user_closes_browser()"
});
formatter.result({
  "duration": 1011253563,
  "status": "passed"
});
});