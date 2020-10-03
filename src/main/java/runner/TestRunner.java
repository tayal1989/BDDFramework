package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		//features = "Feature/login.feature", // path of the feature file
		features = "Feature/loginusingtable.feature", // path of the feature file
		//glue = {"stepdefinition"}, // path of the step definition file
		glue = {"tablestepdefinition"},
		format = {"pretty", "html:test-output", "junit:junit_xml/cucumber.xml"},	// to generate different types of report
		monochrome = true, // display the console output more readable
		dryRun = false	// validating steps are glued to step definition
		)
public class TestRunner {

}
