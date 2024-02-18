// 'js/mian.js'

let slider_img = document.querySelector('.slider-img');
let images = ['Grand Canyon National Park ,Arizona.1.webp', 'Grand Canyon National Park ,Arizona.2.webp', 'Grand Canyon National Park ,Arizona.3.webp', 'Grand Canyon National Park ,Arizona.4.jpg', 'Grand Canyon National Park ,Arizona.5.jpg', 'Grand Canyon National Park ,Arizona.6.jpg', 'Grand Canyon National Park ,Arizona.7.jpg', 'Grand Canyon National Park ,Arizona.8.jpg'];
let i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "./gallery_Grand/"+images[i]);
	
}

const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Grand%20Canyon&state=Arizona&country=US';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '86715c3ce3msh290fe3d7d871fd4p122649jsn2309c0ae43db',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

// Fetch weather information and update HTML
fetch(url, options)
    .then(res => res.json())
    .then(data => {
		console.log(data)
        const weatherInfoContainer = document.getElementById('weatherInfo');
        
        const humidity = data.humidity;
		const max_temp = data.max_temp;
		const min_temp = data.min_temp;

        const weatherInfoHTML = `
            <p>Maximum Temperature: ${max_temp}&deg;C</p>
            <p>Minium Temperature: ${min_temp}&deg;C</p>
            <p>Humidity: ${humidity}%</p>
        `;
        
        weatherInfoContainer.innerHTML = weatherInfoHTML;
    })
    .catch(error => console.error('Error fetching weather data:', error));