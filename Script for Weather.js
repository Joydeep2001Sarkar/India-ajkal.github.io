fetch("https://api.openweathermap.org/data/2.5/weather?q=Kolkata,india&APPID=9f2ff1ebb8ba926081afb90aa5abca39").then(function (response) {
    return response.json();
}).then(function (data) {
    console.log(data);
})

// Kolkata Part : 
Kolkata = document.getElementById("kolkata");


fetch("https://api.openweathermap.org/data/2.5/weather?q=Kolkata,india&APPID=9f2ff1ebb8ba926081afb90aa5abca39").then(function (response) {
    return response.json();
}).then(function (data) {
    console.log(data);
    main_temp_kol = data.main; // Here all the main data are present it is an object 
    Weather_description_kol = data.weather; // It is an array-object of 1 element
    coordinates_kol = data.coord;
    console.log(coordinates_kol);
    let kolkata_weather =
        `<div class="card myCard" style="width: 90%;">
            <img src="/india-ajkal.github.io/Kolkata.jpg" class="card-img-top img-fluid" alt="Image" style="border-radius: 20px;">
            <div class ="card-body">
            <h5 class ="card-title">Present Weather at Kolkata ...</h5>
            <table class ="table" style="border: 1px solid #898484;box-shadow: 3px 2px 5px #a59696 ;" >
            <thead>
            <tr>
            <th scope="col">Temparature</th>
            <th scope="col">${(main_temp_kol.temp - 273).toFixed(2)} ℃</th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <td><b>Feels Like</b></td>
            <td><b>${(main_temp_kol.feels_like - 273).toFixed(2)} ℃</b></td>
            </tr>
            <tr>
            <td><b>Humidity</b></td>
            <td><b>${main_temp_kol.humidity} %</b></td>
            </tr>
            <tr>
            <td><b>Overall Weather</b></td>
            <td><b>${Weather_description_kol[0].main}</b></td>
            </tr>
            </tbody>
            </table>
            </div>
        </div>`
 
  Kolkata.innerHTML = kolkata_weather;

})


// Delhi part 

Delhi = document.getElementById("Delhi");

fetch("https://api.openweathermap.org/data/2.5/weather?q=Delhi,india&APPID=9f2ff1ebb8ba926081afb90aa5abca39").then(function (response) {
    return response.json();
}).then(function (data) {
    console.log(data);
    main_temp_Delhi = data.main; // Here all the main data are present it is an object 
    Weather_description_Delhi = data.weather; // It is an array-object of 1 element
    coordinates_Delhi = data.coord;
    let Delhi_weather =
        `<div class="card myCard" style="width: 90%;">
            <img src="/india-ajkal.github.io/Delhi.jpg" class="card-img-top img-fluid" alt="Image" style="border-radius: 20px;">
            <div class ="card-body">
            <h5 class ="card-title">Present Weather at Delhi...</h5>
            <table class ="table" style="border: 1px solid #898484;box-shadow: 3px 2px 5px #a59696 ;" >
            <thead>
            <tr>
            <th scope="col">Temparature</th>
            <th scope="col">${(main_temp_Delhi.temp - 273).toFixed(2)} ℃</th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <td><b>Feels Like</b></td>
            <td><b>${(main_temp_Delhi.feels_like - 273).toFixed(2)} ℃</b></td>
            </tr>
            <tr>
            <td><b>Humidity</b></td>
            <td><b>${main_temp_Delhi.humidity} %</b></td>
            </tr>
            <tr>
            <td><b>Overall Weather</b></td>
            <td><b>${Weather_description_Delhi[0].main}</b></td>
            </tr>
            </tbody>
            </table>
            </div>
        </div>`
 
  Delhi.innerHTML = Delhi_weather;

})

// Mumbai part 

Mumbai = document.getElementById("Mumbai");

fetch("https://api.openweathermap.org/data/2.5/weather?q=Mumbai,india&APPID=9f2ff1ebb8ba926081afb90aa5abca39").then(function (response) {
    return response.json();
}).then(function (data) {
    console.log(data);
    main_temp_Mumbai = data.main; // Here all the main data are present it is an object 
    Weather_description_Mumbai = data.weather; // It is an array-object of 1 element
    coordinates_Mumbai = data.coord;
    let Mumbai_weather =
        `<div class="card myCard" style="width: 90%;">
            <img src="/india-ajkal.github.io/mumbai.jpg" class="card-img-top img-fluid" alt="Image" style="border-radius: 20px;">
            <div class ="card-body">
            <h5 class ="card-title">Present Weather at Mumbai...</h5>
            <table class ="table" style="border: 1px solid #898484;box-shadow: 3px 2px 5px #a59696 ;" >
            <thead>
            <tr>
            <th scope="col">Temparature</th>
            <th scope="col">${(main_temp_Mumbai.temp - 273).toFixed(2)} ℃</th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <td><b>Feels Like</b></td>
            <td><b>${(main_temp_Mumbai.feels_like - 273).toFixed(2)} ℃</b></td>
            </tr>
            <tr>
            <td><b>Humidity</b></td>
            <td><b>${main_temp_Mumbai.humidity} %</b></td>
            </tr>
            <tr>
            <td><b>Overall Weather</b></td>
            <td><b>${Weather_description_Mumbai[0].main}</b></td>
            </tr>
            </tbody>
            </table>
            </div>
        </div>`
 
  Mumbai.innerHTML = Mumbai_weather;

})


// Chennai part 

Chennai = document.getElementById("Chennai");


fetch("https://api.openweathermap.org/data/2.5/weather?q=Chennai,india&APPID=9f2ff1ebb8ba926081afb90aa5abca39").then(function (response) {
    return response.json();
}).then(function (data) {
    console.log(data);
    main_temp_Chennai = data.main; // Here all the main data are present it is an object 
    Weather_description_Chennai = data.weather; // It is an array-object of 1 element
    coordinates_Chennai = data.coord;
    let Chennai_weather =
        `<div class="card myCard" style="width: 90%;">
            <img src="/india-ajkal.github.io/chennai.jpg" class="card-img-top img-fluid" alt="Image" style="border-radius: 20px;">
            <div class ="card-body">
            <h5 class ="card-title">Present Weather at Chennai...</h5>
            <table class ="table" style="border: 1px solid #898484;box-shadow: 3px 2px 5px #a59696 ;" >
            <thead>
            <tr>
            <th scope="col">Temparature</th>
            <th scope="col">${(main_temp_Chennai.temp - 273).toFixed(2)} ℃</th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <td><b>Feels Like</b></td>
            <td><b>${(main_temp_Chennai.feels_like - 273).toFixed(2)} ℃</b></td>
            </tr>
            <tr>
            <td><b>Humidity</b></td>
            <td><b>${main_temp_Chennai.humidity} %</b></td>
            </tr>
            <tr>
            <td><b>Overall Weather</b></td>
            <td><b>${Weather_description_Chennai[0].main}</b></td>
            </tr>
            </tbody>
            </table>
            </div>
        </div>`
 
  Chennai.innerHTML = Chennai_weather;

})
