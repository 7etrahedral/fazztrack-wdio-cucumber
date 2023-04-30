Feature: App login scenario

    Scenario: As a user I want to successfully logged in
        Given I am on the front page
        When I try to login correctly
        Then I am successfully logged in