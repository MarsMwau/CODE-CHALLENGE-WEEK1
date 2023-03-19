function calculate() {
    // Get input values
    let income = parseFloat(document.getElementById("income").value);

    // Calculate NSSF
    let nssf = 0;
    if (income < 6000) {
        nssf = income * 0.06;
    } else if (income >= 6000 && income < 18000) {
        nssf = 360;
    } else {
        nssf = income * 0.12;
    }

    // Calculate NHIF
    let nhif = 0;
    if (income <= 5999) {
        nhif = 150;
    } else if (income >= 6000 && income <= 7999) {
        nhif = 300;
    } else if (income >= 8000 && income <= 11999) {
        nhif = 400;
    } else if (income >= 12000 && income <= 14999) {
        nhif = 500;
    } else if (income >= 15000 && income <= 19999) {
        nhif = 600;
    } else if (income >= 20000 && income <= 24999) {
        nhif = 750;
    } else if (income >= 25000 && income <= 29999) {
        nhif = 850;
    } else if (income >= 30000 && income <= 34999) {
        nhif = 900;
    } else if (income >= 35000 && income <= 39999) {
        nhif = 950;
    } else if (income >= 40000 && income <= 44999) {
        nhif = 1000;
    } else if (income >= 45000 && income <= 49999) {
        nhif = 1100;
    } else if (income >= 50000 && income <= 59999) {
        nhif = 1200;
    } else if (income >= 60000 && income <= 69999) {
        nhif = 1300;
    } else if (income >= 70000 && income <= 79999) {
        nhif = 1400;
    } else if (income >= 80000 && income <= 89999) {
        nhif = 1500;
    } else if (income >= 90000 && income <= 99999) {
        nhif = 1600;
    } else {
        nhif = 1700;
    }

    // Calculate PAYE
    let paye = 0;
    if (income <= 12298) {
        paye = 0;
    } else if (income >= 12299 && income <= 23885) {
        paye = (income - 12298) * 0.1;
    } else if (income >= 23886 && income <= 35472) {
        paye = 1159 + ((income - 23885) * 0.15);
    } else if (income >= 35473 && income <= 47059) {
        paye = 2894 + ((income - 35472) * 0.2);
    } else if (income >= 47060 && income <= 58646) {
        paye = 4994 + ((income - 47059) * 0.25);
    } else {
        paye = 7994 + ((income - 58646) * 0.3);
    }

    // Calculate gross salary and net salary
    let gross_salary = income + nssf + nhif;
    let net_salary = income - paye - nssf - nhif;

    // Display results
    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "NSSF: KES " + nssf.toFixed(2) + "<br>";
    resultsDiv.innerHTML += "NHIF: KES " + nhif.toFixed(2) + "<br>";
    resultsDiv.innerHTML += "Gross Salary: KES " + gross_salary.toFixed(2) + "<br>";
    resultsDiv.innerHTML += "PAYE: KES " + paye.toFixed(2) + "<br>";
    resultsDiv.innerHTML += "Net Salary: KES " + net_salary.toFixed(2);
}