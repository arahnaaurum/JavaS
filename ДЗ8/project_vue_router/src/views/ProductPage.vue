<template>
  <main class="main">

    <section class="inner_title">
      <div class="wrapper inner_title_container">
        <h1 class="inner_title_heading pinktext">
          NEW ARRIVALS
        </h1>
        <nav class="breadcrumbs">
          <ul class="bread_list">
            <li class="bread_item">
              <router-link
                to="/"
                class="bread_link"
              >
                HOME
              </router-link>
            </li>
            <li class="bread_item">
              <a
                href="#"
                class="bread_link"
              >WOMEN</a>
            </li>
            <li class="bread_item">
              <a
                href="#"
                class="bread_link bread_link_current"
              >NEW ARRIVALS</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>

    <ProductPageEl :productId='id'> </ProductPageEl>

  </main>
</template>

<script>
  import ProductPageEl from "@/components/ProductPageEl.vue";

  export default {
    name: "ProductPage",
    
    components: {
      ProductPageEl
    },
    
    data(){
      return {
        id: this.$route.params.id,
        }
    },
    
    mounted(){
        console.log(this.id)
    }

    }
    
</script>