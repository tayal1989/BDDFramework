package stepdefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinition {
	WebDriver driver ;

	@Given("^User is already on Login Page$")
	public void user_is_already_on_Login_Page() {
		System.setProperty("webdriver.chrome.driver",
				System.getProperty("user.dir") + "/resources/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://ui.cogmento.com/");
	}

	@When("^Title of login page is Free CRM$")
	public void title_of_login_page_is_Free_CRM() {
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Cogmento CRM", title);
	}

	@Then("^User enters username and password$")
	public void user_enters_username_and_password() {
		driver.findElement(By.name("email")).sendKeys("tayal1989@gmail.com");
		driver.findElement(By.name("password")).sendKeys("Com@1357");
	}

	@Then("^User clicks on login button$")
	public void user_clicks_on_login_button() {
		driver.findElement(By.xpath("//div[text()='Login']")).click();;
	}

	@Then("^User is on home page$")
	public void user_is_on_home_page() {
		String title = driver.getTitle();
		System.out.println("Home Page title ::"+ title);
		Assert.assertEquals("Cogmento CRM", title);
	}
	
	@Then("^User closes the browser$")
	public void user_closes_browser() {
		driver.quit();
	}
}
