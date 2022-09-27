// Clear conversion result Div inner HTML

function clearInner(){
    document.getElementById("conversionResult").innerHTML = "";
}

// Meters to related units

const btnMeters =  document.getElementById("MetersButton")

btnMeters.addEventListener('click', function(){
    clearInner();
    document.getElementById("conversionChoice").innerHTML = `<p><label>Meters </label>
    <input id="inputMeters" type="number" placeholder="m"
    oninput="metersToUnits(this.value)" onchange="MetersToUnits(this.value)"></p>`
} )

function metersToUnits(valNum) {
    document.getElementById("conversionResult").innerHTML = "Imperial: <br><br>" + "Feet: " + valNum * 3.28 + "<br>" +
    "Inches: " + valNum * 39.37 + "<br>" +
    "Yards: " + valNum * 1094 + "<br>" +
    "Miles: " + valNum / 1609.344 + "<br><br>" +
    "Metric: <br><br>" +
    "Kilometers: " + valNum / 1000 + "<br>" +
    "Centimeters: " + valNum * 100 + "<br>" +
    "Milimeters: " + valNum * 1000 + "<br>";
}

// Feet to related units

const btnFeet = document.getElementById("FeetButton");

btnFeet.addEventListener('click', function(){
    clearInner();
    document.getElementById("conversionChoice").innerHTML = `<p><label>Feet </label>
    <input id="inputFeet" type="number" placeholder="ft"
    oninput="feetToUnits(this.value)" onchange="feetToUnits(this.value)"></p>`
})

function feetToUnits(valNum){
    document.getElementById("conversionResult").innerHTML = "Metric: <br><br>" + "Meters: " + valNum * 0.3048 + "<br>" +
    "Centimeters: " + valNum * 30.48 + "<br>" +
    "Milimeters: " + valNum * 304.8 + "<br><br>" +
    "Imperial: <br><br>" +
    "Inches: " + valNum * 12 + "<br>" +
    "Yards: " + valNum / 3 + "<br>" +
    "Miles: " + valNum / 5280 + "<br>";
}