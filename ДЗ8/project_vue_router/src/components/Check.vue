<template>
    <section class="cart_shipping_details">
        <h2 class="hidden">Уточнение цены</h2>
            <div>
                    <p class="cart_shipping_details_text">QUANTITY <span class="price">{{totalAmount}}</span></p>
                    <p class="cart_shipping_details_text">GRAND TOTAL <span class="price pinktext">{{totalPrice}}</span></p>
            </div>
                <hr class="greyline">
            <button class="cart_checkout_button" type="button">
                PROCEED TO CHECKOUT
            </button>
    </section>
</template>

<script>

export default {
  name: "Check",

    data(){
        return {
            cartlist: []
        }
    },

    computed: {
        totalAmount() {
            let totalAmount = 0
            for (let item of this.cartlist){
                totalAmount += item.quantity
            }
            return totalAmount;
        },
        totalPrice() {
            let totalPrice = 0
            for (let item of this.cartlist){
                totalPrice += item.quantity*item.price
            }
            return totalPrice;
        }
    },

    mounted(){
        this.getJson('http://localhost:3000/api/cart')
            .then(data => {
                for(let el of data.contents){
                    this.cartlist.push(el);
                }
            });
    },

    methods: {
    getJson(url) {
            return fetch(url)
            .then(result => result.json())
            .catch(error => {
                 console.log(error);
          })
        },
    },


};
</script>

