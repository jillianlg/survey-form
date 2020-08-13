// Question 1 - Fill in boxes: Name
// Question 2 - Date: When were you born 
    // const dob = $("#born").val();
// Question 3 - Select boxes: Italian, American, Sea Food, Thai, Greek, Soul Food, Japanese, Chinese, Mexican
// Question 4 - Radio Buttons: Pop, Soul, R&B, Jazz, Country, Other
// Question 5 - Color wheel: Favorite color


$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    // Locate and store value from input 1 (and log to console for testing purposes)
    const name = $("input#name").val();
    console.log(name);
    // Locate and store value from input 1
    const dob = $("#born").val();
    const cuisine = $("input#cuisine").val();
    const music = $("input:radio[name=music]:checked").val();
    const favoriteColor = $("input#color").val();
    // const answer2 = $("#question2").val();
  });
});

