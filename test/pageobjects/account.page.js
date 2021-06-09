const assert = require('assert');
const signInPage = require('./signIn.page');
const signUpPage = require('./signUp.page');

class AccountPage{

    

    get DropdownCaret2(){
    
        return $('//header//summary//span[2]')
    }
    
   
    
    get AccountName(){
    
        return $('[class="css-truncate-target"]')
    }
    
    checkAccountName(){
        this.DropdownCaret2.click();
        let text = this.AccountName.getText();
        assert(text === signUpPage.ValidUsername)
        if (assert) {
        console.log( 'AccountName is Ok! it is: ' + signUpPage.ValidUsername  );
        } else {
        console.log( 'FALSE IT IS: ' + this.AccountName.getText()); 
        browser.saveScreenshot('falseAccountName.png');
        }
    }

    

    get SingOutButton(){
    
        return $('[data-ga-click="Header, sign out, icon:logout"][class="dropdown-item dropdown-signout"]')
    }

    clickSingOutButton(){
        return this.SingOutButton.click();
    }

    get StartProjectButton(){
    
        return $('[class="btn"]')
    }


    checkStartProjectButton(){
        let visible = this.StartProjectButton.isDisplayed();
        assert(visible);
        let text = this.StartProjectButton.getText();
        assert(text === 'Start a project');


    }

    
    
    
    
    }
    
    
    module.exports = new AccountPage();
    