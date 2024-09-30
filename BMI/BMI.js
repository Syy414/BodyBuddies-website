document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const unit = document.getElementById("unit").value;

    // Input validation
    if (weight <= 0 || height <= 0) {
        alert("Please enter valid positive numbers for weight and height.");
        return;
    }

    let bmi;

    // Convert to metric if using imperial
    if (unit === "imperial") {
        bmi = (weight / (height * height)) * 703; // BMI formula for imperial
    } else {
        bmi = weight / (height * height); // BMI formula for metric
    }

    // Determine the category
    let category;
    if (bmi < 18.5) {
        category = "Underweight";
        document.getElementById("dietLink").style.display = "block";
    } else if (bmi < 25) {
        category = "Normal weight";
        document.getElementById("dietLink").style.display = "none";
    } else if (bmi < 30) {
        category = "Overweight";
        document.getElementById("dietLink").style.display = "none";
    } else {
        category = "Obese";
        document.getElementById("dietLink").style.display = "none";
    }

    // Display the result
    document.getElementById("result").innerHTML = `Your BMI: ${bmi.toFixed(2)} - ${category}`;
});

// Clear function
document.getElementById('dietLink').addEventListener('click', function() {
    document.getElementById("bmiForm").reset();
    document.getElementById("result").innerHTML = '';
    this.style.display = 'none';
});
// Set the diet advice in the modal
document.getElementById("dietAdvice").innerText = advice;

// Create a link to the diet recommendations page with the BMI category
const dietLink = `diet.html?category=${encodeURIComponent(category)}`;
document.getElementById("dietLink").setAttribute("href", dietLink);

// Show the modal
$('#dietModal').modal('show');
