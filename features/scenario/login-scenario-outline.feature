Feature: App login scenario

    @outline
    Scenario Outline: As a user I want to successfully logged in
        Given I am on the front page
        When I try to login with username "<username>" and password "<password>"
        Then I am successfully logged in with username "<username>"
        
        Examples:
            | username          | password      |
            | wibowo.bullseye   | bullseye      |
            | hendri            | hendri123     |