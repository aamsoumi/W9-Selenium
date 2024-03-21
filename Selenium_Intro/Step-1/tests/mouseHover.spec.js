const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

describe('Mouse Hover Test', function () {
    let driver;

    before(async function () {
        driver = await new Builder().forBrowser('chrome').build();
    });

    after(async function () {
        await driver.quit();
    });

    it('should change color on mouse hover', async function () {
        await driver.get('https://www.selenium.dev/selenium/web/mouseOver.html');

        // Locate the red box element
        const redBox = await driver.findElement(By.id('redbox'));

        // Perform mouse hover action
        await driver.actions()
                .move({ origin: redBox })
                .pause(1000)
                .perform();

        // Get the color of the red box after mouse hover
        const redBoxColor = await redBox.getCssValue('background-color');
        console.log(redBoxColor)

        // Verify if the color changed to red
        if (redBoxColor === 'rgba(255, 0, 0, 1)') {
            console.log('Mouse hover test passed: Red box color changed successfully.');
        } else {
            throw new Error('Mouse hover test failed: Red box color did not change.');
        }
    });
});
