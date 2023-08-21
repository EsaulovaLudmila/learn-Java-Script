let balance = 100;

//------------------------------

document.write("START", "<br>");
const product1Price = window.prompt("How much does product cost?");

/* if (product1Price <= balance) {
  document.write("Product purchased");
} else {
  document.write("Not enough money");
} */

if (balance < product1Price) {
  document.write("Not enough money");
} else {
  document.write("Product purchased");
}

document.write("<br>", "END");
