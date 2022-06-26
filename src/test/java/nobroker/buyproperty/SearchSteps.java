package nobroker.buyproperty;

import com.sun.tools.internal.xjc.reader.gbind.ElementSets;
import io.cucumber.java.After;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.apache.commons.lang3.ObjectUtils;
import org.junit.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

public class SearchSteps {

   private WebDriver driver; // Declaring a WebDriver object

   public SearchSteps(){
       // Setup chrome driver
       WebDriverManager.chromedriver().setup();
       // Initialize WebDriver
       driver = new ChromeDriver();
    }

    // System opens the NoBroker URL which gets from feature file.
    @When("Buyer opens the nobroker application \"{}\"")
    public void openApplication(String url){
        this.driver.get(url);
        driver.manage().window().maximize();
    }

    // A utility function to wait for an element. Created this function as the wait should be used multiple places.
    private WebElement waitForElement(long durationSeconds, By locator) {
        return new WebDriverWait(this.driver, Duration.ofSeconds(durationSeconds)).until(
                ExpectedConditions.presenceOfElementLocated(locator));
    }

    //System waits until it finds the Buy option in the nobroker site and clicks it
    @When("Buyer clicks on Buy option")
    public void clickBuyOption(){
        WebElement webElement = waitForElement(1, By.xpath("//*[text()='Buy']"));
        webElement.click();
    }

    /* Reads the city name as mentioned in the features file and selects the city from the drop down*/
    @When("Buyer selects the City \"{word}\"")
    public void selectCity(String city){

        // Identify the select widget and its clickable div to expand the options
        WebElement searchCity = this.driver.findElement(By.id("searchCity"));
        List<WebElement> childDivs = searchCity.findElements(By.tagName("div"));
        childDivs.get(0).click();

        // Find the div that matches the cityname and select it.
        // Selection is by text as no other selector could be identified
        WebElement webElement = waitForElement(1, By.xpath("//div[text()='" + city + "']"));
        webElement.click();
   }


    // Search for the keyword passed from the features file
   @When("Buyer enters keyword to search the localities \"{word}\"")
   public void EnterKeyword(String keyword){
       WebElement key = waitForElement(5, By.id("listPageSearchLocality"));
       key.click();
       // Clear before sending keys to make sure multiple searches does not lead to wrong search input
       key.clear();
       key.sendKeys(keyword);
   }

    // Verifies that search results are displayed and have at least the number of results as mentioned in the feature
    // file
    @Then("Search Results are displayed with at least {int} results")
    public void localitySearchDisplayed(Integer resultCount) {
        // Wait for results
        WebElement webElement = waitForElement(10, By.id("autocomplete-dropdown-container"));
        // Count and verify result entries
        List<WebElement> childDivs = webElement.findElements(By.tagName("div"));
        Assert.assertTrue(childDivs.size() > resultCount);
    }

    // Selects the locality passed from the step
   @When("Buyer selects locality \"{}\"")
   public void SelectLocality(String locality){
        // Wait for search results
       WebElement resultsContainer = waitForElement(10, By.id("autocomplete-dropdown-container"));
       // Find search result items
       List<WebElement> childDivs = resultsContainer.findElements(By.tagName("div"));

       for (WebElement div: childDivs) {
           // Match locality name and click
           if (div.getText().equalsIgnoreCase(locality)) {
               div.click();
               break;
           }
       }
   }

    // Validates the search box displays the prior selected locality.
    @Then("Locality \"{}\" is selected in the search box")
    public void localitySelectedInSearchBox(String locality) {
        // Wait for at least one span to be displayed in the search box
        WebElement webElement = waitForElement(10, By.cssSelector("span[class='selected-locality-item']"));

        // Find parent of the span
        WebElement parent = webElement.findElement(By.xpath("./.."));
        // Find all child spans with selected-locality-item class in the parent element
        List<WebElement> allSelected = parent.findElements(By.cssSelector("span[class='selected-locality-item']"));

        // Print selected location names for debugging
        Boolean localitySelected = false;
        for (WebElement selected: allSelected) {
            System.out.println("Selected:" + selected.getText());
        }
    }


   // Clicks on the apartment type dropdown and selects the apartment types as passed in the step
    @When("Buyer selects apartment types \"{}\"")
    public void ApartmentTypes(String apartmenttypesString){

        // Identify the drop down button using its text and click it
        WebElement apartmentTypesButton = this.driver.findElement(By.xpath("//*[text()='Apartment Type']"));
        apartmentTypesButton.click();

        // Split the apartment types string by comma to get the selected apartment types
        String[] apartmenttypes = apartmenttypesString.split(",");

        // Find the menu items that match the aprtment type by text and click them
        for (String apartmentType : apartmenttypes) {
            WebElement div = waitForElement(5,By.xpath("//*[text()='" + apartmentType + "']"));
            div.click();
        }
   }

   //Clicks on the Search button after completing the fields
   @When("Buyer clicks on Search button")
   public void ClickSearchButton(){
       WebElement searchButton = this.driver.findElement(By.xpath("//*[text()='Search']"));
       searchButton.click();
   }

   // Verifies that the Property listing page is opened with expected number of results.
   @Then("Property Listing page is opened with at least {int} result")
   public void assertPropertyListingPage(Integer resultCount) {
       WebElement prop = waitForElement(5, By.id("listCardContainer"));
       // Wait for at least one article item (one property listing)
       waitForElement(10, By.tagName("article"));
       // Find all property listings
       List<WebElement> articles = prop.findElements(By.tagName("article"));
       // Assert that atleast resultCount number of results are fetched
       Assert.assertTrue(articles.size() > resultCount);
   }


   // Verify that property page is opened and a description box exists
   @Then("Property page opens with description")
   public void propertyPageOpen() {
        // Get all tabs
       List<String> allTabs = new ArrayList<String>(driver.getWindowHandles());
       // Switch to listing tab
       driver.switchTo().window(allTabs.get(1));
       // Identify description div
       WebElement description = waitForElement(30, By.id("description"));
       System.out.println(description.getText());
       if (description.getText() != null) {
           System.out.println("Passed");
       } else {
           System.out.println("Failed");
       }
   }

    // Click on the property listing mentioned in the step
   @When("Buyer clicks on {int}th property on the page")
   public void clicksProperty(Integer propertyIndex){
        // Assume property listing is not clickable
       Boolean propertyInFocus = false;

       while (!propertyInFocus) {
           // Try to click on the property listing. The clickable element is the last div inside article element.
           // Remaining are banners. If able to click, set propertyInFocus to True to exit loop. Otherwise scroll
           // down a bit to trigger the infinite scroll widget to populate the divs
           try {
               // We alsways reload the articles list to avoid stale elements
               WebElement prop = new WebDriverWait(this.driver, Duration.ofSeconds(5))
                       .until(ExpectedConditions.presenceOfElementLocated(By.id("listCardContainer")));
               List<WebElement> articles = prop.findElements(By.tagName("article"));

               // Select the article by the index provided
               WebElement selectedArticle = articles.get(propertyIndex-1);

               // Find all child divs
               List<WebElement> divs = selectedArticle.findElements(By.xpath("./div"));
               // Click on last div
               divs.get(divs.size() - 1).click();
               propertyInFocus = true;
           } catch (ElementNotInteractableException e) {
               // If not clickable scroll down
               new Actions(driver).scrollByAmount(0, 100).perform();
           } catch (IndexOutOfBoundsException e) {
               // If articles are not populated yet
               new Actions(driver).scrollByAmount(0, 100).perform();
           }
       }
   }

   // Close all tabs after each scenario
   @After
   public void cleanup() {
       for (String w: driver.getWindowHandles()) {
           this.driver.switchTo().window(w);
           this.driver.close();
       }
   }




}
