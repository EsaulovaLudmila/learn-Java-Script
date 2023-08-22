let balance = 100;

//------------------------------

document.write("START", "<br>");
const product1PriceString = window.prompt("How much does product cost?");

const product1Price = window.Number(product1PriceString);

if (window.isNaN(product1Price)) {
  document.write("You input incorrect number");
} else {
  if (balance < product1PriceString) {
    document.write("Not enough money");
  } else {
    document.write("Product purchased");
  }
}

document.write("<br>", "END");
