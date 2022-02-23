<template>
    <div class="wrapper filter_container">
        <details class="filter" open>
            <summary class="filter_title"> <span class="phone_hide"> FILTER</span>                  
            </summary>
                <form action="#" class="search-form" @submit.prevent="$parent.$refs.products.filter(userSearch)">
                    <input type="text" class="search-field" v-model="userSearch">
                    <button class="btn-search" type="submit">
                            <i class="fas fa-search"></i>
                    </button>
                </form>
        </details>
    </div>
</template>

<script>

export default {
  name: "Filter",
   data(){
        return {
            userSearch: ''
        }
    },
};
</script>

