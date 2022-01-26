Vue.component('error', {
    data(){
        return {
            text: ''
        }
    },

    methods: {
        getErrorText(err) {
            this.text = err
        }
    },

    computed:{
        isNotVisible(){
            return this.text === ''
        }
    },

    template: `
        <div class="error-block" :class="{invisible:isNotVisible}"> 
        <p class="error-message">
            <button class="close-btn" @click="getErrorText('')">&times;</button>
            {{ text }}
        </p>
    </div>`
})
