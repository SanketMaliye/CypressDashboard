class w15Measure{
    elements={
        clinicalTab: () =>cy.xpath("//div[@class='navigation']//child::ul//li[@class='navigation__menuItem']//div[contains(text(),'Clinical')]"),
        mrrTab: () => cy.get('span').contains('Medical Record Review'),
        hedisProject: (ProjectName) => cy.get('span').contains(ProjectName),
        w15Measure:(MeasureFilter)=>cy.get('span').contains(MeasureFilter),
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
        childVisitContainer:()=>cy.get('form-standard-group.ng-star-inserted > :nth-child(1)'),
        datefield:()=>cy.get("[id='Date']"),
        evidencePage:()=>cy.get("[id='EvidencePage']"),
        gapCompliance:()=>cy.get("[class='hdvi-gridcol hdvi-gridcol- ng-star-inserted']"),
        sampleCompliance:()=>cy.get("[class='hdvi-gridcol hdvi-gridcol-sampleCompliance.code ng-star-inserted']"),
        crossButton:()=>cy.get("[class='control__delete ng-star-inserted']"),
        errorMessage:()=>cy.get('.control__header__error'),
        nrcDropDown:()=>cy.get("[class='ui-button-icon-left ui-clickable pi pi-caret-down']").eq(0),
        nrcDropDownValue:()=>cy.get("[role='option']").eq(0),
        errormessage:()=>cy.get('.control__header__error'),
        exclusionDate:()=>cy.get("[id='Exclusion Date']"),
        exclusionPageNo:()=>cy.get("[id='Exclusion Exclusion Page Number']"),


       


    }
    clickOnHedisProject(ProjectName)
    {
        this.elements.hedisProject(ProjectName).click()
    }
    clickOnMeasureFilter()
    {
        this.elements.measureFilter().click()
    }
    clickOnW15Measure(MeasureFilter)
    {
        this.elements.w15Measure(MeasureFilter).click()
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
    fillAllDataForChildVisit(date,evidencePage)
    {
      this.elements.datefield().eq(0).type(date)
      this.elements.evidencePage().eq(0).type(evidencePage)
      this.elements.datefield().eq(1).type(date)
      this.elements.evidencePage().eq(1).type(evidencePage)
      this.elements.datefield().eq(2).type(date)
      this.elements.evidencePage().eq(2).type(evidencePage)
      this.elements.datefield().eq(3).type(date)
      this.elements.evidencePage().eq(3).type(evidencePage)
      this.elements.datefield().eq(4).type(date)
      this.elements.evidencePage().eq(4).type(evidencePage)
    }
    typeExclusionPageNo(exclusionpageno)
    {
        this.elements.exclusionPageNo().type(exclusionpageno)
        this.elements.exclusionDate().click()
        this.elements.errormessage().should('be.visible').and('includes.text', 'Specified exclusion type expects exclusion date between 2023-01-01 and 2023-12-31; ')
    }
    verifyDateErrorMessage(date1)
    {
        this.elements.datefield().eq(0).type(date1)
        this.elements.errorMessage().scrollIntoView().should('be.visible').and('includes.text','Health History Review Date expected to be between 03/15/1997 and 06/13/1998; ')
    }
 
}
export default w15Measure

