Feature:Chase Query

 

   

   
       

       
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


