Feature: Account Login

	Background: Precondiciones para iniciar sesión
		Given User is signed up
		And User is at the login page

	@TC_GX-5626
	Scenario Outline: Cucumber | TC1: Check the Login correctly to Orange CRM Website
		When User enters username as '<username>' and password as '<password>' and clicks on login button
		Then User should be able to login to the Website
		And should display a friendly message as "User has successfully logged in"
		Examples:
			| username | password |
			| Admin    | admin123 |

	@TC_GX-5628
	Scenario Outline: Cucumber | TC2: Check the Login is not possible when user enters invalid credentials
		When User enters invalid username as '<username>' and password as '<password>' and clicks on login button
		Then User should NOT be able to login to the Website
		And should display an error message as "Please, insert a valid value"
		Examples:
			| username | password  |
			| Admin2   | admin1234 |

