//BACK END
function Pizza(size) {
  this.size = size;
  this.toppings = [];
  this.price = 0;
};

Pizza.prototype.totalPrice = function() {
  var price = 0;

  if (this.size === "S") {
    price += 10;
  } else if (this.size === "M") {
    price += 12;
  } else if (this.size === "L") {
    price += 14;
  } else {
    price += 16;
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


//FRONT END
$(document).ready(function(){
  $("#add-pizza").click(function(){
    $("#new-pizza").append('<div id="new-pizza" class="">' +
                             '<h3>Your Order:</h3>' +
                             '<h4><strong>Select a size:</strong></h4>' +
                             '<select class="" name="">' +
                               '<option value="">Select a size...</option>' +
                               '<option value="">Small (10")</option>' +
                               '<option value="">Medium (14")</option>' +
                               '<option value="">Large (18")</option>' +
                               '<option value="">Extra-Large (22")</option>' +
                             '</select> Add details here' +
                             '<br>' +
                             '<br>' +
                             '<h4><strong>Select your sauce:</strong></h4>' +
                             '<select class="" name="">' +
                               '<option value="">Select a sauce...</option>' +
                               '<option value="">Traditional Marinara</option>' +
                               '<option value="">Creamy Garlic Parmesan</option>' +
                               '<option value="">Barbeque</option>' +
                               '<option value="">Pesto</option>' +
                             '</select> Add details here' +
                             '<br>' +
                             '<br>' +
                             '<div class="">' +
                               '<h4><strong>Select your toppings:</strong></h4>' +
                               '<input type="checkbox" name="toppings" value="pepperoni"> Pepperoni<br>' +
                               '<input type="checkbox" name="toppings" value="sausage"> Italian Sausage<br>' +
                               '<input type="checkbox" name="toppings" value="chicken"> Chicken<br>' +
                               '<input type="checkbox" name="toppings" value="peppers"> Bell Peppers<br>' +
                               '<input type="checkbox" name="toppings" value="onion"> Caramalized Onions<br>' +
                               '<input type="checkbox" name="toppings" value="mushroom"> Mushrooms<br>' +
                               '<input type="checkbox" name="toppings" value="olive"> Olives<br>' +
                               '<input type="checkbox" name="toppings" value="tomato"> Tomato<br>' +
                               '<input type="checkbox" name="toppings" value="spinnach"> Spinnach<br>' +
                             '</div>' +
                           '</div>');
  });

  $("form#order-form").submit(function(event){
    event.preventDefault();

    var pizzaSizeInput = $("#pizza-size").val();
    var newPizza = new Pizza(pizzaSizeInput);

    $("input[name='toppings']:checked").each(function(){
      newPizza.toppings.push($(this).val());
    });

    var displayPrice = newPizza.totalPrice();
    console.log(displayPrice);
    $("#display-size").text(pizzaSizeInput);
    $("#display-toppings").text(newPizza.toppings);
    $("#display-cost").text(displayPrice);
  });
});
