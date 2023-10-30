Feature: Navigate to Sport Page

Feature Verify Premier league standing table data

    @smoke
    Scenario: Verify Premier league standing table
        Given I am on the "home" page
        And I am directed to "home" page
        And I click the "got it" button
        When I click the "sport" button
        And I am directed to "sport news" page
        And the "sport news header" should contain the text "Sport News"
        And I scroll to the "premier league" table
        Then the "premier league" table should equal the following:
            | 1 | Tottenham | 10 | 26 |
            | 2 | Arsenal   | 10 | 24 |
            | 3 | Man City  | 10 | 24 |
            | 4 | Liverpool | 10 | 23 |
        And the "premier league" table should not equal the following:
            | 1 | West Ham | 10 | 23 |
            | 2 | Burnley  | 10 | 21 |
