@US_GX-756
Feature: ✅SpaceBeyond | Account | Log-In and Log-Out
	#{panel:bgColor=#deebff}
	#* *AS* website User of the website SpaceAndBeyond
	#* *I* want to *Login and Logout*
	#* *SO* that I can have control over my account
	#{panel}

	#GX-756
	@TC_GX-772 @TS_GX-757
	Scenario: US 756 | TS 757 | TC1:  Validar iniciar sesión exitosamente
		When the user enters a existing credentials as "<username>" and "<password>" in the form
		And clicks on the Log In button
		Then the user must be logged in and moved to the home page
		And the Login link of the navigation bar should display a welcome msg as "<msg>"
		Examples:
		  |username|password|msg|
		  | Ely|123testing|Hello|
