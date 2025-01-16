import { $ } from '@wdio/globals'


class LoginPage {
    public get btnMenuTelaLogin () {return $('//android.widget.TextView[@text="Login"]')}
    public get inputEmail () {return $('//android.widget.EditText[@content-desc="input-email"]')}
    public get inputSenha () {return $('//android.widget.EditText[@content-desc="input-password"]')}
    public get btnLogin () {return $('//android.view.ViewGroup[@content-desc="button-LOGIN"]/android.view.ViewGroup')}

    public async acessarTelaLogin(){
        await this.btnMenuTelaLogin.click()
        await driver.pause(1000)
    }

    public async login(usuario: string, senha: string){
        await this.inputEmail.setValue(usuario)
        await this.inputSenha.setValue(senha)
        await this.btnLogin.click()
    }



}

export default new LoginPage();
