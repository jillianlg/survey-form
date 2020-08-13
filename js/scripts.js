$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    // Locate and store value from input 1 (and log to console for testing purposes)
    const answer1 = $("#question1").val();
    console.log(answer1);
    // Locate and store value from input 1
    // const answer2 = $("#question2").val();
  });
});

// Question 1 - Fill in boxes: Name
// Question 2 - Date: When were you born 
// Question 3 - Select boxes: Italian, American, Sea Food, Thai, Greek, Soul Food, Japanese, Chinese, Mexican
// Question 4 - Radio Buttons: Pop, Soul, R&B, Jazz, Country, Other
// Question 5 - Color wheel: Favorite color
