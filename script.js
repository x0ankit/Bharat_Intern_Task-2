document.getElementById("btn").addEventListener("click", function () {
    var selectedUnit = document.getElementById("Temperature").value;
    var inputValue = parseFloat(document.getElementById("ValueInput").value);
    var result = document.getElementById("result");
    var defaultVideo = document.getElementById("default-video");
    var summerVideo = document.getElementById("summer-video");
    var auttumVideo = document.getElementById("auttum-video");
    var winterVideo = document.getElementById("winter-video");

    if (isNaN(inputValue)) {
        result.textContent = "Please enter a valid number.";
        return;
    }

    if (selectedUnit === "Celsius") {
        var fahrenheit = (inputValue * 9 / 5) + 32;
        var kelvin = inputValue + 273.15;
        result.innerHTML = `${inputValue}°C is equal to ${fahrenheit.toFixed(2)}°F and ${kelvin.toFixed(2)}K`;
        // Change the background video based on the season or temperature
        if (inputValue >= 30) {
            summerVideo.style.display = "block";
            defaultVideo.style.display = "none";
            auttumVideo.style.display = "none";
            winterVideo.style.display = "none";
        }
        else if(inputValue>15&&inputValue<30){
            summerVideo.style.display = "none";
            defaultVideo.style.display = "none";
            auttumVideo.style.display = "block";
            winterVideo.style.display = "none";
        } 
        else if(inputValue<15){
            summerVideo.style.display = "none";
            defaultVideo.style.display = "none";
            auttumVideo.style.display = "none";
            winterVideo.style.display = "block";
        }
        else {
            defaultVideo.style.display = "block";
            summerVideo.style.display = "none";
            auttumVideo.style.display = "none";
            winterVideo.style.display = "none";
        }
    } else if (selectedUnit === "Fahrenheit") {
        var celsius = (inputValue - 32) * 5 / 9;
        var kelvin = (inputValue - 32) * 5 / 9 + 273.15;
        result.innerHTML = `${inputValue}°F is equal to ${celsius.toFixed(2)}°C and ${kelvin.toFixed(2)}K`;
        // Change the background video based on the season or temperature
        if (inputValue >= 86) {
            summerVideo.style.display = "block";
            defaultVideo.style.display = "none";
            auttumVideo.style.display = "none";
            winterVideo.style.display = "none";
        } 
        else if(inputValue>59&&inputValue<86){
            summerVideo.style.display = "none";
            defaultVideo.style.display = "none";
            auttumVideo.style.display = "block";
            winterVideo.style.display = "none";
        } 
        else if(inputValue<59){
            summerVideo.style.display = "none";
            defaultVideo.style.display = "none";
            auttumVideo.style.display = "none";
            winterVideo.style.display = "block";
        }
        else {
            defaultVideo.style.display = "block";
            summerVideo.style.display = "none";
            auttumVideo.style.display = "none";
            winterVideo.style.display = "none";
        }
    } else if (selectedUnit === "Kelvin") {
        var celsius = inputValue - 273.15;
        var fahrenheit = (inputValue - 273.15) * 9 / 5 + 32;
        result.innerHTML = `${inputValue}K is equal to ${celsius.toFixed(2)}°C and ${fahrenheit.toFixed(2)}°F`;
        // Change the background video based on the season or temperature
        if (inputValue > 303) {
            summerVideo.style.display = "block";
            defaultVideo.style.display = "none";
            auttumVideo.style.display = "none";
            winterVideo.style.display = "none";
        } else {
            defaultVideo.style.display = "block";
            summerVideo.style.display = "none";
            auttumVideo.style.display = "none";
            winterVideo.style.display = "none";
        }
    } else {
        result.textContent = "Please select a valid temperature unit.";
    }
});
