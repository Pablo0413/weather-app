# Weather App

## Overview

This Weather App is a simple web application that fetches weather data for a specified city (in this case, London) from the OpenWeatherMap API, transforms the data, and sends it to a mock API. The transformed data is then displayed on a web page.

[Weather App link](https://pablo0413.github.io/weather-app/).

## Project Structure

The project consists of three main files:

- **`index.html`**: Structures the web page and includes references to the CSS and JavaScript files.
- **`script.js`**: Handles fetching weather data, transforming it, sending it to a mock API, and updating the UI.
- **`styles.css`**: Styles the web page.

### File Details

- **`index.html`**
  - Contains the basic structure of the web page, including:
    - A `div` with the class `container` that centers the content.
    - A `div` with the class `weather-card` that displays the weather information.
    - Elements with IDs (`city`, `date`, `temperature`, `description`, `humidity`, `wind-speed`, `mock-api-response`) that are updated dynamically by JavaScript.

- **`script.js`**
  - Contains the logic for fetching and displaying weather data, including:
    - Constants for the API key, OpenWeatherMap URL, and mock API URL.
    - An asynchronous `fetchWeatherData()` function that:
      - Fetches weather data from the OpenWeatherMap API.
      - Transforms the data into a specific format.
      - Sends the transformed data to the mock API.
      - Updates the UI with the fetched and transformed data.
      - Handles errors and displays them on the UI.

- **`styles.css`**
  - Contains the styles for the web page, including:
    - Basic styling for the `body`, `container`, and `weather-card`.
    - Centering the content and adding padding and shadows to the weather card.

## Setup Instructions

### Prerequisites

- A modern web browser (e.g., Chrome, Firefox, Safari).
- An API key from OpenWeatherMap. You can get one by signing up at [OpenWeatherMap](https://openweathermap.org/).
- A mock API endpoint. Services like [MockAPI](https://mockapi.io/) can be used to create a mock API.

### Steps to Set Up the Project

1. **Clone the Repository**:
   ```bash
   git clone <https://github.com/Pablo0413/weather-app.git>
   cd <repository-directory>
   ```
2. **Open `index.html`**:

   Simply open the `index.html` file in your web browser to view the Weather App.

3. **Configure API Keys**:

   - Open the `script.js` file.

   - Replace the `apiKey` variable with your OpenWeatherMap API key.

   - Replace the `mockApiUrl` variable with your mock API endpoint.

4. **Run the Application**:

   - Refresh the `index.html` page in your browser.

   - The weather data for London should be fetched, transformed, sent to the mock API, and displayed on the web page.

### Dependencies

- **OpenWeatherMap API**: Used to fetch weather data.

- **MockAPI**: Used to simulate a backend service for storing weather data.

## Code Explanation

### `index.html`

- **Container**: The `container` class centers the content on the page.

- **Weather Card**: The `weather-card` class styles the card that displays the weather information.

- **Dynamic Elements**: Elements with IDs like `city`, `date`, etc., are updated by the JavaScript code.

### `script.js`

- **API Constants**: `apiKey`, `openWeatherMapUrl`, and `mockApiUrl` store the necessary URLs and keys.

- **fetchWeatherData()**: This asynchronous function fetches data from the OpenWeatherMap API, transforms it, sends it to the mock API, and updates the UI.

  - **Error Handling**: The function includes error handling for both the OpenWeatherMap API and the mock API.

  - **UI Updates**: The function updates the UI elements with the fetched and transformed data.

### `styles.css`

- **Body**: Sets the font family and background color.

- **Container**: Centers the content vertically and horizontally.

- **Weather Card**: Styles the card with padding, border-radius, and box-shadow.

## Conclusion

This Weather App is a simple example of how to fetch data from an API, transform it, and display it on a web page. By following the setup instructions, you can easily configure and run the project. The code is structured to be modular and easy to understand, making it a good starting point for more complex projects.
