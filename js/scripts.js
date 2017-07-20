//business logic
function Tickets(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

var newMovieTicket = new Tickets (inputMovie, InputTime, InputCategory);

function Movie(type, price) {
  this.type = [new release, old];
  this.value = [3, 0];
}
function TimePeriod(period, price) {
  this.period = [morning, matinee, evening];
  this.value = [1, 0, 3];
}
function AgeCat(category, price) {
  this.category = [minor, adult, senior];
  this.value = [1, 2, 0];
}
var initialPrice = 10;

 Tickets.prototype.calcPrice = function() {
   var finalPrice = return (initialPrice + this.movie.value + this.time.value + this.age.value) * qty;
 }

//UI logic
$(document).ready() {
  $("#ticket-form").submit(function(event) {
    event.preventDefault();
    var inputMovie = $("#title").val();
    var inputTime = $("#time").val();
    var inputCategory = $("#category").val();
    var qty = $("#qty").val();
  $("#receipt").text("")
  })
}
