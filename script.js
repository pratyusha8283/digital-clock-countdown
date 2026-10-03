// ===============================
// DIGITAL CLOCK
// ===============================

function updateClock() {

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Convert 24-hour format to 12-hour format
    let period = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;

    hours = hours === 0 ? 12 : hours;

    // Add leading zero
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    document.getElementById("clock").textContent =
        `${hours}:${minutes}:${seconds} ${period}`;


    // Display date

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    document.getElementById("date").textContent =
        now.toLocaleDateString("en-US", options);
}


// Update clock every second

setInterval(updateClock, 1000);

// Run immediately
updateClock();


// ===============================
// COUNTDOWN TIMER
// ===============================

// Set target date
const targetDate = new Date("January 1, 2027 00:00:00").getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const difference = targetDate - now;


    // If countdown is finished

    if (difference <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        document.getElementById("message").textContent =
            "🎉 Happy New Year!";

        return;
    }


    // Calculate time

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    // Display countdown

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}


// Update countdown every second

setInterval(updateCountdown, 1000);

// Run immediately
updateCountdown();