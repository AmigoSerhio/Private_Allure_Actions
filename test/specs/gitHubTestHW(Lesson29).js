const signUpPage = require('../pageobjects/signUp.page.js');
const mainPage = require('../pageobjects/main.page.js');
const signInPage = require('../pageobjects/signIn.page.js');
const accountPage = require('../pageobjects/account.page.js');
const passwordRecoveryPage = require('../pageobjects/passwordRecovery.page.js');
const pricingPage = require('../pageobjects/pricing.page.js');
const explorePage = require('../pageobjects/explore.page.js');
const topicsPage = require('../pageobjects/topics.page.js');
const searchResultsPage = require('../pageobjects/searchResults.page.js');  
const enterprisePage = require('../pageobjects/enterprise.page.js'); 
const organisationsPage = require('../pageobjects/organisations.paje.js'); 
const registrEnterprisePage = require('../pageobjects/registrEnterprise.page.js');  
const careersPage = require('../pageobjects/careers.page.js');



describe('HomeWork/TestTask/Actions (Lesson 29) https://youtube.com/playlist?list=PLP1-M5OhC7yjAZ1-llDH45nxLfKKbcxGe', () => {
    const assert = require('assert');



    it.only('should test SignUp function (using header button). Test-Case1',() => {

        mainPage.openMainPage();
        browser.fullscreenWindow()
        mainPage.clickSignUpButtonHeader();
        expect(browser).toHaveUrlContaining('https://github.com/join');
        signUpPage.UsernameInput.addValue(signUpPage.username_gen(7));
        signUpPage.EmailInput.addValue(signUpPage.email_gen(5));
        signUpPage.PasswordInput.addValue(signUpPage.pass_gen(9));
        signUpPage.checkVerifyText();

        })

    it('should test SignUp function (using primary SignUp button). Test-Case2',() => {  
            
        mainPage.openMainPage();
        mainPage.clickSignUpPrimaryButton();
        expect(browser).toHaveUrlContaining('https://github.com/join');
        signUpPage.UsernameInput.addValue(signUpPage.username_gen(7));
        signUpPage.EmailInput.addValue(signUpPage.email_gen(5));
        signUpPage.PasswordInput.addValue(signUpPage.pass_gen(9));
        signUpPage.checkVerifyText();
        
    })

    it('should test SignIn function . Test-Case3',() => {  
            
        signInPage.openSignInPage();
        signInPage.useValidData();   
        signInPage.clickSingInButton();
        browser.pause(2000);
        accountPage.checkAccountName();
        accountPage.checkStartProjectButton();
        accountPage.clickSingOutButton();
        expect(browser).toHaveUrlContaining('https://github.com');

    })

    it('should test Password recowery function . Test-Case4',() => {  

        signInPage.openSignInPage();
        browser.pause(2000)
        signInPage.clickForgotPasswordButton();
        passwordRecoveryPage.EmailInput.addValue(signUpPage.ValidEmail);
        passwordRecoveryPage.EmailInput.setValue(signUpPage.ValidPassword);
        passwordRecoveryPage.EmailInput.setValue(signUpPage.ValidUsername);
        passwordRecoveryPage.EmailInput.setValue(signUpPage.username_gen(257));     //passwordRecovery.waitCapchaSolved();   Need to solving capcha by hands becose for now I'm not able to use some script to solve it automaticaly. if capcha has been solwed(by human) in ChromeDriver window Error message appears: Unable to verify your captcha response. Please visit https://docs.github.com/articles/troubleshooting-connectivity-problems/#troubleshooting-the-captcha or troubleshooting information. Becouse of this I'm not able to check Recovery Email in my email servise

    })

    it('should test that dropdown menues(Header Menu) is displayed when mouse on it. Test-Case5',() => {  
            
        mainPage.checkWhyGitHubDropdownMenu();
        browser.pause(500)
        mainPage.checkExploreDropdownMenu();
        browser.pause(1000) 
        mainPage.checkPricingDropdownMenu();
        browser.pause(500)

    })

    it('should test that user able to chose the plan"for free" and register throuth it . Test-Case6',() => {  
        
        mainPage.openMainPage();
        browser.pause(1000);
        mainPage.clickPlansButton();
        pricingPage.clickJoinForFreeButton();
        pricingPage.checkSignUpRedirectURL();
        signUpPage.UsernameInput.addValue(signUpPage.username_gen(7));
        signUpPage.EmailInput.addValue(signUpPage.email_gen(5));
        signUpPage.PasswordInput.addValue(signUpPage.pass_gen(9)); 

    })
            

    it('should check that is Topic text displayed in view port . Test-Case7',() => {  

        mainPage.openMainPage();
        mainPage.clickExploreGitHubButton();
        explorePage.checkExploreRedirectURL()
        explorePage.clickTopicsButton();
        topicsPage.checkTopicsHeader();
            
        
    })
        
    it('should test that filter TypeScript works and first result is relevant . Test-Case8',() => {  
        
        mainPage.openMainPage();
        mainPage.SearchGitHub.addValue('webdriver.io');
        mainPage.searchGitHubclick();
        searchResultsPage.clickTypeScriptButton();
        searchResultsPage.clickFirstResult();
        searchResultsPage.checkSearchresultsURL();
    })    

    it(' should test that user able to add registration data through the EnterpriseCloud and EnterpriseServer pages. Test-Case9',() => {  
        
        mainPage.openMainPage();
        
        mainPage.clickEnterpriseButton();
        enterprisePage.clickStartFreeButton();
        

        organisationsPage.clickEnterpriseCloudButton()
    
        signUpPage.UsernameInput.addValue(signUpPage.username_gen(7));
        signUpPage.EmailInput.addValue(signUpPage.email_gen(5));
        signUpPage.PasswordInput.addValue(signUpPage.pass_gen(9)); 
        browser.back();
        organisationsPage.clickEnterpriseServerButton()
        registrEnterprisePage.UsernameInput.addValue(signUpPage.username_gen(10));
        registrEnterprisePage.CompanyInput.addValue(signUpPage.username_gen(7)+' LLC');
        registrEnterprisePage.EmailInput.addValue(signUpPage.email_gen(8));
        registrEnterprisePage.Radio2Azure.click();
        registrEnterprisePage.RadioYes.click();
        registrEnterprisePage.TextArea.addValue(signUpPage.username_gen(257))


        
    })    


    it(' should print in the console all positions from the careers . Test-Case10',() => {  
        
        mainPage.openMainPage();
        
        mainPage.clickFooterCareesButton();
        careersPage.clickOpenPositionsButon();
        careersPage.checkPositionText();


        
    })    






})