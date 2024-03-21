server_url = 'http://localhost:5001/selection';

from selenium import webdriver
from selenium.webdriver.common.by import By

# Create a WebDriver instance
driver = webdriver.Chrome()

try:
    # Navigate to the webpage
    driver.get(server_url)
    print("Successfully navigated to the webpage.")

    # Find the select element
    select_element = driver.find_element(By.ID, 'selectElement1')
    print("Found the select element.")

    # Find the option element with value "cheddar" within the select element and click it
    option_element = select_element.find_element(By.CSS_SELECTOR, 'option[value="cheddar"]')
    option_element.click()
    print("Clicked the option element with value 'cheddar'.")

except Exception as e:
    print("An error occurred:", e)

finally:
    # Close the WebDriver instance
    driver.quit()
    print("WebDriver instance closed.")
