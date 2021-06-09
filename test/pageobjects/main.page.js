const assert = require('assert');
class MainPage{

    openMainPage () {
        browser.url(`https://github.com/`);
        browser.maximizeWindow();
        browser.pause(1000);

          
    }
    

    get SignInButtonHeader(){
    
        return $('[class="HeaderMenu-link flex-shrink-0 no-underline mr-3"]')
    }
    
    clickSigninButtonHeader(){

        this.SignInButtonHeader.click()
    }
    
    get SearchGitHub(){
    
        return $('[class="form-control input-sm header-search-input jump-to-field js-jump-to-field js-site-search-focus "]')
    }
    get SearchGitHubButton(){
    
        return $('#jump-to-results')
    }
    
    
    searchGitHubclick(){

        this.SearchGitHubButton.click()
        browser.pause(300)
    }
    
    get SignUpButtonHeader(){
    
        return $('[class="HeaderMenu-link flex-shrink-0 d-inline-block no-underline border color-border-tertiary rounded px-2 py-1"]')
    }
    
    clickSignUpButtonHeader(){

        this.SignUpButtonHeader.click()
    }
    
    get SignUpPrimaryButton(){
    
        return $('[class="btn-mktg btn-primary-mktg width-full width-sm-auto"]')
    }
    
    clickSignUpPrimaryButton(){

        this.SignUpPrimaryButton.click()
    }
   
    get SignUpPrimaryButton2(){
    
        return $('[class="btn-mktg btn-primary-mktg width-full width-sm-auto"]')
    }
    
    clickSignUpPrimaryButton2(){

        this.SignUpPrimaryButton2.scrollIntoView();
        this.SignUpPrimaryButton2.click()
    }

    get WhyGitHubButton(){
    
        return $('//*[contains(text(),"Why GitHub?")]')
    }

    get WhyGitHubDropdownMenu(){
    
        return $('[class="dropdown-menu flex-auto rounded px-0 mt-0 pb-4 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4"]')
    }
    clickWhyGitHubButton(){

        this.WhyGitHubButton.click()
    }

    checkWhyGitHubDropdownMenu(){
        
        this.openMainPage();
        
        this.WhyGitHubButton.moveTo();
        
        if( this.WhyGitHubButton.isDisplayed()){
            assert(this.WhyGitHubDropdownMenu.isDisplayed());
            console.log('WhyGitHubDropdownMenu Displayed when mouse on it')
        }
        else {
            this.clickWhyGitHubButton();
             
            assert(this.WhyGitHubDropdownMenu.isDisplayed());
            console.log('WhyGitHubDropdownMenu Displayed only after click')
            browser.saveScreenshot('whyGitHubDropdownMenuisDisplayed.png');
        }   
        browser.reloadSession();

    }
    

    get EnterpriseButton(){
    
        return $('[class="HeaderMenu-link no-underline py-3 d-block d-lg-inline-block"][href="/enterprise"]')
    }

   
    clickEnterpriseButton(){
        
        console.log('!!!'+this.EnterpriseButton.isClickable())
        this.EnterpriseButton.click()
    }
    

    get ExploreButton(){
    
        return $('//*[contains(text(),"Explore")and @class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap d-block d-lg-inline-block"]//*') ///html/body/div[1]/header/div/div[2]/nav/ul/li[4]/details/summary  or '//details/summary[contains(text(),"Explore")]' or '//header//summary[contains(text(),"Explore")]'  or '//*[contains(text(),"Explore")and @class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap d-block d-lg-inline-block"]//*'
    }

    clickExploreButton(){

        this.ExploreButton.click()
    }



    get ExploreGitHubButton(){
    
        return $('[href="/explore"]')
    }

    clickExploreGitHubButton(){
      this.ExploreButton.moveTo();
      browser.pause(100)
      this.ExploreGitHubButton.click();
      browser.pause(1000)
      
    }

    get ExploreDropdownMenu(){
    
        return $('[class="dropdown-menu flex-auto rounded px-0 pt-2 pb-0 mt-0 pb-4 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4"]')
    }
    
    checkExploreDropdownMenu(){
        this.openMainPage();
        this.ExploreButton.moveTo();
        
        if( this.ExploreDropdownMenu.isDisplayed()){
            console.log('ExploreDropdownMenu Displayed when mouse on it')
            assert(this.ExploreDropdownMenu.isDisplayed());
            
        }
        else {
            this.clickExploreButton();
            console.log('ExploreDropdownMenu Displayed only after click')
            assert(this.ExploreDropdownMenu.isDisplayed());
            browser.saveScreenshot('exploreDropdownMenuisDisplayed.png');
        }
        browser.reloadSession();   
    }
    
    

    get PricingButton(){
     
        return $('//*[contains(text(),"Pricing")and @class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap d-block d-lg-inline-block"]')   ///html/body/div[1]/header/div/div[2]/nav/ul/li[6]/details/summary   or //*[contains(text(),"Pricing")and @class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap d-block d-lg-inline-block"]
    }

    clickPricingButton(){
        
        this.PricingButton.click()
      
    }


    get PricingDropdownMenu(){
    
        return $('[class="dropdown-menu flex-auto rounded px-0 pt-2 pb-4 mt-0 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4"]')
    }

    checkPricingDropdownMenu(){
        this.openMainPage();
        this.PricingButton.moveTo();
        if( this.PricingDropdownMenu.isDisplayed()){
            console.log('Displayed when mouse on it')
            assert(this.PricingDropdownMenu.isDisplayed());
            
        }
        else {
            this.clickPricingButton();
            console.log(console.log('PricingDropdownMenu Displayed only after click'))
            assert(this.PricingDropdownMenu.isDisplayed());
            browser.saveScreenshot('PricingDropdownMenuisDisplayed.png');
        }
        browser.reloadSession()
    }


    get PlansButton(){
    
        return $('[href="/pricing"][class="pb-2 lh-condensed-ultra d-block Link--primary no-underline h5 Bump-link--hover"]');
    }
 

    clickPlansButton(){
        this.PricingButton.moveTo();
        if( this.PricingDropdownMenu.isDisplayed()){
            this.PlansButton.click();
            
        }
        else {
            this.clickPricingButton();
            this.PlansButton.click();
        }
    }


    get FooterCareesButton(){
    
        return $('[data-ga-click="Footer, go to careers, text:careers"]');
    }

    clickFooterCareesButton(){
        
        this.FooterCareesButton.click()
      
    }
}
    
    module.exports = new MainPage();
    