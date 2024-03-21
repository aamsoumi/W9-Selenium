from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.by import By

# Create a WebDriver instance
driver = webdriver.Chrome()

try:
    # Navigate to the webpage
    driver.get('https://www.selenium.dev/selenium/web/mouseOver.html')
    print("Successfully navigated to the webpage.")

    # Locate the red box element
    red_box = driver.find_element(By.ID, 'redbox')
    print("Found the red box element.")

    # Perform mouse hover action
    action = ActionChains(driver)
    action.move_to_element(red_box).pause(1).perform()
    print("Performed mouse hover action.")

    # Get the color of the red box after mouse hover
    red_box_color = red_box.value_of_css_property('background-color')
    print("Red box color after mouse hover:", red_box_color)

    # Verify if the color changed to red
    if red_box_color == 'rgba(255, 0, 0, 1)':
        print('Mouse hover test passed: Red box color changed successfully.')
    else:
        raise Exception('Mouse hover test failed: Red box color did not change.')

except Exception as e:
    print("An error occurred:", e)

finally:
    # Close the WebDriver instance
    driver.quit()
    print("WebDriver instance closed.")
