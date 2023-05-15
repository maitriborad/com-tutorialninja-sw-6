package demo.com.tutorialninja.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import demo.com.tutorialninja.pages.LaptopsAndNotebooksPage;
import demo.com.tutorialninja.pages.ProductPage;
import demo.com.tutorialninja.pages.ShoppingCartPage;
import org.testng.Assert;

public class LaptopAndNoteBookSteps {
    @Then("^Verify that products sorted in Descending order$")
    public void verifyThatProductsSortedInDescendingOrder() throws InterruptedException {
        Assert.assertTrue(new LaptopsAndNotebooksPage().isSorted(),"Products are not sorted");
    }

    @When("^I Change Quantity \"([^\"]*)\"$")
    public void iChangeQuantity(String qty) {
        new ShoppingCartPage().changeQuantity(qty);
    }

    @And("^I Click on “Update” Tab$")
    public void iClickOnUpdateTab() {
        new ShoppingCartPage().clickOnQtyUpdateButton();
    }

    @Then("^Verify the message \"([^\"]*)\"$")
    public void verifyTheMessage(String expected) {
        Assert.assertTrue(new ProductPage().getProductAddedSuccessMessage().contains(expected),"Cart is not updated");
    }
}
