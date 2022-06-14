// Business Logic for Ticket —————————

function Ticket (movieTitle, showTime) {
  this.movieTitle = movieTitle;
  this.showTime = showTime;
}

// Business Logic —————————

function TicketPrice (age) {
  let ticketPrice = 0;
  age = parseInt(age);
  console.log(age);
  if (age === 18) {
    ticketPrice = 12;
  } else if (age === 65) {
    ticketPrice = 10;
  } else {
    ticketPrice = 15;
  }
  return ticketPrice;
}

//User Interface Logic —————————

$(document).ready(function () {

  function ShowTicketInfo(ticket){
    $("#movie-title").text("Movie: " + ticket.movieTitle);
    $("#show-time").text("Time: " + ticket.showTime);
  }

  $("form#movie-info").submit(function(event){
    event.preventDefault();
    let inputtedMovie = $("#movie").val();
    let inputtedTime = $("#time").val();
    let inputtedAge = $("#age").val();
    console.log(inputtedAge);
    let newTicket = new Ticket(inputtedMovie, inputtedTime);

    let price = TicketPrice(inputtedAge);

    ShowTicketInfo(newTicket);

    $("#ticket-price").text("$" + price + ".00");
  });
});
