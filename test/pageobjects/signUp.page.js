const assert = require('assert');


class SignUpPage{

    get ValidUsername(){    
let username = 'TESTER_USERNAME';
        return username
    }
    
    get ValidEmail(){
        let email = 'TESTER_EMAIL';
        return email
    }
    
    get ValidPassword(){
        let password = 'TESTER PASSWORD';
        return password
    }

get UsernameInput(){

    return $('#user_login')
}

get EmailInput(){

    return $('#user_email')
}

get PasswordInput(){

    return $('#user_password')
}

get VerifyText(){

    return $('[class="f4 mb-3"]')
}

checkVerifyText(){
    let text = this.VerifyText.getText();
    assert(text === 'Verify your account')
    
    if (assert) {
    console.log( 'VerifyText is Ok' );
    browser.saveScreenshot('verify_screenshot.png');
    } else {
    console.log( 'FALSE' ); 
    browser.saveScreenshot('verify_screenshot.png');
    }
}



open (path) {
    return browser.url(`https://github.com/join?ref_cta=Sign+up&ref_loc=navigation+launchpad&ref_page=%2F/${path}`)
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


module.exports = new SignUpPage();
