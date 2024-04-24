class a1c9Measure {
    elements = {
        clinicalTab: () => cy.xpath("//div[text()='Clinical']/parent::li"),
        retrievalPendTab: () => cy.xpath("//span[text()='Retrieval Pends']/parent::a"),
        mrrTab: () => cy.get('span').contains('Medical Record Review'),
        ORTab: () => cy.get('span').contains('Overread'),
        measureFilter: () => cy.xpath("//span[normalize-space()='Measures']"),
        measureContainer: () => cy.get("[id='MeasuresCodes']"),
        filterCancelButton: () => cy.get("p-button[class='secondary'] span[class='ui-button-text ui-clickable']"),
        clientOverreadTab: () => cy.xpath("//platform-navigation[1]/div[2]/app-menu[1]/p-menu[1]/div[1]/ul[1]/li[6]/a[1]/span[2]"),
        retrievalMenuButton: () => cy.xpath("//div[text()='Retrieval']/parent::li"),
        docQaButton: () => cy.xpath("//span[text()='Document QA']/parent::a"),
        retrievalPendA1c9: () => cy.get("[id='MeasureIds']"),
        measureList: () => cy.get("[id='MeasuresCodes'] span[class='ng-star-inserted']"),
        adminMenuButton: () => cy.xpath("//div[text()='Admin']/parent::li"),
        adminProjectButton: () => cy.xpath("//span[text()='Projects']/parent::a"),
        hedisProject: () => cy.get("li[aria-label='HEDISMY2023'] span[class='ng-star-inserted']"),
        runQueryButton: () => cy.get("[text='Run Query']"),
        firstProject: () => cy.get("[class='hdvi-gridcol hdvi-gridcol-projectName ng-star-inserted']").eq(0),
        projectSettingMeasureList: () => cy.get("[class='hdvi-gridcol hdvi-gridcol-measureCode ng-star-inserted']"),
        eveSettingMeasureList: () => cy.get("[class='firstPass-config']"),
        eveSettingHeader: () => cy.xpath("(//div[normalize-space()='EVE Settings'])[2]"),
        providerPacketHeader: () => cy.xpath("(//div[normalize-space()='Provider Packet'])[2]"),
        providerPacketDropDownMeasure: () => cy.get("[class='ui-dropdown-trigger-icon ui-clickable pi pi-caret-down']").eq(8),
        providerPacketMeasure: () => cy.get("[class='ui-dropdown-items-wrapper']"),
        filterIcon: () => cy.get("[class='pi pi-filter ui-clickable ui-button-icon-left ng-star-inserted']"),
        a1c9MeasureFilter: () => cy.get("li[aria-label='A1C9'] span[class='ng-star-inserted']"),
        runQueryButton: () => cy.get("[text='Run Query']"),
        firstChaseId: () => cy.get("[class='hdvi-gridcol hdvi-gridcol-chaseId ng-star-inserted']").eq(0),
        assignButton: () => cy.get("[text='Assign']"),
        userfield: () => cy.get("[id='assignToUsers']"),
        userDropDown: () => cy.contains('li', '@Me'),
        continueButton: () => cy.get('[text="CONTINUE"]'),
        assignedToastMessage: () => cy.get("[class='ui-toast-detail']"),
        dobField: () => cy.get("[title='MR DOB']"),
        correctMemberYesButton: () => cy.get('#yesBtn > .small > .ui-button > .ui-button-text'),
        raceField: () => cy.get("[id='Race']"),
        dropDownArrow: () => cy.get("[class='ui-button-icon-left ui-clickable pi pi-caret-down']"),
        dropDownContainer: () => cy.get("[class*='ui-widget ui-corner-all ui-helper-reset']"),
        submitChaseButton: () => cy.get("[text='Submit Chase']"),
        pageWarningMessage: () => cy.get("div[role='alert']"),
        datefield: () => cy.get("[id='Date']"),
        errormessage: () => cy.get('.control__header__error'),
        raceDropDownValue: () => cy.get("[role='option']").eq(0),
        evidencePage: () => cy.get("[id='EvidencePage']"),
        ethnicityDropDownValue: () => cy.get("[role='option']").eq(0),
        noContraText: () => cy.get("[type='Contra']"),
        sampleCompliance: () => cy.get("[class='hdvi-gridcol hdvi-gridcol-sampleCompliance.code ng-star-inserted']"),
        exclusionDropDown: () => cy.get("[class='ui-dropdown-trigger-icon ui-clickable pi pi-caret-down']").eq(1),
        exclusionDropDownValue: () => cy.get("[role='option']").eq(0),
        exclusionDate: () => cy.get("[id='Exclusion Date']"),
        exclusionPage: () => cy.get("[id='Exclusion Exclusion Page Number']"),
        submitSucessMessage: () => cy.get("[class='ui-toast-detail']"),
        demonographicContainer: () => cy.get("[class='control control--group ng-untouched ng-pristine ng-valid']").eq(0),
        levelField: () => cy.get("[id='Level']"),
        gapCompliance: () => cy.get("[class='hdvi-gridcol hdvi-gridcol- ng-star-inserted']"),
        exclusionContainer: () => cy.get("[class='ui-dropdown-items-wrapper']"),
        nrcDropDown: () => cy.get("[class='ui-button-icon-left ui-clickable pi pi-caret-down']").eq(2),
        nrcDropDownValue: () => cy.get("[role='option']").eq(0),
        backArrow: () => cy.get("[iconname='arrow-left']"),
        globalSearch: () => cy.get("[id='globalSearchInput']"),
        searchIcon: () => cy.get("[class='fas fa-play fa-search ui-clickable ui-button-icon-left ng-star-inserted']"),
        searchedChaseId: () => cy.get(':nth-child(1) > .hdvi-gridcol-chaseID > .ui-column-value'),
        status: () => cy.get(':nth-child(1) > .list__item--value'),
        crossButton: () => cy.get('.ui-messages-close > .pi'),




    }
    clickOnClincialTab() {
        this.elements.clinicalTab().click()
    }
    clickOnMrrTab() {
        this.elements.mrrTab().click()
    }
    clickOnMeasureFilter() {
        this.elements.measureFilter().click()
    }
    verifyAc19Measure() {
        this.elements.measureContainer().should('contain', 'A1C9')
        this.elements.filterCancelButton().click()
    }
    clickOnOrTab() {
        this.elements.ORTab().click()
    }
    clickOnClientOverreadTab() {
        this.elements.clientOverreadTab().click()
    }
    clickOnRetrievalMenuButton() {
        this.elements.retrievalMenuButton().click()
    }
    clickOnDocQa() {


        this.elements.docQaButton().click({ force: true })
    }
    clickOnRetrievalPend() {
        this.elements.retrievalPendTab().click()
    }
    verifyRetrievalPendMeasure() {
        this.elements.retrievalPendA1c9().should('contain', 'A1C9')
        this.elements.filterCancelButton().click()
    }
    verifyMeasureListIsalphabetically() {
        this.elements.measureList().invoke('text')
            .then((measureListText) => {
                const elementsArray = measureListText.split('\n');
                for (let i = 1; i < elementsArray.length; i++) {
                    expect(elementsArray[i - 1].localeCompare(elementsArray[i]) <= 0).to.be.true;
                }
                expect(measureListText).to.include('A1C9');
                const indexOfA1C9 = elementsArray.indexOf('A1C9');
                expect(indexOfA1C9).to.equal(-1); // Ensure 'A1C9' is found in the list
                expect(indexOfA1C9).to.equal(elementsArray.sort().indexOf('A1C9')); // Ensure 'A1C9' is in the same position in the sorted list
            });
    }
    clickOnAdminButton() {
        this.elements.adminMenuButton().click()
    }
    clickOnProjectButton() {
        this.elements.adminProjectButton().click()
    }
    selectHedisProject() {
        this.elements.hedisProject().click()
    }
    clickOnRunQuerryButton() {
        this.elements.runQueryButton().click()
    }
    clickOnFirstProject() {
        this.elements.firstProject().click()
    }
    verifyMeasureInPrjectSeeting() {
        this.elements.projectSettingMeasureList().should('be.visible').and('contain', 'A1C9')
    }
    clickOnEveSettingHeader() {
        this.elements.eveSettingHeader().click()
    }
    verifyEveSettingMeasure() {
        this.elements.eveSettingMeasureList().should('be.visible').and('contain', 'A1C9')
    }
    clickOnProviderPacketHeader() {
        this.elements.providerPacketHeader().click()
    }
    clickOnProviderPacketDropDown() {
        this.elements.providerPacketDropDownMeasure().scrollIntoView().click()
    }
    verifyProviderPacketMeasure() {
        this.elements.providerPacketMeasure().should('be.visible').and('contain', 'A1C9')
    }
    clickOnfilterIcon() {
        this.elements.filterIcon().click()
    }
    clickOnA1c9EMeasure() {
        this.elements.a1c9MeasureFilter().click()
    }
    clickOnFirstChaseId() {
        this.elements.firstChaseId().click()
    }
    clickOnAssignButton() {
        this.elements.assignButton().click()
    }
    typeInUserField(username) {
        this.elements.userfield().type(username)
    }
    clickOnUserDropDown() {
        this.elements.userDropDown().click()
    }
    clickOnContinueButton() {
        this.elements.continueButton().click()
    }
    verifyAssignedToastMessage(AssignedSucessToastMessage) {
        this.elements.assignedToastMessage().should('be.visible').and('includes.text', AssignedSucessToastMessage)
    }
    clickOnCorrectMemberYesButton() {
        this.elements.correctMemberYesButton().click()
    }
    verifyMemberValidation(MemberToastMessage) {
        this.elements.assignedToastMessage().should('be.visible').and('includes.text', MemberToastMessage)
    }
    verifyCorrectMemberYesButtonIsVisible() {
        this.elements.correctMemberYesButton().should('be.visible')
    }
    verifyRaceFieldIsDisabled() {
        this.elements.raceField().should('be.visible').and('be.disabled')
    }
    verifyRaceFieldIsEnabled() {
        this.elements.raceField().should('be.visible').and('not.be.disabled')
    }
    clickOnRaceDropDown() {
        this.elements.dropDownArrow().eq(0).click()
    }
    verifyRaceDropDownContainer() {
        this.elements.dropDownContainer().should('be.visible')
    }
    clickOnEthnicityDropDown() {
        this.elements.dropDownArrow().eq(1).click()
    }
    verifyEthnicityDropDownContainer() {
        this.elements.dropDownContainer().should('be.visible')
    }
    clickOnSubmitChaseButton() {
        this.elements.submitChaseButton().click()
    }
    verifyRaceAndEthnicityIsMandatory() {
        this.elements.pageWarningMessage().should('be.visible').and('includes.text', 'Race and ethnicity must be coded for this measure;')
    }
    typeInDateField(date) {
        this.elements.datefield().type(date)
    }
    verifyTheErrorMessage() {
        this.elements.errormessage().should('be.visible').and('includes.text', 'Mammogram Date may not be in a future; Mammogram Date expected to be between 10/01/2021 and 12/31/2023; ')
    }
    clickOnRaceDropDownValue() {
        this.elements.raceDropDownValue().click()
    }
    typeInEvidencePage(evidencePage) {
        this.elements.evidencePage().eq(0).type(evidencePage)
    }
    clickOndateField() {
        this.elements.datefield().click()
    }
    verifyerrorMessageForEthnicity() {
        this.elements.pageWarningMessage().should('be.visible').and('includes.text', 'Empty or no value specified for a required attribute Ethnicity;')
    }
    clickOnEthnicityDropDownValue() {
        this.elements.ethnicityDropDownValue().click()
    }
    verifyerrorMessageForRace() {
        this.elements.pageWarningMessage().should('be.visible').and('includes.text', 'Empty or no value specified for a required attribute Race;')
    }
    verifyerrorMessageForPage() {
        this.elements.pageWarningMessage().should('be.visible').and('includes.text', 'Empty or no value specified for a required attribute Page #;')
    }
    verifyNoContraField() {
        this.elements.noContraText().scrollIntoView().should('be.visible').and('includes.text', 'No Contras')
    }
    typeInDateField1(date1) {
        this.elements.datefield().type(date1)
    }
    typeInEvidencePage1(evidencePage1) {
        this.elements.evidencePage().eq(0).type(evidencePage1)
    }
    verifyComplianceIsCmr() {
        this.elements.sampleCompliance().should('be.visible').and('includes.text', 'C/MR')
    }
    verifyComplianceIsNc() {
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
    verifyComplianceIsEMR() {
        this.elements.sampleCompliance().should('be.visible').and('includes.text', 'E/MR')
    }
    typeInExclusionDateField1(exclusiondate1) {
        this.elements.exclusionDate().type(exclusiondate1)
    }
    verifyerrorMessageForDateRange() {
        this.elements.exclusionDate().click()
        this.elements.pageWarningMessage().should('be.visible').and('includes.text', 'Specified exclusion type expects exclusion date on or prior to 2023-12-31;')
    }
    verifyErrorMessageForExclusionPage() {
        this.elements.exclusionPage().click()
        this.elements.pageWarningMessage().should('be.visible').and('includes.text', 'Empty or no value specified for a required attribute Page #;')


    }
    verifyErrorMessageForExclusionDate() {
        this.elements.exclusionDate().clear()
        this.elements.exclusionPage().click()
        this.elements.pageWarningMessage().should('be.visible').and('includes.text', 'Empty or no value specified for a required attribute ExclusionDate;')


    }
    verifySubmissionToastMessage() {
        this.elements.submitSucessMessage().should('be.visible').and('includes.text', 'Submission Succeeded!')
    }
    verifyDemonographicFields() {
        this.elements.demonographicContainer().each(($element) => {
            const textsToVerify = ['Race', 'Ethnicity', 'Evidence Page #'];
            textsToVerify.forEach((text) => {
                cy.wrap($element)
                    .should('be.visible')
                    .invoke('text')
                    .should('include', text);
            });
        });
    }
    typeInLevelField(levelValue) {
        this.elements.levelField().type(levelValue)
    }
    typeInHbAc1EvidencePage(evidencePage2) {
        this.elements.evidencePage().eq(1).type(evidencePage2)
    }
    verifyGapandSampleComplianceIsNc() {
        this.elements.exclusionDate().click()
        cy.wait(3000)
        this.elements.gapCompliance().should('be.visible').and('includes.text', 'NC')
        this.elements.sampleCompliance().should('be.visible').and('includes.text', 'NC')
    }
    clearAllField() {
        this.elements.datefield().clear()
        this.elements.levelField().clear()
        this.elements.evidencePage().eq(1).clear()
    }
    typeInLevelField1(levelValue1) {
        this.elements.levelField().type(levelValue1)
    }
    typeInLevelField2(levelValue2) {
        this.elements.levelField().type(levelValue2)
    }
    verifyGapandSampleComplianceIsCMR() {
        this.elements.exclusionDate().click()
        cy.wait(3000)
        this.elements.gapCompliance().should('be.visible').and('includes.text', 'C/MR')
        this.elements.sampleCompliance().should('be.visible').and('includes.text', 'C/MR')
    }
    typeInvalidDate(date1) {
        this.elements.datefield().type(date1)
        this.elements.levelField().click()
    }
    verifyErrorMessageForDateField() {
        this.elements.errormessage().should('be.visible').and('includes.text', 'Hba1c Test Date expected to be between 01/01/2023 and 12/31/2023; ')
    }
    typeInLevelField3(levelValue3) {
        this.elements.levelField().type(levelValue3)
        this.elements.datefield().click()
    }
    verifyErrorMessageForLevelField() {
        this.elements.errormessage().should('be.visible').and('includes.text', 'Hba1c Test Value expected to be not greater than 20; ')
    }
    typeInHbAc1EvidencePage1(evidencePage3) {
        this.elements.evidencePage().eq(1).type(evidencePage3)
        this.elements.datefield().click()
    }
    verifyErrorMessageForPageField() {
        this.elements.errormessage().should('be.visible').and("includes.text", "The entered page number is outside the chart's 1 to 8 page range; ")
    }
    verifyExclusionContainer() {
        this.elements.exclusionContainer().each(($element) => {
            const textsToVerify = ['Not age 18 - 75 in 2023', 'Member expired during 2023', 'Hospice service or benefit used in 2023', 'Member received palliative care during 2023', 'Steroid induced diabetes with no dx diabetes in 2023 or 2022', 'Gestational diabetes with no dx diabetes in 2023 or 2022', 'Polycystic ovarian syndrome with no dx diabetes in 2023 or 2022'];
            textsToVerify.forEach((text) => {
                cy.wrap($element)
                    .should('be.visible')
                    .invoke('text')
                    .should('include', text);
            });
        });
    }
    clickOnNrcDropDown() {
        this.elements.nrcDropDown().click()
    }
    clickOnNrcDropDownValue() {
        this.elements.nrcDropDownValue().click()
    }
    logChaseId() {
        this.elements.firstChaseId().invoke('text').invoke('replace', 'Chase ID', '')
        .then(trimmedAid => cy.wrap(trimmedAid).as('captureChaseId'));
    }
    clickOnBackArrow() {
        this.elements.backArrow().click()
    }
    typeInGobalSearch() {
        cy.get('@captureChaseId').then(captureChaseId => {
            this.elements.globalSearch().type(captureChaseId)
        })
    }
    clickOnSearchIcon() {
        this.elements.searchIcon().click()
    }
    clickOnChaseId() {
        cy.wait(1000)
        this.elements.searchedChaseId().click()
    }
    verifyOverreadStatus() {
        this.elements.status().should('be.visible').and('includes.text', 'Overread')
    }


}






export default a1c9Measure

