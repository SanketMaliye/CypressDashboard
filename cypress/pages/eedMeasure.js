class eedMeasure{
    elements={
        hedisProject:()=>cy.get("li[aria-label='QAAutomation_HEDIS_TEST'] span[class='ng-star-inserted']"),
        measureFilter:()=>cy.xpath("//span[normalize-space()='Measures']"),
        eedMeasureFilter:()=>cy.get("li[aria-label='EED'] span[class='ng-star-inserted']"),
        runQueryButton:()=>cy.get("[text='Run Query']"),
        firstChaseId:()=>cy.get("[class='hdvi-gridcol hdvi-gridcol-chaseId ng-star-inserted']").eq(0),
        assignButton:()=>cy.get("[text='Assign']"),
        userfield:()=>cy.get("[id='assignToUsers']"),
        userDropDown:()=>cy.contains('li','@Me'),
        continueButton:()=>cy.get('[text="CONTINUE"]'),
        assignedToastMessage:()=>cy.get("[class='ui-toast-detail']"),
        dobField:()=>cy.get("[title='MR DOB']"),
        correctMemberYesButton:()=>cy.get('#yesBtn > .small > .ui-button > .ui-button-text'),
        dateField:()=>cy.get("[id='Date']"),
        optDropDownDownArrow:()=>cy.get("[class='ui-button-icon-left ui-clickable pi pi-caret-down']").eq(1),
        dropDownValue:()=>cy.get("[role='option']").eq(0),
        evidencePg:()=>cy.get("[id='EvidencePage']"),
        pageWarningMessage:()=>cy.get("div[role='alert']"),
        exclusionDate:()=>cy.get("[id='Exclusion Date']"),
        crossButton:()=>cy.get("[class='control__delete ng-star-inserted']"),
        addButton:()=>cy.get("[class='control__add']"),
        resultDropDownDownArrow:()=>cy.get("[class='ui-button-icon-left ui-clickable pi pi-caret-down']").eq(0),
        exclusionContainer: () => cy.get("[class='ui-dropdown-items-wrapper']"),
        exclusionDropDown: () => cy.get("[class='ui-dropdown-trigger-icon ui-clickable pi pi-caret-down']").eq(1),
        errormessage: () => cy.get('.control__header__error'),
        sampleCompliance: () => cy.get("[class='hdvi-gridcol hdvi-gridcol-sampleCompliance.code ng-star-inserted']"),
        gapCompliance: () => cy.get("[class='hdvi-gridcol hdvi-gridcol- ng-star-inserted']"),
        submitChaseButton: () => cy.get("[text='Submit Chase']"),
        exclusionDropDown: () => cy.get("[class='ui-dropdown-trigger-icon ui-clickable pi pi-caret-down']").eq(1),
        exclusionDropDownValue: () => cy.get("[role='option']").eq(0),
        exclusionDate: () => cy.get("[id='Exclusion Date']"),
        exclusionPage: () => cy.get("[id='Exclusion Exclusion Page Number']"),


    }
    selectHedisProject()
    {
        this.elements.hedisProject().click()
    }
    clickOnMeasureFilter()
    {
        this.elements.measureFilter().click()
    }
    clickOnEedMeasure()
    {
        this.elements.eedMeasureFilter().click()
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
    verifyDobField()
    {
        this.elements.dobField().should('be.visible').and('includes.text','MR DOB')
    }
    clickOnCorrectMemberYesButton()
    {
        this.elements.correctMemberYesButton().click()
    }
    typeInDateField(date)
    {
        this.elements.dateField().type(date)
    }
    clickOnOptDropDownArrow()
    {
        this.elements.optDropDownDownArrow().click()
    }
    clickOnOptDropDownValue()
    {
        this.elements.dropDownValue().click()
    }
    typeInEvidencePage(pageNo)
    {
        this.elements.evidencePg().type(pageNo)
    }
    verifyErrorMessageForResultField()
    {
        this.elements.exclusionDate().click()
        this.elements.pageWarningMessage().should('be.visible').and('includes.text','Empty or no value specified for a required attribute EyeExamResult;')
    }
    clickOnCrossButon()
    {
        this.elements.crossButton().click()
    }
    clickOnAddButton()
    {
        this.elements.addButton().click()
        cy.reload()
        cy.wait(2000)
    }
    clickOnResultField()
    {
        this.elements.resultDropDownDownArrow().click()
        this.elements.dropDownValue().click()
    }
    verifyErrorMessageForOptField()
    {
        this.elements.exclusionDate().click()
        this.elements.pageWarningMessage().should('be.visible').and('includes.text','Empty or no value specified for a required attribute CorrectProviderType;')
    }
    verifyErrorMessageForEvidencePage()
    {
        this.elements.exclusionDate().click()
        this.elements.pageWarningMessage().should('be.visible').and('includes.text','Empty or no value specified for a required attribute Page #;')
    }
    clickOnExclusionDropDown() {
        this.elements.exclusionDropDown().click()
    }
    verifyExclusionContainer() {
        this.elements.exclusionContainer().each(($element) => {
            const textsToVerify = ['Not age 18 - 75 in 2023', 'Member expired during 2023', 'Hospice service or benefit used in 2023', 'Member received palliative care during 2023', 'Steroid induced diabetes with no dx diabetes in 2023 or 2022', 'Gestational diabetes with no dx diabetes in 2023 or 2022', 'Polycystic ovarian syndrome with no dx diabetes in 2023 or 2022','Data validation error'];
            textsToVerify.forEach((text) => {
                cy.wrap($element)
                    .should('be.visible')
                    .invoke('text')
                    .should('include', text);
            });
        });
    }
    typeInDateField1(date1)
    {
        this.elements.dateField().type(date1)
    }
    verifyTheErrorMessageForDateRange() {
        this.elements.evidencePg().click()
        this.elements.errormessage().scrollIntoView().should('be.visible').and('includes.text', 'Eye Exam Date may not be in a future; Eye Exam Date expected to be between 03/07/2000 and 12/31/2023; ')
    }
    verifyGapandSampleComplianceIsCMR() {
        this.elements.exclusionDate().click()
        cy.wait(3000)
        this.elements.gapCompliance().should('be.visible').and('includes.text', 'C/MR')
        this.elements.sampleCompliance().should('be.visible').and('includes.text', 'C/MR')
    }
    clickOnSubmitChaseButton() {
        this.elements.submitChaseButton().click()
    }
    verifyTheErrorMessageForNrc()
    {
        this.elements.pageWarningMessage().should('be.visible').and('includes.text','Negative reason code is missing from non-compliant numerator "Eye Exam";')
    }
    verifyGapandSampleComplianceIsNc() {
        this.elements.exclusionDate().click()
        cy.wait(3000)
        this.elements.gapCompliance().should('be.visible').and('includes.text', 'NC')
        this.elements.sampleCompliance().should('be.visible').and('includes.text', 'NC')
    }
    clickOnExclusionDropDown() {
        this.elements.exclusionDropDown().click()
    }
    clickOnExclusionDropDownValue() {
        this.elements.exclusionDropDownValue().click()
    }
    typeInExclusionDateField(exclusiondate) {
        this.elements.exclusionDate().type(exclusiondate)
    }
    typeInExclusionPagenoField(exclusionpage) {
        this.elements.exclusionPage().type(exclusionpage)
    }
    verifyGapandSampleComplianceIsEMR() {
        this.elements.dateField().click()
        cy.wait(3000)
        this.elements.gapCompliance().should('be.visible').and('includes.text', 'E/MR')
        this.elements.sampleCompliance().should('be.visible').and('includes.text', 'E/MR')
    }
}
export default eedMeasure
