/*fetch("https://api.weatherbit.io/v2.0/current?lat=38.123&lon=-78.543&key=4022ac88d2a04b9f91b6017669fddd38&include=minutely")
.then(function(reasponse){
    return reasponse.json();
}).then(function(data){
    console.log(data)
})*/

//4022ac88d2a04b9f91b6017669fddd38

async function getWeather(){
    const response = await fetch("https://api.weatherbit.io/v2.0/current?lat=38.123&lon=-78.543&key=4022ac88d2a04b9f91b6017669fddd38&include=minutely/2/")
    const bata = await response.json()
    console.log(bata.data)
    //document.querySelector("#cont").innerHTML = "<h1>"+ data.data[0].sunset + "<h1>"
    document.querySelector("#img").src = bata.data[0].weather.icon
};

getWeather()