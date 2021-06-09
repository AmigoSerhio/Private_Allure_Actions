
class PasswordRecoveryPage{

    

    get EmailInput(){
    
        return $('#email_field')
    }
    
   
    
    get SendPasswordButton(){
    
        return $('[value="Send password reset email"]')
    }

    get CapchaButton(){
    
        return $('#home_children_button')
    }
    
    waitCapchaSolved(){
        browser.pause(5000)
        
        for (let i = 0; i < 1; i--) {
       
        if (this.SendPasswordButton.isClickable()) {

            i=2;
        this.SendPasswordButton.click();
        browser.pause(59000)

        } else {
            console.log('PLEASE SOLVE THIS CAPCHA')
            i=0;
        }
        /*Unable to verify your captcha response.
         Please visit https://docs.github.com/articles/troubleshooting-connectivity-problems/#troubleshooting-the-captcha f
         or troubleshooting information.*/
    }
    }
 
    

   
    
    
    
    }
    
    
    module.exports = new PasswordRecoveryPage();
    