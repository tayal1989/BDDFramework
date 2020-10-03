package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		//features = "Feature/login.feature", // path of the feature file
		//features = "Feature/loginusingtable.feature", // path of the feature file
		//features = "Feature/loginusingmap.feature", // path of the feature file
		//features = "Feature/tagging.feature", // path of the feature file
		features = "Feature/taggedhooks.feature", // path of the feature file
		//glue = {"stepdefinition"}, // path of the step definition file
		//glue = {"tablestepdefinition"},
		//glue = {"taggingstepdefinition"},
		glue = {"taggedhooksstepdefinition"}, // path of the step definition file
		format = {"pretty", "html:test-output", "junit:junit_xml/cucumber.xml"},	// to generate different types of report
		monochrome = true, // display the console output more readable
		dryRun = false	// validating steps are glued to step definition
		//tags = {"~@End2End", "~@SmokeTest", "~@RegressionTest"}	
		)
public class TestRunner {

}

// OR : tags = {"@End2End, @SmokeTest"} -- execute all test tagged as smoke or end to end
// AND : tags = {"@End2End", "@SmokeTest"} -- execute all test tagged as smoke and end to end
// Ignoring : tags = {"~@End2End", "@SmokeTest"} -- ignore all test tagged as end to end
