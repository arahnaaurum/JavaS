<template>
  <ul class="product_list">
    <Product
      v-for="item of filtered"
      :key="item.id_product"
      :product="item"
    />
  </ul>
</template>

<script>
import Product from "@/components/Product.vue";

export default {
  name: "Products",
  components: {
    Product,
  },

  data() {
    return {
      products: [],
      filtered: [],
    }
  },
  mounted() {
    this.getJson('http://localhost:3000/api/products')
        .then(data => {
          console.log(data)
          for (let el of data) {
            this.products.push(el);
            this.filtered.push(el);
          }
        });
  },

  methods: {
    filter(userSearch) {
      let regexp = new RegExp(userSearch, 'i');
      this.filtered = this.products.filter(el => regexp.test(el.product_name));
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

