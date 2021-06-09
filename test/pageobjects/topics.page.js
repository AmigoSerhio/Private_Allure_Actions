const assert = require('assert');

class TopicsPage{

    

    
    
    get TopicsHeader(){
    
        return $('[class="h1"]')
    }
   
    
    
    checkTopicsHeader(){
        
        assert(this.TopicsHeader.getText() === 'Topics' );
        assert(this.TopicsHeader.isDisplayedInViewport());
        
    }


    checkExploreRedirectURL(){
        expect(browser).toHaveUrlContaining('github.com/topic');
             
            
    }
        
       
}
 
  
    module.exports = new TopicsPage();
    