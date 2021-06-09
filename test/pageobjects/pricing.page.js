
class PricingPage{

    

    get JoinForFreeButton(){
    
        return $('[class="d-block btn-mktg btn-outline-mktg"]')
    }
    
   
    
    
    
    clickJoinForFreeButton(){

       this.JoinForFreeButton.click()
        
       
        }

    checkSignUpRedirectURL(){

        expect(browser).toHaveUrlContaining('https://github.com/join?plan');
             
            
             }
        
       
    }
 
    
    
    module.exports = new PricingPage();
    