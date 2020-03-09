@login
Feature:Login functionality

  Background:
    Given User should be on OrangeHrm login page

  Scenario Outline: user shold not be login with invalid credentials
    When user types username as "<username>"
    And  user types password as "<password>"
    And user click on login button
    Then user should not be logged in
    Then user sholud see error message as "<errormessage>"

    Examples:
      | username | password | errormessage             |
      | admin    | Test123  | Invalid credentials      |
      | Admin    | Test123  | Invalid credentials      |
      | Rajesh   | admin123 | Invalid credentials      |
      | Rajesh   |          | Password cannot be empty |
      | Admin    |          | Password cannot be empty |
      |          | admin123 | Username cannot be empty |
      |          | Test123  | Username cannot be empty |
