package OrangeHemDemoHomeWork;


import org.openqa.selenium.By;
import org.testng.Assert;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Utils extends BasePage
{
    public static void clickOnElement(By by)
    {
        driver.findElement(by).click();
    }
    public static void enterText(By by,String text)
    {
        driver.findElement(by).sendKeys(text);

    }
    public static void assertUrl(String Url)
    {
        Assert.assertTrue(driver.getCurrentUrl().equals(Url));

    }
    public static String timeStamp()
    {
        DateFormat dateFormat = new SimpleDateFormat("ddmmyyhhmmss");
        Date date=new Date();
        return dateFormat.format(date);
    }
    public static String getTextElement(By by){
        return driver.findElement(by).getText();
    }


    public void assertTextMessage(By by,String expected){
        Assert.assertEquals(getTextElement(by),expected);
    }



    public static boolean isNotElementDisplay(By by){
        try{
            driver.findElement(by);
            return  true;
        }catch (Exception e){
            return false;
            
        }
    }









}
