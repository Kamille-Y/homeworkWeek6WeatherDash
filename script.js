const APIkey = {
  key: "59095e5b68e0754be456e4992763660f",
base:  "https://api.openweathermap.org/data/2.5/"
// weather?q="+ city"&units=imperial&appid=${'APIkey'}`
}

const searchbox = document.querySelector('.search');
searchbox.addEventListener('keypress', setQuery);

function setQuery(event) {
  if (event.keyCode == 13) {
    getWeather(searchbox.value);
    // console.log(searchbox.value);
  }
}

function getWeather (query) {
  fetch(`${APIkey.base}weather?q=${query}&units=imperial&APPID=${APIkey.key}`)
  .then(weather => {
    return weather.json();

  }).then(searchResults);
}

function searchResults (weather){
  console.log(weather);
  let city = document.querySelector('.local .city');
  city.innerHTML = `${weather.name}, ${weather.sys.country}`;

  let current = new Date();
  let date = document.querySelector('.local .date');
  date.innerHTML = dateDisplay(current);

  let temperature = document.querySelector('.temperature');
  temperature.innerHTML = `${Math.round(weather.main.temp)}°F`

  let weatherElement = document.querySelector('.weather');
  weatherElement.innerText = weather.weather[0].main;

  let hilow = document.querySelector('.low-hi');
  hilow.innerText = `${Math.round(weather.main.temp_min)}°F / ${Math.round(weather.main.temp_max)}°F`;
  
  let humid = document.querySelector('.humidity');
  humid.innerText = `${Math.round(weather.main.humidity)}% Humidity`;
  
  let windSpeed = document.querySelector('.wind');
  windSpeed.innerText = `${Math.round(weather.wind.speed)}km/h`;
  
  let iconDes = document.querySelector('.icon');
  iconDes.innerHTML = weather.weather[0].icon;

  let weatherDesc = document.querySelector('.description');
  weatherDesc.innerText = weather.weather[0].description;
  // src ="https://openweathermap.org/img/wn/" + icon + ".png";

}
function dateDisplay (d) {
  var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

 var day = day[d.getDay()];
 var date = d.getDate();
 var month = month[d.getMonth()];
 var year = d.getFullYear(); 

 
  return `${day} ${date} ${month} ${year}`;

}







 
 








