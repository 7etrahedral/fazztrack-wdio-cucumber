Feature: App login scenario

    @parameter
    Scenario: As a user I want to successfully logged in
        Given I am on the front page
        When I try to login with username "hendri" and password "hendri123"
        Then I am successfully logged in with username "hendri"