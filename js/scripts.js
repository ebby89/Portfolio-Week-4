//BACK END
function Pizza(size) {
  this.size = size;
  this.toppings = [];
  this.price = 0;
};

Pizza.prototype.totalPrice = function() {
  var price = 0;

  if (this.size === "Small") {
    price += 10;
  } else if (this.size === "Medium") {
    price += 12;
  } else if (this.size === "Large") {
    price += 14;
  } else if (this.size === "Extra-Large") {
    price += 16;
  } else {
    price = 0;
    alert("Please select a size");
  }

  if (this.toppings.length === 0) {
    price *= 1;
    this.toppings.push(" Plain Cheese")
  } else {
    price += (this.toppings.length * 0.55);
  }
  var total = price.toFixed(2);
  return total;
};

function resetForm() {
 document.getElementById("order-form").reset();
}

//FRONT END
$(document).ready(function(){
  $("form#order-form").submit(function(event){
    event.preventDefault();

    var pizzaSizeInput = $("#pizza-size").val();
    var newPizza = new Pizza(pizzaSizeInput);

    $("input[name='toppings']:checked").each(function(){
      newPizza.toppings.push($(this).val());
    });

    var displayPrice = newPizza.totalPrice();
    $("#display-size").text(pizzaSizeInput);
    $("#display-toppings").text(newPizza.toppings);
    $("#display-cost").text(displayPrice);

    $("#display-order-summary").fadeIn(600);
    $("#order-form").hide();
    $("button[name='button-back']").click(function(){
      $("#display-order-summary").hide();
      $("#order-form").fadeIn(600);
    });

    $("button[name='button-reset']").click(function(){
      $("#display-order-summary").hide();
      $("#order-form").fadeIn(600);
      resetForm();
    });
  });
});
