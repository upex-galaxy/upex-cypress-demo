@GX-5 @AutomationTriggered @Cucumber @Cypress @GitHubActions @Labs @Xray
@US_GX-2
Feature: Labs: CI Framework Test for Xray with Cypress and GitHub Actions
	#As a Workspace Manager,
	#
	#I want to test Cypress-GitHub TX Result Integration; by clicking on a Jira Action, the CI tool can be triggered and run all of the associated test to this feature and update the test status back to Jira again.
	#
	#So that the Tests can be updated from Jira Action.

	@TC_GX-4 @TS_GX-3 @BDD @Cucumber @Feature @Gherkin
	Scenario Outline: US 2 | TS 3 | TC1: Check the Login correctly to Orange CRM Website
		Given User is at the login page
		When User enters username as '<username>' and password as '<password>'
		And User clicks on login button
		Then User is able to successfully login to the Website
		Examples:
			| username | password |
			| Admin    | admin123 |
