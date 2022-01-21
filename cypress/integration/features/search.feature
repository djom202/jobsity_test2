@complete @search

Feature: Github - Search Page

    I want to check the search could find a specific
    repository as https://github.com/mvoloskov/decider

    Scenario: The searchbar find elements by a Keyword as <keyword>
        Given I open Github page
        When I set "react" into the search field
        And I click on the Advance search link
        And I set written language as "JavaScript"
        And I set state as "closed"
        And I set many stars as ">45"
        And I set many followers as ">50"
        And I set license as "bsl-1.0"
        And I click on the Search button
        Then I verify that there is only 1 repository result
        And I verify that the result list includes this repository
        And I navigate to the repository page
        And I print the first 300 characters of the README