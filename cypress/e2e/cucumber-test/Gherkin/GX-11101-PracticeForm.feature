@STORY_GX-11101
Feature: ✅ToolsQA | Forms | Practice Form
    #{panel:bgColor=#eae6ff}
    #* As a QA learner,
    #* I want to test:
    #
    ## *Filling out a form with:*
    ##* First Name
    ##* Last Name
    ##* Email
    ##* Mobile Number
    ##* Subjects
    ##* Current Address
    ## *Radio Buttons to choose Gender*
    ## *Date Picker*
    ## *Check Boxes to choose Hobbies*
    ## *Upload picture*
    ## *Select menu to chooise State and City*
    ## *Button Register*
    ## *And Submit it*.
    #
    #* So that I can improve my testing skills for this scenario.
    #{panel}

    Background:
        #@PRC_GX-11696
        Given user must be positioned in page demoqa practice form

    @TC_GX-11695 @SUITE_GX-11102 @Form @ToolsQA
    Scenario Outline: 11102 | TC1: Submit form filling all fields with valid format
        When a student fills out the form with valid data as '<firstName>''<lastName>''<email>''<numberPhone>''<address>''<subjects>''<state>'
        And click on the submit button
        Then should a modal be opened with the successfully loaded data
        Examples:
            | firstName | lastName | email           | numberPhone | address               | subjects | state |
            | David     | Smith    | smith@gmail.com | 3512448567  | Av. William Guido 345 | e        | ha    |
            | A         | Noruega1 | n@g.ar          | 3           | Av.                   | mat      | t     |

    @TC_GX-11720 @SUITE_GX-11102 @Form @ToolsQA
    Scenario Outline: 11102 | TC2: Submit form filling all fields with invalid format
        When a student fills out the form with invalid data as '<email>'
        And must be click on the submit button
        Examples:
            | email          | 
            | smithgmail.com | 
            | @gmail.com     | 
            | smith@gmailcom | 
            | @gmail.        | 
            | smith@gmail.c  |
