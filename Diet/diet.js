document.getElementById('calculateCalories').addEventListener('click', function() {
    let totalCalories = 0;
    const checkboxes = document.querySelectorAll('.recipe-checkbox:checked');

    // Loop through checked checkboxes and add their data-calories to the total
    checkboxes.forEach(function(checkbox) {
        const foodCalories = parseFloat(checkbox.getAttribute('data-calories'));

        // Add the calorie value if it exists and is a valid number
        if (!isNaN(foodCalories)) {
            totalCalories += foodCalories;
        }
    });

    // Handle "Others" field for Carbohydrates
    const carbOtherCalories = parseFloat(document.getElementById('carb-other-calories').value);
    if (!isNaN(carbOtherCalories)) {
        totalCalories += carbOtherCalories;
    }

    // Handle "Others" field for Proteins
    const protOtherCalories = parseFloat(document.getElementById('prot-other-calories').value);
    if (!isNaN(protOtherCalories)) {
        totalCalories += protOtherCalories;
    }

    // Handle "Others" field for Fiber
    const fiberOtherCalories = parseFloat(document.getElementById('fiber-other-calories').value);
    if (!isNaN(fiberOtherCalories)) {
        totalCalories += fiberOtherCalories;
    }

    // Handle "Others" field for Fats
    const oilOtherCalories = parseFloat(document.getElementById('oil-other-calories').value);
    if (!isNaN(oilOtherCalories)) {
        totalCalories += oilOtherCalories;
    }

    // Display the calculated total calories
    document.getElementById('totalCalories').innerText = `Total Calories: ${totalCalories}`;
});
