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

    // Kilograms to related units

const btnKilograms = document.getElementById("KilogramsButton");

btnKilograms.addEventListener('click', function(){
    clearInner();
    document.getElementById("conversionChoice").innerHTML = `<p><label>Kilograms </label>
    <input id="inputKilograms" type="number" placeholder="kg"
    oninput="kilogramsToUnits(this.value)" onchange="kilogramsToUnits(this.value)"></p>`;
    document.getElementById("inputKilograms").focus();
})

function kilogramsToUnits(valNum){
    document.getElementById("conversionResult").innerHTML = "Imperial: <br><br>" + "Ounces: " + valNum * 35.274 + "<br>" +
    "Pounds: " + valNum * 2.205 + "<br>" +
    "Stones: " + valNum / 6.35 + "<br><br>" +
    "Metric: <br><br>" +
    "Decagrams: " + valNum * 100 + "<br>" +
    "Grams: " + valNum * 1000 + "<br>" +
    "Miligrams: " + valNum * 1000000 + "<br>";
}

    // Decagrams to related units

const btnDecagrams = document.getElementById("DecagramsButton");

btnDecagrams.addEventListener('click', function(){
    clearInner();
    document.getElementById("conversionChoice").innerHTML = `<p><label>Decagrams </label>
    <input id="inputDecagrams" type="number" placeholder="dag"
    oninput="decagramsToUnits(this.value)" onchange="decagramsToUnits(this.value)"></p>`;
    document.getElementById("inputDecagrams").focus();
})

function decagramsToUnits(valNum){
    document.getElementById("conversionResult").innerHTML = "Imperial: <br><br>" + "Ounces: " + valNum * 0.35 + "<br>" +
    "Pounds: " + valNum * 0.022 + "<br>" +
    "Stones: " + valNum * 0.00157 + "<br><br>" +
    "Metric: <br><br>" +
    "Kilograms: " + valNum / 100 + "<br>" +
    "Grams: " + valNum * 10 + "<br>" +
    "Miligrams: " + valNum * 10000 + "<br>";

}

    // Grams to related units

const btnGrams = document.getElementById("GramsButton");

btnGrams.addEventListener('click', function(){
    clearInner();
    document.getElementById("conversionChoice").innerHTML = `<p><label>Grams </label>
    <input id="inputGrams" type="number" placeholder="g"
    oninput="gramsToUnits(this.value)" onchange="gramsToUnits(this.value)"></p>`;
    document.getElementById("inputGrams").focus();
})

function gramsToUnits(valNum){
    document.getElementById("conversionResult").innerHTML = "Imperial: <br><br>" + "Ounces: " + valNum / 28.35 + "<br>" +
    "Pounds: " + valNum / 453.6 + "<br>" +
    "Stones: " + valNum / 6350 + "<br><br>" +
    "Metric: <br><br>" +
    "Kilograms: " + valNum / 1000 + "<br>" +
    "Decagrams: " + valNum / 10 + "<br>" +
    "Miligrams: " + valNum * 1000 + "<br>";
}

    // Miligrams to related units

const btnMiligrams = document.getElementById("MiligramsButton");

btnMiligrams.addEventListener('click', function(){
    clearInner();
    document.getElementById("conversionChoice").innerHTML = `<p><label>Miligrams </label>
    <input id="inputMiligrams" type="number" placeholder="mg"
    oninput="miligramsToUnits(this.value)" onchange="miligramsToUnits(this.value)"></p>`;
    document.getElementById("inputMiligrams").focus();
})

function miligramsToUnits(valNum){
    document.getElementById("conversionResult").innerHTML = "Imperial: <br><br>" + "Ounces: " + valNum / 28350 + "<br>" +
    "Pounds: " + valNum / 453600 + "<br>" +
    "Stones: " + valNum / 6350293.18 + "<br><br>" +
    "Metric: <br><br>" +
    "Kilograms: " + valNum / 1000000 + "<br>" +
    "Decagrams: " + valNum * 0.0001 + "<br>" +
    "Grams: " + valNum / 1000 + "<br>";
}

// Capacity units

    // Litre related units

const btnLitres = document.getElementById("LitresButton");

btnLitres.addEventListener('click', function(){
    clearInner();
    document.getElementById("conversionChoice").innerHTML = `<p><label>Litres </label>
    <input id="inputLitres" type="number" placeholder="l"
    oninput="litresToUnits(this.value)" onchange="litresToUnits(this.value)"></p>`;
    document.getElementById("inputLitres").focus();
})

function litresToUnits(valNum){
    document.getElementById("conversionResult").innerHTML = "Imperial: <br><br>" + "Pints: " + valNum * 2.113 + "<br>" +
    "Gallons: " + valNum / 3.785 + "<br>" +
    "Quarts: " + valNum * 1.057 + "<br>" +
    "Cups: " + valNum * 4.227 + "<br><br>" +
    "Metric: <br><br>" +
    "Decilitres: " + valNum * 10 + "<br>" +
    "Mililitres: " + valNum * 1000 + "<br>";
}

    // Decilitre related units

const btnDecilitres = document.getElementById("DecilitresButton");

btnDecilitres.addEventListener('click', function(){
    clearInner();
    document.getElementById("conversionChoice").innerHTML = `<p><label>Decilitres </label>
    <input id="inputDecilitres" type="number" placeholder="dl"
    oninput="decilitresToUnits(this.value)" onchange="decilitresToUnits(this.value)"></p>`;
    document.getElementById("inputDecilitres").focus();
})

function decilitresToUnits(valNum){
    document.getElementById("conversionResult").innerHTML = "Imperial: <br><br>" + "Pints: " + valNum / 4.732 + "<br>" +
    "Gallons: " + valNum / 37.854 + "<br>" +
    "Quarts: " + valNum / 9.464 + "<br>" +
    "Cups: " + valNum / 2.366 + "<br><br>" +
    "Metric: <br><br>" +
    "Litre: " + valNum / 10 + "<br>" +
    "Mililitre: " + valNum * 100 + "<br>";
}

    // Mililitre related units

const btnMililitres = document.getElementById("MililitresButton");

btnMililitres.addEventListener('click', function(){
    clearInner();
    document.getElementById("conversionChoice").innerHTML = `<p><label>Mililitres </label>
    <input id="inputMililitres" type="number" placeholder="ml"
    oninput="mililitresToUnits(this.value)" onchange="mililitresToUnits(this.value)"></p>`;
    document.getElementById("inputMililitres").focus();
})    

function mililitresToUnits(valNum){
    document.getElementById("conversionResult").innerHTML = "Imperial: <br><br>" + "Pints: " + valNum / 473.2 + "<br>" +
    "Gallons: " + valNum / 3785 + "<br>" +
    "Quarts: " + valNum / 946.4 + "<br>" +
    "Cups: " + valNum / 236.6 + "<br><br>" +
    "Metric: <br><br>" +
    "Litre: " + valNum / 1000 + "<br>" +
    "Decilitre: " + valNum / 100 + "<br>";
}

// Temperature conversion

const btnCelsius = document.getElementById("CelsiusButton");

btnCelsius.addEventListener('click', function(){
    clearInner();
    document.getElementById("conversionChoice").innerHTML = `<p><label>Celsius </label>
    <input id="inputCelsius" type="number" placeholder="°C"
    oninput="celsiusToUnits(this.value)" onchange="celsiusToUnits(this.value)"></p>`;
    document.getElementById("inputCelsius").focus();
})    

function celsiusToUnits(valNum){
    document.getElementById("conversionResult").innerHTML = "Imperial: <br><br>" + "Fahrenheit: " + "°" + (valNum * 9/5 + 32) + "<br>";
}    

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

    // Ounce related units

const btnOunces = document.getElementById("OuncesButton");

btnOunces.addEventListener('click', function(){
    clearInner();
    document.getElementById("conversionChoice").innerHTML = `<p><label>Ounces </label>
    <input id="inputOunces" type="number" placeholder="oz"
    oninput="ouncesToUnits(this.value)" onchange="ouncesToUnits(this.value)"></p>`;
    document.getElementById("inputOunces").focus();
    })
    
function ouncesToUnits(valNum){
    document.getElementById("conversionResult").innerHTML = "Metric: <br><br>" + "Kilograms: " + valNum / 35.274 + "<br>" +
    "Decagrams: " + valNum * 2.8349 + "<br>" +
    "Grams: " + valNum * 28.35 + "<br>" +
    "Miligrams: " + valNum * 28350 + "<br><br>" +
    "Imperial: <br><br>" +
    "Pounds: " + valNum / 16 + "<br>" +
    "Stones: " + valNum / 224 + "<br>";
}

    // Pound related units

const btnPounds = document.getElementById("PoundsButton");

btnPounds.addEventListener('click', function(){
    clearInner();
    document.getElementById("conversionChoice").innerHTML = `<p><label>Pounds </label>
    <input id="inputPounds" type="number" placeholder="lb"
    oninput="poundsToUnits(this.value)" onchange="poundsToUnits(this.value)"></p>`;
    document.getElementById("inputPounds").focus();
    })
    
function poundsToUnits(valNum){
    document.getElementById("conversionResult").innerHTML = "Metric: <br><br>" + "Kilograms: " + valNum / 2.205 + "<br>" +
    "Decagrams: " + valNum * 45.359 + "<br>" +
    "Grams: " + valNum * 453.6 + "<br>" +
    "Miligrams: " + valNum * 453600 + "<br><br>" +
    "Imperial: <br><br>" +
    "Ounces: " + valNum * 16 + "<br>" +
    "Stones: " + valNum / 14 + "<br>";
}

    // Stone related units

const btnStones = document.getElementById("StonesButton");

btnStones.addEventListener('click', function(){
    clearInner();
    document.getElementById("conversionChoice").innerHTML = `<p><label>Stones </label>
    <input id="inputStones" type="number" placeholder="st"
    oninput="stonesToUnits(this.value)" onchange="stonesToUnits(this.value)"></p>`;
    document.getElementById("inputStones").focus();
    })
    
function stonesToUnits(valNum){
    document.getElementById("conversionResult").innerHTML = "Metric: <br><br>" + "Kilograms: " + valNum * 6.35 + "<br>" +
    "Decagrams: " + valNum * 635.029 + "<br>" +
    "Grams: " + valNum * 6350 + "<br>" +
    "Miligrams: " + valNum * 6350000 + "<br><br>" +
    "Imperial: <br><br>" +
    "Pounds: " + valNum * 14 + "<br>" +
    "Ounces: " + valNum * 224 + "<br>";
}    

// Capacity units

    // Pint related units

const btnPints = document.getElementById("PintsButton");    

btnPints.addEventListener('click', function(){
    clearInner();
    document.getElementById("conversionChoice").innerHTML = `<p><label>Pints </label>
    <input id="inputPints" type="number" placeholder="pt"
    oninput="pintsToUnits(this.value)" onchange="pintsToUnits(this.value)"></p>`;
    document.getElementById("inputPints").focus();
    })
    
function pintsToUnits(valNum){
    document.getElementById("conversionResult").innerHTML = "Metric: <br><br>" + "Litres: " + valNum / 2.113 + "<br>" +
    "Decilitres: " + valNum * 4.732 + "<br>" +
    "Mililitres: " + valNum * 473.2 + "<br><br>" +
    "Imperial: <br><br>" +
    "Gallons: " + valNum / 8 + "<br>" +
    "Quarts: " + valNum / 2 + "<br>" +
    "Cups: " + valNum * 2 + "<br>";
}

    // Gallon related units

const btnGallons = document.getElementById("GallonsButton");  

btnGallons.addEventListener('click', function(){
    clearInner();
    document.getElementById("conversionChoice").innerHTML = `<p><label>Gallons </label>
    <input id="inputGallons" type="number" placeholder="gal"
    oninput="gallonsToUnits(this.value)" onchange="gallonsToUnits(this.value)"></p>`;
    document.getElementById("inputGallons").focus();
    })
    
function gallonsToUnits(valNum){
    document.getElementById("conversionResult").innerHTML = "Metric: <br><br>" + "Litres: " + valNum * 3.785 + "<br>" +
    "Decilitres: " + valNum * 37.854 + "<br>" +
    "Mililitres: " + valNum * 3785.4 + "<br><br>" +
    "Imperial: <br><br>" +
    "Pints: " + valNum * 8 + "<br>" +
    "Quarts: " + valNum * 4 + "<br>" +
    "Cups: " + valNum * 16 + "<br>";
}

    // Quart related units

const btnQuarts = document.getElementById("QuartsButton"); 

btnQuarts.addEventListener('click', function(){
    clearInner();
    document.getElementById("conversionChoice").innerHTML = `<p><label>Quarts </label>
    <input id="inputQuarts" type="number" placeholder="qt"
    oninput="quartsToUnits(this.value)" onchange="quartsToUnits(this.value)"></p>`;
    document.getElementById("inputQuarts").focus();
    })
    
function quartsToUnits(valNum){
    document.getElementById("conversionResult").innerHTML = "Metric: <br><br>" + "Litres: " + valNum * 0.946 + "<br>" +
    "Decilitres: " + valNum * 9.464 + "<br>" +
    "Mililitres: " + valNum * 946.4 + "<br><br>" +
    "Imperial: <br><br>" +
    "Pints: " + valNum * 2 + "<br>" +
    "Gallons: " + valNum / 4 + "<br>" +
    "Cups: " + valNum * 4 + "<br>";
}

    // Cup related units

const btnCups = document.getElementById("CupsButton");

btnCups.addEventListener('click', function(){
    clearInner();
    document.getElementById("conversionChoice").innerHTML = `<p><label>Cups </label>
    <input id="inputCups" type="number" placeholder="cup"
    oninput="cupsToUnits(this.value)" onchange="cupsToUnits(this.value)"></p>`;
    document.getElementById("inputCups").focus();
    })
    
function cupsToUnits(valNum){
    document.getElementById("conversionResult").innerHTML = "Metric: <br><br>" + "Litres: " + valNum / 4.227 + "<br>" +
    "Decilitres: " + valNum * 2.366 + "<br>" +
    "Mililitres: " + valNum * 236.6 + "<br><br>" +
    "Imperial: <br><br>" +
    "Pints: " + valNum / 2 + "<br>" +
    "Gallons: " + valNum / 16 + "<br>" +
    "Quarts: " + valNum / 4 + "<br>";
}

// Temperature units

const btnFahrenheit = document.getElementById("FahrenheitButton");

btnFahrenheit.addEventListener('click', function(){
    clearInner();
    document.getElementById("conversionChoice").innerHTML = `<p><label>Fahrenheit </label>
    <input id="inputFahrenheit" type="number" placeholder="°F"
    oninput="fahrenheitToUnits(this.value)" onchange="fahrenheitToUnits(this.value)"></p>`;
    document.getElementById("inputFahrenheit").focus();
    })
    
function fahrenheitToUnits(valNum){
    document.getElementById("conversionResult").innerHTML = "Metric: <br><br>" + "Celsius: " + "°" + ((valNum - 32) * 5 / 9);
}