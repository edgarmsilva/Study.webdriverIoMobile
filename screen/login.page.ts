import { $ } from '@wdio/globals'


class LoginPage {
    // public get inputvalor () {return $('#username')}
    // public get btnSoma () {return $('#password')}
    // public get btnIgual () {return $('button[type="submit"]')}


    public async somar(valor1: string, valor2: string) {
        await driver.pause(5000)
        // await this.inputvalor.setValue(valor1)
        // await this.btnSoma.click
        // await this.inputvalor.setValue(valor2)
        // await this.btnIgual.click
    }


}

export default new LoginPage();
