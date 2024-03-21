const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

const server_url = 'http://localhost:5001/selection';

describe('Selenium Test Suite', function () {
    let driver;

    before(async function () {
        driver = await new Builder().forBrowser('chrome').build(); // Change 'chrome' to your preferred browser
    });

    after(async function () {
        await driver.quit();
    });

    it('should select Cheddar in Select Cheese 1', async function () {
        await driver.get(server_url); // Replace with the path to your HTML file

        const selectElement = await driver.findElement(By.id('selectElement1'));
        await selectElement.findElement(By.css('option[value="cheddar"]')).click();

        const selectedOption = await selectElement.findElement(By.css('option:checked')).getText();
        assert.strictEqual(selectedOption, 'Cheddar');
    });

    it('should select Blue Cheese in Select Cheese 2', async function () {
        const selectElement = await driver.findElement(By.id('selectElement2'));
        await selectElement.findElement(By.css('option[value="blue"]')).click();

        const selectedOption = await selectElement.findElement(By.css('option:checked')).getText();
        assert.strictEqual(selectedOption, 'Blue Cheese');
    });

    it('should select Swiss Cheese in Select Cheese 3', async function () {
        const selectElement = await driver.findElement(By.id('selectElement3'));
        await selectElement.findElement(By.css('option[value="swiss"]')).click();

        const selectedOption = await selectElement.findElement(By.css('option:checked')).getText();
        assert.strictEqual(selectedOption, 'Swiss Cheese');
    });
});


// Python Alternative
/*

from selenium import webdriver
from selenium.webdriver.common.by import By

# Create a WebDriver instance
driver = webdriver.Chrome()

# Navigate to the webpage
driver.get('http://localhost:5001/selection')

# Find the select element
select_element = driver.find_element(By.ID, 'selectElement1')

# Find the option element with value "cheddar" within the select element and click it
option_element = select_element.find_element(By.CSS_SELECTOR, 'option[value="cheddar"]')
option_element.click()

# Close the WebDriver instance
driver.quit()


*/

