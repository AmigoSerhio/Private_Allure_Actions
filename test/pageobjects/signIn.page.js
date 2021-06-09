const assert = require('assert');
const signUpPage = require('./signUp.page');

class SignInPage{

    

    get UsernameInput(){
    
        return $('#login_field')
    }
    
    
    
    get PasswordInput(){
    
        return $('#password')
    }
    
    get ErrorMessage(){
    
        return $('#js-flash-container')
    }

    checkErrorMessage(){
            let text = this.ErrorMessage.getText();
            assert(text === 'Incorrect username or password.')
            if (assert) {
            console.log( 'ErrorMessage is Ok' );
            } else {
            console.log( 'FALSE' ); 
            }
    }

    get SingInButton(){
    
        return $('[type="submit"]')
    }

    clickSingInButton(){
        return this.SingInButton.click();
    }

    get ForgotPasswordButton(){
    
        return $('[href="/password_reset"]')
    }

    clickForgotPasswordButton(){
        return this.ForgotPasswordButton.click();
    }
    
    useValidData(){
        this.UsernameInput.setValue(signUpPage.ValidUsername)
        this.PasswordInput.setValue(signUpPage.ValidPassword)
        
    }
    
    
    openSignInPage () {
        return browser.url(`https://github.com/login/`)
        
    }
    
    pass_gen(len) {
        let chrs = 'abdehkmnpswxzABDEFGHKMNPQRSTWXZ123456789!@#$%^&*()';
        let str = '';
        for (let i = 0; i < len; i++) {
            let pos = Math.floor(Math.random() * chrs.length);
            str += chrs.substring(pos,pos+1);
        }
        return str;
    }
    
    username_gen(len) {
        let chrs = 'abdehkmnpswxzABDEFGHKMNPQRSTWXZ123456789';
        let str = '';
        for (let i = 0; i < len; i++) {
            let pos = Math.floor(Math.random() * chrs.length);
            str += chrs.substring(pos,pos+1);
        }
        return str;
    }
    
    email_gen(len) {
        let chrs = 'abdehkmnpswxz123456789';
        let str = '';
        let str2 = '';
        let domains = ["@mail.ru", "@list.ru", "@rambler.ru", "@yandex.ru", "@gmail.com"];
    
    
        for (let i = 0; i < len; i++) {
            let pos = Math.floor(Math.random() * chrs.length);
            str += chrs.substring(pos,pos+1);
        }
           
                let pos2 = Math.floor(Math.random() * domains.length);
                str2 += domains[pos2];
    
            
            
        return str+str2
    }
    
    
    }
    
    
    module.exports = new SignInPage();
    