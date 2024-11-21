document.addEventListener("DOMContentLoaded", function () {
    const planetSelect = document.getElementById("planet");
    const moonLabel = document.querySelector('label[for="moons"]');
    const moonSelects = {
        Earth: document.getElementById("earth_moon"),
        Mars: document.getElementById("mars_moon"),
        Jupiter: document.getElementById("jup_moon"),
        Saturn: document.getElementById("sat_moon"),
    };

    // Function to hide all moon selects
    function hideAllMoonSelects() {
        Object.values(moonSelects).forEach(select => {
            if (select) select.style.display = "none";
        });
    }

    // Show only the moon select for the selected planet
    function showRelevantMoonSelect() {
        const selectedPlanet = planetSelect.value;
        hideAllMoonSelects();

        if (moonSelects[selectedPlanet]) {
            moonLabel.style.display = "inline"; // Show the label
            moonSelects[selectedPlanet].style.display = "inline";
        } else {
            moonLabel.style.display = "none"; // Hide the label
        }
    }

    // Add event listener for planet selection change
    planetSelect.addEventListener("change", showRelevantMoonSelect);

    // Initialize on page load
    showRelevantMoonSelect();
});
