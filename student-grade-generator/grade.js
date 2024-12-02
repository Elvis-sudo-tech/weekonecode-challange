// on this assignment we are creating a function for a lec to generate grades for students.

function gradeGenerator(marks) {

    const grade = (marks);
  
    // On this part I am declaring the conditions for the grade generetor
  
    if (grade < 0 || grade > 100 || (!grade)) { //! is to declare not a score
  
        console.log("Invalid input. Please enter a number between 0 to 100.");// and on this part we are going to have this out put
  
      } else if (grade > 79) {
  
        console.log("Grade: A");
  
      } else if (grade >= 60) {
  
        console.log("Grade: B");
  
      } else if (grade >= 49) {
  
        console.log("Grade: C");
  
      } else if (grade >= 40) {
  
        console.log("Grade: D");
  
      } else {
  
        console.log("Grade: E");
  
      }
  
  }
  gradeGenerator(50)
  gradeGenerator(-0.9)