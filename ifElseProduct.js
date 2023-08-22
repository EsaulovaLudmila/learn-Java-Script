let balance = 100;

//------------------------------

document.write("START", "<br>");
let productPrice = window.prompt("How much does product cost?");

if (balance < productPrice) {
  document.write("Not enough money");
} else {
  document.write("Product purchased");
}

productPrice = window.prompt("How much does product cost?");

if (balance < productPrice) {
  document.write("Not enough money");
} else {
  document.write("Product purchased");
}

document.write("<br>", "END");
