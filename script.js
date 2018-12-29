function convert(degree) {
  var x;
  var y;

  //If the value is Celsius, calculate Fahrenheit and Kelvin:
  if (degree == "C") {
    x = (document.getElementById("c").value * 1.8) + 32;
    document.getElementById("f").value = Math.round(x);


    y = parseFloat(document.getElementById("c").value) + 273.15;
    document.getElementById("k").value = y;

  //If the value is Fahrenheit, calculate Celsius and Kelvin:
  } else if (degree == "F") {
    x = (document.getElementById("f").value -32) / 1.8;
    document.getElementById("c").value = Math.round(x);

    y = ((document.getElementById("f").value -32) / 1.8) + 273.15;
    document.getElementById("k").value = y;
    
  //If the value is Kelvin, calculate Celsius and Fahrenheit:
  } else {
  	x = document.getElementById("k").value - 273.15;
  	document.getElementById("c").value = x;

  	y = ((document.getElementById("k").value - 273.15) * 1.8) + 32;
  	document.getElementById("f").value = y;
  }
}