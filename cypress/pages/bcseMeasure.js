class bcseMeasure{
    elements={
        clinicalTab: () =>cy.xpath("//div[@class='navigation']//child::ul//li[@class='navigation__menuItem']//div[contains(text(),'Clinical')]"),
        mrrTab: () => cy.get('span').contains('Medical Record Review'),
        hedisProject:()=>cy.get("li[aria-label='HEDISMY2023'] span[class='ng-star-inserted']"),
        measureFilter:()=>cy.xpath("//span[normalize-space()='Measures']"),
        bcsEMeasureFilter:()=>cy.get("li[aria-label='BCS-E'] span[class='ng-star-inserted']"),
        runQueryButton:()=>cy.get("[text='Run Query']"),
        firstChaseId:()=>cy.get("[class='hdvi-gridcol hdvi-gridcol-chaseId ng-star-inserted']").eq(0),
        assignButton:()=>cy.get("[text='Assign']"),
        userfield:()=>cy.get("[id='assignToUsers']"),
        userDropDown:()=>cy.contains('li','@Me'),
        continueButton:()=>cy.get('[text="CONTINUE"]'),
        assignedToastMessage:()=>cy.get("[class='ui-toast-detail']"),
        dobField:()=>cy.get("[title='MR DOB']"),
        correctMemberYesButton:()=>cy.get('#yesBtn > .small > .ui-button > .ui-button-text'),
        raceField:()=>cy.get("[id='Race']"),
        dropDownArrow:()=>cy.get("[class='ui-button-icon-left ui-clickable pi pi-caret-down']"),
        dropDownContainer:()=>cy.get("[class*='ui-widget ui-corner-all ui-helper-reset']"),
        submitChaseButton:()=>cy.get("[text='Submit Chase']"),
        pageWarningMessage:()=>cy.get("div[role='alert']"),
        datefield:()=>cy.get("[id='Date']"),
        errormessage:()=>cy.get('.control__header__error'),
        raceDropDownValue:()=>cy.get("[role='option']").eq(0),
        evidencePage:()=>cy.get("[id='EvidencePage']"),
        ethnicityDropDownValue:()=>cy.get("[role='option']").eq(0),
        noContraText:()=>cy.get("[type='Contra']"),
        sampleCompliance:()=>cy.get("[class='hdvi-gridcol hdvi-gridcol-sampleCompliance.code ng-star-inserted']"),
        exclusionDropDown:()=>cy.get("[class='ui-dropdown-trigger-icon ui-clickable pi pi-caret-down']").eq(1),
        exclusionDropDownValue:()=>cy.get("[role='option']").eq(1),
        exclusionDate:()=>cy.get("[id='Exclusion Date']"),
        exclusionPage:()=>cy.get("[id='Exclusion Exclusion Page Number']"),
        submitSucessMessage:()=>cy.get("[class='ui-toast-detail']"),


    }
    clickOnClincialTab()
    {
        this.elements.clinicalTab().click()
    }
    clickOnMrrTab()
    {
        this.elements.mrrTab().click()
    }
    selectHedisProject()
    {
        this.elements.hedisProject().click()
    }
    clickOnMeasureFilter()
    {
        this.elements.measureFilter().click()
    }
    clickOnBcsEMeasure()
    {
        this.elements.bcsEMeasureFilter().click()
    }
    clickOnRunQuerryButton()
    {
        this.elements.runQueryButton().click()
    }
    clickOnFirstChaseId()
    {
        this.elements.firstChaseId().click()
    }
    clickOnAssignButton()
    {
        this.elements.assignButton().click()    
    }
    typeInUserField(username)
    {
        this.elements.userfield().type(username)
    }
    clickOnUserDropDown()
    {
        this.elements.userDropDown().click()
    }
    clickOnContinueButton()
    {
        this.elements.continueButton().click()
    }
    verifyAssignedToastMessage(AssignedSucessToastMessage)
    {
        this.elements.assignedToastMessage().should('be.visible').and('includes.text',AssignedSucessToastMessage)
    }
    clickOnCorrectMemberYesButton()
    {
        this.elements.correctMemberYesButton().click()
    }
    verifyMemberValidation(MemberToastMessage)
    {
        this.elements.assignedToastMessage().should('be.visible').and('includes.text',MemberToastMessage)
    }
    verifyCorrectMemberYesButtonIsVisible()
    {
        this.elements.correctMemberYesButton().should('be.visible')
    }
    verifyRaceFieldIsDisabled()
    {
        this.elements.raceField().should('be.visible').and('be.disabled')
    }
    verifyRaceFieldIsEnabled()
    {
        this.elements.raceField().should('be.visible').and('not.be.disabled')
    }
    clickOnRaceDropDown()
    {
        this.elements.dropDownArrow().eq(0).click()
    }
    verifyRaceDropDownContainer()
    {
        this.elements.dropDownContainer().should('be.visible')
    }
    clickOnEthnicityDropDown()
    {
        this.elements.dropDownArrow().eq(1).click()
    }
    verifyEthnicityDropDownContainer()
    {
        this.elements.dropDownContainer().should('be.visible')
    }
    clickOnSubmitChaseButton()
    {
        this.elements.submitChaseButton().click()
    }
    verifyRaceAndEthnicityIsMandatory()
    {
        this.elements.pageWarningMessage().should('be.visible').and('includes.text','Race and ethnicity must be coded for this measure;')
    }
    typeInDateField(date)
    {
        this.elements.datefield().type(date)
    }
    verifyTheErrorMessage()
    {
        this.elements.errormessage().should('be.visible').and('includes.text','Mammogram Date may not be in a future; Mammogram Date expected to be between 10/01/2021 and 12/31/2023; ')
    }
    clickOnRaceDropDownValue()
    {
        this.elements.raceDropDownValue().click()
    }
    typeInEvidencePage(evidencePage)
    {
        this.elements.evidencePage().eq(0).type(evidencePage)
    }
    clickOndateField()
    {
        this.elements.datefield().click()
    }
    verifyerrorMessageForEthnicity()
    {
        this.elements.pageWarningMessage().should('be.visible').and('includes.text','Empty or no value specified for a required attribute Ethnicity;')
    }
    clickOnEthnicityDropDownValue()
    {
        this.elements.ethnicityDropDownValue().click()
    }
    verifyerrorMessageForRace()
    {
        this.elements.pageWarningMessage().should('be.visible').and('includes.text','Empty or no value specified for a required attribute Race;')
    }
    verifyerrorMessageForPage()
    {
        this.elements.pageWarningMessage().should('be.visible').and('includes.text','Empty or no value specified for a required attribute Page #;')
    }
    verifyNoContraField()
    {
        this.elements.noContraText().scrollIntoView().should('be.visible').and('includes.text','No Contras')
    }
    typeInDateField1(date1)
    {
        this.elements.datefield().type(date1)
    }
    typeInEvidencePage1(evidencePage1)
    {
        this.elements.evidencePage().eq(0).type(evidencePage1)
    }
    verifyComplianceIsCmr()
    {
        this.elements.sampleCompliance().should('be.visible').and('includes.text','C/MR')
    }
    verifyComplianceIsNc()
    {
        this.elements.sampleCompliance().should('be.visible').and('includes.text','NC')
    }
    clickOnExclusionDropDown()
    {
        this.elements.exclusionDropDown().click()
    }
    clickOnExclusionDropDownValue()
    {
        this.elements.exclusionDropDownValue().click()
    }
    typeInExclusionDateField(exclusiondate)
    {
        this.elements.exclusionDate().type(exclusiondate)
    }
    typeInExclusionPagenoField(exclusionpage)
    {
        this.elements.exclusionPage().type(exclusionpage)
    }
    verifyComplianceIsEMR()
    {
        this.elements.sampleCompliance().should('be.visible').and('includes.text','E/MR')
    }
    typeInExclusionDateField1(exclusiondate1)
    {
        this.elements.exclusionDate().type(exclusiondate1)
    }
    verifyerrorMessageForDateRange()
    {
        this.elements.exclusionDate().click()
        this.elements.pageWarningMessage().should('be.visible').and('includes.text','Specified exclusion type expects exclusion date on or prior to 2023-12-31;')
    }
    verifyErrorMessageForExclusionPage()
    {
        this.elements.exclusionPage().click()
        this.elements.pageWarningMessage().should('be.visible').and('includes.text','Empty or no value specified for a required attribute Page #;')


    }
    verifyErrorMessageForExclusionDate()
    {
        this.elements.exclusionDate().clear()
        this.elements.exclusionPage().click()
        this.elements.pageWarningMessage().should('be.visible').and('includes.text','Empty or no value specified for a required attribute ExclusionDate;')


    }
    verifySubmissionToastMessage()
    {
        this.elements.submitSucessMessage().should('be.visible').and('includes.text','Submission Succeeded!')
    }


   
}
export default bcseMeasure
