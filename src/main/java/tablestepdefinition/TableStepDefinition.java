package tablestepdefinition;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TableStepDefinition {
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
	public void user_enters_username_and_password(DataTable credentials) {
//		List<List<String>> data = credentials.raw();	// for table data
//		for(int i = 0 ; i < data.size() ; i++) {	// for table data
//			driver.findElement(By.name("email")).sendKeys(data.get(i).get(0));
//			driver.findElement(By.name("password")).sendKeys(data.get(i).get(1));
//		}
		
		for(Map<String, String> map : credentials.asMaps(String.class, String.class)) {	// for table maps
			driver.findElement(By.name("email")).sendKeys(map.get("username"));
			driver.findElement(By.name("password")).sendKeys(map.get("password"));
		}
	}

	@Then("^User clicks on login button$")
	public void user_clicks_on_login_button() {
		driver.findElement(By.xpath("//div[text()='Login']")).click();;
	}

	@Then("^User is on home page with message$")
	public void user_is_on_home_page_with_message(DataTable message) {
		/*
		 * For handling table single data
		 */
//		for(int i = 0 ; i < message.raw().size() ; i++) {
//			String title = driver.getTitle();
//			System.out.println("Home Page title ::"+ title);
//			Assert.assertEquals(message.raw().get(i).get(0), title);
//		}
		
		/*
		 * For handling table multiple data
		 */
		for(Map<String, String> map : message.asMaps(String.class, String.class)) {
			String title = driver.getTitle();
			System.out.println("Home Page title ::"+ title);
			Assert.assertEquals(map.get("message"), title);
		}
	}
	
	@Then("^User closes the browser$")
	public void user_closes_browser() {
		driver.quit();
	}
}

