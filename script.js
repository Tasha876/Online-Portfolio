// Docs: https://momentjs.com/
moment().format();

const main = document.querySelector("main");
// const sun = document.querySelector(".sun_moon svg")
const sunDiv = document.createElement("div");
sunDiv.classList.add("sun_moon", "sun_moonrise");
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
const circle = document.createElementNS("http://www.w3.org/2000/svg","circle");
sunDiv.classList.add("sun_moon");
svg.setAttribute("height", "100vw");
svg.setAttribute("width", "100vw");
circle.setAttribute("cx","50vw");
circle.setAttribute("cy","50vw");
circle.setAttribute("r","50vw");
svg.appendChild(circle);
sunDiv.appendChild(svg);




// sun.innerHTML = '<svg height="100vw" width="100vw"><circle cx="50vw" cy="50vw" r="50vw" stroke="none"></svg>';


const homeScreen = document.querySelector("#home");


url = "https://api.sunrise-sunset.org/json?lat=43.4643&lng=-80.5204&formatted=0&date=";
date = moment().format('YYYY-MM-DD');
url += date;
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
       (sunrise < moment.now() && moment.now() < sunset)? circle.style.fill = "gold" : circle.style.fill = "lightSteelBlue";
       console.log(circle.style.fill)
       return data;
    })

addEventListener("load", function(){
    // sun.classList.add("sun_moonrise");

    // main.focus();
    // location.hash="";
    // location.href.split('#')[0];
    main.prepend(sunDiv);
    // location.hash("nav")
    // undoScrolling: true,
})

