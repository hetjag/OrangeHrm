package OrangeHemDemoHomeWork;

import org.openqa.selenium.By;

public class HomePage extends Utils {
    private By _usernameField = By.id("txtUsername");
    private By _passwordField = By.id("txtPassword");
    private By _loginButtonField = By.id("btnLogin");
    private By _errorMsgField = By.id("spanMessage");


    public void enterUsername(String username){

        enterText(_usernameField,username);
    }

    public void enterPassword(String password)
    { enterText(_passwordField,password);
    }

    public void clickOnLogin()
    {
        clickOnElement(_loginButtonField);
    }
    public void loginErrorMsg(String expectedErroMsg)
    {
        System.out.println("**************************  "+getTextElement(_errorMsgField));
        assertTextMessage(_errorMsgField,expectedErroMsg);
    }
}
