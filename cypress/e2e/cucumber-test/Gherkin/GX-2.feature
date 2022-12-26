Feature: test

    Scenario: tester clones the UPEX's project
        Given tester has access to upex workspace
        When tester run a "git clone" plus the project url on the terminal
        Then the project repo should be pulled to the tester directory as expected.