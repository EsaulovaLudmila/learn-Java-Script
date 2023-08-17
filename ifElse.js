let balance = 100;
const product1Price = 110;
//------------------------------

document.write("START", "<br>");

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
