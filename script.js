// Docs: https://momentjs.com/
moment().format();

const main = document.querySelector("main");
const sun = document.querySelector(".sun_moon")
// const sun = document.createElement("div");
// sun.classList.add("sun_moon", "sun_moonrise");


const homeScreen = document.querySelector("#home");


url = "https://api.sunrise-sunset.org/json?lat=43.4643&lng=-80.5204&formatted=0&date=2020-11-23";
fetch(url)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        
        // console.log(data);
        sunrise = moment.utc(data.results.sunrise).valueOf();
        sunset = moment.utc(data.results.sunset).valueOf();
        // console.log(sunrise);
        // console.log(moment.now());
        // console.log(sunset);
        // console.log(moment().());
       (sunrise < moment.now() && moment.now() < sunset)? sun.style.backgroundColor = "gold" : sun.style.backgroundColor = "lightBlue";
       console.log(sun.style.backgroundColor)
       return data;
    })

addEventListener("load", function(){
    sun.classList.add("sun_moonrise");
    main.focus();
    // location.hash="";
    // location.href.split('#')[0];
    main.prepend(sun);
    location.hash("nav")
    // undoScrolling: true,
})

