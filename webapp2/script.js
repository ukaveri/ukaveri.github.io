
const products = [
  {
    name: "Product 1",
    desc: "This is a sample description",
    price: 45,
    imgUrl: "https://picsum.photos/id/12/300/300",
  },
  {
    name: "Product 2",
    desc: "This is a sample description",
    price: 50,
    imgUrl: "https://picsum.photos/id/24/300/300",
  },
  {
    name: "Product 3",
    desc: "This is a sample description",
    price: 70,
    imgUrl: "https://picsum.photos/id/81/300/300",
  },
];

function showProducts() {
  let str = `<div class="row">`;
  products.map(e=>{
    str = str + `
    <div>
    <img src=${e.imgUrl}/>
    <h3>${e.name}</h3>
    <p>${e.desc}</p>
    <h5>${e.price}</h5>
    <p><button>Add to cart</button></p>
    </div>
      `
  })
  str = str + `</div>`;
  root.innerHTML = str;
}
