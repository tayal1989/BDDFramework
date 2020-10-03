Feature: Free CRM Login Feature with table

# Fourth way of doing BDD - writing values as data tables
# But disadvantage of this feature is it is applicable for only
# 1 data table not for multiple data
Scenario: Free CRM Login Test Scenario 2

Given User is already on Login Page
When Title of login page is Free CRM
Then User enters username and password
| tayal1989@gmail.com | Com@1357 |

And User clicks on login button
And User is on home page with message
| Cogmento CRM |

And User closes the browser