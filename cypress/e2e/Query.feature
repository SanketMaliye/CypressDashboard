Feature:Query


 Scenario: Verify Create New Chase _ Risk
        Given user will go to queries in menu button
        When user will select chase queries from sub menu button
        Then user will select create new chase
        Then user will click on get started
        Then user will fill all the details
        Then user will click on next step
        Then user will click on no option
        Then user will fill member form
            | firstName     | lastName | Dob        |
            | Qa automation | Testing  | 03/15/1997 |
        Then user will click on Add member
        Then user will click on no option2
        Then user will fill provider address
            | Address | phno       |
            | newyork | 8746536763 |
        Then user will click on no option3
        Then user will fill provider form
            | firstName1 | lastName1 |
            | ADAM       | SMITH     |
        Then user will fill encounter details
            | serviceDateFrom | serviceDateThru | diagnosis1 | diagnosis1startDate | diagnosis1thruDate | diagnosis2 |
            | 01/01/2021      | 01/01/2021      | A150       | 01/01/2021          | 01/01/2021         | A156       |
        Then user will click on Finalize
        Then user will click on chase and verify its created

    Scenario: Verify that encounter tab is available when Risk project is selected
        Given user will go to queries in menu button
        When user will select chase queries from sub menu button
        Then user will select create new chase
        Then user will click on get started
        Then user will fill all the details
        Then user will verify encounter is visible

    Scenario: Verify that user can Create a chase for existing member
        Given user will go to queries in menu button
        When user will select chase queries from sub menu button
        Then user will select create new chase
        Then user will click on get started
        Then user will fill all the details
        Then user will click on next step
        Then user will select existing member yes
        Then user will click on no option2
        Then user will fill provider address
            | Address | phno       |
            | newyork | 8746536763 |
        Then user will click on no option3
        Then user will fill provider form
            | firstName1 | lastName1 |
            | ADAM       | SMITH     |
        Then user will fill encounter details
            | serviceDateFrom | serviceDateThru | diagnosis1 | diagnosis1startDate | diagnosis1thruDate | diagnosis2 |
            | 01/01/2021      | 01/01/2021      | A150       | 01/01/2021          | 01/01/2021         | A156       |
        Then user will click on Finalize
        Then user will click on chase and verify its created0

    Scenario: Verify that user can Create a chase for existing address ID
        Given user will go to retrievel menu
        When user will click on call center rep
        Then user will log aid
        Given user will go to queries in menu button
        When user will select chase queries from sub menu button
        Then user will select create new chase
        Then user will click on get started
        Then user will fill all the details
        Then user will click on next step
        Then user will click on no option
        Then user will fill member form
            | firstName     | lastName | Dob        |
            | Qa automation | Testing  | 03/15/1997 |
        Then user will click on Add member
        Then user will select existing provider adress yes option
        Then user will click on no option3
        Then user will fill provider form
            | firstName1 | lastName1 |
            | ADAM       | SMITH     |
        Then user will fill encounter details
            | serviceDateFrom | serviceDateThru | diagnosis1 | diagnosis1startDate | diagnosis1thruDate | diagnosis2 |
            | 01/01/2021      | 01/01/2021      | A150       | 01/01/2021          | 01/01/2021         | A156       |
        Then user will click on Finalize
        Then user will click on chase and verify its created

    Scenario: Verify that to Create a chase for new provider
        Given user will go to queries in menu button
        When user will select chase queries from sub menu button
        Then user will select create new chase
        Then user will click on get started
        Then user will fill all the details
        Then user will click on next step
        Then user will click on no option
        Then user will fill member form
            | firstName     | lastName | Dob        |
            | Qa automation | Testing  | 03/15/1997 |
        Then user will click on Add member
        Then user will click on no option2
        Then user will fill provider address
            | Address | phno       |
            | newyork | 8746536763 |
        Then user will click on no option3
        Then user will fill provider form
            | firstName1 | lastName1 |
            | ADAM       | SMITH     |
        Then user will fill encounter details
            | serviceDateFrom | serviceDateThru | diagnosis1 | diagnosis1startDate | diagnosis1thruDate | diagnosis2 |
            | 01/01/2021      | 01/01/2021      | A150       | 01/01/2021          | 01/01/2021         | A156       |
        Then user will click on Finalize
        Then user will click on chase and verify its created

    Scenario: Verify that to Create a chase for new address ID
        Given user will go to queries in menu button
        When user will select chase queries from sub menu button
        Then user will select create new chase
        Then user will click on get started
        Then user will fill all the details
        Then user will click on next step
        Then user will click on no option
        Then user will fill member form
            | firstName     | lastName | Dob        |
            | Qa automation | Testing  | 03/15/1997 |
        Then user will click on Add member
        Then user will click on no option2
        Then user will fill provider address
            | Address | phno       |
            | newyork | 8746536763 |
        Then user will click on no option3
        Then user will fill provider form
            | firstName1 | lastName1 |
            | ADAM       | SMITH     |
        Then user will fill encounter details
            | serviceDateFrom | serviceDateThru | diagnosis1 | diagnosis1startDate | diagnosis1thruDate | diagnosis2 |
            | 01/01/2021      | 01/01/2021      | A150       | 01/01/2021          | 01/01/2021         | A156       |
        Then user will click on Finalize
        Then user will click on chase and verify its created

    Scenario: Verify that user can add new encounters on encounter tab
        Given user will go to queries in menu button
        When user will select chase queries from sub menu button
        Then user will select create new chase
        Then user will click on get started
        Then user will fill all the details
        Then user will click on next step
        Then user will click on no option
        Then user will fill member form
            | firstName     | lastName | Dob        |
            | Qa automation | Testing  | 03/15/1997 |
        Then user will click on Add member
        Then user will click on no option2
        Then user will fill provider address
            | Address | phno       |
            | newyork | 8746536763 |
        Then user will click on no option3
        Then user will fill provider form
            | firstName1 | lastName1 |
            | ADAM       | SMITH     |
        Then user will fill encounter details1
            | serviceDateFrom | serviceDateThru | diagnosis1 | diagnosis1startDate | diagnosis1thruDate | diagnosis2 |
            | 01/01/2021      | 01/01/2021      | A150       | 01/01/2021          | 01/01/2021         | A156       |

    Scenario: Verify that user can add multiple encounters from encounter tab
        Given user will go to queries in menu button
        When user will select chase queries from sub menu button
        Then user will select create new chase
        Then user will click on get started
        Then user will fill all the details
        Then user will click on next step
        Then user will click on no option
        Then user will fill member form
            | firstName     | lastName | Dob        |
            | Qa automation | Testing  | 03/15/1997 |
        Then user will click on Add member
        Then user will click on no option2
        Then user will fill provider address
            | Address | phno       |
            | newyork | 8746536763 |
        Then user will click on no option3
        Then user will fill provider form
            | firstName1 | lastName1 |
            | ADAM       | SMITH     |
        Then user will fill encounter details1
            | serviceDateFrom | serviceDateThru | diagnosis1 | diagnosis1startDate | diagnosis1thruDate | diagnosis2 |
            | 01/01/2021      | 01/01/2021      | A150       | 01/01/2021          | 01/01/2021         | A156       |
        Then user will fill multiple encounter details
            | serviceDateFrom1 | serviceDateThru1 | diagnosis3 | diagnosis1startDate1 | diagnosis1thruDate1 | diagnosis2 |
            | 01/01/2021       | 01/01/2021       | A150       | 01/01/2021           | 01/01/2021          | A156       |

    Scenario: Verify that provider can be selected from the providers selected
        Given user will go to queries in menu button
        When user will select chase queries from sub menu button
        Then user will select create new chase
        Then user will click on get started
        Then user will fill all the details
        Then user will click on next step
        Then user will click on no option
        Then user will fill member form
            | firstName     | lastName | Dob        |
            | Qa automation | Testing  | 03/15/1997 |
        Then user will click on Add member
        Then user will click on no option2
        Then user will fill provider address
            | Address | phno       |
            | newyork | 8746536763 |
        Then user will click on no option3
        Then user will fill provider form
            | firstName1 | lastName1 |
            | ADAM       | SMITH     |
        Then user will verify provider is selected from dropdown

    Scenario:Verify that encounter type can be selected from the type dropdwon
        Given user will go to queries in menu button
        When user will select chase queries from sub menu button
        Then user will select create new chase
        Then user will click on get started
        Then user will fill all the details
        Then user will click on next step
        Then user will click on no option
        Then user will fill member form
            | firstName     | lastName | Dob        |
            | Qa automation | Testing  | 03/15/1997 |
        Then user will click on Add member
        Then user will click on no option2
        Then user will fill provider address
            | Address | phno       |
            | newyork | 8746536763 |
        Then user will click on no option3
        Then user will fill provider form
            | firstName1 | lastName1 |
            | ADAM       | SMITH     |
        Then user will verify encounter is selected from dropdown

    Scenario:Verify that user can add multiple encounters from encounter tab
        Given user will go to queries in menu button
        When user will select chase queries from sub menu button
        Then user will select create new chase
        Then user will click on get started
        Then user will fill all the details
        Then user will click on next step
        Then user will click on no option
        Then user will fill member form
            | firstName     | lastName | Dob        |
            | Qa automation | Testing  | 03/15/1997 |
        Then user will click on Add member
        Then user will click on no option2
        Then user will fill provider address
            | Address | phno       |
            | newyork | 8746536763 |
        Then user will click on no option3
        Then user will fill provider form
            | firstName1 | lastName1 |
            | ADAM       | SMITH     |
        Then user will verify multiple encounter is selected from dropdown

     Scenario: Verify that if the service dates are outside project time frame a validation message is displayed
        Given user will go to queries in menu button
        When user will select chase queries from sub menu button
        Then user will select create new chase
        Then user will click on get started
        Then user will fill all the details
        Then user will click on next step
        Then user will click on no option
        Then user will fill member form
            | firstName     | lastName | Dob        |
            | Qa automation | Testing  | 03/15/1997 |
        Then user will click on Add member
        Then user will click on no option2
        Then user will fill provider address
            | Address | phno       |
            | newyork | 8746536763 |
        Then user will click on no option3
        Then user will fill provider form
            | firstName1 | lastName1 |
            | ADAM       | SMITH     |
        Then user will fill encounter details3
            | serviceDateFrom | serviceDateThru | diagnosis1 | diagnosis1startDate | diagnosis1thruDate | diagnosis2 |
            | 04/04/2023      | 04/04/2023      | A150       | 04/04/2023          | 04/04/2023         | A156       |
        Then user will verify the warning msg

    Scenario: Verify that user can add diagnosis from encounter tab
        Given user will go to queries in menu button
        When user will select chase queries from sub menu button
        Then user will select create new chase
        Then user will click on get started
        Then user will fill all the details
        Then user will click on next step
        Then user will click on no option
        Then user will fill member form
            | firstName     | lastName | Dob        |
            | Qa automation | Testing  | 03/15/1997 |
        Then user will click on Add member
        Then user will click on no option2
        Then user will fill provider address
            | Address | phno       |
            | newyork | 8746536763 |
        Then user will click on no option3
        Then user will fill provider form
            | firstName1 | lastName1 |
            | ADAM       | SMITH     |
        Then user will fill encounter details1 and verify next button is enabled
            | serviceDateFrom | serviceDateThru | diagnosis1 | diagnosis1startDate | diagnosis1thruDate | diagnosis2 |
            | 01/01/2021      | 01/01/2021      | A150       | 01/01/2021          | 01/01/2021         | A156       |

    Scenario: VErify thta user can add multipel diagnosis for the same encounter
        Given user will go to queries in menu button
        When user will select chase queries from sub menu button
        Then user will select create new chase
        Then user will click on get started
        Then user will fill all the details
        Then user will click on next step
        Then user will click on no option
        Then user will fill member form
            | firstName     | lastName | Dob        |
            | Qa automation | Testing  | 03/15/1997 |
        Then user will click on Add member
        Then user will click on no option2
        Then user will fill provider address
            | Address | phno       |
            | newyork | 8746536763 |
        Then user will click on no option3
        Then user will fill provider form
            | firstName1 | lastName1 |
            | ADAM       | SMITH     |
        Then user will fill encounter details1
            | serviceDateFrom | serviceDateThru | diagnosis1 | diagnosis1startDate | diagnosis1thruDate | diagnosis2 |
            | 01/01/2021      | 01/01/2021      | A150       | 01/01/2021          | 01/01/2021         | A156       |
        Then user will fill multiple encounter details and diagnosis details and after fill next button gets enabled
            | serviceDateFrom1 | serviceDateThru1 | diagnosis3 | diagnosis1startDate1 | diagnosis1thruDate1 | diagnosis2 |
            | 01/01/2021       | 01/01/2021       | A150       | 01/01/2021           | 01/01/2021          | A156       |


    Scenario: Verify that user can create chase with single encounter and multiple diagnosis
        Given user will go to queries in menu button
        When user will select chase queries from sub menu button
        Then user will select create new chase
        Then user will click on get started
        Then user will fill all the details
        Then user will click on next step
        Then user will click on no option
        Then user will fill member form
            | firstName     | lastName | Dob        |
            | Qa automation | Testing  | 03/15/1997 |
        Then user will click on Add member
        Then user will click on no option2
        Then user will fill provider address
            | Address | phno       |
            | newyork | 8746536763 |
        Then user will click on no option3
        Then user will fill provider form
            | firstName1 | lastName1 |
            | ADAM       | SMITH     |
        Then user will fill encounter details1
            | serviceDateFrom | serviceDateThru | diagnosis1 | diagnosis1startDate | diagnosis1thruDate | diagnosis2 |
            | 01/01/2021      | 01/01/2021      | A150       | 01/01/2021          | 01/01/2021         | A156       |
        Then user will fill multiple diagnosis details
            | serviceDateFrom1 | serviceDateThru1 | diagnosis3 | diagnosis1startDate1 | diagnosis1thruDate1 | diagnosis2 |
            | 01/01/2021       | 01/01/2021       | A150       | 01/01/2021           | 01/01/2021          | A156       |
        Then user will click on Finalize
        Then user will click on chase and verify its created

    Scenario: Verify that user can create chase with single encounter and single diagnosis
        Given user will go to queries in menu button
        When user will select chase queries from sub menu button
        Then user will select create new chase
        Then user will click on get started
        Then user will fill all the details
        Then user will click on next step
        Then user will click on no option
        Then user will fill member form
            | firstName     | lastName | Dob        |
            | Qa automation | Testing  | 03/15/1997 |
        Then user will click on Add member
        Then user will click on no option2
        Then user will fill provider address
            | Address | phno       |
            | newyork | 8746536763 |
        Then user will click on no option3
        Then user will fill provider form
            | firstName1 | lastName1 |
            | ADAM       | SMITH     |
        Then user will fill encounter details
            | serviceDateFrom | serviceDateThru | diagnosis1 | diagnosis1startDate | diagnosis1thruDate | diagnosis2 |
            | 01/01/2021      | 01/01/2021      | A150       | 01/01/2021          | 01/01/2021         | A156       |
        Then user will click on Finalize
        Then user will click on chase and verify its created

    Scenario: VErify that validation message is displayed if the dignosis dates are not falling in encounter dates
        Given user will go to queries in menu button
        When user will select chase queries from sub menu button
        Then user will select create new chase
        Then user will click on get started
        Then user will fill all the details
        Then user will click on next step
        Then user will click on no option
        Then user will fill member form
            | firstName     | lastName | Dob        |
            | Qa automation | Testing  | 03/15/1997 |
        Then user will click on Add member
        Then user will click on no option2
        Then user will fill provider address
            | Address | phno       |
            | newyork | 8746536763 |
        Then user will click on no option3
        Then user will fill provider form
            | firstName1 | lastName1 |
            | ADAM       | SMITH     |
        Then user will fill encounter details3
            | serviceDateFrom | serviceDateThru | diagnosis1 | diagnosis1startDate | diagnosis1thruDate | diagnosis2 |
            | 04/04/2023      | 04/04/2023      | A150       | 04/04/2023          | 04/04/2023         | A156       |
    Then user will verify the warning msg

    Scenario: Verify that next step button on encounter tab get enabled only after a valid encounter and disgnosis entry
        Given user will go to queries in menu button
        When user will select chase queries from sub menu button
        Then user will select create new chase
        Then user will click on get started
        Then user will fill all the details
        Then user will click on next step
        Then user will click on no option
        Then user will fill member form
            | firstName     | lastName | Dob        |
            | Qa automation | Testing  | 03/15/1997 |
        Then user will click on Add member
        Then user will click on no option2
        Then user will fill provider address
            | Address | phno       |
            | newyork | 8746536763 |
        Then user will click on no option3
        Then user will fill provider form
            | firstName1 | lastName1 |
            | ADAM       | SMITH     |
        Then user will fill encounter details1
            | serviceDateFrom | serviceDateThru | diagnosis1 | diagnosis1startDate | diagnosis1thruDate | diagnosis2 |
            | 01/01/2021      | 01/01/2021      | A150       | 01/01/2021          | 01/01/2021         | A156       |

    Scenario: Verify that user can create a risk chase by skipping the encounter tab
        Given user will go to queries in menu button
        When user will select chase queries from sub menu button
        Then user will select create new chase
        Then user will click on get started
        Then user will fill all the details
        Then user will click on next step
        Then user will click on no option
        Then user will fill member form
            | firstName     | lastName | Dob        |
            | Qa automation | Testing  | 03/15/1997 |
        Then user will click on Add member
        Then user will click on no option2
        Then user will fill provider address
            | Address | phno       |
            | newyork | 8746536763 |
        Then user will click on no option3
        Then user will fill provider form
            | firstName1 | lastName1 |
            | ADAM       | SMITH     |
        Then user will click on Skip step in encounter tab
        Then user will click on Finalize
        Then user will click on chase and verify its created

    Scenario: Verify the reset button on member , aid ,encounter and provider tabs
        Given user will go to queries in menu button
        When user will select chase queries from sub menu button
        Then user will select create new chase
        Then user will click on get started
        Then user will fill all the details
        Then user will click on reset
        Then user will verify project field get reset
        Then user will fill all the details
        Then user will click on next step
        Then user will click on no option
        Then user will fill member form
            | firstName     | lastName | Dob        |
            | Qa automation | Testing  | 03/15/1997 |
        Then user will click on member reset
        Then user will verify member field get reset
        Then user will fill member form
            | firstName     | lastName | Dob        |
            | Qa automation | Testing  | 03/15/1997 |
        Then user will click on Add member
        Then user will click on no option2
        Then user will fill provider address1
            | Address | phno       |
            | newyork | 8746536763 |
        Then user will click on aid reset button
        Then user will verify provider address filed is reset
        Then user will fill provider address
            | Address | phno       |
            | newyork | 8746536763 |
        Then user will click on no option3
        Then user will fill provider form1
            | firstName1 | lastName1 |
            | ADAM       | SMITH     |
        Then user will click on Provider reset button
        Then user will verify provider page gets reset
        Then user will fill provider form
            | firstName1 | lastName1 |
            | ADAM       | SMITH     |
        Then user will fill encounter details1
            | serviceDateFrom | serviceDateThru | diagnosis1 | diagnosis1startDate | diagnosis1thruDate | diagnosis2 |
            | 01/01/2021      | 01/01/2021      | A150       | 01/01/2021          | 01/01/2021         | A156       |
        Then user will click on encounter reset button
        Then user will verify field is reset

    Scenario: Verify that user cannot add same Claim IDs in a chase
        Given user will go to queries in menu button
        When user will select chase queries from sub menu button
        Then user will select create new chase
        Then user will click on get started
        Then user will fill all the details
        Then user will click on next step
        Then user will click on no option
        Then user will fill member form
            | firstName     | lastName | Dob        |
            | Qa automation | Testing  | 03/15/1997 |
        Then user will click on Add member
        Then user will click on no option2
        Then user will fill provider address
            | Address | phno       |
            | newyork | 8746536763 |
        Then user will click on no option3
        Then user will fill provider form
            | firstName1 | lastName1 |
            | ADAM       | SMITH     |
        Then user will fill encounter details4
            | serviceDateFrom | serviceDateThru | diagnosis1 | diagnosis1startDate | diagnosis1thruDate | diagnosis2 |
            | 01/01/2021      | 01/01/2021      | A150       | 01/01/2021          | 01/01/2021         | A156       |
        Then user will fill multiple diagnosis details1
            | serviceDateFrom1 | serviceDateThru1 | diagnosis3 | diagnosis1startDate1 | diagnosis1thruDate1 | diagnosis2 |
            | 01/01/2021       | 01/01/2021       | A150       | 01/01/2021           | 01/01/2021          | A156       |
        Then user will verify claim id error message

    Scenario:Verify Chase Query Grid -Export
        Given user will go to queries in menu button
        When user will select chase queries from sub menu button1
        Then user will select project
        Then click on slect next option
        Then user will click on export functionality
        Then user will click on go button
        Then user will verify downloaded file

    Scenario:Verify Chase Query Grid -Filter
        Given user will go to queries in menu button
        When user will select chase queries from sub menu button1
        Then user will click on assigned to
        Then user will search by assigned user
            | assignedUser  |
            | Testing Admin |
        Then user will verify grid is loaded as per filter

    Scenario:Verify Chase Query Grid -Assigned to
        Given user will go to queries in menu button
        When user will select chase queries from sub menu button1
        Then user will click on assigned to
        Then user will search by assigned user
            | assignedUser  |
            | Testing Admin |
        Then user will verify grid is loaded as per filter

    Scenario:Verify Chase Query Grid- Pend Chases
        Given user will go to queries in menu button
        When user will select chase queries from sub menu button1
        Then user will select project
        Then user will select first chase
        Then user will pend chase chase
        Then verify pend status in grid

   