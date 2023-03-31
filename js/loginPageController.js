function logIn(){
    if(model.inputs.loginPage.userId=='terje'
    && model.inputs.loginPage.password == 'hemmelig'){
        goToLogPage();
    } else {
        model.inputs.loginPage.errorMessage = 'feil brukernavn eller passord';
    }
    updateView();
}