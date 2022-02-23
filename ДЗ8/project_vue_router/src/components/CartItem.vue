<template>
    <div class="cart-item">
        <div class="product-bio">
            <img src="https://picsum.photos/50/50" alt="Some image">
                <div class="product-desc">
                    <h1 class="product-title pinktext">{{cartItem.product_name}}</h1>
                    <p class="product-quantity">Quantity: {{cartItem.quantity}}</p>
                    <p class="product-single-price">Price: {{cartItem.price}}</p>
                </div>
        </div>
        <div class="right-block">
            <p class="product-price">Total: {{cartItem.quantity*cartItem.price}}</p>
            <button class="del-btn" @click="$emit('remove', cartItem)">&times;</button>
         </div>
    </div>
</template>

<script>
export default {
    name: "CartItem",
    props: ['cartItem'],
};
</script>