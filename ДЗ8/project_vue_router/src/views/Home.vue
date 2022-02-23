<template>
  <main class="main">
    <section class="filters">
      <h2 class="hidden">
        Фильтры товаров
      </h2>
      <Filter />
    </section>


    <section class="products">
      <h2 class="hidden">
        Товары
      </h2>
      <div class="wrapper products_container">
        <Products ref="products" />
        <Error ref="error" />


        <div class="center">
          <ul class="pagination">
            <li class="page-item">
              <a
                class="page-link svg_roller"
                href="#"
                aria-label="Previous"
              >
                <svg
                  width="9"
                  height="14"
                  viewBox="0 0 9 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.99512 2L3.99512 7L8.99512 12L7.99512 14L0.995117 7L7.99512 0L8.99512 2Z" />
                </svg>
              </a>
            </li>
            <li class="page-item">
              <a
                class="page-link active"
                href="#"
              >1</a>
            </li>
            <li class="page-item">
              <a
                class="page-link"
                href="#"
              >2</a>
            </li>
            <li class="page-item">
              <a
                class="page-link"
                href="#"
              >3</a>
            </li>
            <li class="page-item">
              <a
                class="page-link"
                href="#"
              >4</a>
            </li>
            <li class="page-item">
              <a
                class="page-link"
                href="#"
              >5</a>
            </li>
            <li class="page-item">
              <a
                class="page-link"
                href="#"
              >6</a>
            </li>
            <li class="page-item">
              <a
                class="page-link"
                href="#"
              >.....</a>
            </li>
            <li class="page-item">
              <a
                class="page-link"
                href="#"
              >20</a>
            </li>
            <li class="page-item">
              <a
                class="page-link svg_roller"
                href="#"
                aria-label="Next"
              >
                <svg
                  width="9"
                  height="14"
                  viewBox="0 0 9 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0.994995 12L5.995 7L0.994995 2L1.995 0L8.995 7L1.995 14L0.994995 12Z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<script>

import Products from "@/components/Products.vue";
import Error from "@/components/Error.vue";
import Filter from "@/components/Filter.vue";


export default {
  name: "Home",
  components: {
    Products,
    Error,
    Filter
  },
};
</script>
