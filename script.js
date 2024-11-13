const apiKey = 'your-api-key'; // your api Key from OpenWeatherMap 
const openWeatherMapUrl = 'https://api.openweathermap.org/data/2.5/weather';
const mockApiUrl = 'your-endpoint-mockapi'; // example "https://(your-mockapikey).mockapi.io/:endpoint" can generate here https://mockapi.io

const city = 'London';

async function fetchWeatherData() {
    try {
        const response = await fetch(`${openWeatherMapUrl}?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error(`Error fetching weather data: ${response.status}`);
        }
        const data = await response.json();

        // transform data
        const transformedData = {
            date: new Date().toISOString().slice(0, 10),
            city: city,
            temperatureC: data.main.temp.toFixed(2),
            weatherDescription: data.weather[0].description,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed
        };

        // send transformed data to Mock API
        const mockApiResponse = await fetch(mockApiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(transformedData)
        });

        if(!mockApiResponse.ok) {
            throw new Error(`Error sending data to mock API: ${mockApiResponse.status}`);
        }

        const mockApiData = await mockApiResponse.json();

        // updating ui elements
        document.getElementById('city').textContent = transformedData.city;
        document.getElementById('date').textContent = transformedData.date;
        document.getElementById('temperature').textContent = `${transformedData.temperatureC}°C`;
        document.getElementById('description').textContent = transformedData.weatherDescription;
        document.getElementById('humidity').textContent = `Humidity: ${transformedData.humidity}%`;
        document.getElementById('wind-speed').textContent = `Wind Speed: ${transformedData.windSpeed} m/s`;
        document.getElementById('mock-api-response').textContent = `Mock API Response: ${mockApiData.id}`;

        console.log('Data sent to Mock API:', mockApiData);

    } catch (error) {
        console.error('Error:', error);
        document.getElementById('mock-api-response').textContent = `Error: ${error.message}`;
    }
    
}

fetchWeatherData();