class Enterprise{

    

    get StartFreeTrialButton(){
    
        return $('[href="/organizations/enterprise_plan?ref_cta=Start+a+free+trial&ref_loc=hero&ref_page=%2Fenterprise"]')
    }
    
   
    
    
    
    clickStartFreeButton(){
        
        
        this.StartFreeTrialButton.click()
        
        
        
        
       
        }

        
        
       
    }
    
    
    module.exports = new Enterprise();
    