//A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.
function generateGrade() {
    // Get input values from HTML form
    let name = document.getElementById("name").value;
    let grade = document.getElementById("grade").value;
  
    // Convert grade to myGrade
    let myGrade = "";
    if (grade >= 80 && grade <=100) {
        myGrade = "A"; //The grade displayed will be A
    } 
    else if (grade >= 60 && grade <= 79) {
        myGrade = "B"; //The grade displayed will be B
    } 
    else if (grade >= 50 && grade <= 59) {
         myGrade = "C"; //The grade displayed will be C
    } 
    else if (grade >= 40 && grade <= 49) {
        myGrade = "D"; //The grade displayed will be D
    }
    else if (grade < 39) {
        myGrade = "E"; //The grade displayed will be E
    }
    else {
      "Invalid Grade"; // The user's grade will be invalid
    }
  
    // Display message to user
    display("Hello " + name + ", your grade is a " + myGrade); //The user will be prompted their grade
  }
