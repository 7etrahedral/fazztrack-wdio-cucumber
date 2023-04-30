Feature: App login scenario

    @parameter
    Scenario: As a user I want to successfully logged in
        Given I am on the front page
        When I try to login with username "wibowo.bullseye" and password "bullseye"
        Then I am successfully logged in