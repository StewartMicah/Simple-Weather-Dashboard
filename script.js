const submitButtonEl = document.getElementById("submit-button");
const textInput = document.getElementById("Search-bar");
const PreviousCityContainerEl = document.getElementById("previous-city-container");
const btn0 = document.getElementById('btn0');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const savedItems = [];
const containerEl = document.getElementById("container");
var citynumber = 10;
var weather = [];
var input = document.getElementById('Search-bar');

function Search(input) {
    var ApiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=1&appid=b92ea0a54913c85b35cfab32ecb11ef5`;
    console.log(input);
    save(input);
    fetch(ApiUrl)
    .then(response => response.json())
    .then(data =>{
        let { lat, lon, name, country} = data[0];
        getData(lat, lon, name, country);
        console.log(data);
    });
    
}

function getData(lat, lon, name, country, ) {
    var x = 0
    var ApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=b92ea0a54913c85b35cfab32ecb11ef5`;
    fetch(ApiUrl)
    .then(response => response.json())
    .then(data =>{
    data.daily.slice(0, 5).map(({wind_speed, humidity, temp, weather, dt}) => {
        document.getElementById("container").style.display = "flex";
        console.log({wind_speed, humidity, temp, weather, dt});
        document.getElementById(`day${x}`).innerHTML = "date: " + new Date(dt*1000).toDateString();
        document.getElementById(`wind${x}`).innerHTML = "wind speed: " + wind_speed + 'MPH';
        document.getElementById(`humidity${x}`).innerHTML = "humidity: " + humidity + '%';
        document.getElementById(`temp${x}`).innerHTML = "temp: " + temp.day + '°F';
        document.getElementById(`weather${x}`).innerHTML = "weather: " + weather[0].main;
        x++
    })
    });

  }


function save(item){
var city1val = localStorage.getItem('city1');
var city2val = localStorage.getItem('city2');
var city3val = localStorage.getItem('city3');
var city4val = localStorage.getItem('city4');
var city5val = localStorage.getItem('city5');
var city6val = localStorage.getItem('city6');
var city7val = localStorage.getItem('city7');
var city8val = localStorage.getItem('city8');
    if (city8val){
        localStorage.setItem('city8', city7val);
        localStorage.setItem('city7', city6val);
        localStorage.setItem('city6', city5val);
        localStorage.setItem('city5', city4val);
        localStorage.setItem('city4', city3val);
        localStorage.setItem('city3', city2val);
        localStorage.setItem('city2', city1val);
        localStorage.setItem('city1', item);
    }else if (city7val){
        localStorage.setItem('city8', city7val);
        localStorage.setItem('city7', city6val);
        localStorage.setItem('city6', city5val);
        localStorage.setItem('city5', city4val);
        localStorage.setItem('city4', city3val);
        localStorage.setItem('city3', city2val);
        localStorage.setItem('city2', city1val);
        localStorage.setItem('city1', item);
    }else if (city6val){
        localStorage.setItem('city7', city6val);
        localStorage.setItem('city6', city5val);
        localStorage.setItem('city5', city4val);
        localStorage.setItem('city4', city3val);
        localStorage.setItem('city3', city2val);
        localStorage.setItem('city2', city1val);
        localStorage.setItem('city1', item);
    }else if (city5val){
        localStorage.setItem('city6', city5val);
        localStorage.setItem('city5', city4val);
        localStorage.setItem('city4', city3val);
        localStorage.setItem('city3', city2val);
        localStorage.setItem('city2', city1val);
        localStorage.setItem('city1', item);
    }else if (city4val){
        localStorage.setItem('city5', city4val);
        localStorage.setItem('city4', city3val);
        localStorage.setItem('city3', city2val);
        localStorage.setItem('city2', city1val);
        localStorage.setItem('city1', item);
    } else if (city3val){
        localStorage.setItem('city4', city3val);
        localStorage.setItem('city3', city2val);
        localStorage.setItem('city2', city1val);
        localStorage.setItem('city1', item);
    }else if (city2val){
        localStorage.setItem('city3', city2val);
        localStorage.setItem('city2', city1val);
        localStorage.setItem('city1', item);
    }else if (city1val){
        localStorage.setItem('city2', city1val);
        localStorage.setItem('city1', item);
    }else{
        localStorage.setItem('city1', item);
        console.log(city1val);
    }
    ShowHistory()
}



function ShowHistory(){
    var city1val = localStorage.getItem('city1');
    var city2val = localStorage.getItem('city2');
    var city3val = localStorage.getItem('city3');
    var city4val = localStorage.getItem('city4');
    var city5val = localStorage.getItem('city5');
    var city6val = localStorage.getItem('city6');
    var city7val = localStorage.getItem('city7');
    var city8val = localStorage.getItem('city8');
    var cityval = [city1val, city2val, city3val, city4val,city5val, city6val, city7val, city8val];
    document.getElementById(`btn`)
    if (city8val){
        for(var x = 0;x < 8; x++){
            document.getElementById(`btn${x}`).innerHTML = cityval[x];
            document.getElementById(`btn${x}`).style.display = 'block';
        }
    }else if (city7val){
        for(var x = 0;x < 7; x++){
            document.getElementById(`btn${x}`).innerHTML = cityval[x];
            document.getElementById(`btn${x}`).style.display = 'block';
        }
    }else if (city6val){
        for(var x = 0;x < 6; x++){
            document.getElementById(`btn${x}`).innerHTML = cityval[x];
            document.getElementById(`btn${x}`).style.display = 'block';
        }
    }else if (city5val){
        for(var x = 0;x < 5; x++){
            document.getElementById(`btn${x}`).innerHTML = cityval[x];
            document.getElementById(`btn${x}`).style.display = 'block';
        }
    }else if (city4val){
        for(var x = 0;x < 4; x++){
            document.getElementById(`btn${x}`).innerHTML = cityval[x];
            document.getElementById(`btn${x}`).style.display = 'block';
        }
    }else if (city3val){
        for(var x = 0;x < 3; x++){
            document.getElementById(`btn${x}`).innerHTML = cityval[x];
            document.getElementById(`btn${x}`).style.display = 'block';
        }
    }else if (city2val){
        for(var x = 0;x < 2; x++){
            document.getElementById(`btn${x}`).innerHTML = cityval[x];
            document.getElementById(`btn${x}`).style.display = 'block';
        }
    }else if (city1val){
        document.getElementById(`btn1`).innerHTML = city1val
        document.getElementById(`btn1`).style.display = 'block';
    }
}


btn0.addEventListener('click', function(){
    Search(localStorage.getItem('city1'));
});
btn1.addEventListener('click', function(){
    Search(localStorage.getItem('city2'));
});
btn2.addEventListener('click', function(){
    Search(localStorage.getItem('city3'));
});
btn3.addEventListener('click', function(){
    Search(JSON.stringify(localStorage.getItem('city4')));
});
btn4.addEventListener('click', function(){
    Search(localStorage.getItem('city5'));
});
btn5.addEventListener('click', function(){
    Search(localStorage.getItem('city6'));
});
btn6.addEventListener('click', function(){
    Search(localStorage.getItem('city7'));
});
btn7.addEventListener('click', function(){
    Search(localStorage.getItem('city8'));
});
ShowHistory()
submitButtonEl.addEventListener('click', function(){
    Search(input.value);
});



