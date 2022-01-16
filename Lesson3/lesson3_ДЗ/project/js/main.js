const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'

// Задание 1: запрос на promise
// function MakeGETRequest (url) { 
//   return new Promise((resolve, reject) => {
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', url, true);
//     xhr.onload = function() {
//       if (this.status == 200) {
//         resolve(this.response);
//       } else {
//         reject(new Error(f`${xhr.responseText}`));
//       }
//     };
//    xhr.send();
//   });
// }

// Задание 2: добавить корзину

//родительские классы List и Item
class List {
  constructor(container, url) {
    this.container = container;
    this.url = url;
    this.allProducts = [];
    this.productsToRender = []; //goods. Поменяла название, чтобы было понятнее назначение массива
    this._init();
  }

  async getJson(url) {
    let response = await fetch(url ? url : `${API + this.url}`);
    let result = await response.json();
    return result;
  }

  // async getJson(url){
  //   try {
  //     const result = await fetch(url ? url : `${API + this.url}`);
  //     return await result.json();
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   }

  handleData(data){
    this.productsToRender = data;
    this.render();
  }

  render() {
    const insertBlock = document.querySelector(this.container);
    for (let product of this.productsToRender) {
      let newObject = null;
      if (this.constructor.name === 'ProductList') newObject = new ProductItem(product);
      if (this.constructor.name === 'Cart') newObject = new CartItem(product);
      if (!newObject) return;

      this.allProducts.push(newObject);
      insertBlock.insertAdjacentHTML('beforeend', newObject.getHTMLString());
    }
}

  calcSum(){
    return this.allProducts.reduce((accum, item) => accum + item.price, 0);
  }

  _init(){
    return false
  }

}

class Item {
  constructor(product, img='https://via.placeholder.com/200x150') {
    this.title = product.product_name;
    this.price = product.price;
    this.id = product.id_product;
    this.img = img;
  }

  getHTMLString(){
    return ``;
  }
}

//классы - наследники
//каталог
class ProductList extends List {
  constructor(cart, container = '.products', url = "/catalogData.json") {
    super(container, url);
    this.cart = cart;
    this.getJson()
      .then(data => this.handleData(data));
  }

  _init(){
    document.querySelector(this.container).addEventListener('click', event => {
      if (event.target.classList.contains('buy-btn')) {
        this.cart.addProduct(event.target);
      }
    });
  }
}

class ProductItem extends Item{
  getHTMLString() {
    return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.title}</h3>
                  <p>${this.price}</p>
                  <button class="buy-btn"
                    data-id="${this.id}"
                    data-title="${this.title}"
                    data-price="${this.price}">Купить</button>
              </div>
            </div>`;
  }
}

//корзина
class Cart extends List{
  constructor(container = ".cart-block", url = "/getBasket.json") {
    super(container, url);
    this.getJson()
    .then(data => {
      this.handleData(data.contents);
    });
  }

  addProduct(element) {
    this.getJson(`${API}/addToBasket.json`).then(data => {
      if(data.result == 1){
        let productId = +element.dataset['id'];
        let productToFind = this.allProducts.find(product => product.id === productId);
        if (productToFind) {
          productToFind.quantity++;
          this.updateCart(productToFind);
        } else {
          let product = {
            id_product: productId,
            price: element.dataset['price'],
            product_name: element.dataset['title'],
            quantity: 1
          };
          this.productsToRender = [product];
          this.render();
        }  
      } else {
          alert('Error');
        };
    })
  }

  deleteProduct(element){
    this.getJson(`${API}/deleteFromBasket.json`)
      .then(data => {
        if(data.result === 1){
          let productId = +element.dataset['id'];
          let productToFind = this.allProducts.find(product => product.id === productId);
          if(productToFind.quantity > 1){
            productToFind.quantity--;
            this.updateCart(productToFind);
          } else {
            this.allProducts.splice(this.allProducts.indexOf(productToFind), 1);
            document.querySelector(`.cart-item[data-id="${productId}"]`).remove();
          }
        } else {
          alert('Error');
        }
      })
  }

  updateCart(product){
    let insertBlock = document.querySelector(`.cart-item[data-id="${product.id}"]`);
    insertBlock.querySelector('.product-quantity').textContent = `Количество: ${product.quantity}`;
    insertBlock.querySelector('.product-price').textContent = `${product.quantity * product.price}`;
  }
 
  _init(){
    document.querySelector('.btn-cart').addEventListener('click', () => {
      document.querySelector(this.container).classList.toggle('invisible');
    });
    document.querySelector(this.container).addEventListener('click', event => {
      if(event.target.classList.contains('del-btn')){
        this.deleteProduct(event.target);
      }
    })
  }

}

class CartItem extends Item{
  constructor(product, img = 'https://via.placeholder.com/50x100'){
    super(product, img);
    this.quantity = product.quantity;
  }
  getHTMLString(){
    return `<div class="cart-item" data-id="${this.id}">
            <div class="product-bio">
            <img src="${this.img}" alt="Some image">
            <div class="product-desc">
            <p class="product-title">${this.title}</p>
            <p class="product-quantity">Количество: ${this.quantity}</p>
        <p class="product-single-price">${this.price} за ед.</p>
        </div>
        </div>
        <div class="right-block">
            <p class="product-price">${this.quantity*this.price}</p>
            <button class="del-btn" data-id="${this.id}">&times;</button>
        </div>
        </div>`
  }
}

let cart = new Cart();
let catalog = new ProductList(cart);