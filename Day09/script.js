const seatsOccupied = document.querySelector(".occ-seat");
const  seatRemaining = document.querySelector(".rem-seat");
var seats = 0;
var remaining = 36;
function renderSeats() {
    seatsOccupied.innerText = seats;
    seatRemaining.innerText = remaining;
  }

function clicked(event){
    const seat = event.target;
    if (!seat.classList.contains("boxClicked")) {
        const book = confirm("Wanna book ?? Go ahead and click Ok");
        if (book === true) {
          seat.classList.add("boxClicked");
          seats++;
          remaining--;
          renderSeats();
        }
      } 
      
      else {
        alert("Seat Already Booked");
        const check = confirm("Wanna cancel your booking?? Go ahead and Click Cancel");
        if (check === false) {
            seat.classList.remove("boxClicked");
            seats--;
            remaining++;
            renderSeats();
          }

      }
}
const create = ()=>{
    const container = document.querySelector(".container");
    for(let i = 0 ; i < 36 ;i++){
        const cell = document.createElement("div");
        cell.classList.add("box");
        container.append(cell);
    }
  const allSeats = document.querySelectorAll(".box");
  const seatsArray = Array.from(allSeats);
  seatsArray.forEach((seat) => {
    seat.addEventListener("click", clicked);
  });
};

create();
