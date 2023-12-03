//product

 // Select relevant HTML elements
 const filterButtons = document.querySelectorAll("#filter-buttons button");
 const filterableCards = document.querySelectorAll("#filterable-cards .card");
 
 // Function to filter cards based on filter buttons
 const filterCards = (e) => {
     document.querySelector("#filter-buttons .active").classList.remove("active");
     e.target.classList.add("active");
 
     filterableCards.forEach(card => {
         // show the card if it matches the clicked filter or show all cards if "all" filter is clicked
         if(card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
             return card.classList.replace("hide", "show");
         }
         card.classList.add("hide");
     });
 }
 // Add event listener for each filter button
 filterButtons.forEach(button => button.addEventListener("click", filterCards));


 var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}