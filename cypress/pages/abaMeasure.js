class abaMeasure{
    elements={
        clinicalTab: () => cy.xpath("//div[@class='navigation']//child::ul//li[@class='navigation__menuItem']//div[contains(text(),'Clinical')]"),
        mrrTab: () => cy.get('span').contains('Medical Record Review'),
        hedisProject:()=>cy.get("li[aria-label='HEDISMY2023'] span[class='ng-star-inserted']"),
        measureFilter:()=>cy.xpath("//span[normalize-space()='Measures']"),
        abaMeasureFilter:()=>cy.get("li[aria-label='ABA'] span[class='ng-star-inserted']"),
        runQueryButton:()=>cy.get("[text='Run Query']"),
        firstChaseId:()=>cy.get("[class='hdvi-gridcol hdvi-gridcol-chaseId ng-star-inserted']").eq(0),
        assignButton:()=>cy.get("[text='Assign']"),
        userfield:()=>cy.get("[id='assignToUsers']"),
        userDropDown:()=>cy.contains('li','@Me'),
        continueButton:()=>cy.get('[text="CONTINUE"]'),
        assignedToastMessage:()=>cy.get("[class='ui-toast-detail']"),
        dobField:()=>cy.get("[title='MR DOB']"),
        correctMemberYesButton:()=>cy.get('#yesBtn > .small > .ui-button > .ui-button-text'),
        bmiValueFiled:()=>cy.get("[id='Value']").eq(0),
        crossButton:()=>cy.get("[class='pi pi-times']"),
        bmiPercentileField:()=>cy.get("[id='Percentile']"),
        valueFieldErrorMessage:()=>cy.get("[title='Bmi Test Value expected to be not greater than 100; ']"),
        percentileFieldErrorMessage:()=>cy.get('.control__header__error'),
        dateField:()=>cy.get("[class='control__input control__input--textbox ui-inputtext ui-corner-all ui-state-default ui-widget ng-untouched ng-pristine ng-valid ng-star-inserted ui-state-filled']").eq(0),
        dateFieldErrorMessage:()=>cy.get("[title='Bmi Test Date expected to be between 01/01/2022 and 12/31/2023; ']"),
        negativeCompliance:()=>cy.get("[class='hdvi-gridcol hdvi-gridcol-sampleCompliance.code ng-star-inserted']"),
        weightValue:()=>cy.get("[id='Value']").eq(1),
        weightValueErrorMessage:()=>cy.get('.control__header__error'),
        dateField1:()=>cy.get("[id='Date']"),
        weightUnitDropDown:()=>cy.get("[class='ui-button-icon-left ui-clickable pi pi-caret-down']").eq(0),
        weightUnitDropDownValue:()=>cy.get("[role='option']").eq(0),
        weightEvidencePage:()=>cy.get("[id='EvidencePage']").eq(1),
        evidencePage:()=>cy.get("[id='EvidencePage']"),
        heightValueFiled:()=>cy.get("[id='Value']").eq(2),
        heightDropDown:()=>cy.get("[class='ui-button-icon-left ui-clickable pi pi-caret-down']").eq(1),
        heightDropDownValue:()=>cy.get("[role='option']").eq(0),
        nrcField:()=>cy.get("[id='NRCBMIPositive']"),
        heighttValueErrorMessage:()=>cy.get('.control__header__error'),
        positiveCompliance:()=>cy.get("[class='hdvi-gridcol hdvi-gridcol-sampleCompliance.code ng-star-inserted']"),
        submitChaseButton:()=>cy.get("[text='Submit Chase']"),
        submitSucessMessage:()=>cy.get("[class='ui-toast-detail']"),
        nrcDropDown:()=>cy.get("[class='ui-button-icon-left ui-clickable pi pi-caret-down']").eq(2),
        nrcDropDownValue:()=>cy.get("[role='option']").eq(0),
        nrcAlretMessage:()=>cy.get("div[role='alert']"),
        dateFieldErrorMessage1:()=>cy.get('.control__header__error'),
        exclusionDropDown:()=>cy.get("[class='ui-dropdown-trigger ui-state-default ui-corner-right']").eq(1),
        exclusionDropDownValue:()=>cy.get("[role='option']").eq(0),
        exclusionDate:()=>cy.get("[id='Exclusion Date']"),
        exclusionPageNo:()=>cy.get("[id='Exclusion Exclusion Page Number']"),
        errormessage:()=>cy.get('.control__header__error'),
        contaDropDown:()=>cy.get("[class='ui-dropdown-trigger ui-state-default ui-corner-right']").eq(2),
        contraDropDownValue:()=>cy.get("[role='option']").eq(0),
        contraDate:()=>cy.get("[id='Contra Date']"),
        contraPageNo:()=>cy.get("[id='Contra Exclusion Page Number']"),






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
    clickOnAbaMeasure()
    {
        this.elements.abaMeasureFilter().click()
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
        this.elements.dobField().scrollIntoView().should('be.visible').and('includes.text','MR DOB')
    }
    clickOnCorrectMemberYesButton()
    {
        this.elements.correctMemberYesButton().click()
    }
    verifyMemberValidation(MemberToastMessage)
    {
        this.elements.assignedToastMessage().should('be.visible').and('includes.text',MemberToastMessage)
    }
    verifyBmiValueFieldIsDisabled()
    {
        this.elements.bmiValueFiled().should('be.visible').and('be.disabled')
    }
    verifyBmiValueFieldIsEnabled()
    {
        this.elements.bmiValueFiled().should('be.visible').and('not.be.disabled')
    }
    clickOnCrossButton()
    {
        this.elements.crossButton().click()
    }
    verifyBmiPercentileFieldIsDisabled()
    {
        this.elements.bmiPercentileField().should('be.visible').and('be.disabled')
    }
    verifyBmiPercentileFieldIsEnabled()
    {
        this.elements.bmiPercentileField().should('be.visible').and('not.be.disabled')
    }
    typeInValueField(value)
    {
        this.elements.bmiValueFiled().clear().type(value)
    }
    verifyTheValidationErrorMessageForValueField(valueErrorMessage)
    {
        this.elements.valueFieldErrorMessage().should('be.visible').and('includes.text',valueErrorMessage)
    }
    typeinPercentileField(percentile)
    {
        this.elements.bmiPercentileField().clear().type(percentile)
    }
    verifyTheValidationErrorMessageForPercentileField(percentileErrorMessage)
    {
        this.elements.percentileFieldErrorMessage().should('be.visible').and('includes.text',percentileErrorMessage)
    }
    typeInDateField(date)
    {
        this.elements.dateField().clear().type(date)
    }
    verifyTheDateFieldErrorMessage(dateErrorMessage)
    {
        cy.get("[title='Bmi Test Date expected to be between 01/01/2022 and 12/31/2023; ']").invoke('text').as('errorMessageText');
        cy.get('@errorMessageText').then((text) => {
        cy.log('Error Message Text: ' + text);
        console.log('Error Message Text: ' + text);
        expect(text.trim()).to.equal(dateErrorMessage);
});
       cy.get('.control__header__error').should('have.text','Bmi Test Date expected to be between 01/01/2022 and 12/31/2023; ')
    }
    verifyNegativeCompliance()
    {
        this.elements.negativeCompliance().should('be.visible').and('includes.text','NC')
    }
    typeinWeightField(weightvalue)
    {
        this.elements.weightValue().clear().type(weightvalue)
        this.elements.weightValueErrorMessage().should('not.exist')
    }
    typeinWeightField1(weightvalue1)
    {
        this.elements.weightValue().clear().type(weightvalue1)
        this.elements.weightValueErrorMessage().should('be.visible').and('includes.text','Body Weight Test Value contains invalid pattern; ')
    }
    clickOnUnitDropDownArrow()
    {
        this.elements.weightUnitDropDown().click()
    }
    selectWeightUnitDropDownArrow()
    {
        this.elements.weightUnitDropDownValue().click()
    }
    typeInWeightEvidencePage(evidencePage)
    {
        this.elements.weightEvidencePage().clear().type(evidencePage)
    }
    ClearWeightValueField()
    {
        this.elements.weightValue().clear()
    }
    typeinWeightDateField(dateValue)
    {
        this.elements.dateField1().eq(1).clear().type(dateValue)
    }
    clickOnBmiDate()
    {
        this.elements.dateField1().eq(0).click()
    }
    VerifyErrorMessageForWeightFieldIsRequired()
    {
        this.elements.weightValueErrorMessage().should('be.visible').and('includes.text','Empty or no value specified for a required attribute BodyWeightTestValue; ')
    }
    fillAllBmiFields(dateValue,value,percentile,evidencePage)
    {
        this.elements.dateField1().eq(0).type(dateValue)
        this.elements.bmiValueFiled().type(value)
        //this.elements.bmiPercentileField().type(percentile)
        this.elements.evidencePage().eq(0).type(evidencePage)
    }
    fillAllHeightFields(dateValue,value,evidencePage)
    {
        this.elements.dateField1().eq(2).type(dateValue)
        this.elements.heightValueFiled().type(value)
        this.elements.heightDropDown().click()
        this.elements.heightDropDownValue().click()
        this.elements.evidencePage().eq(2).type(evidencePage)
    }
    verifyNrcFieldIsDisabled()
    {
        this.elements.nrcField().should('be.disabled')
    }
    verifyHeightValueFieldErrorMessage(heightvalue)
    {
        this.elements.heightValueFiled().type(heightvalue)
        this.elements.heighttValueErrorMessage().should('be.visible').and('includes.text','Body Height Test Value expected to be not greater than 250; ')
    }
    typeinHeightField(heightvalue1)
    {
        this.elements.heightValueFiled().clear().type(heightvalue1)
        this.elements.heighttValueErrorMessage().should('not.exist')
    }
    typeinHeightField1(heightvalue2)
    {
        this.elements.heightValueFiled().clear().type(heightvalue2)
        this.elements.heighttValueErrorMessage().should('be.visible').and('includes.text','Body Height Test Value contains invalid pattern; ' )
    }
    verifyPostiveCompliance()
    {
        this.elements.positiveCompliance().should('be.visible').and('includes.text','C/MR')
    }
    clickOnSubmitChaseButton()
    {
        this.elements.submitChaseButton().scrollIntoView().click()
    }
    verifySubmissionToastMessage()
    {
        this.elements.submitSucessMessage().should('be.visible').and('includes.text','Submission Succeeded!')
    }
    clickOnNrcDropDown()
    {
        cy.wait(2000)
        this.elements.nrcDropDown().click()
        this.elements.nrcDropDownValue().click()
    }
    verifyNrcAlertMessage()
    {
        this.elements.nrcAlretMessage().should('be.visible').and('includes.text','Negative reason code is missing from non-compliant numerator')
    }
    dateFieldRange(dateValue)
    {
        this.elements.dateField1().eq(1).type(dateValue)
    }
    verifyTheErrorMessageForDate()
    {
        this.elements.dateFieldErrorMessage1().scrollIntoView().should('be.visible').and('includes.text','Body Weight Test Date expected to be between 01/01/2022 and 12/31/2023; ')
    }
    fourDigitValueError(weightvalue1)
    {
        this.elements.weightValue().clear().type(weightvalue1)
        this.elements.weightValueErrorMessage().should('be.visible').and('includes.text','Body Weight Test Value expected to be not greater than 999.9; ')
    }
    clickOnExclusionDropDown()
    {
        this.elements.exclusionDropDown().click()
        this.elements.exclusionDropDownValue().click()
    }
    typeInExcusionDate(exclusiondate)
    {
        this.elements.exclusionDate().type(exclusiondate)
    }
    typeExclusionPageNo(exclusionpageno)
    {
        this.elements.exclusionPageNo().type(exclusionpageno)
        this.elements.errormessage().should('be.visible').and('includes.text','Specified exclusion type expects exclusion date between 2022-01-01 and 2023-12-31; ')


    }
    typeInExcusionDate1(exclusiondate1)
    {
        this.elements.exclusionDate().clear().type(exclusiondate1)
        this.elements.exclusionPageNo().click()
        this.elements.errormessage().should('not.exist')
    }
    clickOnContraDropDownValue()
    {
        this.elements.contaDropDown().click()
        this.elements.contraDropDownValue().click()
    }
    typeInContraDate(contradate)
    {
        this.elements.contraDate().type(contradate)
    }
    typeInContraPageNo(contraexclusionpageno)
    {
        this.elements.contraPageNo().type(contraexclusionpageno)
        this.elements.contraDate().click()
        this.elements.errormessage().should('be.visible').and('includes.text','Specified contra type expects contra date between 2022-01-01 and 2023-12-31;')
    }
    typeInContraDate1(contradate1)
    {
        this.elements.contraDate().clear().type(contradate1)
        this.elements.contraPageNo().click()
        this.elements.errormessage().should('not.exist')
    }
   






 
}
export default abaMeasure

