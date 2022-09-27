// Misc Functions

function clearInner(){
    document.getElementById("conversionResult").innerHTML = "";
}

function setFocusToInput(){
    document.querySelector("input").focus();
}

// METRIC UNIT CONVERSIONS

// Length Units
    // Meters to related units

const btnMeters =  document.getElementById("MetersButton")

btnMeters.addEventListener('click', function(){
    clearInner();
    document.getElementById("conversionChoice").innerHTML = `<p><label>Meters </label>
    <input id="inputMeters" type="number" placeholder="m"
    oninput="metersToUnits(this.value)" onchange="metersToUnits(this.value)"></p>`;
    document.getElementById("inputMeters").focus();
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

    // Kilometres to related units

const btnKilometres = document.getElementById("KilometresButton");

btnKilometres.addEventListener('click', function(){
    clearInner();
    document.getElementById("conversionChoice").innerHTML = `<p><label>Kilometres </label>
    <input id="inputKilometres" type="number" placeholder="km"
    oninput="kilometresToUnits(this.value)" onchange="kilometresToUnits(this.value)"></p>`;
    document.getElementById("inputKilometres").focus();
})

function kilometresToUnits(valNum){
    document.getElementById("conversionResult").innerHTML = "Imperial: <br><br>" + "Miles: " + valNum / 1.609 + "<br>" +
    "Feet: " + valNum * 3281 + "<br>" +
    "Yards: " + valNum * 1094 + "<br>" +
    "Inches: " + valNum * 39370 + "<br><br>" +
    "Metric: <br><br>" +
    "Meters: " + valNum * 1000 + "<br>" +
    "Centimetres: " + valNum * 100000 + "<br>" +
    "Milimetres: " + valNum * 1000000 + "<br>";
}

    // Centimetres to related units

const btnCentimetres = document.getElementById("CentimetresButton");

btnCentimetres.addEventListener('click', function(){
    clearInner();
    document.getElementById("conversionChoice").innerHTML = `<p><label>Centimetres </label>
    <input id="inputCentimetres" type="number" placeholder="cm"
    oninput="centimetresToUnits(this.value)" onchange="centimetresToUnits(this.value)"></p>`;
    document.getElementById("inputCentimetres").focus();
})

function centimetresToUnits(valNum){
    document.getElementById("conversionResult").innerHTML = "Imperial: <br><br>" + "Miles: " + valNum / 160900 + "<br>" +
    "Feet: " + valNum / 30.48 + "<br>" +
    "Yards: " + valNum / 91.44 + "<br>" +
    "Inches: " + valNum / 2.54 + "<br><br>" +
    "Metric: <br><br>" +
    "Meters: " + valNum / 100 + "<br>" +
    "Milimetres: " + valNum * 10 + "<br>" +
    "Kilometres: " + valNum * 100000 + "<br>";
}

    // Milimetres to related units

const btnMilimetres = document.getElementById("MilimetresButton");

btnMilimetres.addEventListener('click', function(){
    clearInner();
    document.getElementById("conversionChoice").innerHTML = `<p><label>Milimetres </label>
    <input id="inputMilimetres" type="number" placeholder="mm"
    oninput="milimetresToUnits(this.value)" onchange="milimetresToUnits(this.value)"></p>`;
    document.getElementById("inputMilimetres").focus();
})

function milimetresToUnits(valNum){
    document.getElementById("conversionResult").innerHTML = "Imperial: <br><br>" + "Miles: " + valNum / 1609344 + "<br>" +
    "Feet: " + valNum / 304.8 + "<br>" +
    "Yards: " + valNum / 914.4 + "<br>" +
    "Inch: " + valNum / 25.4 + "<br><br>" +
    "Metric: <br><br>" +
    "Meters: " + valNum / 1000 + "<br>" +
    "Centimetre: " + valNum / 10 + "<br>" +
    "Kilometre: " + valNum / 100000 + "<br>";
}

// Mass units



// IMPERIAL UNIT CONVERSIONS

// Length Units
    // Feet to related units

const btnFeet = document.getElementById("FeetButton");

btnFeet.addEventListener('click', function(){
    clearInner();
    document.getElementById("conversionChoice").innerHTML = `<p><label>Feet </label>
    <input id="inputFeet" type="number" placeholder="ft"
    oninput="feetToUnits(this.value)" onchange="feetToUnits(this.value)"></p>`;
    document.getElementById("inputFeet").focus();
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

    // Inches to related units

const btnInch = document.getElementById("InchesButton");

btnInch.addEventListener('click', function(){
    clearInner();
    document.getElementById("conversionChoice").innerHTML = `<p><label>Inches </label>
    <input id="inputInches" type="number" placeholder="in"
    oninput="inchesToUnits(this.value)" onchange="inchesToUnits(this.value)"></p>`;
    document.getElementById("inputInches").focus();
})

function inchesToUnits(valNum){
    document.getElementById("conversionResult").innerHTML = "Metric: <br><br>" + "Meters: " + valNum / 39.37 + "<br>" +
    "Centimeters: " + valNum * 2.54 + "<br>" +
    "Milimeters: " + valNum * 25.4 + "<br>" +
    "Kilometers: " + valNum / 39370 + "<br><br>" +
    "Imperial: <br><br>" +
    "Feet: " + valNum / 12 + "<br>" +
    "Yards: " + valNum / 36 + "<br>" +
    "Miles: " + valNum / 63360 + "<br>";
}

    // Miles to related units

const btnMiles = document.getElementById("MilesButton");

btnMiles.addEventListener('click', function(){
    clearInner();
    document.getElementById("conversionChoice").innerHTML = `<p><label>Miles </label>
    <input id="inputMiles" type="number" placeholder="mi"
    oninput="milesToUnits(this.value)" onchange="milesToUnits(this.value)"></p>`;
    document.getElementById("inputMiles").focus();
})

function milesToUnits(valNum){
    document.getElementById("conversionResult").innerHTML = "Metric: <br><br>" + "Kilometres: " + valNum * 1.609 + "<br>" + 
    "Meters: " + valNum * 1609 + "<br>" +
    "Centimeters: " + valNum * 160900 + "<br>" +
    "Milimeters: " + valNum * 1609000 + "<br><br>" +
    "Imperial: <br><br>" +
    "Feet: " + valNum * 5280 + "<br>" +
    "Inches: " + valNum * 63360 + "<br>" +
    "Yards: " + valNum * 1760 + "<br>";
}

    // Yards to related units

const btnYards = document.getElementById("YardsButton");

btnYards.addEventListener('click', function(){
    clearInner();
    document.getElementById("conversionChoice").innerHTML = `<p><label>Yards </label>
    <input id="inputYards" type="number" placeholder="yd"
    oninput="yardsToUnits(this.value)" onchange="yardsToUnits(this.value)"></p>`;
    document.getElementById("inputYards").focus();
})

function yardsToUnits(valNum){
    document.getElementById("conversionResult").innerHTML = "Metric: <br><br>" + "Kilometres: " + valNum / 1094 + "<br>" +
    "Meters: " + valNum / 1.094 + "<br>" +
    "Centimetres: " + valNum * 91.44 + "<br>" +
    "Milimetres: " + valNum * 914,4 + "<br><br>" +
    "Imperial: <br><br>" +
    "Miles: " + valNum / 1760 + "<br>" +
    "Feet: " + valNum * 3 + "<br>" +
    "Inches: " + valNum * 36 + "<br>";
}

// Mass Units