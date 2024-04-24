import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";



import w15Measure from "../../pages/W15Measure/w15Measure";









const reveleerHomePage = require('../../pages/reveleerHomePage')
const reveleerLoginPage = require('../../pages/reveleerLoginPage')

const w15MeasurePage=new w15Measure()










Before(() => {
    cy.visitAndSetViewport(); // Call your custom command
    cy.fixture("credentials").then((credentials) => {
        const user = credentials[8];
        cy.title().should('eq', user.loginPageTitle);
        reveleerLoginPage.fillUsername(user.username);
        reveleerLoginPage.fillPassword(user.password);
        reveleerLoginPage.clickOnLoginButton();
        reveleerHomePage.elements.loginUserName().should('be.visible');
    });
});
Given('user will go to clinical tab', () => {
    a1c9MeasurePage.clickOnClincialTab()
})
When('user will go mrr tab', () => {
    bcseMeasurePage.clickOnMrrTab()
})
Then("user will filter by project and W15 mesaure", (datatable) => {
    datatable.hashes().forEach(element => {
        cy.wait(2000)
        cbpMeasurePage.clickOnHedisProject(element.ProjectName)
        cbpMeasurePage.clickOnMeasureFilter()
        w15MeasurePage.clickOnW15Measure(element.MeasureFilter)
        cbpMeasurePage.clickOnRunQuerryButton()
    })
})
Then('user will click on first chase', () => {
    eedMeasurePage.clickOnFirstChaseId()
})
Then("user will assign chase", (datatable) => {
    datatable.hashes().forEach(element => {
        eedMeasurePage.clickOnAssignButton()
        eedMeasurePage.typeInUserField(element.username)
        eedMeasurePage.clickOnUserDropDown()
        eedMeasurePage.clickOnContinueButton()
        eedMeasurePage.verifyAssignedToastMessage(element.AssignedSucessToastMessage)
    })
})
Then('user will verify dob field', () => {
    abaMeasurePage.verifyDobField()
})
Then('user will verify the numerator fields', () => {
    w34MeasurePage.verifyNumeratorAvaialble()
})
Then("user will click on correct member yes button", (datatable) => {
    datatable.hashes().forEach(element => {
        cy.wait(2000)
        abaMeasurePage.clickOnCorrectMemberYesButton()
        abaMeasurePage.verifyMemberValidation(element.MemberToastMessage)
    })
})
Then("user will fill all details of child visit", (datatable) => {
    datatable.hashes().forEach(element => {
        w15MeasurePage.fillAllDataForChildVisit(element.date,element.evidencePage)
       
    })
})
Then('user will verify compliance is positive', () => {
    w34MeasurePage.verifyComplianceIsCmr()
    w34MeasurePage.clickOnCrossButton()
})
Then("user will fill exclusion data which is not in date range and will verify error message", (datatable) => {
    datatable.hashes().forEach(element => {
        cy.wait(2000)
        abaMeasurePage.clickOnExclusionDropDown()
        abaMeasurePage.typeInExcusionDate(element.exclusiondate)
        w15MeasurePage.typeExclusionPageNo(element.exclusionpageno)
    })
})
Then('user will fill nrc field', () => {
    w34MeasurePage.clickOnNrcDropDown()
})
Then('user will click on submit button and will verify chse is submitted', () => {
    bcseMeasurePage.clickOnSubmitChaseButton()
    bcseMeasurePage.verifySubmissionToastMessage()
})
Then("user will fill date out of date range and will verify error message", (datatable) => {
    datatable.hashes().forEach(element => {
        w15MeasurePage.verifyDateErrorMessage(element.date1,)
       
    })
})
