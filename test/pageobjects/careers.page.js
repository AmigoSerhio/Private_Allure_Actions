



class Сareers{

    
    get OpenPositionsButon(){
    
        return $('[href="#positions"]')
    }
clickOpenPositionsButon(){

this.OpenPositionsButon.click();

}
    get Pos1(){
    
        return $('//div[5]/div[1]/div/button/h3')
    }

    get Pos2(){
    
        return $('//div[5]/div[2]/div/button/h3')
    }
    
    get Pos3(){
    
        return $('//div[5]/div[3]/div/button/h3')
    }

    get Pos4(){
    
        return $('//div[5]/div[4]/div/button/h3')
    }

    get Pos5(){
    
        return $('//div[5]/div[5]/div/button/h3')
    }
    get Pos6(){
    
        return $('//div[5]/div[6]/div/button/h3')
    }

    get Pos7(){
    
        return $('//div[5]/div[7]/div/button/h3')
    }
    
    get Pos8(){
    
        return $('//div[5]/div[8]/div/button/h3')
    }

    get Pos9(){
    
        return $('//div[5]/div[9]/div/button/h3')
    }

    get Pos10(){
    
        return $('//div[5]/div[10]/div/button/h3')
    }
    get Pos11(){
    
        return $('//div[5]/div[11]/div/button/h3')
    }

    get Pos12(){
    
        return $('//div[5]/div[12]/div/button/h3')
    }
    
    get Pos13(){
    
        return $('//div[5]/div[13]/div/button/h3')
    }

    get Pos14(){
    
        return $('//div[5]/div[14]/div/button/h3')
    }

    get Pos15(){
    
        return $('//div[5]/div[15]/div/button/h3')
    }
    
    get Pos16(){
    
        return $('//div[5]/div[16]/div/button/h3')
    }
    
    
    checkPositionText(){
        
console.log(this.Pos1.getText()+ ', '+this.Pos2.getText()+ ', '+this.Pos3.getText()+ ', '+this.Pos4.getText()+ ', '+this.Pos5.getText()+ ', '

+this.Pos6.getText()+ ', '+this.Pos7.getText()+ ', '+this.Pos8.getText()+ ', '+this.Pos9.getText()+ ', '+this.Pos10.getText()+ ', '+this.Pos11.getText()+ ', '

+this.Pos12.getText()+ ', '+this.Pos13.getText()+ ', '+this.Pos14.getText()+ ', '+this.Pos15.getText()+ ', '+this.Pos16.getText()+ '.')


    }
        
       
    }
 
    

   
    
    
    
    
    
    
    module.exports = new Сareers();
    