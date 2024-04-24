class cbpMeasure{
    elements={
        clinicalTab: () =>cy.xpath("//div[@class='navigation']//child::ul//li[@class='navigation__menuItem']//div[contains(text(),'Clinical')]"),
        mrrTab: () => cy.get('span').contains('Medical Record Review'),
        hedisProject: (ProjectName) => cy.get('span').contains(ProjectName),
        cbpMeasure:(MeasureFilter)=>cy.get('span').contains(MeasureFilter),
        runQueryButton:()=>cy.get("[text='Run Query']"),
        firstChaseId:()=>cy.get("[class='hdvi-gridcol hdvi-gridcol-chaseId ng-star-inserted']").eq(0),
        assignButton:()=>cy.get("[text='Assign']"),
        userfield:()=>cy.get("[id='assignToUsers']"),
        userDropDown:()=>cy.contains('li','@Me'),
        continueButton:()=>cy.get('[text="CONTINUE"]'),
        assignedToastMessage:()=>cy.get("[class='ui-toast-detail']"),
        dobField:()=>cy.get("[title='MR DOB']"),
        correctMemberYesButton:()=>cy.get('#yesBtn > .small > .ui-button > .ui-button-text'),
        measureFilter:()=>cy.xpath("//span[normalize-space()='Measures']"),
        dobField:()=>cy.get("[title='MR DOB']"),
        TwoAdminDateField:()=>cy.get("[class='control control--input control--textbox ng-untouched ng-pristine']"),
        dateField:()=>cy.get("[id='Date']"),
        errormessage: () => cy.get('.control__header__error'),
        systolicField:()=>cy.get('[id="Systolic"]'),
        diastolicfield:()=>cy.get('[id="Diastolic"]'),
        addButton:()=>cy.get("[class='control__add']"),
        evidencePg:()=>cy.get("[id='EvidencePage']"),
        crossButton:()=>cy.get("[class='control__delete ng-star-inserted']"),
        exclusionDropDown: () => cy.get("[class='ui-dropdown-trigger-icon ui-clickable pi pi-caret-down']").eq(1),
        exclusionDropDownValue: () => cy.get("[role='option']").eq(0),
        exclusionDate: () => cy.get("[id='Exclusion Date']"),
        exclusionPage: () => cy.get("[id='Exclusion Exclusion Page Number']"),
        pageWarningMessage:()=>cy.get("div[role='alert']"),
     


    }
    clickOnHedisProject(ProjectName)
    {
        this.elements.hedisProject(ProjectName).click()
    }
    clickOnMeasureFilter()
    {
        this.elements.measureFilter().click()
    }
    clickOnCbpMeasure(MeasureFilter)
    {
        this.elements.cbpMeasure(MeasureFilter).click()
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
    verifyDobField()
    {
        this.elements.dobField().should('be.visible').and('includes.text','MR DOB')
    }
    verifyTwoAdminDateField()
    {
        this.elements.TwoAdminDateField().eq(2).should('be.visible')
        this.elements.TwoAdminDateField().eq(3).should('be.visible')
    }
    typeInDateField(date)
    {
        this.elements.dateField().type(date)
    }
    verifyTheErrorMessageForDateRange() {
        this.elements.errormessage().scrollIntoView().should('be.visible').and('includes.text', 'BloodPressure Test Date expected to be between 01/01/2023 and 12/31/2023; ')
    }
    typeInSystolicField(systolicValue)
    {
        this.elements.systolicField().type(systolicValue)
        this.elements.errormessage().scrollIntoView().should('be.visible').and('includes.text', 'Systolic expected to be not less than 40; ')
    }
    typeInSystolicField1(systolicValue1)
    {
        this.elements.systolicField().clear().type(systolicValue1)
        this.elements.errormessage().scrollIntoView().should('be.visible').and('includes.text', 'Systolic expected to be not greater than 300; ')
    }
    typeInDiastolicField(diastolic)
    {
        this.elements.diastolicfield().type(diastolic)
        this.elements.errormessage().scrollIntoView().should('be.visible').and('includes.text', 'Diastolic expected to be not less than 20; ')
    }
    typeInDiastolicField1(diastolic1)
    {
        this.elements.diastolicfield().clear().type(diastolic1)
        this.elements.errormessage().scrollIntoView().should('be.visible').and('includes.text', 'Diastolic expected to be not greater than 200; ')
        this.elements.diastolicfield().clear()
    }
    clickOnAddButton()
    {
        this.elements.addButton().click()
    }
    typeInSystolicField2(systolicValue)
    {
        this.elements.systolicField().eq(1).type(systolicValue)
        this.elements.errormessage().scrollIntoView().should('be.visible').and('includes.text', 'Systolic expected to be not less than 40; ')
    }
    typeInSystolicField3(systolicValue1)
    {
        this.elements.systolicField().eq(1).clear().type(systolicValue1)
        this.elements.errormessage().scrollIntoView().should('be.visible').and('includes.text', 'Systolic expected to be not greater than 300; ')
    }
    typeInEvidencePage(pageNo)
    {
        this.elements.evidencePg().type(pageNo)
    }
    typeInSystolicField4(systolicValue)
    {
        this.elements.systolicField().type(systolicValue)
    }
    typeInDiastolicField4(diastolic)
    {
        this.elements.diastolicfield().type(diastolic)
    }
    clickOnCrossButon()
    {
        this.elements.crossButton().eq(1).click()
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
    verifyErrorMessageForDateRange()
    {
        this.elements.dateField().click()
        this.elements.errormessage().scrollIntoView().should('be.visible').and('includes.text', 'Specified exclusion type expects exclusion date between 2023-01-01 and 2023-12-31;')
    }    
    verifyTheErrorMessageForNrc()
    {
        this.elements.pageWarningMessage().should('be.visible').and('includes.text','Negative reason code is missing from non-compliant numerator')
    }
   
}
export default cbpMeasure
