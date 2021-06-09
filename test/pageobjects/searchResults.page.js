
class SearchResultsPage{

    

    get TypeScriptButton(){
    
        return $('[class="filter-item"][href*="TypeScript"]')
    }
    
    clickTypeScriptButton(){
        this.TypeScriptButton.click()
        browser.pause(100)
         
        
         }
    get FirstResult() {
        return $('//*[@id="js-pjax-container"]/div/div[3]/div/ul/li[1]/div[2]/div[1]/a')

    }
   
    
    
    
    clickFirstResult(){
       this.FirstResult.click()
       browser.pause(500)
        
       
        }

    checkSearchresultsURL(){
        expect(browser).toHaveUrlContaining('webdriver');
             
            
    }
        
       
}
 

    module.exports = new SearchResultsPage();
    