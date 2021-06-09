
class OrganisationsPage{

    

    get EnterpriseCloudButton(){
    
        return $('//*[contains(text(),"Enterprise Cloud")]') 
    }
    
   
    
    
    
    clickEnterpriseCloudButton(){
        console.log( '!!!'+this.EnterpriseCloudButton.isClickable())
       this.EnterpriseCloudButton.click()
        
       
        }

    get EnterpriseServerButton(){
    
        return $('[class="currency-container col-12 signup-plan-column js-details-container"]') 
        }    

    clickEnterpriseServerButton(){
        console.log( '!!!'+this.EnterpriseServerButton.isClickable())
        this.EnterpriseServerButton.click()
             
            
             }
    checkExploreRedirectURL(){
         expect(browser).toHaveUrlContaining('github.com/explore');
             
            
             }

             
        
       
    }
 
    

   
    
    
    
    
    
    
    module.exports = new OrganisationsPage();
    