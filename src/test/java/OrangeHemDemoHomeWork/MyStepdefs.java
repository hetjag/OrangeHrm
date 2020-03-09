package OrangeHemDemoHomeWork;

import OrangeHemDemoHomeWork.HomePage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.By;
import org.testng.Assert;

public class MyStepdefs {

    HomePage homePage = new HomePage();



    @Given("User should be on OrangeHrm login page")
    public void userShouldBeOnOrangeHrmLoginPage() {
    }

    @When("user types username as {string}")
    public void userTypesUsernameAs(String userName) {
        homePage.enterUsername(userName);

    }

    @And("user types password as {string}")
    public void userTypesPasswordAs(String password) {
        homePage.enterPassword(password);
    }

    @And("user click on login button")
    public void userClickOnLoginButton() {
        homePage.clickOnLogin();
    }

    @Then("user should not be logged in")
    public void userShouldNotBeLoggedIn() {
        Assert.assertFalse(Utils.isNotElementDisplay(By.id("welcome")));

    }

   @Then("user sholud see error message as {string}")
    public void userSholudSeeErrorMessageAs(String expectedErroMsg) {
        homePage.loginErrorMsg(expectedErroMsg);
    }
}
