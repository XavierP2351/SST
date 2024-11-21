document.addEventListener("DOMContentLoaded", function () {
    const datePick = document.getElementById("date_pick");
    const timeInput = document.getElementById("time1");
    const planetSelect = document.getElementById("planet");
    const submitButton = document.getElementById("submit");
    const resultDiv = document.getElementById("result");

    // Function to calculate time adjustments for moons
    function checkMoon(date) {
        const selectedPlanet = planetSelect.value;
        let moonDate;

        switch (selectedPlanet) {
            case "Earth":
                const earthMoon = document.getElementById("earth_moon").value;
                if (earthMoon === "The_Moon") {
                    moonDate = new Date(date);
                } else {
                    return "None";
                }
                break;
            case "Mars":
                const marsMoon = document.getElementById("mars_moon").value;
                if (marsMoon === "Deimos") {
                    moonDate = new Date(date.getTime() - ((30 * 60) + 17) * 60 * 1000);
                } else if (marsMoon === "Phobos") {
                    moonDate = new Date(date.getTime() + ((7 * 60) + 39) * 60 * 1000);
                } else {
                    return "None";
                }
                break;
            case "Jupiter":
                const jupMoon = document.getElementById("jup_moon").value;
                if (jupMoon === "Ganymede") {
                    moonDate = new Date(date.getTime() - 168 * 60 * 60 * 1000);
                } else if (jupMoon === "Callisto") {
                    moonDate = new Date(date.getTime() - 408 * 60 * 60 * 1000);
                } else if (jupMoon === "Io") {
                    moonDate = new Date(date.getTime() - 1020 * 60 * 60 * 1000);
                }else if(jupMoon == "Europa"){
                    moonDate = new Date(date.getTime() - 84 * 60 * 60 * 1000);
                }else if(jupMoon == "Carme"){
                    moonDate = new Date(date.getTime() - ((17620 * 60) + 48) * 60 * 1000);
                }else if(jupMoon == "Kallichore"){
                    moonDate = new Date(date.getTime() - 728 * 24 * 60 * 60 * 1000);
                }else if(jupMoon == "Amalthea"){
                    moonDate = new Date(date.getTime() + ((11 * 60) + 57) * 60 * 1000);
                }else {
                    return "None";
                }
                break;
            case "Saturn":
                const satMoon = document.getElementById("sat_moon").value;
                if (satMoon === "Titan") {
                    moonDate = new Date(date.getTime() - 382 * 60 * 60 * 1000);
                } else if (satMoon === "Hyperion") {
                    moonDate = new Date(date.getTime() - ((511 * 60) + 12) * 60 * 1000);
                }else if(satMoon == "Mimas"){
                    moonDate = new Date(date.getTime() - ((22 * 60) + 36) * 60 * 1000);
                }else if(satMoon == "Dione"){
                    moonDate = new Date(date.getTime() - ((64 * 60) + 48) * 60 * 1000);
                }else if(satMoon == "Rhea"){
                    moonDate = new Date(date.getTime() + ((10 * 60) + 42) * 60 * 1000);
                }else if(satMoon == "Enceladus"){
                    moonDate = new Date(date.getTime() - ((32 * 60) + 54) * 60 * 1000);
                }else if(satMoon == "Lapetus"){
                    moonDate = new Date(date.getTime() - ((1903 * 60) + 12) * 60 * 1000);
                }else {
                    return "None";
                }
                break;
            default:
                return "None";
        }

        return moonDate;
    }

    // Function to handle planetary and lunar conversions
    function handleConversion() {
        if (!datePick.value || !timeInput.value) {
            resultDiv.textContent = "Please fill in all fields.";
            return;
        }

        const selectedDate = new Date(`${datePick.value}T${timeInput.value}`);
        let futureDate = new Date(selectedDate);

        // Check for moon adjustments
        const moonAdjustment = checkMoon(selectedDate);
        if (moonAdjustment != "None") {
            futureDate = moonAdjustment;
        } else {
            // Planetary adjustments
            switch (planetSelect.value) {
                case "Mars":
                    futureDate.setHours(selectedDate.getHours() - 1);
                    break;
                case "Mercury":
                    futureDate.setHours(selectedDate.getHours() - 176);
                    break;
                case "Venus":
                    futureDate.setHours(selectedDate.getHours() - 243);
                    break;
                case "Jupiter":
                    futureDate.setHours(selectedDate.getHours() + 10);
                    break;
                case "Saturn":
                    futureDate.setHours(selectedDate.getHours() + 11);
                    break;
                case "Uranus":
                    futureDate.setHours(selectedDate.getHours() + 17);
                    break;
                case "Neptune":
                    futureDate.setHours(selectedDate.getHours() + 16);
                    break;
                case "Earth":
                    resultDiv.textContent = "Converted Time: the time you just put";
                    return;
                case "Bunnu":
                    futureDate.setHours(selectedDate.getHours() - 28);
                    futureDate.setMinutes(selectedDate.getMinutes() - 33);
                    break;
                case "Ceres":
                    futureDate.setHours(selectedDate.getHours() + 9); break;
                case "Vesta":
                    futureDate.setHours(selectedDate.getHours() + 5);
                    futureDate.setMinutes(selectedDate.getMinutes() + 20); break;
                case "Pallas":
                    futureDate.setHours(selectedDate.getHours() + 7);
                    futureDate.setMinutes(selectedDate.getMinutes() + 48); break;
                case "Eros":
                    futureDate.setHours(selectedDate.getHours() + 5);
                    futureDate.setMinutes(selectedDate.getMinutes() + 16); break;
                case "Itokawa":
                    futureDate.setHours(selectedDate.getHours() + 12);
                    futureDate.setMinutes(selectedDate.getMinutes() + 6); break;
                case "Gaspra":
                    futureDate.setHours(selectedDate.getHours() + 7); break;
                case "Ida":
                    futureDate.setHours(selectedDate.getHours() + 4);
                    futureDate.setMinutes(selectedDate.getMinutes() + 38); break;
                case "Ryugu":
                    futureDate.setHours(selectedDate.getHours() + 7);
                    futureDate.setMinutes(selectedDate.getMinutes() + 38); break;
                case "Psyche":
                    futureDate.setHours(selectedDate.getHours() + 5); break;
                default:
                    resultDiv.textContent = "No conversion for this planet.";
                    return;
            }
        }
        resultDiv.textContent = `Converted Time: ${futureDate.toLocaleString()}`;
    }

    submitButton.addEventListener("click", handleConversion);
});
