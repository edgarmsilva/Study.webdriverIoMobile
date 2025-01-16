import loginPage from "../screen/login.page"



describe('Teste', function (){
    
    it('Acessar tela Login', async function () {
        await loginPage.acessarTelaLogin()
        await loginPage.login('teste@teste.com', 'Teste123');
        const titulo = await $('//android.widget.TextView[@resource-id="android:id/alertTitle"]')
        const mensagem = await $('//android.widget.TextView[@resource-id="android:id/message"]')
        await expect(titulo).toHaveText('Success')
        await expect(mensagem).toHaveText('You are logged in!')
        
    })
}) 