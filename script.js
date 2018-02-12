
function calculateTip() {
	var billAmount = document.getElementById("billAmount").value;
	var serviceQuality = document.getElementById("serviceQuality").value;
	var numPeople = document.getElementById("totalPeople").value;

	// validation
	if (billAmount === "" || serviceQuality === 0) {
		return window.alert("Please enter values");
	}
	if (numPeople === "" || numPeople <= 1) {
		numPeople = 1;
		document.getElementById("each").style.display= "none";
	}
	else {
		document.getElementById("each").style.display= "block";
	}

	// calculate tip amount
	var total = (billAmount * serviceQuality) / numPeople;
	total = Math.round(total * 100) / 100;
	total = total.toFixed(2);

	// displaying the tip
	document.getElementById("totalTip").style.display = "block";
	document.getElementById("tip").innerHTML = total;

}


document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display - "none";

document.getElementById("calculate").onclick = function() {calculateTip();};