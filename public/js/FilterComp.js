Vue.component('filter-el', {
    data(){
        return {
            userSearch: ''
        }
    },
    template: `
        <div class="wrapper filter_container">
                <details class="filter" open>
                <summary class="filter_title"> <span class="phone_hide"> FILTER</span>                  
                </summary>
                </details>
                    <form action="#" class="search-form" @submit.prevent="$parent.$refs.products.filter(userSearch)">
                        <input type="text" class="search-field" v-model="userSearch">
                        <button class="btn-search" type="submit">
                            <i class="fas fa-search"></i>
                        </button>
                    </form>
        </div>
    `
});
