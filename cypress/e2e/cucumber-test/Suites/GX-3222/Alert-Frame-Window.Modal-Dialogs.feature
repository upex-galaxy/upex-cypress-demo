Feature: ToolsQA | Alert-Frame-Window | Modal Dialogs

	Background: Precondition
		#@PREC_GX-3362
		Given the user must be located in the Modal Dialogs section of QAtools
		

	@TC_GX-3360 @TS_GX-3222
	Scenario: 3222 | TC1:  Validate being able to click on the Small Modal button.
		When the user presses the Small modal button
		Then a Small Modal appears
		And press the 'X' button to close the modal
	@TC_GX-3361 @TS_GX-3222
	Scenario: 3222 | TC2:  Validate being able to click on the “Large Modal” button.
		When the user presses the 'Large modal' button
		Then a Large Modal appears
		And press the 'Close' button to close the modal



