const { Builder, By, Key, until } = require('selenium-webdriver');

const server_url= "http://localhost:5001";// Change this to your server URL


describe('Login Tests', function() {
    let driver;

    before(async function() { // before everything open the browser
        driver = await new Builder().forBrowser('chrome').build();
    });

    after(async function() { // after everything quit the browser
        await driver.quit();
    });

    // Test case 1: Login with valid credentials
    it('should login successfully with valid credentials', async function() {
        await navigate_to_login_page(driver);
        await enter_username(driver, "user");
        await enter_password(driver, "pass");
        await click_login_button(driver);
        await verify_success_message(driver);
    });
    // Test case 2: Login with invalid credentials
    it('should show error message with invalid username', async function() {
        await navigate_to_login_page(driver);
        await enter_username(driver, "invalid");
        await enter_password(driver, "pass");
        await click_login_button(driver);
        await verify_error_message(driver, "Invalid username or password.");
    });
    // Test case 3: Login with invalid credentials
    it('should show error message with invalid password', async function() {
        await navigate_to_login_page(driver);
        await enter_username(driver, "user");
        await enter_password(driver, "invalid");
        await click_login_button(driver);
        await verify_error_message(driver, "Invalid username or password.");
    });
});
// Helper functions to navigate to login page
async function navigate_to_login_page(driver) {
    await driver.get(server_url); // Replace with your login page URL
}
// Helper functions to enter username
async function enter_username(driver, username) {
    const usernameField = await driver.findElement(By.id("username"));
    await usernameField.sendKeys(username);
}
// Helper functions to enter password
async function enter_password(driver, password) {
    const passwordField = await driver.findElement(By.id("password"));
    await passwordField.sendKeys(password);
}
// Helper functions to click login button
async function click_login_button(driver) {
    const loginButton = await driver.findElement(By.id("login-button"));
    await loginButton.click();
}
// Helper functions to verify success message
async function verify_success_message(driver) {
    // Implement logic to verify success message (replace with your actual logic)
    const successMessage = await driver.findElement(By.className("success-message")); // Adjust selector based on your HTML
    // as the success message is only in the logged in page, so it will automatically throw an error
    await driver.wait(until.elementIsVisible(successMessage), 10000); // Wait for message to appear
}
// Helper functions to verify error message
async function verify_error_message(driver, expectedMessage) {
    const errorMessageElement = await driver.findElement(By.id("error-message"));
    const actualMessage = await errorMessageElement.getText();
    if (actualMessage !== expectedMessage) {
        throw new Error(`Expected error message: "${expectedMessage}" but found: "${actualMessage}"`);
    }
}
