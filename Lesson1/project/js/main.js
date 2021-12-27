const products = [
    {id: 1, title: 'Notebook', price: 1000},
    {id: 2, title: 'Mouse', price: 100},
    {id: 3, title: 'Keyboard', price: 250},
    {id: 4, title: 'Gamepad', price: 150},
];

// Добавьте значения по умолчанию для аргументов функции:

// const renderProduct = (id = 1 , title = "Computer", price = 2000) => {
//     return `<div class="product-item">
//                 <h3>${title}</h3>
//                 <p>${price}</p>
//                 <img src="https://picsum.photos/200/300?random=${id}" alt="pic${id}">
//                 <button class="by-btn">Добавить</button>
//               </div>`;
// };

// const renderCatalog = (list) => {
//   const productList = list.map(good => renderProduct(good.id, good.title, good.price)).join('');
//     console.log(productList);

//   document.querySelector('.products').innerHTML = productList;
// };

// renderCatalog(products);

// Как упростить/сократить запись функций?
// Я предлагаю такой вариант, с одним аргументом в стрелочной функции + циклом forEach для вставки картинок.
const renderProduct = product => {
  return `<div class="product-item">
              <h3>${product.title}</h3>
              <p>${product.price}</p>
              <img src="https://picsum.photos/200/300?random=${product.id}" alt="pic${product.id}">
              <button class="by-btn">Добавить</button>
            </div>`;
};

let div = document.querySelector('.products')
products.forEach (function(product) {
  div.innerHTML += renderProduct(product)
})
// Сейчас после каждого товара на странице выводится запятая. Из-за чего это происходит? Как это исправить?
// Запятые появлялись из-за того, что мы просто выводили на страницу элементы массива (а они отделяются друг от друга запятыми)
// Эту проблему можно решать по-разному: например, если использовать forEach, ее вообще не возникает. Можно и через join(), это реализовано в закоменченном варианте.