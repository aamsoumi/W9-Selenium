const { Builder, By, until,Capabilities, Key } = require('selenium-webdriver');

let capabilities = Capabilities.chrome();


const server_url = 'http://localhost:3000';

describe('Web App Tests', function () {
    let driver;

    before(async function () {
        // Create a new instance of the Chrome driver
        driver = await new Builder()
        .usingServer('http://localhost:4444')
        .withCapabilities(capabilities)
        await driver.get(server_url);
    },30000);

    after(async function () {
        await driver.quit();
    });

    it('should fail to login with invalid credentials', async function () {
        
        await driver.findElement(By.id('username')).sendKeys('invalid_user');
        await driver.findElement(By.id('password')).sendKeys('invalid_pass');
        await driver.findElement(By.id('login')).click();
        
        // Adding a short sleep to allow for error message to appear (adjust time if needed)
        
        await driver.sleep(1000);  
        // Check if error message is displayed
        try {
            await driver.wait(until.elementLocated(By.className('error-message')), 10000);
            console.log('Error message for invalid login found');
      
        } catch (err) {
            throw new Error('Expected error message for invalid login not found');
          
        }
    }).timeout(5000);

});
