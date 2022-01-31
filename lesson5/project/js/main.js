const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    catalogUrl: '/catalogData.json',
    products: [],
    imgCatalog: 'https://via.placeholder.com/200x150',

    //для фильтра
    filteredGoods: [],
    searchLine: '',

    //для Корзины
    cartUrl: '/getBasket.json',
    cartGoods: [],
    imgCart: 'https://via.placeholder.com/50x100',
    isVisibleCart: true,
  },
  methods: {
    getJson(url){
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          console.log(error);
        })
    },
    addProduct(event){
      this.getJson(`${API}/addToBasket.json`)
      .then(data => {
        if(data.result === 1){
          let element = event.target
          let productId = +element.dataset['id'];
          let find = this.cartGoods.find(product => product.id_product === productId);
          if(find){
            find.quantity++;
          } else {
            let product = {
              id_product: productId,
              price: element.dataset['price'],
              product_name: element.dataset['name'],
              quantity: 1
            };
            this.cartGoods.push(product);
          }
        } else {
          alert('Error');
        }
      })
    },
      removeProduct(event){
        this.getJson(`${API}/deleteFromBasket.json`)
          .then(data => {
            if(data.result === 1){
              let element = event.target;
              let productId = +element.dataset['id'];
              console.log(productId);
              let find = this.cartGoods.find(product => product.id_product === productId);
              if(find.quantity > 1){
                find.quantity--;
              } else {
                this.cartGoods.splice(this.cartGoods.indexOf(find), 1);
              }
            } else {
              alert('Error');
            }
          })
      },
    
    filter(){
      const regexp = new RegExp(this.searchLine, 'i');
      this.filteredGoods = this.products.filter(product => regexp.test(product.product_name));
    }

  },
  beforeCreate() {},
  created() {
    this.getJson(`${API + this.catalogUrl}`)
        .then(data => {
          for(let el of data){
            this.products.push(el);
            this.filteredGoods.push(el);
          }
        });
    this.getJson(`${API + this.cartUrl}`)
        .then(data => {
          for(let el of data.contents){
            this.cartGoods.push(el);
          }
        });
  },
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
});
