$(document).ready(function () {
  $("form#triangle").submit(function (event) {
    event.preventDefault();
    const side1 = parseInt($("input#side1").val());
    const side2 = parseInt($("input#side2").val());
    const side3 = parseInt($("input#side3").val());
    
    if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
      $("#output").text("Not a triangle")
    } else if (side1 === side2 && side1 === side3) {
      $("#output").text("Equilateral");
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
        $("#output").text("Isoceles")
    } else {
      $("#output").text("Scalene")
    }
   



  });
  });