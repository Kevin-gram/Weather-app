
let form=document.querySelector('form');
let display=document.querySelector('.dispaly')
let search=document.querySelector('#search');
console.log(form)
form.addEventListener("submit",function(e){
e.preventDefault();
if(search.value==""){
    alert("Please enter a valid city name");
}
fetchWeather(search.value);

});
async function fetchWeather(city){
    const url=`http://api.weatherapi.com/v1/current.json?key=7d84ad3b66a545e9b3d94455240401&q=${city}`;
    try{
        let response=await fetch(url,{mode:"cors"});
        let data=await response.json();
        console.log(data);
        displayWeather(data)
    }
    catch(err){
        console.log(err);
    }
}
function displayWeather(data){
    display.classList.add("active")
    let location=document.querySelector('h1');
    console.log(location)
    let temperature  =document.querySelector('h3');
    let Wind=document.querySelector('#wind');
    let humidity=document.querySelector('#Humidity');
    location.textContent=` ${data.location.name}`;
    temperature.textContent=` Degrees: ${data.current.feelslike_c} °C`;
    Wind.textContent=`Wind: ${data.current.gust_kph}`;
    humidity.textContent= `Humidity: ${data.current.humidity}`;
   

}


