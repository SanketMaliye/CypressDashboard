Feature:Chase Query

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

    Scenario:Verify Unassigned already assigned chases
        Given user will go to queries in menu button
        When user will select chase queries from sub menu button1
        Then user will select project
        Then user will select first chase
        Then user will assign to user
        Then user will verify user is assigned
        Then user will select first chase
        Then user will unassign and verify it is unassigned

    Scenario:Verify Chase Query Grid -Assigned to (Bulk)
        Given user will go to queries in menu button
        When user will select chase queries from sub menu button1
        Then user will select project7
        Then user will select first chase
        Then user will select second chase
        Then user will assign to user
        Then user will verify user is assigned to multiple chase

    Scenario:Verify Chase Query Grid- Pend Chases (Bulk)
        Given user will go to queries in menu button
        When user will select chase queries from sub menu button1
        Then user will select project1
        Then user will select first chase
        Then user will select Third chase
        Then user will pend chase chase1
        Then user will verify sucess pended message

        # Scenario:Verify Download chart on chase query Grid
        #     Given user will go to queries in menu button
        #     When user will select chase queries from sub menu button1
        #     Then user will select project1
        #     Then user will select first chase
        #     Then user download chart
        #     Then user will go to job Que
        #     Then user will click on chase in notification and click on chase
        #     Then user will verify downloaded file

        Scenario:Verify Chase query filter - Chase ID / Client Chase Key
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button1
            Then user will select project1
            Then user will log the chase id
            Then user will click on filter
            Then user will search by client ID
            Then user will verify grid load as per the client filter

        Scenario:Verify Chase query filter - Measure
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button1
            Then user will select project1
            Then user will click on filter
            Then user will click on measure and will select measure
            Then user will verify grid load as per the measure filter

        Scenario:Verify Chase query filter - Client
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button
            Then user will click on filter
            Then user will click on client and will select client
            Then user will verify grid load as per the client filter1

        Scenario:Verify Chase query filter - Projects
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button1
            Then user will select project1
            Then user will verify grid is loaded as per project filter

        Scenario:Verify Chase query filter - Member
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button1
            Then user will click on member and search by first name
            Then user will verify grid is loaded as per member filter

        Scenario:Verify Chase query filter - Address
            Given user will go to retrievel menu
            When user will click on call center rep
            Then user will log aid
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button1
            Then user will click on adress and search by aid
            Then user will verify grid is loaded as per aid filter

        Scenario:Verify Chase query filter -Pend codes
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button1
            Then user will click on pendCode and search by pendcode
            Then user will verify grid is loaded as per pencode filter

        Scenario:Verify Chase query filter - Compliance
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button1
            Then user will click on chase complianced and search by compliance
            Then user will verify grid is loaded as per compliance filter

        Scenario:Verify Chase query filter - Assigned to
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button1
            Then user will click on assigned to
            Then user will search by assigned user
                | assignedUser  |
                | Testing Admin |
            Then user will verify grid is loaded as per filter

        Scenario:Verify Chase query filter -Last coded By
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button1
            Then user will click on last coded by and search by last coded by
            Then user will verify grid is loaded as per last coded by filter

        Scenario:Verify Chase query filter - status
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button1
            Then user will click pend status and search pend status New
            Then user will verify grid is loaded as per pend status New filter

        Scenario:Verify Chase query filter -Date assigned
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button1
            Then user will click date assigned  and search by date assigned
            Then user will verify grid is loaded as per date assigned filter

        Scenario:Verify Chase query filter - Risk
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button1
            Then user will click risk  and mark dos sonfirmed and hcc
            Then user will verify grid is loaded as per risk filter

        Scenario:Verify that number of pursuits for a parent chase is displaying in bracket
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button1
            Then user will click risk  and click parent chase
            Then user will verify grid is loaded as per parent chase filter

        Scenario:Verify that upon hover over a parent chase displaying a pursuit-children chase IDs
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button1
            Then user will click risk  and click parent chase
            Then user will hover and verify pursuit chase is displayed

        Scenario:Verify that the child chase ID's displayed are hyper linked to chase details page
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button1
            Then user will click risk  and click parent chase
            Then user will hover and verify pursuit chase is displayed
            Then user will click on pursuit chase
            Then user will verify user is redirected to chase details page

        Scenario:Verify unassign button functionality
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button1
            Then user will select project
            Then user will select first chase
            Then user will assign to user
            Then user will verify user is assigned
            Then user will select first chase
            Then user will unassign and verify it is unassigned

        Scenario:Verify bulk unassigned button
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button
            Then user will click on filter
            Then user will select project1
            Then user will select first chase
            Then user will select second chase
            Then user will assign to user
            Then user will verify user is assigned
            Then user will select first chase
            Then user will select second chase
            Then user will unassign and verify it is unassigned1

        Scenario: Create new chase HEDIS
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button
            Then user will select create new chase
            Then user will click on get started
            Then user will fill all the details5
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
            Then user will click on Finalize
            Then user will click on chase and verify its created3

        Scenario:Verify that chase query is hvaing new button for creating a new chase
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button
            Then user will verify create new chase button

        Scenario: Verify that user can Create a chase for existing member
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button
            Then user will select create new chase
            Then user will click on get started
            Then user will fill all the details5
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
            Then user will click on Finalize
            Then user will click on chase and verify its created2

        Scenario: Verify that user can Create a chase for existing address ID
            Given user will go to retrievel menu
            When user will click on call center rep
            Then user will log aid
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button
            Then user will select create new chase
            Then user will click on get started
            Then user will fill all the details5
            Then user will click on next step
            Then user will click on no option
            Then user will fill member form
                | firstName     | lastName | Dob        |
                | Qa automation | Testing  | 03/15/1997 |
            Then user will click on Add member
            Then user will select existing provider adress yes option4
            Then user will click on no option3
            Then user will fill provider form
                | firstName1 | lastName1 |
                | ADAM       | SMITH     |
            Then user will click on Finalize
            Then user will click on chase and verify its created2

        Scenario: Verify that user can Create a chase for new  member
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button
            Then user will select create new chase
            Then user will click on get started
            Then user will fill all the details5
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
            Then user will click on Finalize
            Then user will click on chase and verify its created3

        Scenario: Verify that to Create a chase for new address ID
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button
            Then user will select create new chase
            Then user will click on get started
            Then user will fill all the details5
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
            Then user will click on Finalize
            Then user will click on chase and verify its created3

        Scenario: Verify that to Create a chase for new provider
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button
            Then user will select create new chase
            Then user will click on get started
            Then user will fill all the details5
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
            Then user will click on Finalize
            Then user will click on chase and verify its created3

        Scenario:Verify persistent grid pagination
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button1
            Then user will select project
            Then user will select pagination
            Then user will verify table list is as per pagination

        Scenario:Verify Chase View
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button
            Then user will verify create new view button is visible

        Scenario:Verify create chase view
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button1
            Then user will select project
            Then user will click on Create New view
            Then user will enter details for new view
                | name       |
                | Testing 11 |
            Then user will create new view and verify it
            Then user will delete craeted view

        Scenario:Verify that whether user can edit a chase view
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button1
            Then user will select project
            Then user will click on Create New view
            Then user will enter details for new view
                | name       |
                | Testing 11 |
            Then user will create new view and verify it
            Then user will edit chase and verify it
            Then user will delete craeted view

        Scenario:Verify that basic chase query actions are possible aftr creating a new view
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button1
            Then user will select project
            Then user will click on Create New view
            Then user will enter details for new view
                | name       |
                | Testing 11 |
            Then user will create new view and verify it
            Then user will edit chase and verify it
            Then user will select first chase
            Then user will assign to user
            Then user will delete craeted view

        Scenario:Verify that chase query view can be deleted
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button1
            Then user will select project
            Then user will click on Create New view
            Then user will enter details for new view
                | name       |
                | Testing 11 |
            Then user will create new view and verify it
            Then user will delete craeted view
            Then verify Created view is deleted

        Scenario:Verify that user can change from a one cutsom view to another
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button1
            Then user will select project
            Then user will verify different view is not selected
            Then user will change the view and verify different view is selected

        Scenario:Verify Line of business field when user select a hedis project
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button
            Then user will select create new chase
            Then user will click on get started
            Then user will fill all the details6
            Then user will verify LOB is visible

        Scenario:VErify LOB(Line of Business) dropdown values
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button
            Then user will select create new chase
            Then user will click on get started
            Then user will fill all the details6
            Then user will verify LOB is visible
            Then user will verify LOB DropDown

        Scenario: Verify LOB dropdown should not display risk and IVA project
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button
            Then user will select create new chase
            Then user will click on get started
            Then user will fill all the details7
            Then user will verify Lob does not exist


        Scenario:Verify that Chase move back reason is a custom column in chase query
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button1
            Then user will select project
            Then user will click on Create New view
            Then user will verify Move back reason In create new view

        Scenario:Verify that chase query grid can display comment columns
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button1
            Then user will select project
            Then user will verify comment tab is displayed in grid

        Scenario:Verify that Chase move back reason is a custom column in chase query
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button1
            Then user will select project
            Then user will click on comment view
            Then user will verify comment View

        Scenario:Verify NExt action drop down in chase query
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button1
            Then user will select project
            Then click on slect next option
            Then user will verify except for export all drop down is disabled and go button is disabled
            Then user will click on export functionality
            Then user will verify Go button is enbaled

        Scenario:Verify export chases (from Next action drop down)
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button1
            Then user will select project
            Then click on slect next option
            Then user will click on export functionality
            Then user will click on go button
            Then user will verify downloaded file


        Scenario:Verify pend chases (from Next action drop down)
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button1
            Then user will select project
            Then user will select first chase
            Then user will pend chase chase
            Then verify pend status in grid

        Scenario:Verify assign chases (from Next action drop down)
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button1
            Then user will select project
            Then user will select first chase
            Then user will assign to user
            Then user will verify user is assigned

        Scenario:Verify unassign chases (from Next action drop down)
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button1
            Then user will select project
            Then user will select first chase
            Then user will assign to user
            Then user will verify user is assigned
            Then user will select first chase
            Then user will unassign and verify it is unassigned

        Scenario:Verify that New column TIN is availbale on chase query grid
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button
            Then user will click on Create New view
            Then user will verify TIN column In create new view

        Scenario: ADD Retriever : Existing Provider
            Given user will go to retrievel menu
            When user will click on call center rep
            Then user will log aid
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button
            Then user will select create new chase
            Then user will click on get started
            Then user will fill all the details5
            Then user will click on next step
            Then user will click on no option
            Then user will fill member form
                | firstName     | lastName | Dob        |
                | Qa automation | Testing  | 03/15/1997 |
            Then user will click on Add member
            Then user will select existing provider adress yes option4
            Then user will click on no option3
            Then user will fill provider form
                | firstName1 | lastName1 |
                | ADAM       | SMITH     |
            Then user will click on Finalize
            Then user will click on chase and verify its created3

        Scenario: Verify that Retriever FIeld is available on Provider Address
            Given user will go to retrievel menu
            When user will click on call center rep
            Then user will log aid
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button
            Then user will select create new chase
            Then user will click on get started
            Then user will fill all the details5
            Then user will click on next step
            Then user will click on no option
            Then user will fill member form
                | firstName     | lastName | Dob        |
                | Qa automation | Testing  | 03/15/1997 |
            Then user will click on Add member
            Then user will select existing provider adress yes option5

        Scenario: Verify that Retriever Field contain Reveleer and client values in dropdown
            Given user will go to retrievel menu
            When user will click on call center rep
            Then user will log aid
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button
            Then user will select create new chase
            Then user will click on get started
            Then user will fill all the details5
            Then user will click on next step
            Then user will click on no option
            Then user will fill member form
                | firstName     | lastName | Dob        |
                | Qa automation | Testing  | 03/15/1997 |
            Then user will click on Add member
            Then user will select existing provider adress yes option5 and verify retrieval dropdown values

        Scenario:Chase query filter - Product>>Line of business
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button1
            Then user will select product option
            Then user will select Lob option
            Then user will verify gird is loaded as per Lob filter

        Scenario:Chase query filter - Product
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button1
            Then user will select product option
            Then user will select multiple Lob option
            Then user will verify gird is loaded as per multiple Lob filter

        Scenario: Verify Create New Chase- IVA
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button
            Then user will select create new chase
            Then user will click on get started
            Then user will fill all the details8
            Then user will click on next step
            Then user will click on no option
            Then user will fill member form
                | firstName     | lastName | Dob        |
                | Qa automation | Testing  | 03/15/1997 |
            Then user will click on Add member
            Then user will click on provider no option2
            Then user will fill provider address
                | Address | phno       |
                | newyork | 8746536763 |
            Then user will click on provider no option3
            Then user will fill provider form
                | firstName1 | lastName1 |
                | ADAM       | SMITH     |
            Then user will fill encounter details
                | serviceDateFrom | serviceDateThru | diagnosis1 | diagnosis1startDate | diagnosis1thruDate | diagnosis2 |
                | 01/01/2021      | 01/01/2021      | A150       | 01/01/2021          | 01/01/2021         | A156       |
            Then user will click on Finalize
            Then user will click on chase and verify its created3

        Scenario: Verify Pursuit Selection option disappear as soon as user select IVA Project.
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button
            Then user will select create new chase
            Then user will click on get started
            Then user will verify pursuit option is visible
            Then user will select project2
            Then user will verify pursuit option is not visible

        Scenario: Verify Data Load Lob filed default to 'Commercial' and user should not be able to change it
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button
            Then user will select create new chase
            Then user will click on get started
            Then user will verify pursuit option is visible
            Then user will select project2
            Then user will verify data load field is disabled and have Commercial by deault

        Scenario: Verify Chase Key field is mandatory
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button
            Then user will select create new chase
            Then user will click on get started
            Then user will fill all details except for chase Key and verify Next button is disabled
            Then user will the chase Key details and verify next button is enabled

        Scenario: Verify HST-MN- should be starting value for Chase Key Field and it
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button
            Then user will select create new chase
            Then user will click on get started
            Then user will verify chase key field start with HST-MN-


        Scenario: Verify error message 'Enter between 1 and 9 digit' for Chase Key Field
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button
            Then user will select create new chase
            Then user will click on get started
            Then user will verify error message for chase key

        Scenario: Verify Measure field defaults to HST and user should not be able to change it
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button
            Then user will select create new chase
            Then user will click on get started
            Then user will Verify Measure field defaults to HST and user should not be able to change it

        Scenario: Verify Next Button Enable after Completing data entry for all mandatory fields on project tab
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button
            Then user will select create new chase
            Then user will click on get started
            Then user will fill all details except for chase Key and verify Next button is disabled
            Then user will the chase Key details and verify next button is enabled

        Scenario: Verify search Results by entering one or more value for Existing Member for IVA chase Creation
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button
            Then user will select create new chase
            Then user will click on get started
            Then user will fill all the details8
            Then user will click on next step
            Then user will select existing member yes5

        Scenario:Verify Next Step button enables once user select member from search result
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button
            Then user will select create new chase
            Then user will click on get started
            Then user will fill all the details8
            Then user will click on next step
            Then user will select existing member yes5
            Then user will deselect search result and will verify next step is not visible
            Then user will select search result and will verify next step is visible

        Scenario: Verify User should able to add new member if selects No for Existing member
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button
            Then user will select create new chase
            Then user will click on get started
            Then user will fill all the details8
            Then user will click on next step
            Then user will click on no option
            Then user will fill member form
                | firstName     | lastName | Dob        |
                | Qa automation | Testing  | 03/15/1997 |
            Then user will click on Add member
            Then user will click on provider no option2
            Then user will fill provider address
                | Address | phno       |
                | newyork | 8746536763 |
            Then user will click on provider no option3
            Then user will fill provider form
                | firstName1 | lastName1 |
                | ADAM       | SMITH     |
            Then user will fill encounter details
                | serviceDateFrom | serviceDateThru | diagnosis1 | diagnosis1startDate | diagnosis1thruDate | diagnosis2 |
                | 01/01/2021      | 01/01/2021      | A150       | 01/01/2021          | 01/01/2021         | A156       |
            Then user will click on Finalize
            Then user will click on chase and verify its created3

        Scenario: Verify Enroll ID Value's limits to 40 Character on Member Tab
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button
            Then user will select create new chase
            Then user will click on get started
            Then user will fill all the details8
            Then user will click on next step
            Then user will click on no option
            Then verify enroll id Field validation

        Scenario: Verify search Results by entering one or more value for Existing Provider address for IVA chase Creation
            Given user will go to retrievel menu
            When user will click on call center rep
            Then user will log aid
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button
            Then user will select create new chase
            Then user will click on get started
            Then user will fill all the details8
            Then user will click on next step
            Then user will click on no option
            Then user will fill member form
                | firstName     | lastName | Dob        |
                | Qa automation | Testing  | 03/15/1997 |
            Then user will click on Add member
            Then user will select existing provider adress yes option7

        Scenario: Verify user should select Retriever to proceed to next tab
            Given user will go to retrievel menu
            When user will click on call center rep
            Then user will log aid
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button
            Then user will select create new chase
            Then user will click on get started
            Then user will fill all the details8
            Then user will click on next step
            Then user will click on no option
            Then user will fill member form
                | firstName     | lastName | Dob        |
                | Qa automation | Testing  | 03/15/1997 |
            Then user will click on Add member
            Then user will select existing provider adress yes option7
            Then user will verify next button is not visible without selecting Retriever
            Then user will select retriever and will click on next button

        Scenario: Verify User should able to add new Address if selects No for Existing Provider address
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button
            Then user will select create new chase
            Then user will click on get started
            Then user will fill all the details8
            Then user will click on next step
            Then user will click on no option
            Then user will fill member form
                | firstName     | lastName | Dob        |
                | Qa automation | Testing  | 03/15/1997 |
            Then user will click on Add member
            Then user will click on provider no option2
            Then user will fill provider address
                | Address | phno       |
                | newyork | 8746536763 |
            Then user will click on provider no option3
            Then user will fill provider form
                | firstName1 | lastName1 |
                | ADAM       | SMITH     |
            Then user will fill encounter details
                | serviceDateFrom | serviceDateThru | diagnosis1 | diagnosis1startDate | diagnosis1thruDate | diagnosis2 |
                | 01/01/2021      | 01/01/2021      | A150       | 01/01/2021          | 01/01/2021         | A156       |
            Then user will click on Finalize
            Then user will click on chase and verify its created3

        Scenario: Verify search Results by entering one or more value for Existing Provider for IVA chase Creation
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button
            Then user will select create new chase
            Then user will click on get started
            Then user will fill all the details8
            Then user will click on next step
            Then user will click on no option
            Then user will fill member form
                | firstName     | lastName | Dob        |
                | Qa automation | Testing  | 03/15/1997 |
            Then user will click on Add member
            Then user will click on provider no option2
            Then user will fill provider address
                | Address | phno       |
                | newyork | 8746536763 |
            Then user will click on provider option yes9
            Then user will fill provider form9
                | firstName1 | lastName1 |
                | ADAM       | SMITH     |
            Then user will verify search result is displayed or not

        Scenario: Verify Next Step Button Enable only if user Add Provider
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button
            Then user will select create new chase
            Then user will click on get started
            Then user will fill all the details8
            Then user will click on next step
            Then user will click on no option
            Then user will fill member form
                | firstName     | lastName | Dob        |
                | Qa automation | Testing  | 03/15/1997 |
            Then user will click on Add member
            Then user will click on provider no option2
            Then user will fill provider address
                | Address | phno       |
                | newyork | 8746536763 |
            Then user will click on provider option yes9
            Then user will fill provider form9
                | firstName1 | lastName1 |
                | ADAM       | SMITH     |
            Then user will verify search result is displayed or not
            Then user will verify next button is disabled without adding provider
            Then user will add new provider and verify next button is visible


        Scenario: Verify Encounter Tab for IVA chase creation
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button
            Then user will select create new chase
            Then user will click on get started
            Then user will fill all the details8
            Then user will click on next step
            Then user will click on no option
            Then user will fill member form
                | firstName     | lastName | Dob        |
                | Qa automation | Testing  | 03/15/1997 |
            Then user will click on Add member
            Then user will click on provider no option2
            Then user will fill provider address
                | Address | phno       |
                | newyork | 8746536763 |
            Then user will click on provider no option3
            Then user will fill provider form
                | firstName1 | lastName1 |
                | ADAM       | SMITH     |
            Then user will verify next button is disabled
            Then user will fill encounter details and verify next button is enabled
                | serviceDateFrom | serviceDateThru | diagnosis1 | diagnosis1startDate | diagnosis1thruDate | diagnosis2 |
                | 01/01/2021      | 01/01/2021      | A150       | 01/01/2021          | 01/01/2021         | A156       |

        Scenario: Verify Final Review tab for IVA chase creation
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button
            Then user will select create new chase
            Then user will click on get started
            Then user will fill all the details8
            Then user will click on next step
            Then user will click on no option
            Then user will fill member form
                | firstName     | lastName | Dob        |
                | Qa automation | Testing  | 03/15/1997 |
            Then user will click on Add member
            Then user will click on provider no option2
            Then user will fill provider address
                | Address | phno       |
                | newyork | 8746536763 |
            Then user will click on provider no option3
            Then user will fill provider form
                | firstName1 | lastName1 |
                | ADAM       | SMITH     |
            Then user will fill encounter details
                | serviceDateFrom | serviceDateThru | diagnosis1 | diagnosis1startDate | diagnosis1thruDate | diagnosis2 |
                | 01/01/2021      | 01/01/2021      | A150       | 01/01/2021          | 01/01/2021         | A156       |
            Then user will click on Finalize
            Then user will verify congrats message and chase id link

        Scenario: Verify User should able to add new Provider for Existing Provider as NO
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button
            Then user will select create new chase
            Then user will click on get started
            Then user will fill all the details8
            Then user will click on next step
            Then user will click on no option
            Then user will fill member form
                | firstName     | lastName | Dob        |
                | Qa automation | Testing  | 03/15/1997 |
            Then user will click on Add member
            Then user will click on provider no option2
            Then user will fill provider address
                | Address | phno       |
                | newyork | 8746536763 |
            Then user will click on provider no option3
            Then user will fill provider form
                | firstName1 | lastName1 |
                | ADAM       | SMITH     |
            Then user will fill encounter details
                | serviceDateFrom | serviceDateThru | diagnosis1 | diagnosis1startDate | diagnosis1thruDate | diagnosis2 |
                | 01/01/2021      | 01/01/2021      | A150       | 01/01/2021          | 01/01/2021         | A156       |
            Then user will click on Finalize
            Then user will click on chase and verify its created3

        Scenario:Verify on chase query page when user resolved pend for chase then warning popup should come
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button1
            Then user will select project
            Then user will verify pend resolved warning message

        Scenario:Verify on chase query grid for resolved pend when warning popup selected as yes
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button1
            Then user will select project
            Then user will verify pend resolved

        Scenario:Verify on chase query grid for resolved pend when warning popup selected as No
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button1
            Then user will select project
            Then user will verify No option while resolving pend

        Scenario:Verify on chase query page when user resolved pend for chase then warning popup should come
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button1
            Then user will select project
            Then user will verify pend resolved warning message

        Scenario:Verify on chase query grid for closed pend warning popup displays
            Given user will go to retrievel menu
            When user will select retrivel pends from sub menu
            Then user will click on pend status and select new filter
            Then user will log chase id
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button1
            Then user will click on chaseid filter and search chase id
            Then user will click closed pend

        Scenario:Verify on chase query grid for closed pend when warning popup selected as No
            Given user will go to retrievel menu
            When user will select retrivel pends from sub menu
            Then user will click on pend status and select new filter
            Then user will log chase id
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button1
            Then user will click on chaseid filter and search chase id
            Then user will verify closed pend no option

        Scenario:Verify on chase query grid for closed pend when warning popup selected as Yes
            Given user will go to retrievel menu
            When user will select retrivel pends from sub menu
            Then user will click on pend status and select new filter
            Then user will log chase id
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button1
            Then user will click on chaseid filter and search chase id
            Then user will verify closed pend yes option

        Scenario: Verify New prompt is shown for creating Pursuit with Yes or No Option
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button
            Then user will select create new chase
            Then user will click on get started
            Then user will verify pursuit option with yes or no option


        Scenario: Verify By default pursuit selection is No
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button
            Then user will select create new chase
            Then user will click on get started
            Then user will verify Verify By default pursuit selection is No


        Scenario: Verify that user can create a new risk chase
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

        Scenario: Verify ADD Retriever : New Provider
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button
            Then user will select create new chase
            Then user will click on get started
            Then user will fill all the details8
            Then user will click on next step
            Then user will click on no option
            Then user will fill member form
                | firstName     | lastName | Dob        |
                | Qa automation | Testing  | 03/15/1997 |
            Then user will click on Add member
            Then user will click on provider no option2
            Then user will fill provider address
                | Address | phno       |
                | newyork | 8746536763 |
            Then user will click on provider no option3
            Then user will fill provider form
                | firstName1 | lastName1 |
                | ADAM       | SMITH     |
            Then user will fill encounter details
                | serviceDateFrom | serviceDateThru | diagnosis1 | diagnosis1startDate | diagnosis1thruDate | diagnosis2 |
                | 01/01/2021      | 01/01/2021      | A150       | 01/01/2021          | 01/01/2021         | A156       |
            Then user will click on Finalize
            Then user will click on chase and verify its created3

        Scenario: Verify IVA Projects available in Project field drop down.
            Given user will go to queries in menu button
            When user will select chase queries from sub menu button
            Then user will select create new chase
            Then user will click on get started
        Then user will verify IVA Projects available in Project field drop down


