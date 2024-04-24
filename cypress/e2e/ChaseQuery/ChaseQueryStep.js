import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";


import chaseQuery from "../../pages/ChaseQuery/chaseQuery";







const reveleerHomePage = require('../../pages/reveleerHomePage')
const reveleerLoginPage = require('../../pages/reveleerLoginPage')
const chaseQuery1=new chaseQuery()




Before(() => {
    cy.viewport(1280, 720)
    cy.visit('https://uat.reveleer.com/login')
    cy.fixture("credentials").then((credentials) => {
        const user = credentials[8]
        cy.title().should('eq', user.loginPageTitle)
        reveleerLoginPage.fillUsername(user.username)
        reveleerLoginPage.fillPassword(user.password)
        reveleerLoginPage.clickOnLoginButton()
        reveleerHomePage.elements.loginUserName().should('be.visible')
    })
})
Given("user will go to queries in menu button", () => {
    chaseQuery1.clickOnQueries()
})
When("user will select chase queries from sub menu button", () => {
    chaseQuery1.clickOnChaseQueries()
})
Then("user will select create new chase", () => {
    chaseQuery1.clickOnCreateNewChase()
})
Then("user will click on get started", () => {
    chaseQuery1.clickOnGetStarted()
})
Then("user will fill all the details", () => {
    chaseQuery1.clickOnProjectSelect()
    chaseQuery1.clickOnDropDownProject()
    chaseQuery1.clickOnSelectProduct()
    chaseQuery1.clickOnChaseKey()
    cy.wait(2000)
    chaseQuery1.logChaseKey()
})
Then("user will click on next step", () => {
    chaseQuery1.clickOnNextStep()
    cy.wait(2000)
})
Then("user will click on no option", () => {
    chaseQuery1.clickOnNoOption()
})
Then("user will fill member form", (datatable) => {
    datatable.hashes().forEach(element => {
    chaseQuery1.clickOnClientMemberId()
    cy.wait(200)
    chaseQuery1.logClientMemberId()
    chaseQuery1.clickOnFirstName(element.firstName)
    chaseQuery1.clickOnLastName(element.lastName)
    chaseQuery1.clickOnMembersDob(element.Dob)
    chaseQuery1.clickOnGender()
    chaseQuery1.clickOnGenderDropDown()
})
})
Then("user will click on Add member", () => {
    chaseQuery1.clickOnAddMember()
    cy.wait(2000)
})
Then("user will click on no option2", () => {
    chaseQuery1.clickOnNoOption2()
})
Then("user will click on provider no option2", () => {
    chaseQuery1.clickOnpProviderNoOption2()
})
Then("user will fill provider address", (datatable) => {
    datatable.hashes().forEach(element => {
    chaseQuery1.clickOnAddAddress(element.Address)
    chaseQuery1.clickOnPhoneNumber(element.phno)
    chaseQuery1.clickOnSelectRetriever()
    chaseQuery1.clickOnRetrievalDropDown()
    chaseQuery1.clickOnAddAddressButton()
    cy.wait(2000)
})
})
Then("user will click on no option3", () => {
    chaseQuery1.clickOnNoOption3()
})
Then("user will click on provider no option3", () => {
    chaseQuery1.clickOnpProviderNoOption3()
})
Then("user will fill provider form", (datatable) => {
    datatable.hashes().forEach(element => {
    chaseQuery1.clickOnNpi()
    chaseQuery1.clickOnFirstName1(element.firstName1)
    chaseQuery1.clickOnLastName1(element.lastName1)
    chaseQuery1.clickOnProviderId()
    chaseQuery1.clickOnAddProvider()
    cy.wait(2000)
})
})
Then("user will fill encounter details", (datatable) => {
    datatable.hashes().forEach(element => {
    chaseQuery1.clickOnClaimid()
    chaseQuery1.clickOnSelectProvider2()
    chaseQuery1.clickOnSelectProvider2DropDown()
    chaseQuery1.clickOnEncounter()
    chaseQuery1.clickOnEncounterDropDown()
    chaseQuery1.clickOnEncounterServiceDateFrom(element.serviceDateFrom)
    chaseQuery1.clickOnEncounterServiceDateThru(element.serviceDateThru)
    chaseQuery1.clickOnDiagnosis1(element.diagnosis1)
    chaseQuery1.clickOnDiagnosisStartDate(element.diagnosis1startDate)
    chaseQuery1.clickOnDiagnosisThruDate(element.diagnosis1thruDate)
    chaseQuery1.clickOnDiagnosis2(element.diagnosis2)
    chaseQuery1.clickOnDiagnosisStartDate1(element.diagnosis1startDate)
    chaseQuery1.clickOnDiagnosisThruDate1(element.diagnosis1thruDate)
    chaseQuery1.clickOnNextStep2()
    cy.wait(2000)
})
})
Then("user will click on Finalize", () => {
    chaseQuery1.clickOnFinalize()
})
Then("user will click on chase and verify its created", () => {
    chaseQuery1.logChase()
    chaseQuery1.clickOnChase()
    chaseQuery1.clickOncrossButton()
    chaseQuery1.verifyChaseId()
    chaseQuery1.clickOnChaseOfChaseDetailPage()
    chaseQuery1.verifyClientAidChaseKey()
    chaseQuery1.verifyAidClientMemberKey()
})
Then("user will verify encounter is visible", () => {
    chaseQuery1.verifyEncounterTab()
})
Then("user will select existing member yes", () => {
    chaseQuery1.clickOnExistingMemberYes()
    chaseQuery1.clickOnGender()
    chaseQuery1.clickOnGenderDropDown()
    chaseQuery1.clickOnSearch()
    chaseQuery1.clickOnSearchedUser()
    chaseQuery1.clickOnNextStep3()
})
Given("user will go to retrievel menu", () => {
    chaseQuery1.clickOnRetrievalMenuButton()
})
When("user will click on call center rep", () => {
    chaseQuery1.clickOnCallCenterRep()
    chaseQuery1.clickOnRunQuerryButton()
})
Then("user will log aid", () => {
    chaseQuery1.logAid()
})
Then("user will select existing provider adress yes option", () => {
    chaseQuery1.clickOnProviderYes()
    chaseQuery1.clickOnAddressAid()
    chaseQuery1.clickOnSearch()
    chaseQuery1.clickOnSearchedUser()
    chaseQuery1.clickOnSelectRetriever1()
    chaseQuery1.clickOnRetrievalDropDown()
    chaseQuery1.clickOnNextStep3()
})
Then("user will fill encounter details1", (datatable) => {
    datatable.hashes().forEach(element => {
    chaseQuery1.verifyDisabledNextButton()
    chaseQuery1.clickOnClaimid()
    chaseQuery1.clickOnSelectProvider2()
    chaseQuery1.clickOnSelectProvider2DropDown()
    chaseQuery1.clickOnEncounter()
    chaseQuery1.clickOnEncounterDropDown()
    chaseQuery1.clickOnEncounterServiceDateFrom(element.serviceDateFrom)
    chaseQuery1.clickOnEncounterServiceDateThru(element.serviceDateThru)
    chaseQuery1.clickOnDiagnosis1(element.diagnosis1)
    chaseQuery1.clickOnDiagnosisStartDate(element.diagnosis1startDate)
    chaseQuery1.clickOnDiagnosisThruDate(element.diagnosis1thruDate)
    chaseQuery1.clickOnDiagnosis2(element.diagnosis2)
    chaseQuery1.clickOnDiagnosisStartDate1(element.diagnosis1startDate)
    chaseQuery1.clickOnDiagnosisThruDate1(element.diagnosis1thruDate)
    chaseQuery1.verifyEnabledNextButton()
    cy.wait(2000)
})
})
Then("user will fill multiple encounter details", (datatable) => {
    datatable.hashes().forEach(element => {
    chaseQuery1.clickOnPlusSignOfClaimID()
    chaseQuery1.verifyDisabledNextButton()
    chaseQuery1.clickOnClaimid2()
    chaseQuery1.clickOnSecondEncounterDate(element.serviceDateFrom1)
    chaseQuery1.clickOnSecondEncounterThruDate(element.serviceDateThru1)
    chaseQuery1.clickOnMultipleDiagnosis(element.diagnosis3)
    chaseQuery1.clickOnMultipleDiagnosisStartDate(element.diagnosis1startDate1)
    chaseQuery1.clickOnMultipleDiagnosisThruDate(element.diagnosis1thruDate1)
    chaseQuery1.verifyEnabledNextButton()    
})
})
Then("user will verify provider is selected from dropdown", () => {
    chaseQuery1.clickOnProviderDropDown()
})
Then("user will verify encounter is selected from dropdown", () => {
    chaseQuery1.clickOnEncounter()
    chaseQuery1.clickOnEncounterDropDown()
    chaseQuery1.verifySelectedEncounterValue()
})
Then("user will verify multiple encounter is selected from dropdown", () => {
    chaseQuery1.clickOnProviderDropDown()
    chaseQuery1.clickOnEncounter()
    chaseQuery1.clickOnEncounterDropDown()
    chaseQuery1.verifySelectedEncounterValue()
    chaseQuery1.clickOnPlusSignOfClaimID()
    chaseQuery1.verifySelectedEncounterValue1()
})
Then("user will fill encounter details3", (datatable) => {
    datatable.hashes().forEach(element => {
    chaseQuery1.clickOnClaimid()
    chaseQuery1.clickOnSelectProvider2()
    chaseQuery1.clickOnSelectProvider2DropDown()
    chaseQuery1.clickOnEncounter()
    chaseQuery1.clickOnEncounterDropDown()
    chaseQuery1.clickOnEncounterServiceDateFrom(element.serviceDateFrom)
    chaseQuery1.clickOnEncounterServiceDateThru(element.serviceDateThru)
    chaseQuery1.clickOnDiagnosis1(element.diagnosis1)
    chaseQuery1.clickOnDiagnosisStartDate(element.diagnosis1startDate)
    chaseQuery1.clickOnDiagnosisThruDate(element.diagnosis1thruDate)
    chaseQuery1.clickOnDiagnosis2(element.diagnosis2)
    chaseQuery1.clickOnDiagnosisStartDate1(element.diagnosis1startDate)
    chaseQuery1.clickOnDiagnosisThruDate1(element.diagnosis1thruDate)
    chaseQuery1.clickOnNextStep2()
    cy.wait(2000)
})
})
Then("user will verify the warning msg", () => {
    chaseQuery1.verifyWarningMessage()
})
Then("user will fill encounter details1 and verify next button is enabled", (datatable) => {
    datatable.hashes().forEach(element => {
    chaseQuery1.verifyDisabledNextButton()
    chaseQuery1.clickOnClaimid()
    chaseQuery1.clickOnSelectProvider2()
    chaseQuery1.clickOnSelectProvider2DropDown()
    chaseQuery1.clickOnEncounter()
    chaseQuery1.clickOnEncounterDropDown()
    chaseQuery1.clickOnEncounterServiceDateFrom(element.serviceDateFrom)
    chaseQuery1.clickOnEncounterServiceDateThru(element.serviceDateThru)
    chaseQuery1.clickOnDiagnosis1(element.diagnosis1)
    chaseQuery1.clickOnDiagnosisStartDate(element.diagnosis1startDate)
    chaseQuery1.clickOnDiagnosisThruDate(element.diagnosis1thruDate)
    chaseQuery1.clickOnDiagnosis2(element.diagnosis2)
    chaseQuery1.clickOnDiagnosisStartDate1(element.diagnosis1startDate)
    chaseQuery1.clickOnDiagnosisThruDate1(element.diagnosis1thruDate)
    chaseQuery1.verifyEnabledNextButton()
    cy.wait(2000)
})
})
Then("user will fill multiple encounter details and diagnosis details and after fill next button gets enabled", (datatable) => {
    datatable.hashes().forEach(element => {
    chaseQuery1.clickOnPlusSignOfClaimID()
    chaseQuery1.verifyDisabledNextButton()
    chaseQuery1.clickOnClaimid2()
    chaseQuery1.clickOnSecondEncounterDate(element.serviceDateFrom1)
    chaseQuery1.clickOnSecondEncounterThruDate(element.serviceDateThru1)
    chaseQuery1.clickOnMultipleDiagnosis(element.diagnosis3)
    chaseQuery1.clickOnMultipleDiagnosisStartDate(element.diagnosis1startDate1)
    chaseQuery1.clickOnMultipleDiagnosisThruDate(element.diagnosis1thruDate1)
    chaseQuery1.verifyEnabledNextButton()    
})
})
Then("user will fill multiple diagnosis details", (datatable) => {
    datatable.hashes().forEach(element => {
    chaseQuery1.clickOnPlusSignOfClaimID()
    chaseQuery1.verifyDisabledNextButton()
    chaseQuery1.clickOnClaimid2()
    chaseQuery1.clickOnSecondEncounterDate(element.serviceDateFrom1)
    chaseQuery1.clickOnSecondEncounterThruDate(element.serviceDateThru1)
    chaseQuery1.clickOnMultipleDiagnosis(element.diagnosis3)
    chaseQuery1.clickOnMultipleDiagnosisStartDate(element.diagnosis1startDate1)
    chaseQuery1.clickOnMultipleDiagnosisThruDate(element.diagnosis1thruDate1)
    chaseQuery1.verifyEnabledNextButton()
    chaseQuery1.clickOnNextStep2()    
})
})
Then("user will click on Skip step in encounter tab", () => {
    chaseQuery1.clickOnSkipStep()
})
Then("user will click on reset", () => {
    chaseQuery1.clickOnResetButton()
})
Then("user will verify project field get reset", () => {
    chaseQuery1.verifyProjectFieldsGetReset()
})
Then("user will verify member field get reset", () => {
    chaseQuery1.verifyMemberpageGetReset()
 })
Then("user will click on member reset", () => {
    chaseQuery1.clickOnMemberReset()
})
Then("user will fill provider address1", (datatable) => {
    datatable.hashes().forEach(element => {
    chaseQuery1.clickOnAddAddress(element.Address)
    chaseQuery1.clickOnPhoneNumber(element.phno)
    chaseQuery1.clickOnSelectRetriever()
    chaseQuery1.clickOnRetrievalDropDown()
    cy.wait(2000)
})
})
Then("user will click on aid reset button", () => {
    chaseQuery1.clickOnAidReset()
})
Then("user will verify provider address filed is reset", () => {
    chaseQuery1.verifyProviderAddressPageGetsReset()
})
Then("user will fill provider form1", (datatable) => {
    datatable.hashes().forEach(element => {
    chaseQuery1.clickOnNpi()
    chaseQuery1.clickOnFirstName1(element.firstName1)
    chaseQuery1.clickOnLastName1(element.lastName1)
    chaseQuery1.clickOnProviderId()
    cy.wait(2000)
})
})
Then("user will click on Provider reset button", () => {
    chaseQuery1.clickOnProviderReset()
})
Then("user will verify provider page gets reset", () => {
    chaseQuery1.verifyProviderPageGetsReset()
})
Then("user will click on encounter reset button", () => {
    chaseQuery1.clickOnEncounterResetButton()
})
Then("user will verify field is reset", () => {
    chaseQuery1.verifyEncounterPageGetsReset()
})
Then("user will fill encounter details4", (datatable) => {
    datatable.hashes().forEach(element => {
    chaseQuery1.verifyDisabledNextButton()
    chaseQuery1.clickOnClaimid5()
    chaseQuery1.clickOnSelectProvider2()
    chaseQuery1.clickOnSelectProvider2DropDown()
    chaseQuery1.clickOnEncounter()
    chaseQuery1.clickOnEncounterDropDown()
    chaseQuery1.clickOnEncounterServiceDateFrom(element.serviceDateFrom)
    chaseQuery1.clickOnEncounterServiceDateThru(element.serviceDateThru)
    chaseQuery1.clickOnDiagnosis1(element.diagnosis1)
    chaseQuery1.clickOnDiagnosisStartDate(element.diagnosis1startDate)
    chaseQuery1.clickOnDiagnosisThruDate(element.diagnosis1thruDate)
    chaseQuery1.clickOnDiagnosis2(element.diagnosis2)
    chaseQuery1.clickOnDiagnosisStartDate1(element.diagnosis1startDate)
    chaseQuery1.clickOnDiagnosisThruDate1(element.diagnosis1thruDate)
    chaseQuery1.verifyEnabledNextButton()
    cy.wait(2000)
})
})
Then("user will fill multiple diagnosis details1", (datatable) => {
    datatable.hashes().forEach(element => {
    chaseQuery1.clickOnPlusSignOfClaimID()
    chaseQuery1.verifyDisabledNextButton()
    chaseQuery1.clickOnClaimid4()
    chaseQuery1.clickOnSecondEncounterDate(element.serviceDateFrom1)
    chaseQuery1.clickOnSecondEncounterThruDate(element.serviceDateThru1)
    chaseQuery1.clickOnMultipleDiagnosis(element.diagnosis3)
    chaseQuery1.clickOnMultipleDiagnosisStartDate(element.diagnosis1startDate1)
    chaseQuery1.clickOnMultipleDiagnosisThruDate(element.diagnosis1thruDate1)
    chaseQuery1.verifyEnabledNextButton()
    chaseQuery1.clickOnNextStep2()    
})
})
Then("user will verify claim id error message", () => {
    chaseQuery1.verifyClaimIdErrorMessage()
})
When("user will select chase queries from sub menu button1", () => {
    chaseQuery1.clickOnChaseQueries1()
})
Then("user will select project", () => {
    chaseQuery1.selectProjectFilter()
    chaseQuery1.clickOnRunQuerryButton()
})
Then("click on slect next option", () => {
    chaseQuery1.clickOnSelectNextOption()
})
Then("user will click on export functionality", () => {
    chaseQuery1.clickOnExportChase()
})
Then("user will click on go button", () => {
    chaseQuery1.clickOnGoButton()
})
Then("user will verify downloaded file", () => {
    cy.wait(5000)
    cy.verifyDownload('download.csv');
})
Then("user will click on assigned to", () => {
    chaseQuery1.clickOnAssignedTo()
})
Then("user will search by assigned user", (datatable) => {
    datatable.hashes().forEach(element => {
    chaseQuery1.clickOnAssignedToUser(element.assignedUser)
    chaseQuery1.clickOnRunQuerryButton()
})
})
Then("user will verify grid is loaded as per filter", () => {
    chaseQuery1.verifyGridisLoadedAsPerFilter()
})
Then("user will select first chase", () => {
    chaseQuery1.clickOnFirstCheckBox()
})
Then("user will pend chase chase", () => {
    chaseQuery1.clickOnSelectNextOption()
    chaseQuery1.clickOnPendChase()
    chaseQuery1.clickOnGoButton()
    chaseQuery1.pendChase()
})
Then("verify pend status in grid", () => {
    chaseQuery1.verifyPendStatus()
    chaseQuery1.verifyPendCodeno()
})
Then("user will assign to user", () => {
    chaseQuery1.clickOnSelectNextOption()
    chaseQuery1.clickOnassignUser()
    chaseQuery1.clickOnGoButton()
    chaseQuery1.assigntoUser()
})
Then("user will verify user is assigned", () => {
    chaseQuery1.verifyUserIsassigned()
})
Then("user will unassign and verify it is unassigned", () => {
    chaseQuery1.clickOnSelectNextOption()
    chaseQuery1.clickOnUnassign()
    chaseQuery1.unassignedUser()
})
Then("user will select second chase",()=>{
    chaseQuery1.clickOnSecondCheckBox()
})
Then("user will verify user is assigned to multiple chase",()=>{
    chaseQuery1.verifyMultipleAssignedUser()
})
Then("user will select Third chase",()=>{
    chaseQuery1.clickOnThirdCheckBox()
})
Then("user will pend chase chase1", () => {
    chaseQuery1.clickOnSelectNextOption()
    chaseQuery1.clickOnPendChase()
    chaseQuery1.clickOnGoButton()
    chaseQuery1.pendChase1()
})
Then("user will verify sucess pended message",()=>{
    chaseQuery1.pendToastMessage()
})
Then("user will select project1", () => {
    chaseQuery1.selectProject2()
    chaseQuery1.clickOnRunQuerryButton()
})
Then("user download chart", () => {
    chaseQuery1.clickOnSelectNextOption()
    chaseQuery1.clickOnDownloadChart()
})
Then("user download chart", () => {
    chaseQuery1.clickOnSelectNextOption()
    chaseQuery1.clickOnDownloadChart()
    chaseQuery1.clickOnGoButton()
})
Then("user will go to job Que",()=>{
    chaseQuery1.clickOnJobQue()
})
Then("user will click on chase in notification and click on chase",()=>{
    chaseQuery1.jobChase()
})
Then("user will log the chase id",()=>{
    chaseQuery1.logFirstChase()
})
Then("user will click on filter",()=>{
    chaseQuery1.clickOnFilter()
})
Then("user will search by client ID",()=>{
    chaseQuery1.clickOnClientChase()
    chaseQuery1.clickOnClientChase()
    chaseQuery1.clickOnChaseKeyField()
    chaseQuery1.clickOnRunQuerryButton()
})
Then("user will click on measure and will select measure",()=>{
    chaseQuery1.clickOnMeasures()
    chaseQuery1.selectMeasures()
    chaseQuery1.clickOnRunQuerryButton()
})
Then("user will click on client and will select client",()=>{
    chaseQuery1.clickOnClient()
    chaseQuery1.clickOnClientField()
    chaseQuery1.clickOnClientDropdown()
    chaseQuery1.clickOnRunQuerryButton()
})
Then("user will verify grid load as per the client filter",()=>{
    chaseQuery1.verifyGridLoad()
})
Then("user will verify grid load as per the client filter1",()=>{
    chaseQuery1.verifyClientName()
})
Then("user will verify grid is loaded as per project filter",()=>{
    chaseQuery1.verifyProjectField()
})
Then("user will click on member and search by first name",()=>{
    chaseQuery1.clickOnMember()
    chaseQuery1.clickOnFirstMemberName()
    chaseQuery1.clickOnRunQuerryButton()
})
Then("user will verify grid is loaded as per member filter",()=>{
    chaseQuery1.verifyFirstNameField()
})
Then("user will click on adress and search by aid",()=>{
    chaseQuery1.clickOnAddress()
    chaseQuery1.serachAid()
    chaseQuery1.clickOnRunQuerryButton()
})
Then("user will verify grid is loaded as per aid filter",()=>{
    chaseQuery1.verifyAidGrid()
})
Then("user will click on pendCode and search by pendcode",()=>{
    chaseQuery1.clickOnPendCode()
    chaseQuery1.clickOnPendNumber()
    chaseQuery1.clickOnRunQuerryButton()
})
Then("user will verify grid is loaded as per pencode filter",()=>{
    chaseQuery1.verifyPendCodeGrid()
})
Then("user will click on chase complianced and search by compliance",()=>{
    chaseQuery1.clickONChaseComliance()
    chaseQuery1.clickOnComplianceNo()
    chaseQuery1.clickOnRunQuerryButton()
})
Then("user will verify grid is loaded as per compliance filter",()=>{
    chaseQuery1.veirfyComplianceGrid()
})
Then("user will click on last coded by and search by last coded by",()=>{
    chaseQuery1.clickOnLastCodedBy()
    chaseQuery1.clickOnLastCodedField()
    chaseQuery1.clickOnRunQuerryButton()
})
Then("user will verify grid is loaded as per last coded by filter",()=>{
    chaseQuery1.verifyLastCodedGrid()
})
Then("user will click pend status and search pend status New",()=>{
    chaseQuery1.clickOnPendStatus()
    chaseQuery1.clickOnPendStatusNo()
    chaseQuery1.clickOnRunQuerryButton()
})
Then("user will verify grid is loaded as per pend status New filter",()=>{
    chaseQuery1.verifyPendStatusGrid()
})
Then("user will click date assigned  and search by date assigned",()=>{
    chaseQuery1.clickOnDateAssigned()
    chaseQuery1.clickOnDateAssignedSearchBox()
    chaseQuery1.clickOnRunQuerryButton()
})
Then("user will verify grid is loaded as per date assigned filter",()=>{
    chaseQuery1.verifyDateAssignedGrid()
})
Then("user will click risk  and mark dos sonfirmed and hcc",()=>{
    chaseQuery1.clickOnRisk()
    chaseQuery1.clickOnDosCOnfirmed()
    chaseQuery1.clickOnHCCDescrepency()
    chaseQuery1.clickOnRunQuerryButton()
})
Then("user will verify grid is loaded as per risk filter",()=>{
    chaseQuery1.verifyRiskGrid()
})
Then("user will click risk  and click parent chase",()=>{
    chaseQuery1.clickOnRisk()
    chaseQuery1.clickOnParentChase()
    chaseQuery1.clickOnRunQuerryButton()
})
Then("user will verify grid is loaded as per parent chase filter",()=>{
    chaseQuery1.verifyParentChaseBracket()
})
Then("user will hover and verify pursuit chase is displayed",()=>{
    chaseQuery1.verifyPursuitChase()
})
Then("user will verify grid load as per the measure filter",()=>{
    chaseQuery1.verifyMeasureGrid()
})
Then("user will click on pursuit chase", () => {
    chaseQuery1.clickOnChildChase()
})
Then("user will verify user is redirected to chase details page", () => {
    chaseQuery1.verifyUrl()
})
Then("user will unassign and verify it is unassigned1", () => {
    chaseQuery1.clickOnSelectNextOption()
    chaseQuery1.clickOnUnassign()
    chaseQuery1.unassignedUser()
    chaseQuery1.verifyUnassigned1()
})
Then("user will fill all the details5", () => {
    chaseQuery1.clickOnProjectSelect()
    chaseQuery1.clickOnDropDownProject1()
    chaseQuery1.clickOnSelectProduct()
    chaseQuery1.clickOnChaseKey()
    cy.wait(2000)
    chaseQuery1.logChaseKey()
    chaseQuery1.clickOnSelectMeasure()
    chaseQuery1.clickOnMeasureDropDOwn()
})
Then("user will verify create new chase button", () => {
    chaseQuery1.verifyCreateNewChase()
})
Then("user will click on chase and verify its created3", () => {
    chaseQuery1.logChase()
    chaseQuery1.clickOnChase()
    chaseQuery1.clickOncrossButton()
    chaseQuery1.verifyChaseId3()
    chaseQuery1.clickOnChaseOfChaseDetailPage()
    chaseQuery1.verifyClientAidChaseKey()
    chaseQuery1.verifyAidClientMemberKey()
})
Then("user will select pagination", () => {
    chaseQuery1.clickOnPaginationDropDown()
})
Then("user will verify table list is as per pagination", () => {
    chaseQuery1.verifyPagination()
    chaseQuery1.verifyTableList()
})
Then("user will verify create new view button is visible", () => {
    chaseQuery1.verifyCreateNewView()
})
Then(" user will click on Create New view", () => {
    chaseQuery1.clickOnCreateNewView()
})
Then("user will click on Create New view", () => {
    chaseQuery1.clickOnCreateNewView()
})
Then("user will enter details for new view", (datatable) => {
    datatable.hashes().forEach(element => {
    chaseQuery1.clickOnenterTitile(element.name)
    chaseQuery1.clickOnChaseIdCheckBox()
    chaseQuery1.clickOnSaveButton()
})
})
Then("user will create new view and verify it", () => {
    chaseQuery1.clickOncreateView1()
    chaseQuery1.verifyCreatedViewTable()
})
Then("user will delete craeted view", () => {
    chaseQuery1.deletCreatedView()
})
Then("user will edit chase and verify it", () => {
    chaseQuery1.editcreatedView()
})
Then("verify Created view is deleted", () => {
    chaseQuery1.verifyCreatedViewIsDeleted()
})
Then("user will verify different view is not selected", () => {
    chaseQuery1.verifyDifferentViewNotSelected()
})
Then("user will change the view and verify different view is selected", () => {
    chaseQuery1.clickOnDifferentView()
    chaseQuery1.verifyDifferentViewSelected()
})
Then("user will fill all the details6", () => {
    chaseQuery1.clickOnProjectSelect()
    chaseQuery1.clickOnDropDownProject1()
})
Then("user will verify LOB is visible", () => {
    chaseQuery1.verifyLineOfBusiness()
})
Then("user will verify LOB DropDown", () => {
    chaseQuery1.verifyLobDropDOwn()
})
Then("user will fill all the details7", () => {
    chaseQuery1.clickOnProjectSelect()
    chaseQuery1.clickOnDropDownProject()
})
Then("user will verify Lob does not exist", () => {
    chaseQuery1.verifyLineOfBusinessIsNotDisplayed()
})
Then("user will verify Move back reason In create new view", () => {
    chaseQuery1.verifyMoveBackReason()
})
Then("user will click on comment view", () => {
    chaseQuery1.clickOnCommentView()
})
Then("user will verify comment tab is displayed in grid", () => {
    chaseQuery1.verifyCommentTab()
})
Then("user will verify comment View", () => {
    chaseQuery1.verifyCommentView()
})
Then("user will verify except for export all drop down is disabled and go button is disabled", () => {
    chaseQuery1.verifyDisabledDropDown()
})
Then("user will verify Go button is enbaled", () => {
    chaseQuery1.verifyGoButtonIsEnabled()
})
Then("user will verify TIN column In create new view", () => {
    chaseQuery1.verifyTinTable()
})
Then("user will select existing provider adress yes option4", () => {
    chaseQuery1.clickOnProviderYes()
    chaseQuery1.clickOnAddressAid()
    chaseQuery1.clickOnSearch()
    chaseQuery1.clickOnSearchedUser()
    chaseQuery1.clickOnSelectRetriever1()
    chaseQuery1.clickOnRetrievalDropDown()
    chaseQuery1.clickOnNextStep3()
})
Then("user will select existing provider adress yes option5", () => {
    chaseQuery1.clickOnProviderYes()
    chaseQuery1.clickOnAddressAid()
    chaseQuery1.clickOnSearch()
    chaseQuery1.clickOnSearchedUser()
    chaseQuery1.verifySelectRetriever()
})
Then("user will select existing provider adress yes option5 and verify retrieval dropdown values", () => {
    chaseQuery1.clickOnProviderYes()
    chaseQuery1.clickOnAddressAid()
    chaseQuery1.clickOnSearch()
    chaseQuery1.clickOnSearchedUser()
    chaseQuery1.verifyRetrievalDropDown()
})
Then("user will select product option", () => {
    chaseQuery1.clickOnProduct()
})
Then("user will select Lob option", () => {
    chaseQuery1.clickOnLob()
    chaseQuery1.selectLobDropDown()
    chaseQuery1.clickOnSelectProductDropDown()
    chaseQuery1.clickOnSelectProductDropDown1()
    chaseQuery1.clickOnRunQuerryButton()
})
Then("user will verify gird is loaded as per Lob filter", () => {
    chaseQuery1.verifyCommercialTable()
})
Then("user will select multiple Lob option", () => {
    chaseQuery1.clickOnLob()
    chaseQuery1.selectLobDropDown()
    chaseQuery1.clickOnSelectProductDropDown()
    chaseQuery1.clickOnMultipleDropDown()
    chaseQuery1.clickOnRunQuerryButton()
})
Then("user will verify gird is loaded as per multiple Lob filter", () => {
    chaseQuery1.verifyMultipleResult()
})
Then("user will fill all the details8", () => {
    chaseQuery1.clickOnProjectSelect()
    chaseQuery1.selectIvaProject()
    chaseQuery1.clickOnChaseKey1()
    chaseQuery1.logChaseKey()
})
Then("user will verify project dropdown is displayed", () => {
    chaseQuery1.clickOnProjectSelect()
    chaseQuery1.verifyProjectDropDownList()
})
Then("user will verify pursuit option is visible", () => {
    chaseQuery1.verifyPursuitIsVisible()
})
Then("user will select project2", () => {
    chaseQuery1.clickOnProjectSelect()
    chaseQuery1.selectIvaProject()
})
Then("user will verify pursuit option is not visible", () => {
    chaseQuery1.verifyPursuitIsNotVisible()
})
Then("user will verify data load field is disabled and have Commercial by deault", () => {
    chaseQuery1.verifyDataLoadField()
})
Then("user will fill all details except for chase Key and verify Next button is disabled", () => {
    chaseQuery1.clickOnProjectSelect()
    chaseQuery1.selectIvaProject()
    chaseQuery1.clickOnSelectProduct()
    chaseQuery1.verifyNextStepIsDisabled()
})
Then("user will the chase Key details and verify next button is enabled", () => {
    chaseQuery1.clickOnChaseKey1()
    chaseQuery1.verifyNextStepIsEnabled()
})
Then("user will verify chase key field start with HST-MN-", () => {
     chaseQuery1.clickOnProjectSelect()
     chaseQuery1.selectIvaProject()
     chaseQuery1.verifyChaseKeyFieldDefaultValue()
})
Then("user will verify error message for chase key", () => {
    chaseQuery1.clickOnProjectSelect()
    chaseQuery1.selectIvaProject()
    chaseQuery1.verifyErrorMessage()
})
Then("user will Verify Measure field defaults to HST and user should not be able to change it", () => {
    chaseQuery1.clickOnProjectSelect()
    chaseQuery1.selectIvaProject()
    chaseQuery1.verifyDefaultMeasureValue()
    chaseQuery1.verifyMeasureFieldIsDisabled()
})
Then("user will select existing member yes5", () => {
    chaseQuery1.clickOnExistingMemberYes1()
    chaseQuery1.clickOnGender()
    chaseQuery1.clickOnGenderDropDown()
    chaseQuery1.clickOnSearch()
    chaseQuery1.clickOnSearchedUser()
    chaseQuery1.verifyExistingMemberSearchResult()
})
Then("user will deselect search result and will verify next step is not visible", () => {
    chaseQuery1.searchCheckBox()
    chaseQuery1.veirfyNextButtonNotvisible()
})
Then("user will select search result and will verify next step is visible", () => {
    chaseQuery1.searchCheckBox()
    chaseQuery1.verifyNextButtonIsVisible()
})
Then("verify enroll id Field validation", () => {
    chaseQuery1.verifyThreeDigitErrorMessage()
    chaseQuery1.verify41DigitErrorMessage()
})
Then("user will select existing provider adress yes option7", () => {
    chaseQuery1.clickOnProviderYes5()
    chaseQuery1.clickOnAddressAid()
    chaseQuery1.clickOnSearch()
    chaseQuery1.verifyAidSearchResult()
})
Then("user will verify next button is not visible without selecting Retriever",()=>{
    chaseQuery1.verifyAIdNextButton()
})
Then("user will select retriever and will click on next button",()=>{
    chaseQuery1.clickOnSearchedUser()
    chaseQuery1.verifyAIdNextButton1()
    chaseQuery1.verifySelectRetriever()
    chaseQuery1.clickOnSelectRetriever1()
    chaseQuery1.clickOnRetrievalDropDown()
    chaseQuery1.clickOnNextStep3()
    chaseQuery1.verifyProvider()  
})
Then("user will click on provider option yes9",()=>{
    chaseQuery1.clickOnExistingProviderYes()
})
Then("user will fill provider form9", (datatable) => {
    datatable.hashes().forEach(element => {
    chaseQuery1.clickOnFirstName1(element.firstName1)
    chaseQuery1.clickOnLastName1(element.lastName1)
    chaseQuery1.clickOnSearch()
    cy.wait(2000)
})
})
Then("user will verify search result is displayed or not",()=>{
    chaseQuery1.verifyProviderSearchResult()
})
Then("user will verify next button is disabled without adding provider",()=>{
    chaseQuery1.verifyProviderNextButton()
})
Then("user will add new provider and verify next button is visible",()=>{
    chaseQuery1.addNewProvider()
    chaseQuery1.verifyProviderNextButton1()
})
Then("user will verify next button is disabled",()=>{
    chaseQuery1.verifyNextEncounterButton()
})
Then("user will fill encounter details and verify next button is enabled", (datatable) => {
    datatable.hashes().forEach(element => {
    chaseQuery1.clickOnClaimid()
    chaseQuery1.clickOnSelectProvider2()
    chaseQuery1.clickOnSelectProvider2DropDown()
    chaseQuery1.clickOnEncounter()
    chaseQuery1.clickOnEncounterDropDown()
    chaseQuery1.clickOnEncounterServiceDateFrom(element.serviceDateFrom)
    chaseQuery1.clickOnEncounterServiceDateThru(element.serviceDateThru)
    chaseQuery1.clickOnDiagnosis1(element.diagnosis1)
    chaseQuery1.clickOnDiagnosisStartDate(element.diagnosis1startDate)
    chaseQuery1.clickOnDiagnosisThruDate(element.diagnosis1thruDate)
    chaseQuery1.clickOnDiagnosis2(element.diagnosis2)
    chaseQuery1.clickOnDiagnosisStartDate1(element.diagnosis1startDate)
    chaseQuery1.clickOnDiagnosisThruDate1(element.diagnosis1thruDate)
    chaseQuery1.enbaledENconterNextButton()
    cy.wait(2000)
})
})
Then("user will verify congrats message and chase id link",()=>{
    chaseQuery1.verifyCongratsMessage()
   
})
Then("user will verify pend resolved warning message", () => {
    chaseQuery1.clickOnThreeDot()
    chaseQuery1.pendChase5()
})
Then("user will verify pend resolved", () => {
    chaseQuery1.clickOnThreeDot()
    chaseQuery1.pendResolvedChase()
})
Then("user will verify No option while resolving pend", () => {
    chaseQuery1.clickOnThreeDot()
    chaseQuery1.pendNoOption()
})
Then("user will click on pend status and select new filter", () => {
    chaseQuery1.clickOnPendStatus()
    chaseQuery1.clickOnPendNewStatus()
    chaseQuery1.clickOnRunQuerryButton()
})
Then("user will log chase id", () => {
    chaseQuery1.logRetrievalChase()
})
Then("user will click on chaseid filter and search chase id", () => {
    chaseQuery1.clickOnClientChase()
    chaseQuery1.clickOnChaseKeyField1()
    chaseQuery1.clickOnRunQuerryButton()
})
When("user will select retrivel pends from sub menu", () => {
    chaseQuery1.clickOnRetrievalPends()
})
Then("user will click closed pend", () => {
    chaseQuery1.clickOnThreeDot()
    chaseQuery1.pendCloseChase()
})
Then("user will verify closed pend no option", () => {
    chaseQuery1.clickOnThreeDot()
    chaseQuery1.pendNoChase1()
})
Then("user will verify closed pend yes option", () => {
    chaseQuery1.clickOnThreeDot()
    chaseQuery1.pendYesChase1()
})
Then("user will verify pursuit option with yes or no option", () => {
    chaseQuery1.verifyPursuit()
})
Then("user will verify Verify By default pursuit selection is No", () => {
    chaseQuery1.verifyPursuitDefaultState()
})
Then("user will click on chase and verify its created0", () => {
    chaseQuery1.logChase()
    chaseQuery1.clickOnChase()
    chaseQuery1.clickOncrossButton()
    chaseQuery1.verifyChaseId()
    chaseQuery1.clickOnChaseOfChaseDetailPage()
    chaseQuery1.verifyClientAidChaseKey()
})
Then("user will click on chase and verify its created2", () => {
    chaseQuery1.logChase()
    chaseQuery1.clickOnChase()
    chaseQuery1.clickOncrossButton()
    chaseQuery1.verifyChaseId3()
    chaseQuery1.clickOnChaseOfChaseDetailPage()
    chaseQuery1.verifyClientAidChaseKey()
})
Then("user will select project7", () => {
    chaseQuery1.selectProjectFilter()
    chaseQuery1.selectStatustFilter()
    chaseQuery1.clickOnRunQuerryButton()
})
Then("user will verify IVA Projects available in Project field drop down", () => {
    chaseQuery1.clickOnProjectSelect()
    chaseQuery1.selectIvaProject1()
   
})


