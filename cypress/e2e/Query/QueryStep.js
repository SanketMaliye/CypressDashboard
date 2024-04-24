import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";





import chaseQuery from "../../pages/ChaseQuery/chaseQuery";
import query from "../../pages/Query/query";







const reveleerHomePage = require('../../pages/reveleerHomePage')
const reveleerLoginPage = require('../../pages/reveleerLoginPage')
const chaseQuery1=new chaseQuery()
const queryPage =new query()




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
    queryPage.clickOnQueries()
})
When("user will select chase queries from sub menu button", () => {
    queryPage.clickOnChaseQueries()
})
Then("user will select create new chase", () => {
    queryPage.clickOnCreateNewChase()
})
Then("user will click on get started", () => {
    queryPage.clickOnGetStarted()
})
Then("user will fill all the details", () => {
    queryPage.clickOnProjectSelect()
    queryPage.clickOnDropDownProject()
    queryPage.clickOnSelectProduct()
    queryPage.clickOnChaseKey()
    cy.wait(2000)
    queryPage.logChaseKey()
})
Then("user will click on next step", () => {
    queryPage.clickOnNextStep()
    cy.wait(2000)
})
Then("user will click on no option", () => {
    queryPage.clickOnNoOption()
})
Then("user will fill member form", (datatable) => {
    datatable.hashes().forEach(element => {
    queryPage.clickOnClientMemberId()
    cy.wait(200)
    queryPage.logClientMemberId()
    queryPage.clickOnFirstName(element.firstName)
    queryPage.clickOnLastName(element.lastName)
    queryPage.clickOnMembersDob(element.Dob)
    queryPage.clickOnGender()
    queryPage.clickOnGenderDropDown()
})
})
Then("user will click on Add member", () => {
    queryPage.clickOnAddMember()
    cy.wait(2000)
})
Then("user will click on no option2", () => {
    queryPage.clickOnNoOption2()
})
Then("user will click on provider no option2", () => {
    queryPage.clickOnpProviderNoOption2()
})
Then("user will fill provider address", (datatable) => {
    datatable.hashes().forEach(element => {
    queryPage.clickOnAddAddress(element.Address)
    queryPage.clickOnPhoneNumber(element.phno)
    queryPage.clickOnSelectRetriever()
    queryPage.clickOnRetrievalDropDown()
    queryPage.clickOnAddAddressButton()
    cy.wait(2000)
})
})
Then("user will click on no option3", () => {
    queryPage.clickOnNoOption3()
})
Then("user will click on provider no option3", () => {
    queryPage.clickOnpProviderNoOption3()
})
Then("user will fill provider form", (datatable) => {
    datatable.hashes().forEach(element => {
    queryPage.clickOnNpi()
    queryPage.clickOnFirstName1(element.firstName1)
    queryPage.clickOnLastName1(element.lastName1)
    queryPage.clickOnProviderId()
    queryPage.clickOnAddProvider()
    cy.wait(2000)
})
})
Then("user will fill encounter details", (datatable) => {
    datatable.hashes().forEach(element => {
    queryPage.clickOnClaimid()
    queryPage.clickOnSelectProvider2()
    queryPage.clickOnSelectProvider2DropDown()
    queryPage.clickOnEncounter()
    queryPage.clickOnEncounterDropDown()
    queryPage.clickOnEncounterServiceDateFrom(element.serviceDateFrom)
    queryPage.clickOnEncounterServiceDateThru(element.serviceDateThru)
    queryPage.clickOnDiagnosis1(element.diagnosis1)
    queryPage.clickOnDiagnosisStartDate(element.diagnosis1startDate)
    queryPage.clickOnDiagnosisThruDate(element.diagnosis1thruDate)
    queryPage.clickOnDiagnosis2(element.diagnosis2)
    queryPage.clickOnDiagnosisStartDate1(element.diagnosis1startDate)
    queryPage.clickOnDiagnosisThruDate1(element.diagnosis1thruDate)
    queryPage.clickOnNextStep2()
    cy.wait(2000)
})
})
Then("user will click on Finalize", () => {
    queryPage.clickOnFinalize()
})
Then("user will click on chase and verify its created", () => {
    queryPage.logChase()
    queryPage.clickOnChase()
    queryPage.clickOncrossButton()
    queryPage.verifyChaseId()
    queryPage.clickOnChaseOfChaseDetailPage()
    queryPage.verifyClientAidChaseKey()
    queryPage.verifyAidClientMemberKey()
})
Then("user will verify encounter is visible", () => {
    queryPage.verifyEncounterTab()
})
Then("user will select existing member yes", () => {
    queryPage.clickOnExistingMemberYes()
    queryPage.clickOnGender()
    queryPage.clickOnGenderDropDown()
    queryPage.clickOnSearch()
    queryPage.clickOnSearchedUser()
    queryPage.clickOnNextStep3()
})
Given("user will go to retrievel menu", () => {
    queryPage.clickOnRetrievalMenuButton()
})
When("user will click on call center rep", () => {
    queryPage.clickOnCallCenterRep()
    queryPage.clickOnRunQuerryButton()
})
Then("user will log aid", () => {
    queryPage.logAid()
})
Then("user will select existing provider adress yes option", () => {
    queryPage.clickOnProviderYes()
    queryPage.clickOnAddressAid()
    queryPage.clickOnSearch()
    queryPage.clickOnSearchedUser()
    queryPage.clickOnSelectRetriever1()
    queryPage.clickOnRetrievalDropDown()
    queryPage.clickOnNextStep3()
})
Then("user will fill encounter details1", (datatable) => {
    datatable.hashes().forEach(element => {
    queryPage.verifyDisabledNextButton()
    queryPage.clickOnClaimid()
    queryPage.clickOnSelectProvider2()
    queryPage.clickOnSelectProvider2DropDown()
    queryPage.clickOnEncounter()
    queryPage.clickOnEncounterDropDown()
    queryPage.clickOnEncounterServiceDateFrom(element.serviceDateFrom)
    queryPage.clickOnEncounterServiceDateThru(element.serviceDateThru)
    queryPage.clickOnDiagnosis1(element.diagnosis1)
    queryPage.clickOnDiagnosisStartDate(element.diagnosis1startDate)
    queryPage.clickOnDiagnosisThruDate(element.diagnosis1thruDate)
    queryPage.clickOnDiagnosis2(element.diagnosis2)
    queryPage.clickOnDiagnosisStartDate1(element.diagnosis1startDate)
    queryPage.clickOnDiagnosisThruDate1(element.diagnosis1thruDate)
    queryPage.verifyEnabledNextButton()
    cy.wait(2000)
})
})
Then("user will fill multiple encounter details", (datatable) => {
    datatable.hashes().forEach(element => {
    queryPage.clickOnPlusSignOfClaimID()
    queryPage.verifyDisabledNextButton()
    queryPage.clickOnClaimid2()
    queryPage.clickOnSecondEncounterDate(element.serviceDateFrom1)
    queryPage.clickOnSecondEncounterThruDate(element.serviceDateThru1)
    queryPage.clickOnMultipleDiagnosis(element.diagnosis3)
    queryPage.clickOnMultipleDiagnosisStartDate(element.diagnosis1startDate1)
    queryPage.clickOnMultipleDiagnosisThruDate(element.diagnosis1thruDate1)
    queryPage.verifyEnabledNextButton()    
})
})
Then("user will verify provider is selected from dropdown", () => {
    queryPage.clickOnProviderDropDown()
})
Then("user will verify encounter is selected from dropdown", () => {
    queryPage.clickOnEncounter()
    queryPage.clickOnEncounterDropDown()
    queryPage.verifySelectedEncounterValue()
})
Then("user will verify multiple encounter is selected from dropdown", () => {
    queryPage.clickOnProviderDropDown()
    queryPage.clickOnEncounter()
    queryPage.clickOnEncounterDropDown()
    queryPage.verifySelectedEncounterValue()
    queryPage.clickOnPlusSignOfClaimID()
    queryPage.verifySelectedEncounterValue1()
})
Then("user will fill encounter details3", (datatable) => {
    datatable.hashes().forEach(element => {
    queryPage.clickOnClaimid()
    queryPage.clickOnSelectProvider2()
    queryPage.clickOnSelectProvider2DropDown()
    queryPage.clickOnEncounter()
    queryPage.clickOnEncounterDropDown()
    queryPage.clickOnEncounterServiceDateFrom(element.serviceDateFrom)
    queryPage.clickOnEncounterServiceDateThru(element.serviceDateThru)
    queryPage.clickOnDiagnosis1(element.diagnosis1)
    queryPage.clickOnDiagnosisStartDate(element.diagnosis1startDate)
    queryPage.clickOnDiagnosisThruDate(element.diagnosis1thruDate)
    queryPage.clickOnDiagnosis2(element.diagnosis2)
    queryPage.clickOnDiagnosisStartDate1(element.diagnosis1startDate)
    queryPage.clickOnDiagnosisThruDate1(element.diagnosis1thruDate)
    queryPage.clickOnNextStep2()
    cy.wait(2000)
})
})
Then("user will verify the warning msg", () => {
    queryPage.verifyWarningMessage()
})
Then("user will fill encounter details1 and verify next button is enabled", (datatable) => {
    datatable.hashes().forEach(element => {
    queryPage.verifyDisabledNextButton()
    queryPage.clickOnClaimid()
    queryPage.clickOnSelectProvider2()
    queryPage.clickOnSelectProvider2DropDown()
    queryPage.clickOnEncounter()
    queryPage.clickOnEncounterDropDown()
    queryPage.clickOnEncounterServiceDateFrom(element.serviceDateFrom)
    queryPage.clickOnEncounterServiceDateThru(element.serviceDateThru)
    queryPage.clickOnDiagnosis1(element.diagnosis1)
    queryPage.clickOnDiagnosisStartDate(element.diagnosis1startDate)
    queryPage.clickOnDiagnosisThruDate(element.diagnosis1thruDate)
    queryPage.clickOnDiagnosis2(element.diagnosis2)
    queryPage.clickOnDiagnosisStartDate1(element.diagnosis1startDate)
    queryPage.clickOnDiagnosisThruDate1(element.diagnosis1thruDate)
    queryPage.verifyEnabledNextButton()
    cy.wait(2000)
})
})
Then("user will fill multiple encounter details and diagnosis details and after fill next button gets enabled", (datatable) => {
    datatable.hashes().forEach(element => {
    queryPage.clickOnPlusSignOfClaimID()
    queryPage.verifyDisabledNextButton()
    queryPage.clickOnClaimid2()
    queryPage.clickOnSecondEncounterDate(element.serviceDateFrom1)
    queryPage.clickOnSecondEncounterThruDate(element.serviceDateThru1)
    queryPage.clickOnMultipleDiagnosis(element.diagnosis3)
    queryPage.clickOnMultipleDiagnosisStartDate(element.diagnosis1startDate1)
    queryPage.clickOnMultipleDiagnosisThruDate(element.diagnosis1thruDate1)
    queryPage.verifyEnabledNextButton()    
})
})
Then("user will fill multiple diagnosis details", (datatable) => {
    datatable.hashes().forEach(element => {
    queryPage.clickOnPlusSignOfClaimID()
    queryPage.verifyDisabledNextButton()
    queryPage.clickOnClaimid2()
    queryPage.clickOnSecondEncounterDate(element.serviceDateFrom1)
    queryPage.clickOnSecondEncounterThruDate(element.serviceDateThru1)
    queryPage.clickOnMultipleDiagnosis(element.diagnosis3)
    queryPage.clickOnMultipleDiagnosisStartDate(element.diagnosis1startDate1)
    queryPage.clickOnMultipleDiagnosisThruDate(element.diagnosis1thruDate1)
    queryPage.verifyEnabledNextButton()
    queryPage.clickOnNextStep2()    
})
})
Then("user will click on Skip step in encounter tab", () => {
    queryPage.clickOnSkipStep()
})
Then("user will click on reset", () => {
    queryPage.clickOnResetButton()
})
Then("user will verify project field get reset", () => {
    queryPage.verifyProjectFieldsGetReset()
})
Then("user will verify member field get reset", () => {
    queryPage.verifyMemberpageGetReset()
 })
Then("user will click on member reset", () => {
    queryPage.clickOnMemberReset()
})
Then("user will fill provider address1", (datatable) => {
    datatable.hashes().forEach(element => {
    queryPage.clickOnAddAddress(element.Address)
    queryPage.clickOnPhoneNumber(element.phno)
    queryPage.clickOnSelectRetriever()
    queryPage.clickOnRetrievalDropDown()
    cy.wait(2000)
})
})
Then("user will click on aid reset button", () => {
    queryPage.clickOnAidReset()
})
Then("user will verify provider address filed is reset", () => {
    queryPage.verifyProviderAddressPageGetsReset()
})
Then("user will fill provider form1", (datatable) => {
    datatable.hashes().forEach(element => {
    queryPage.clickOnNpi()
    queryPage.clickOnFirstName1(element.firstName1)
    queryPage.clickOnLastName1(element.lastName1)
    queryPage.clickOnProviderId()
    cy.wait(2000)
})
})
Then("user will click on Provider reset button", () => {
    queryPage.clickOnProviderReset()
})
Then("user will verify provider page gets reset", () => {
    queryPage.verifyProviderPageGetsReset()
})
Then("user will click on encounter reset button", () => {
    queryPage.clickOnEncounterResetButton()
})
Then("user will verify field is reset", () => {
    queryPage.verifyEncounterPageGetsReset()
})
Then("user will fill encounter details4", (datatable) => {
    datatable.hashes().forEach(element => {
    queryPage.verifyDisabledNextButton()
    queryPage.clickOnClaimid5()
    queryPage.clickOnSelectProvider2()
    queryPage.clickOnSelectProvider2DropDown()
    queryPage.clickOnEncounter()
    queryPage.clickOnEncounterDropDown()
    queryPage.clickOnEncounterServiceDateFrom(element.serviceDateFrom)
    queryPage.clickOnEncounterServiceDateThru(element.serviceDateThru)
    queryPage.clickOnDiagnosis1(element.diagnosis1)
    queryPage.clickOnDiagnosisStartDate(element.diagnosis1startDate)
    queryPage.clickOnDiagnosisThruDate(element.diagnosis1thruDate)
    queryPage.clickOnDiagnosis2(element.diagnosis2)
    queryPage.clickOnDiagnosisStartDate1(element.diagnosis1startDate)
    queryPage.clickOnDiagnosisThruDate1(element.diagnosis1thruDate)
    queryPage.verifyEnabledNextButton()
    cy.wait(2000)
})
})
Then("user will fill multiple diagnosis details1", (datatable) => {
    datatable.hashes().forEach(element => {
    queryPage.clickOnPlusSignOfClaimID()
    queryPage.verifyDisabledNextButton()
    queryPage.clickOnClaimid4()
    queryPage.clickOnSecondEncounterDate(element.serviceDateFrom1)
    queryPage.clickOnSecondEncounterThruDate(element.serviceDateThru1)
    queryPage.clickOnMultipleDiagnosis(element.diagnosis3)
    queryPage.clickOnMultipleDiagnosisStartDate(element.diagnosis1startDate1)
    queryPage.clickOnMultipleDiagnosisThruDate(element.diagnosis1thruDate1)
    queryPage.verifyEnabledNextButton()
    queryPage.clickOnNextStep2()    
})
})
Then("user will verify claim id error message", () => {
    queryPage.verifyClaimIdErrorMessage()
})
When("user will select chase queries from sub menu button1", () => {
    queryPage.clickOnChaseQueries1()
})
Then("user will select project", () => {
    queryPage.selectProjectFilter()
    queryPage.clickOnRunQuerryButton()
})
Then("click on slect next option", () => {
    queryPage.clickOnSelectNextOption()
})
Then("user will click on export functionality", () => {
    queryPage.clickOnExportChase()
})
Then("user will click on go button", () => {
    queryPage.clickOnGoButton()
})
Then("user will verify downloaded file", () => {
    cy.wait(5000)
    cy.verifyDownload('download.csv');
})
Then("user will click on assigned to", () => {
    queryPage.clickOnAssignedTo()
})
Then("user will search by assigned user", (datatable) => {
    datatable.hashes().forEach(element => {
    queryPage.clickOnAssignedToUser(element.assignedUser)
    queryPage.clickOnRunQuerryButton()
})
})
Then("user will verify grid is loaded as per filter", () => {
    queryPage.verifyGridisLoadedAsPerFilter()
})
Then("user will select first chase", () => {
    queryPage.clickOnFirstCheckBox()
})
Then("user will pend chase chase", () => {
    queryPage.clickOnSelectNextOption()
    queryPage.clickOnPendChase()
    queryPage.clickOnGoButton()
    queryPage.pendChase()
})
Then("verify pend status in grid", () => {
    queryPage.verifyPendStatus()
    queryPage.verifyPendCodeno()
})
Then("user will assign to user", () => {
    queryPage.clickOnSelectNextOption()
    queryPage.clickOnassignUser()
    queryPage.clickOnGoButton()
    queryPage.assigntoUser()
})
Then("user will verify user is assigned", () => {
    queryPage.verifyUserIsassigned()
})
Then("user will unassign and verify it is unassigned", () => {
    queryPage.clickOnSelectNextOption()
    queryPage.clickOnUnassign()
    queryPage.unassignedUser()
})
Then("user will select second chase",()=>{
    queryPage.clickOnSecondCheckBox()
})
Then("user will verify user is assigned to multiple chase",()=>{
    queryPage.verifyMultipleAssignedUser()
})
Then("user will select Third chase",()=>{
    queryPage.clickOnThirdCheckBox()
})
Then("user will pend chase chase1", () => {
    queryPage.clickOnSelectNextOption()
    queryPage.clickOnPendChase()
    queryPage.clickOnGoButton()
    queryPage.pendChase1()
})
Then("user will verify sucess pended message",()=>{
    queryPage.pendToastMessage()
})
Then("user will select project1", () => {
    queryPage.selectProject2()
    queryPage.clickOnRunQuerryButton()
})
Then("user download chart", () => {
    queryPage.clickOnSelectNextOption()
    queryPage.clickOnDownloadChart()
})
Then("user download chart", () => {
    queryPage.clickOnSelectNextOption()
    queryPage.clickOnDownloadChart()
    queryPage.clickOnGoButton()
})
Then("user will go to job Que",()=>{
    queryPage.clickOnJobQue()
})
Then("user will click on chase in notification and click on chase",()=>{
    queryPage.jobChase()
})
Then("user will log the chase id",()=>{
    queryPage.logFirstChase()
})
Then("user will click on filter",()=>{
    queryPage.clickOnFilter()
})
Then("user will search by client ID",()=>{
    queryPage.clickOnClientChase()
    queryPage.clickOnClientChase()
    queryPage.clickOnChaseKeyField()
    queryPage.clickOnRunQuerryButton()
})
Then("user will click on measure and will select measure",()=>{
    queryPage.clickOnMeasures()
    queryPage.selectMeasures()
    queryPage.clickOnRunQuerryButton()
})
Then("user will click on client and will select client",()=>{
    queryPage.clickOnClient()
    queryPage.clickOnClientField()
    queryPage.clickOnClientDropdown()
    queryPage.clickOnRunQuerryButton()
})
Then("user will verify grid load as per the client filter",()=>{
    queryPage.verifyGridLoad()
})
Then("user will verify grid load as per the client filter1",()=>{
    queryPage.verifyClientName()
})
Then("user will verify grid is loaded as per project filter",()=>{
    queryPage.verifyProjectField()
})
Then("user will click on member and search by first name",()=>{
    queryPage.clickOnMember()
    queryPage.clickOnFirstMemberName()
    queryPage.clickOnRunQuerryButton()
})
Then("user will verify grid is loaded as per member filter",()=>{
    queryPage.verifyFirstNameField()
})
Then("user will click on adress and search by aid",()=>{
    queryPage.clickOnAddress()
    queryPage.serachAid()
    queryPage.clickOnRunQuerryButton()
})
Then("user will verify grid is loaded as per aid filter",()=>{
    queryPage.verifyAidGrid()
})
Then("user will click on pendCode and search by pendcode",()=>{
    queryPage.clickOnPendCode()
    queryPage.clickOnPendNumber()
    queryPage.clickOnRunQuerryButton()
})
Then("user will verify grid is loaded as per pencode filter",()=>{
    queryPage.verifyPendCodeGrid()
})
Then("user will click on chase complianced and search by compliance",()=>{
    queryPage.clickONChaseComliance()
    queryPage.clickOnComplianceNo()
    queryPage.clickOnRunQuerryButton()
})
Then("user will verify grid is loaded as per compliance filter",()=>{
    queryPage.veirfyComplianceGrid()
})
Then("user will click on last coded by and search by last coded by",()=>{
    queryPage.clickOnLastCodedBy()
    queryPage.clickOnLastCodedField()
    queryPage.clickOnRunQuerryButton()
})
Then("user will verify grid is loaded as per last coded by filter",()=>{
    queryPage.verifyLastCodedGrid()
})
Then("user will click pend status and search pend status New",()=>{
    queryPage.clickOnPendStatus()
    queryPage.clickOnPendStatusNo()
    queryPage.clickOnRunQuerryButton()
})
Then("user will verify grid is loaded as per pend status New filter",()=>{
    queryPage.verifyPendStatusGrid()
})
Then("user will click date assigned  and search by date assigned",()=>{
    queryPage.clickOnDateAssigned()
    queryPage.clickOnDateAssignedSearchBox()
    queryPage.clickOnRunQuerryButton()
})
Then("user will verify grid is loaded as per date assigned filter",()=>{
    queryPage.verifyDateAssignedGrid()
})
Then("user will click risk  and mark dos sonfirmed and hcc",()=>{
    queryPage.clickOnRisk()
    queryPage.clickOnDosCOnfirmed()
    queryPage.clickOnHCCDescrepency()
    queryPage.clickOnRunQuerryButton()
})
Then("user will verify grid is loaded as per risk filter",()=>{
    queryPage.verifyRiskGrid()
})
Then("user will click risk  and click parent chase",()=>{
    queryPage.clickOnRisk()
    queryPage.clickOnParentChase()
    queryPage.clickOnRunQuerryButton()
})
Then("user will verify grid is loaded as per parent chase filter",()=>{
    queryPage.verifyParentChaseBracket()
})
Then("user will hover and verify pursuit chase is displayed",()=>{
    queryPage.verifyPursuitChase()
})
Then("user will verify grid load as per the measure filter",()=>{
    queryPage.verifyMeasureGrid()
})
Then("user will click on pursuit chase", () => {
    queryPage.clickOnChildChase()
})
Then("user will verify user is redirected to chase details page", () => {
    queryPage.verifyUrl()
})
Then("user will unassign and verify it is unassigned1", () => {
    queryPage.clickOnSelectNextOption()
    queryPage.clickOnUnassign()
    queryPage.unassignedUser()
    queryPage.verifyUnassigned1()
})
Then("user will fill all the details5", () => {
    queryPage.clickOnProjectSelect()
    queryPage.clickOnDropDownProject1()
    queryPage.clickOnSelectProduct()
    queryPage.clickOnChaseKey()
    cy.wait(2000)
    queryPage.logChaseKey()
    queryPage.clickOnSelectMeasure()
    queryPage.clickOnMeasureDropDOwn()
})
Then("user will verify create new chase button", () => {
    queryPage.verifyCreateNewChase()
})
Then("user will click on chase and verify its created3", () => {
    queryPage.logChase()
    queryPage.clickOnChase()
    queryPage.clickOncrossButton()
    queryPage.verifyChaseId3()
    queryPage.clickOnChaseOfChaseDetailPage()
    queryPage.verifyClientAidChaseKey()
    queryPage.verifyAidClientMemberKey()
})
Then("user will select pagination", () => {
    queryPage.clickOnPaginationDropDown()
})
Then("user will verify table list is as per pagination", () => {
    queryPage.verifyPagination()
    queryPage.verifyTableList()
})
Then("user will verify create new view button is visible", () => {
    queryPage.verifyCreateNewView()
})
Then(" user will click on Create New view", () => {
    queryPage.clickOnCreateNewView()
})
Then("user will click on Create New view", () => {
    queryPage.clickOnCreateNewView()
})
Then("user will enter details for new view", (datatable) => {
    datatable.hashes().forEach(element => {
    queryPage.clickOnenterTitile(element.name)
    queryPage.clickOnChaseIdCheckBox()
    queryPage.clickOnSaveButton()
})
})
Then("user will create new view and verify it", () => {
    queryPage.clickOncreateView1()
    queryPage.verifyCreatedViewTable()
})
Then("user will delete craeted view", () => {
    queryPage.deletCreatedView()
})
Then("user will edit chase and verify it", () => {
    queryPage.editcreatedView()
})
Then("verify Created view is deleted", () => {
    queryPage.verifyCreatedViewIsDeleted()
})
Then("user will verify different view is not selected", () => {
    queryPage.verifyDifferentViewNotSelected()
})
Then("user will change the view and verify different view is selected", () => {
    queryPage.clickOnDifferentView()
    queryPage.verifyDifferentViewSelected()
})
Then("user will fill all the details6", () => {
    queryPage.clickOnProjectSelect()
    queryPage.clickOnDropDownProject1()
})
Then("user will verify LOB is visible", () => {
    queryPage.verifyLineOfBusiness()
})
Then("user will verify LOB DropDown", () => {
    queryPage.verifyLobDropDOwn()
})
Then("user will fill all the details7", () => {
    queryPage.clickOnProjectSelect()
    queryPage.clickOnDropDownProject()
})
Then("user will verify Lob does not exist", () => {
    queryPage.verifyLineOfBusinessIsNotDisplayed()
})
Then("user will verify Move back reason In create new view", () => {
    queryPage.verifyMoveBackReason()
})
Then("user will click on comment view", () => {
    queryPage.clickOnCommentView()
})
Then("user will verify comment tab is displayed in grid", () => {
    queryPage.verifyCommentTab()
})
Then("user will verify comment View", () => {
    queryPage.verifyCommentView()
})
Then("user will verify except for export all drop down is disabled and go button is disabled", () => {
    queryPage.verifyDisabledDropDown()
})
Then("user will verify Go button is enbaled", () => {
    queryPage.verifyGoButtonIsEnabled()
})
Then("user will verify TIN column In create new view", () => {
    queryPage.verifyTinTable()
})
Then("user will select existing provider adress yes option4", () => {
    queryPage.clickOnProviderYes()
    queryPage.clickOnAddressAid()
    queryPage.clickOnSearch()
    queryPage.clickOnSearchedUser()
    queryPage.clickOnSelectRetriever1()
    queryPage.clickOnRetrievalDropDown()
    queryPage.clickOnNextStep3()
})
Then("user will select existing provider adress yes option5", () => {
    queryPage.clickOnProviderYes()
    queryPage.clickOnAddressAid()
    queryPage.clickOnSearch()
    queryPage.clickOnSearchedUser()
    queryPage.verifySelectRetriever()
})
Then("user will select existing provider adress yes option5 and verify retrieval dropdown values", () => {
    queryPage.clickOnProviderYes()
    queryPage.clickOnAddressAid()
    queryPage.clickOnSearch()
    queryPage.clickOnSearchedUser()
    queryPage.verifyRetrievalDropDown()
})
Then("user will select product option", () => {
    queryPage.clickOnProduct()
})
Then("user will select Lob option", () => {
    queryPage.clickOnLob()
    queryPage.selectLobDropDown()
    queryPage.clickOnSelectProductDropDown()
    queryPage.clickOnSelectProductDropDown1()
    queryPage.clickOnRunQuerryButton()
})
Then("user will verify gird is loaded as per Lob filter", () => {
    queryPage.verifyCommercialTable()
})
Then("user will select multiple Lob option", () => {
    queryPage.clickOnLob()
    queryPage.selectLobDropDown()
    queryPage.clickOnSelectProductDropDown()
    queryPage.clickOnMultipleDropDown()
    queryPage.clickOnRunQuerryButton()
})
Then("user will verify gird is loaded as per multiple Lob filter", () => {
    queryPage.verifyMultipleResult()
})
Then("user will fill all the details8", () => {
    queryPage.clickOnProjectSelect()
    queryPage.selectIvaProject()
    queryPage.clickOnChaseKey1()
    queryPage.logChaseKey()
})
Then("user will verify project dropdown is displayed", () => {
    queryPage.clickOnProjectSelect()
    queryPage.verifyProjectDropDownList()
})
Then("user will verify pursuit option is visible", () => {
    queryPage.verifyPursuitIsVisible()
})
Then("user will select project2", () => {
    queryPage.clickOnProjectSelect()
    queryPage.selectIvaProject()
})
Then("user will verify pursuit option is not visible", () => {
    queryPage.verifyPursuitIsNotVisible()
})
Then("user will verify data load field is disabled and have Commercial by deault", () => {
    queryPage.verifyDataLoadField()
})
Then("user will fill all details except for chase Key and verify Next button is disabled", () => {
    queryPage.clickOnProjectSelect()
    queryPage.selectIvaProject()
    queryPage.clickOnSelectProduct()
    queryPage.verifyNextStepIsDisabled()
})
Then("user will the chase Key details and verify next button is enabled", () => {
    queryPage.clickOnChaseKey1()
    queryPage.verifyNextStepIsEnabled()
})
Then("user will verify chase key field start with HST-MN-", () => {
     queryPage.clickOnProjectSelect()
     queryPage.selectIvaProject()
     queryPage.verifyChaseKeyFieldDefaultValue()
})
Then("user will verify error message for chase key", () => {
    queryPage.clickOnProjectSelect()
    queryPage.selectIvaProject()
    queryPage.verifyErrorMessage()
})
Then("user will Verify Measure field defaults to HST and user should not be able to change it", () => {
    queryPage.clickOnProjectSelect()
    queryPage.selectIvaProject()
    queryPage.verifyDefaultMeasureValue()
    queryPage.verifyMeasureFieldIsDisabled()
})
Then("user will select existing member yes5", () => {
    queryPage.clickOnExistingMemberYes1()
    queryPage.clickOnGender()
    queryPage.clickOnGenderDropDown()
    queryPage.clickOnSearch()
    queryPage.clickOnSearchedUser()
    queryPage.verifyExistingMemberSearchResult()
})
Then("user will deselect search result and will verify next step is not visible", () => {
    queryPage.searchCheckBox()
    queryPage.veirfyNextButtonNotvisible()
})
Then("user will select search result and will verify next step is visible", () => {
    queryPage.searchCheckBox()
    queryPage.verifyNextButtonIsVisible()
})
Then("verify enroll id Field validation", () => {
    queryPage.verifyThreeDigitErrorMessage()
    queryPage.verify41DigitErrorMessage()
})
Then("user will select existing provider adress yes option7", () => {
    queryPage.clickOnProviderYes5()
    queryPage.clickOnAddressAid()
    queryPage.clickOnSearch()
    queryPage.verifyAidSearchResult()
})
Then("user will verify next button is not visible without selecting Retriever",()=>{
    queryPage.verifyAIdNextButton()
})
Then("user will select retriever and will click on next button",()=>{
    queryPage.clickOnSearchedUser()
    queryPage.verifyAIdNextButton1()
    queryPage.verifySelectRetriever()
    queryPage.clickOnSelectRetriever1()
    queryPage.clickOnRetrievalDropDown()
    queryPage.clickOnNextStep3()
    queryPage.verifyProvider()  
})
Then("user will click on provider option yes9",()=>{
    queryPage.clickOnExistingProviderYes()
})
Then("user will fill provider form9", (datatable) => {
    datatable.hashes().forEach(element => {
    queryPage.clickOnFirstName1(element.firstName1)
    queryPage.clickOnLastName1(element.lastName1)
    queryPage.clickOnSearch()
    cy.wait(2000)
})
})
Then("user will verify search result is displayed or not",()=>{
    queryPage.verifyProviderSearchResult()
})
Then("user will verify next button is disabled without adding provider",()=>{
    queryPage.verifyProviderNextButton()
})
Then("user will add new provider and verify next button is visible",()=>{
    queryPage.addNewProvider()
    queryPage.verifyProviderNextButton1()
})
Then("user will verify next button is disabled",()=>{
    queryPage.verifyNextEncounterButton()
})
Then("user will fill encounter details and verify next button is enabled", (datatable) => {
    datatable.hashes().forEach(element => {
    queryPage.clickOnClaimid()
    queryPage.clickOnSelectProvider2()
    queryPage.clickOnSelectProvider2DropDown()
    queryPage.clickOnEncounter()
    queryPage.clickOnEncounterDropDown()
    queryPage.clickOnEncounterServiceDateFrom(element.serviceDateFrom)
    queryPage.clickOnEncounterServiceDateThru(element.serviceDateThru)
    queryPage.clickOnDiagnosis1(element.diagnosis1)
    queryPage.clickOnDiagnosisStartDate(element.diagnosis1startDate)
    queryPage.clickOnDiagnosisThruDate(element.diagnosis1thruDate)
    queryPage.clickOnDiagnosis2(element.diagnosis2)
    queryPage.clickOnDiagnosisStartDate1(element.diagnosis1startDate)
    queryPage.clickOnDiagnosisThruDate1(element.diagnosis1thruDate)
    queryPage.enbaledENconterNextButton()
    cy.wait(2000)
})
})
Then("user will verify congrats message and chase id link",()=>{
    queryPage.verifyCongratsMessage()
   
})
Then("user will verify pend resolved warning message", () => {
    queryPage.clickOnThreeDot()
    queryPage.pendChase5()
})
Then("user will verify pend resolved", () => {
    queryPage.clickOnThreeDot()
    queryPage.pendResolvedChase()
})
Then("user will verify No option while resolving pend", () => {
    queryPage.clickOnThreeDot()
    queryPage.pendNoOption()
})
Then("user will click on pend status and select new filter", () => {
    queryPage.clickOnPendStatus()
    queryPage.clickOnPendNewStatus()
    queryPage.clickOnRunQuerryButton()
})
Then("user will log chase id", () => {
    queryPage.logRetrievalChase()
})
Then("user will click on chaseid filter and search chase id", () => {
    queryPage.clickOnClientChase()
    queryPage.clickOnChaseKeyField1()
    queryPage.clickOnRunQuerryButton()
})
When("user will select retrivel pends from sub menu", () => {
    queryPage.clickOnRetrievalPends()
})
Then("user will click closed pend", () => {
    queryPage.clickOnThreeDot()
    queryPage.pendCloseChase()
})
Then("user will verify closed pend no option", () => {
    queryPage.clickOnThreeDot()
    queryPage.pendNoChase1()
})
Then("user will verify closed pend yes option", () => {
    queryPage.clickOnThreeDot()
    queryPage.pendYesChase1()
})
Then("user will verify pursuit option with yes or no option", () => {
    queryPage.verifyPursuit()
})
Then("user will verify Verify By default pursuit selection is No", () => {
    queryPage.verifyPursuitDefaultState()
})
Then("user will click on chase and verify its created0", () => {
    queryPage.logChase()
    queryPage.clickOnChase()
    queryPage.clickOncrossButton()
    queryPage.verifyChaseId()
    queryPage.clickOnChaseOfChaseDetailPage()
    queryPage.verifyClientAidChaseKey()
})
Then("user will click on chase and verify its created2", () => {
    queryPage.logChase()
    queryPage.clickOnChase()
    queryPage.clickOncrossButton()
    queryPage.verifyChaseId3()
    queryPage.clickOnChaseOfChaseDetailPage()
    queryPage.verifyClientAidChaseKey()
})
Then("user will select project7", () => {
    queryPage.selectProjectFilter()
    queryPage.selectStatustFilter()
    queryPage.clickOnRunQuerryButton()
})
Then("user will verify IVA Projects available in Project field drop down", () => {
    queryPage.clickOnProjectSelect()
    queryPage.selectIvaProject1()
   
})


