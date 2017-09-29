//BACK END
function Pizza(size, sauce, toppings) {
  this.size = size;
  this.sauce = sauce;
  this.toppings = [];
}

function Topping() {

}



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

  $("#order-form").submit(function(event){
    event.preventDefault();

  });
});
