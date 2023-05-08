@GX2-1270 @QA @TestExecutionReport
Feature: US 1268 | TX: ✅ToolsQA | Interactions | Selectable

	Background:
		#@PRC_GX2-1480
		Given user is in the website

	@TC_GX2-1458 @SUITE_GX2-1269 @ToolsQA
	Scenario: 1268 | TC1: Verify user can select List pagination
		When clicks on List pagination
		Then should see the List elements

	@TC_GX2-1459 @SUITE_GX2-1269 @ToolsQA
	Scenario: 1268 | TC2: Verify user can select elements in List
		Given user is in List Pagination page tc2
		When clicks on each elements of the List tc2
		Then should see all elements selected tc2
	@TC_GX2-1460 @SUITE_GX2-1269 @ToolsQA
	Scenario: 1268 | TC3: Verify user can unselect elements in List
		Given user is in List Pagination page tc3
		When clicks on each elements of the list tc3
		When clicks again on each elements of the list tc3
		Then should see all element unselected tc3
	@TC_GX2-1461 @SUITE_GX2-1269 @ToolsQA
	Scenario: 1268 | TC4: Verify user can select Grid pagination
		When clicks on Grid pagination
		Then should see the Grid elements
	@TC_GX2-1462 @SUITE_GX2-1269 @ToolsQA
	Scenario: 1268 | TC5: Verify user can select elements in Grid
		Given user is in Grid Pagination page tc5
		When clicks on each elements of the Grid tc5
		Then should see all elements selected tc5
	@TC_GX2-1463 @SUITE_GX2-1269 @ToolsQA
	Scenario: 1268 | TC6: Verify user can unselect elements in Grid
		Given user is in Grid Pagination page tc6
		When clicks on each elements of the Grid tc6
		When clicks again on each elements of the Grid tc6
		Then should see all element unselected tc6
