//business logic
function Tickets(movie, time, age, quantity) {
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.quantity = quantity;
}

var initialPrice = 10;

 Tickets.prototype.calcPrice = function() {
  return (initialPrice + this.movie + this.time + this.age) * this.quantity;
 }
 function resetFields() {
  $("#title").val("");
  $("#time").val("");
  $("#category").val("");
  $("#qty").val("");
  $(".form-control").val("");
}

//UI logic
$(document).ready(function() {
  $("#ticket-form").submit(function(event) {
    event.preventDefault();
    var inputMovie = parseInt($("#title").val());
    var inputTime = parseInt($("#time").val());
    var inputCategory = parseInt($("#category").val());
    var inputQty = parseInt($("#qty").val());
    var newMovieTicket = new Tickets(inputMovie, inputTime, inputCategory, inputQty);

  $("#name").text(inputMovie);
  $("#hour").text(inputTime);
  $("#cat").text(inputCategory);
  $("#quantity").text(inputQty);
  $("#total").text("$" + newMovieTicket.calcPrice());
  $("#receipt").show();
});
resetFields();
});
// function Movie(type, price) {
//   this.type = [new release, old];
//   this.value = [3, 0];
// }
// function TimePeriod(period, price) {
//   this.period = [morning, matinee, evening];
//   this.value = [1, 0, 3];
// }
// function AgeCat(category, price) {
//   this.category = [minor, adult, senior];
//   this.value = [1, 2, 0];
// }
