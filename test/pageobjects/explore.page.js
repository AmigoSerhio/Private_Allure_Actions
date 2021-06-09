
class ExplorePage{

    

    get TopicsButton(){
    
        return $('[href="/topics"][class*="js-selected"]')
    }
    
   
    
    
    
    clickTopicsButton(){
       this.TopicsButton.click()
        
       
    }

    checkExploreRedirectURL(){
        expect(browser).toHaveUrlContaining('github.com/explore');
             
            
    }
        
       
}
 
    
    module.exports = new ExplorePage();
    