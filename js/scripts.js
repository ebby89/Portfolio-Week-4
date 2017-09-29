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

  $("#add-topping").click(function(){
    $("#new-topping").append('<div id="new-topping">' +
                               '<h4><strong>Select a topping:</strong></h4>' +
                               '<select class="" name="">' +
                                 '<option value="">Select a topping...</option>' +
                                 '<option value="">Pepperoni</option>' +
                                 '<option value="">Sausage</option>' +
                                 '<option value="">Chicken</option>' +
                                 '<option value="">Bell Pepper</option>' +
                                 '<option value="">Caramalized Onion</option>' +
                                 '<option value="">Mushroom</option>' +
                                 '<option value="">Olive</option>' +
                                 '<option value="">Arugula</option>' +
                                 '<option value="">Spinnach</option>' +
                                 '<option value="">Tomato</option>' +
                               '</select>' +
                             '</div>');

  });

  $("#order-form").submit(function(event){
    event.preventDefault();

  });
});
