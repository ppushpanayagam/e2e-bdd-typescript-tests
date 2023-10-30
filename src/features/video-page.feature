Feature: Video Player functionalities

    Feature Verify Video player functionalities
    @smoke
    Scenario: Verify Video Player
        Given I am on the "video" page
        And I am directed to "video" page
        And I click the "got it" button
        And I scroll to the "video player" screen
        When I click the "video player" screen
        And I click the "video player" screen
        And I click the "forward arrow" button
        And I scroll to the "next video title" screen
        And the "next video title" should contain the text "Matthew Perry posts The Batman videos days before passing away"
        And I scroll to the "back arrow" screen
        And I click the "back arrow" button
        And the "video title" should contain the text "Actor Matthew Perry backyard taped off following his passing"
        And I click the "mute" button
        And I click the "unmute" button
        Then the "next video" played automatically
        And the "next video title" should contain the text "Matthew Perry posts The Batman videos days before passing away"


