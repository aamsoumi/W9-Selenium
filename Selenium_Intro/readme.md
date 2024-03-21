# Selenium Intro Project

This project is a demonstration of Selenium WebDriver usage for web application testing.

## Getting Started

To get started, follow the steps below:

### Prerequisites

- Node.js installed on your machine

### Installation

1. Clone the repository to your local machine:

   ```
   git clone <repository_url>
   ```

2. Navigate to the project directory:

   ```
   cd selenium_intro
   ```

3. Install dependencies:

   ```
   npm install
   ```

### Starting the Server

Before running the tests, you need to start the server in a separate terminal. To do this, use the following npm script:

```
npm run server
```

This command will start the server using nodemon, which will automatically restart the server when changes are detected in the project.

### Running Tests

The project includes several test suites, each corresponding to different steps of the demonstration. To run the tests, use the following npm scripts:

- **Step 1: Select and Navigate Test**
In this test the select/option item is selected and then navigated to the next page.
  ```
  npm run test-step1
  ```

- **Step 2: Login Test**
  In this test the user is logged in and then navigated to the next page.
  ```
  npm run test-step2
  ```

- **Step 3: Other Tests**
In this test multiple select/option items are selected and an alert is displayed.
  ```
  npm run test-step3
  ```

You can also run all tests at once using the general test script:

```
npm test
```

This command will execute all test suites found in the project.


## Testing with Python

To run the tests in Python, you can use the following command:
first activate the virtual environment:

in windows: `venv\Scripts\activate`

in linux/mac: `source venv/bin/activate`

Then install dependencies:'
`pip install -r requirements.txt`

and finally you can run the tests in the python-alternative folder:

- for Selection test:

```python
python selection.py
```

- mouse hover test:

```python
python mouse_hover.py
```