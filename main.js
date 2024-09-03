function startCountdown() {
    // Get the input values and enforce the limits for minutes and seconds
    var hours = parseInt(document.getElementById("hours").value) || 0;
    var minutes = Math.min(parseInt(document.getElementById("minutes").value) || 0, 60);
    var seconds = Math.min(parseInt(document.getElementById("seconds").value) || 0, 60);

    // Calculate the total countdown time in milliseconds
    var countDownTime = (hours * 60 * 60 + minutes * 60 + seconds) * 1000;

    // Update the countdown every 1 second
    var x = setInterval(function () {
        // Calculate hours, minutes, and seconds
        var h = Math.floor((countDownTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var m = Math.floor((countDownTime % (1000 * 60 * 60)) / (1000 * 60));
        var s = Math.floor((countDownTime % (1000 * 60)) / 1000);

        // Display the result
        document.getElementById("countdown").innerHTML = h + "h " + m + "m " + s + "s ";

        // Decrease the countdown time by 1 second
        countDownTime -= 1000;

        // If the countdown is over, stop the interval
        if (countDownTime < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "TIMES UP";
        }
    }, 1000);
}