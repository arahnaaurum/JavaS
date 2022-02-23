<template>
  <main class="main">
    <section class="inner_title inner_title_cart">
      <div class="wrapper inner_title_container">
        <h1 class="inner_title_heading pinktext">
          SHOPPING CART
        </h1>
      </div>
    </section>

    <div class="cart wrapper">
      <CartList ref="cart-list" />
      <Error ref="error" />

      <section class="cart_shipping">
        <h2 class="hidden">
          Доставка и цена
        </h2>
        <form
          class="cart_form"
          action="submit"
        >
          <h2 class="cart_form_heading">
            SHIPPING ADDRESS
          </h2>
          <input
            class="cart_form_field"
            type="text"
            required
            placeholder="City"
          >
          <input
            class="cart_form_field"
            type="text"
            required
            placeholder="State"
          >
          <input
            class="cart_form_field"
            type="text"
            required
            placeholder="Postcode / Zip"
          >
          <button
            class="product_shop_button cart_form_button"
            type="submit"
          >
            Get a quote
          </button>
        </form>

        <Check />
      </section>
    </div>
  </main>
</template>

<script>
import CartList from "@/components/CartList.vue";
import Error from "@/components/Error.vue";
import Check from "@/components/Check.vue";

export default {
  name: "CartPage",
  components: {
    CartList,
    Error,
    Check,
  },
};
</script>
