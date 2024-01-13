const cart = [];
const createTable = (data) => {
  const price = data.parentNode.parentNode.children[1].children[0].innerText;
  const pdName = data.parentNode.parentNode.children[0].innerText;
  const pdNameAndPrice = {
    price: parseInt(price),
    pdName,
  };
  cart.push(pdNameAndPrice);
  displayTable();
};

function displayTable() {
  const productNo = document.getElementById("total-products");
  productNo.innerText = cart.length;
  const mainContainer = document.getElementById("products-cart");
  document.getElementById("products-cart").textContent = "";
  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    totalPrice = totalPrice + cart[i].price;
    const createRow = document.createElement("tr");

    createRow.innerHTML = `
    <th>${i + 1}</th>
    <td>${cart[i].pdName}</td>
    <td>${cart[i].price}</td>
    `;
    mainContainer.appendChild(createRow);
  }
  const forTotalPrice = document.createElement("tr");
  forTotalPrice.innerHTML = `
  <th></th>
  <td>Total Price : </td>
  <td>${totalPrice}</td>
  `;
  mainContainer.appendChild(forTotalPrice);
}
