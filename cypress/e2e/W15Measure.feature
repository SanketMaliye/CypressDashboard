Feature: W15 Measure




    Scenario:Verify DOB fields
        Given user will go to clinical tab
        When user will go mrr tab
        Then user will filter by project and W15 mesaure
            | ProjectName             | MeasureFilter |
            | QAAutomation_HEDIS_TEST | W15           |
        Then user will click on first chase
        Then user will assign chase
            | username | AssignedSucessToastMessage |
            | @me      | Assigned Successfully.     |
        Then user will verify dob field


    Scenario:Verify that well child visit shows different Numerators
        Given user will go to clinical tab
        When user will go mrr tab
        Then user will filter by project and W15 mesaure
            | ProjectName             | MeasureFilter |
            | QAAutomation_HEDIS_TEST | W15           |
        Then user will click on first chase
        Then user will assign chase
            | username | AssignedSucessToastMessage |
            | @me      | Assigned Successfully.     |
        Then user will click on correct member yes button
            | MemberToastMessage          |
            | Member Validation Succeeded |
        Then user will verify the numerator fields


        Scenario:Verify that for +ve compliance ,all dates must be between DOB and DOB + 15 months.
    Given user will go to clinical tab
    When user will go mrr tab
    Then user will filter by project and W15 mesaure
        | ProjectName             | MeasureFilter |
        | QAAutomation_HEDIS_TEST | W15           |
    Then user will click on first chase
    Then user will assign chase
        | username | AssignedSucessToastMessage |
        | @me      | Assigned Successfully.     |
    Then user will click on correct member yes button
        | MemberToastMessage          |
        | Member Validation Succeeded |
    Then user will fill all details of child visit
        | date       | evidencePage |
        | 11/11/1997 | 1            |
    Then user will verify compliance is positive


    Scenario:Verify that exclusion non compliance shows validation message if date entered out of range
        Given user will go to clinical tab
        When user will go mrr tab
        Then user will filter by project and W15 mesaure
            | ProjectName             | MeasureFilter |
            | QAAutomation_HEDIS_TEST | W15           |
        Then user will click on first chase
        Then user will assign chase
            | username | AssignedSucessToastMessage |
            | @me      | Assigned Successfully.     |
        Then user will click on correct member yes button
            | MemberToastMessage          |
            | Member Validation Succeeded |
        Then user will fill exclusion data which is not in date range and will verify error message
            | exclusiondate | exclusionpageno |
            | 11/11/2018    | 1               |


    Scenario:Verify chase can be submitted when the complaince is +ve.
        Given user will go to clinical tab
        When user will go mrr tab
        Then user will filter by project and W15 mesaure
            | ProjectName             | MeasureFilter |
            | QAAutomation_HEDIS_TEST | W15           |
        Then user will click on first chase
        Then user will assign chase
            | username | AssignedSucessToastMessage |
            | @me      | Assigned Successfully.     |
        Then user will click on correct member yes button
            | MemberToastMessage          |
            | Member Validation Succeeded |
        Then user will fill all details of child visit
            | date       | evidencePage |
            | 11/11/1997 | 1            |
        Then user will verify compliance is positive
        Then user will click on submit button and will verify chse is submitted


    Scenario:Verify chase can be submitted when chase shows -ve compliance
        Given user will go to clinical tab
        When user will go mrr tab
        Then user will filter by project and W15 mesaure
            | ProjectName             | MeasureFilter |
            | QAAutomation_HEDIS_TEST | W15           |
        Then user will click on first chase
        Then user will assign chase
            | username | AssignedSucessToastMessage |
            | @me      | Assigned Successfully.     |
        Then user will click on correct member yes button
            | MemberToastMessage          |
            | Member Validation Succeeded |
        Then user will fill nrc field
        Then user will click on submit button and will verify chse is submitted


         Scenario:Veriy that any chase field shows a validtaion message when the date entered is outside the timeframe
        Given user will go to clinical tab
        When user will go mrr tab
        Then user will filter by project and W15 mesaure
            | ProjectName             | MeasureFilter |
            | QAAutomation_HEDIS_TEST | W15           |
        Then user will click on first chase
        Then user will assign chase
            | username | AssignedSucessToastMessage |
            | @me      | Assigned Successfully.     |
        Then user will click on correct member yes button
            | MemberToastMessage          |
            | Member Validation Succeeded |
         Then user will fill date out of date range and will verify error message
            | date1      |
            | 11/11/1998 |
       
         Scenario:Verify NRC can be selected and validated upon submission when chase is non compliant
        Given user will go to clinical tab
        When user will go mrr tab
        Then user will filter by project and W15 mesaure
            | ProjectName             | MeasureFilter |
            | QAAutomation_HEDIS_TEST | W15           |
        Then user will click on first chase
        Then user will assign chase
            | username | AssignedSucessToastMessage |
            | @me      | Assigned Successfully.     |
        Then user will click on correct member yes button
            | MemberToastMessage          |
            | Member Validation Succeeded |
        Then user will fill nrc field
        Then user will click on submit button and will verify chse is submitted
