<template>
     <section class="cart_content">
            <h2 class="hidden">Товары в корзине</h2>
            <h2 v-if="cartlist == false">No items added</h2>
            <ul class="cart_list">
                <Cartproduct
                v-for="item of cartlist"
                :key="item.id_product"
                :cartProduct="item"
                @removeFromPage="removeFromPage">
                </Cartproduct>
            </ul>
            
        </section>
</template>

<script>
import Cartproduct from "@/components/Cartproduct.vue";

export default {
  name: "CartList",
    components: {
    Cartproduct
  },

  data(){
    return {
        cartlist: [],
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
        removeFromPage(item) {
            this.$root.$refs.cart.remove(item)
            if (item.quantity > 1) {
                this.cartlist.find(el => el == item).quantity = (item.quantity);
            } else {
                this.cartlist.splice(this.cartlist.indexOf(item), 1);
            }
        },

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

