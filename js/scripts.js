$(document).ready(function(){
  $("form#quiz").submit(function() {
    event.preventDefault();
    var number1 = parseInt($("#question1").val());
    var number2 = parseInt($("#question2").val());
    var number3 = parseInt($("#question3").val());
    var result = add(number1, number2, number3)
    // $("#output").text(result);

    if (result <= 4) {
      $('#dany').show();
    } else {
      $("#jon").show();
      $("#dany").hide();
    }
  });
});


var add = function(number1, number2, number3) {
  return number1 + number2 + number3;
};
