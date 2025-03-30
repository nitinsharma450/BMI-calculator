document.querySelector("button").addEventListener("click", function () {
    let height = parseFloat(document.querySelector("#height").value);
    let weight = parseFloat(document.querySelector("#weight").value);
    let result = document.querySelector(".result");

    // Clear previous results
    result.innerHTML = "";

    // Input validation
    if (isNaN(height) || height <= 0) {
        result.innerHTML = "<p class='text-danger'>Enter a valid height in cm</p>";
        return;
    }

    if (isNaN(weight) || weight <= 0) {
        result.innerHTML = "<p class='text-danger'>Enter a valid weight in kg</p>";
        return;
    }

    // Calculate BMI
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal weight";
    } else {
        category = "Overweight";
    }

    // Display result
    result.innerHTML = `<p class='text-success'>Your BMI is <strong>${bmi}</strong> (${category})</p>`;
});
