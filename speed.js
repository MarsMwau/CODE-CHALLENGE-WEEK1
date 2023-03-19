function checkSpeed() {
    let speed = parseInt(document.getElementById("speed").value);
    let demeritPoints = 0;
    if (speed < 70) {
        document.getElementById("result").innerHTML = "Ok";
    } else {
        demeritPoints = Math.floor((speed - 70) / 5);
        if (demeritPoints > 12) {
            document.getElementById("result").innerHTML = "License suspended";
        } else {
            document.getElementById("result").innerHTML = "Points: " + demeritPoints;
        }
    }
}
