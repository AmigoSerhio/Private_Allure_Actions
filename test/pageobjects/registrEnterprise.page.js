




class RegistrEnterprisePage{

  

get UsernameInput(){

    return $('#contact_request_name')
}

get CompanyInput(){

    return $('#contact_request_organization_name')
}

get EmailInput(){

    return $('#contact_request_email')
}

get Radio2Azure(){

    return $('#contact_request_instance_type_azure')
}

get RadioYes(){

    return $('#questions_yes')
}
get TextArea(){

    return $('#questions-list')
}









}


module.exports = new RegistrEnterprisePage();
