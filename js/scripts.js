// id="name" Question 1 - Fill in boxes: Name
// id="dob" Question 2 - Date: When were you born 
// id="cuisine" Question 3 - Select boxes: Italian, American, Sea Food, Thai, Greek, Soul Food, Japanese, Chinese, Mexican
// id="music" Question 4 - Radio Buttons: Pop, Soul, R&B, Jazz, Country, Other
// id="color" Question 5 - Color wheel: Favorite color


$(document).ready(function() {
  $("form#survey").submit(function(event) {
        // // Locate and store value from input 1 (and log to console for testing purposes)
    const nameInput = $("#name").val();
        console.log(nameInput);
    // // Locate and store value from input 1
    const dobInput = $("#dob").val();
        console.log(dobInput);
    const cuisineInput = $("#cuisine").val();
        console.log(cuisineInput);
    const musicInput = $("input:radio[name=music]:checked").val();
        console.log(musicInput);
    const colorInput = $("#color").val();
        console.log(colorInput);

    $("#response").show();

    event.preventDefault();
  });
});

