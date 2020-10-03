Feature: Free CRM Login Feature

#First Way of doing BDD - the hard code way

#Scenario: Free CRM Login Test Scenario
#
#Given User is already on Login Page
#When Title of login page is Free CRM
#Then User enters username and password
#And User clicks on login button
#And User is on home page
#And User closes the browser

# Second way of doing BDD - writing values of variable here
#Scenario: Free CRM Login Test Scenario 2
#
#Given User is already on Login Page
#When Title of login page is Free CRM
#Then User enters "tayal1989@gmail.com" and "Com@1357"
#And User clicks on login button
#And User is on home page
#And User closes the browser

# Third way of doing BDD - writing values as examples
#Scenario Outline: Free CRM Login Test Scenario 2
#
#Given User is already on Login Page
#When Title of login page is Free CRM
#Then User enters "<username>" and "<password>"
#And User clicks on login button
#And User is on home page
#And User closes the browser
#
#Examples:
#	|	username | password |
#	| tayal1989@gmail.com | Com@1357 |
#	| tom									| test456	 |
	
# Third way of doing BDD - writing values as examples and message
Scenario Outline: Free CRM Login Test Scenario 2

Given User is already on Login Page
When Title of login page is Free CRM
Then User enters "<username>" and "<password>"
And User clicks on login button
And User is on home page with message as "<message>"
And User closes the browser

Examples:
	|	username | password | message |
	| tayal1989@gmail.com | Com@1357 | Cogmento CRM |
	| tom									| test456	 | Cogmento CRM |