$(document).ready(function() {
  let options = $(".option");
  
  options.click(function() {
    options.off('click'); // Disable further clicks
    
    let selectedOption = $(this).text().trim().charAt(0);
    let correctOption = "A"; // Assume A is the correct answer
    
    if (selectedOption === correctOption) {
      $("#feedback").text("Correct answer!").addClass("correct");
    } else {
      $("#feedback").text("Incorrect answer!").addClass("incorrect");
    }
  });
});
